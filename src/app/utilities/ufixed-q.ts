export class UFixedQ<T> {

  size = 0;
  data: Array<T> = [];

  constructor(private _fixedSize: number) {
  }

  public fixedSize(): number {
    return this._fixedSize;
  }

  public add(item: T): void {
    if (this.size >= this._fixedSize) {
      this.data.shift();
    } else {
      this.size++;
    }
    this.data.push(item);
  }
}
