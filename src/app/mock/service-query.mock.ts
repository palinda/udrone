import { element } from 'protractor';
import { RequestOptions, Headers } from '@angular/http';
import { HttpService } from '@services/http.service';
import { Entry } from '@defs/entry';
import { DynamicMsg } from '@defs/dynamic-msg';
import { SparkResp } from '@defs/spark-resp';
import { CountResp } from '@defs/count-resp';
import * as utils from '@utilities/utils';
import { TableQuery } from '@components/unit/u-table/table-query';
import { TableResponse } from '@components/unit/u-table/table-response';
import { Observable } from 'rxjs/Rx';
import { Query } from '@defs/query';
import { IServiceQuery } from '@services/service-query.interface';
import * as Constants from '@app/defs/constants';

export class MockQR {
    constructor(public mockQuery: Query<any>, public mockResp: Object) {
    }
}
export class ServiceQueryMock implements IServiceQuery {

    private _mockQueries: Array<MockQR> = [];

    constructor() {
    }

    public addMockQuery(_mockQuery: Query<any>, _mockResp: Object) {
        this._mockQueries.push(new MockQR(_mockQuery, _mockResp));
    }

    query<R>(query: Query<any>): Observable<R> {

        let resp: Object;

        let dyMsg: DynamicMsg;
        if (query.params instanceof DynamicMsg) {
            dyMsg = query.params;
        }

        for (const key in this._mockQueries) {
            if (this._mockQueries.hasOwnProperty(key)) {
                const mockQR = this._mockQueries[key];
                if (utils.isEqual(mockQR.mockQuery, query)) {
                    if (utils.isUndefined(mockQR.mockQuery)) {
                        return Observable.throw('No handled');
                    }
                    return Observable.of(<R>mockQR.mockResp);
                }
            }
        }

        switch (query.path) {
            case 'res/orderCount': {
                resp = new CountResp(utils.getRandomInt(0, 100));
                break;
            }
            case 'res/orderCountHist': {

                const dataList = [];
                for (let i = 0; i < dyMsg.getValue('limit'); i++) {
                    dataList.push(new Entry('X ' + i, utils.getRandomInt(0, 100)));
                }
                resp = new SparkResp(dataList);
                break;
            }

        }
        if (query.params instanceof TableQuery) {
            const data = [];
            for (let i = query.params.offset; i < (query.params.offset + query.params.limit); i++) {
                data.push({
                            'name': 'name_' + i,
                            'val1': 'val_' + i,
                            'val2': 'val_' + i  % 2,
                            'val3': 'val_' + i  % 3,
                            'val4': i
                });
            }

            resp = new TableResponse(120, 120, data);
        }

        if (utils.isUndefined(resp)) {
            return Observable.throw('No handled');
        }
        return Observable.of(<R>resp);
    }

}
