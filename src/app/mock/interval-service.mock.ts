/**
 * Mock service for {@link IntervalService}
 */

export class MockIntervalService {

    callback;

    clearInterval = jasmine.createSpy('clearInterval');

    constructor() { }
    setInterval(callback: () => void, time: number) {
        this.callback = callback;
    }

    tick() {
        if (this.callback !== undefined) {
            this.callback();
        }
    }
}
