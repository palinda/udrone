import { Injectable } from '@angular/core';

/**
 * Unit testable Interval service. Wrapped angular setInterval functionality.
 * We can mock this service using {@link MockIntervalService}
 * Preffered to use this in all projects.
 * Example usage {@link BgCounterComponent}
 */
@Injectable()
export class IntervalService {

  constructor() { }

  /**
 * @description Set Interval with function callback
 * @param {callback} callback Callback function on timeout trigger
 * @param {number} time  Timer interval
 *
 * @example
 * setInterval(
 * {
 *     console.log('Callback !!');
 * }, 10);
 *
 */
  setInterval(callback: () => void, time: number) {
    return setInterval(callback, time);
  }

/**
 * @description Stop interval
 */
  clearInterval(interval) {
    clearInterval(interval);
    interval = undefined;
  }
}

