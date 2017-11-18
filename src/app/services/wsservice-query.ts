import * as Constants from '@defs/constants';
import { Observable } from 'rxjs/Rx';
import { Query } from '@defs/query';
import { IServiceQuery } from '@services/service-query.interface';
import { environment } from '@config/environment';
import { WebSocketService } from '@app/services/web-socket.service';

export class WSServiceQuery implements IServiceQuery {

    constructor(private _wsService: WebSocketService) {
        this._wsService.init(environment.webSockerEP, false, '__path');
    }

    query<R>(query: Query<any>): Observable<R> {
        if (!query.params) {
            query.params = {};
        }
        query.params['__path'] = query.path;
        return this._wsService.send(query.params);
    }
}
