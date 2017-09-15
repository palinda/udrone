/**
 * Base transpotable message.
 */

export class UMsg {

    constructor() {
    }

    public getQueryString(): string {
            let req = null;
            Object.getOwnPropertyNames(this).forEach((item, index) => {
             if (req == null) {
                req = item + '=' + JSON.stringify(this[item]);
              } else {
                req += ('&' + item  + '=' + JSON.stringify(this[item]));
              }
         });
       return req;
     }
}
