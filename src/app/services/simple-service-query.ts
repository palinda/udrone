import * as Constants from '@defs/constants';
import { Observable } from 'rxjs/Rx';
import { Query } from '@defs/query';
import { HttpService } from '@services/http.service';
import { IServiceQuery } from '@services/service-query.interface';
import { environment } from '@config/environment';

export class SimpleServiceQuery implements IServiceQuery {

    constructor(private _httpService: HttpService) {
    }

    query<R>(query: Query<any>): Observable<R> {
        return this._httpService.send(query.path, query.params);
    }
}
