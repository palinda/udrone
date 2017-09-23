import { SimpleServiceQuery } from './simple-service-query';
import { HttpService } from '@services/http.service';
import { ServiceQueryMock } from './../mock/service-query.mock';
import { IServiceQuery } from '@services/service-query.interface';
import { environment } from '@config/environment';
import { Query } from '@defs/query';
import { UMsg } from '@defs/umsg';
import { Observable } from 'rxjs/Rx';
import { InjectionToken } from '@angular/core';

export const SERVICE_QUERY = new InjectionToken<IServiceQuery>('app.query');

export function serviceQueryFactory(httpService: HttpService) {
    return new SimpleServiceQuery(httpService);
}
export let serviceQueryProvider = {
    provide: SERVICE_QUERY,
    useFactory: serviceQueryFactory,
    deps: [HttpService]
};
