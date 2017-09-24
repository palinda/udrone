import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { URLSearchParams, RequestOptions,  Http,   Headers,   Response } from '@angular/http';
import { LogService } from './log.service';
import { UMsg } from '@defs/umsg';
import { forwardRef, Inject, Injectable, Type } from '@angular/core';

/**
 * Send HTTP GET and POST requests. Prefered to use this service for all http communications.
 */
@Injectable()
export class HttpService {

  constructor(private logService: LogService, private http: Http) {
  }

/**
 * @description Send HTTP request, Request method decide according to the config
 * @param {string} reqPath  Request path, this will concat with base URL
 * @param {msg} object  Payload message to send
 *
 * @example
 * send('testQuery/Count', new UMsg());
 * Base URL = http://localhost:5556
 * So Request URL = http://localhost:5556/testQuery/Count
 */
  public send<T>(reqPath: string, msg: UMsg): Observable<T> {
    this.logService.printTrace('Send http request:', msg);
    const reqMethod = environment.reqMethod;
    const reqBaseUrl = environment.reqBaseUrl;

    const reqUrl = reqBaseUrl + '/' + reqPath;
    if (reqMethod === 'POST') {
        return this.sendPostRequest(reqUrl, msg);
    } else {
        return this.sendGetRequest(reqUrl, msg);
    }
  }

/**
 * @description Send GET requests
 * @param {string} reqUrl  Full request URL
 * @param {msg} object  Payload message to send
 *
 * @example
 * send('http://localhost:5556/testQuery/Count', new UMsg());
 *
 */
  public sendGetRequest(reqUrl: string, msg: UMsg): Observable<any> {
    this.logService.printTrace('Send http get request:', msg);

    const headers = new Headers();
    headers.append('Content-Type', environment.contentType);

    const options = new RequestOptions({
        headers: headers,
        search: this.createQueryParam(msg)
    });

    return this.http.get(reqUrl, options)
    .map(response => response.json());
  }

/**
 * @description Send POST requests
 * @param {string} reqUrl  Full request URL
 * @param {msg} object  Payload message to send
 *
 * @example
 * send('http://localhost:5556/testQuery/Count', new UMsg());
 *
 */
  public sendPostRequest(reqUrl: string, msg: UMsg): Observable<any> {
    this.logService.printTrace('Send http post request:', msg);

    const headers = new Headers({ 'Content-Type': environment.contentType });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(reqUrl, msg, options)
    .map(response => response.json());
  }

  public sendGet(reqUrl: string, options: RequestOptions) {
    this.logService.printTrace('Send http get request:', reqUrl);
    return this.http.get(reqUrl, options);
  }

  private createQueryParam(msg: UMsg): URLSearchParams {
    if (msg === undefined || msg === null) {
      return new URLSearchParams();
    }
    return new URLSearchParams(msg.getQueryString());

  }
}
