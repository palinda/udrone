import { SimpleServiceQuery } from './simple-service-query';
import { HttpService } from '@services/http.service';
import { ServiceQueryMock } from './../mock/service-query.mock';
import { IServiceQuery } from '@services/service-query.interface';
import { environment } from '@config/environment';
import { Query } from '@defs/query';
import { UMsg } from '@defs/umsg';
import { Observable } from 'rxjs/Rx';
import { InjectionToken } from '@angular/core';
import { WebSocketService } from '@app/services/web-socket.service';
import { WSServiceQuery } from '@app/services/wsservice-query';

export const SERVICE_QUERY = new InjectionToken<IServiceQuery>('app.query');

export function serviceQueryFactory(httpService: HttpService, websockerSerivice: WebSocketService) {
    // return new SimpleServiceQuery(httpService);
    return new WSServiceQuery(websockerSerivice);
}
export let serviceQueryProvider = {
    provide: SERVICE_QUERY,
    useFactory: serviceQueryFactory,
    deps: [HttpService, WebSocketService]
};
