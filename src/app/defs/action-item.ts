export class ActionItem {
    constructor(public actionName: string, public actionCB: (params: Array<any>) => void) {
    }
}
