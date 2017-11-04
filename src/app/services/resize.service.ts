import {Size} from '@defs/size';
import {UMap} from '@utilities/umap';
import { Injectable } from '@angular/core';

@Injectable()
export class ResizeService {

  private cbs: UMap<String, (size: Size) => void>;
  constructor() {
    this.cbs = new UMap<String, (size: Size) => void>();
  }

  public subsribe(id: string, cb: (size: Size) => void) {
    this.cbs.put(id, cb);
  }

  public unsubsribe(id: string) {
    this.cbs.remove(id);
  }

  public triggerResize(id: string, size: Size) {
    if (this.cbs.contains(id)) {
      this.cbs.get(id)(size);
    }
  }
}
