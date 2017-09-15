import { Query } from './query';

export class RefreshRequest<T> {
    constructor(private _intervalSec: number, private _query: Query<any>, private _callback: (data: T, error: Error) => void) {
    }

    get query(): Query<any> {
        return this._query;
    }

    get callback(): (data: T, error: Error) => void {
        return this._callback;
    }

    get interval(): number {
        return this._intervalSec;
    }
}
