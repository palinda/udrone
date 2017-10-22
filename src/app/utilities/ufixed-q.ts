export class UFixedQ<T> {

  private _size = 0;
  private _data: Array<T> = [];

  constructor(private _fixedSize: number) {
  }

  public fixedSize(): number {
    return this._fixedSize;
  }

  public get size(): number {
    return this._size;
  }

  public get data(): Array<T> {
    return this._data;
  }

  public add(item: T): void {
    if (this._size >= this._fixedSize) {
      this._data.shift();
    } else {
      this._size++;
    }
    this._data.push(item);
  }
}
