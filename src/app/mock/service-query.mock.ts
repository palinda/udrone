import { RequestOptions, Headers } from '@angular/http';
import { HttpService } from './../services/http.service';
import { Entry } from '@defs/entry';
import { DynamicMsg } from './../defs/dynamic-msg';
import { SparkResp } from './../defs/spark-resp';
import { CountResp } from './../defs/count-resp';
import * as utils from '@utilities/utils';
import { TableQuery } from '@components/unit/u-table/table-query';
import { TableResponse } from '@components/unit/u-table/table-response';
import { Observable } from 'rxjs/Rx';
import { Query } from '@defs/query';
import { IServiceQuery } from '@services/service-query.interface';
import * as Constants from '@app/defs/constants';

export class ServiceQueryMock implements IServiceQuery {

    globalRepo: Object = {};
    constructor(private _httpService: HttpService) {
    }

    query<R>(query: Query<any>): Observable<R> {

        let resp: Object;

        let dyMsg: DynamicMsg;
        if (query.params instanceof DynamicMsg) {
            dyMsg = query.params;
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

        return Observable.of(<R>resp);
    }

}
