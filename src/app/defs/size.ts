import { BASE_SIZE } from '@defs/constants';

export class Size {
    constructor(public width: string, public height: string) {
    }

    public toPixel(widthPercentage: number, heightPercentage: number): Size {
        return new Size((parseInt(this.width, 10) * BASE_SIZE * widthPercentage / 100).toString(),
        (parseInt(this.height, 10) * BASE_SIZE * heightPercentage / 100).toString());
    }
}
