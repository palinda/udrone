import { Observable } from 'rxjs/Rx';
import { Query } from '@defs/query';

export interface  IServiceQuery {

    /**
     * Data query abstractration
     */
    query<R>(query: Query<any>): Observable<R>;
}

