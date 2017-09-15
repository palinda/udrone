/**
 * Mock service for {@link LogService}
 */

export class MockLogService {
    defaultDeep = 3;

    printInfo(message: string, object?: any, deep?: number) {
        console.log(message, object, deep || this.defaultDeep);
    }

    public printError(message: string, object?: any, deep?: number) {
        console.log(message, object, deep || this.defaultDeep);
    }

    printWarn(message: string, object?: any, deep?: number) {
        console.log(message, object, deep || this.defaultDeep);
    }

    printTrace(message: string, object?: any, deep?: number) {
        console.log(message, object, deep || this.defaultDeep);
    }

    printDebug(message: string, object?: any, deep?: number) {
        console.log(message, object, deep || this.defaultDeep);
    }

    printFatal(message: string, object?: any, deep?: number) {
        console.log(message, object, deep || this.defaultDeep);
    }

    printLog(message: string, object?: any, deep?: number) {
        console.log(message, object, deep || this.defaultDeep);
    }
}
