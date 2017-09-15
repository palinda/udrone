import { environment } from './../../environments/environment.prod';
import { MockLogService } from '@mock/log-service.mock';
import { UMsg } from '@defs/umsg';
import { HttpModule, Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { LogService } from './log.service';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, fakeAsync } from '@angular/core/testing';
import { HttpService } from './http.service';

class TestMsg extends UMsg {
  constructor(private name: string, private count: number) {
    super();
  }

  public get $name(): string {
    return this.name;
  }

  public get $count(): number {
    return this.count;
  }
}

describe('HttpService', () => {

  const req = new TestMsg('my_msg', 10);

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        HttpService,
        {
          provide: Http,
          useFactory: (mockBackend, options) => {
            return new Http(mockBackend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        { provide: LogService, useClass: MockLogService }
      ]
    });

  });

  it('should send request echo', inject([HttpService, MockBackend],
    (service: HttpService, mockBackend: MockBackend) => {

    const mockResponse = {'resp': 'Echo'};

     mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

    service.send('', req).subscribe((result) => {
      expect(result['resp']).toBe('Echo', 'POST test');
    });

    service.send('', undefined).subscribe((result) => {
      expect(result['resp']).toBe('Echo', 'POST test');
    });

    service.send('', null).subscribe((result) => {
      expect(result['resp']).toBe('Echo', 'POST test');
    });

    environment.reqMethod = 'GET';
    service.send('', req).subscribe((result) => {
      expect(result['resp']).toBe('Echo', 'GET test');
    });

  }));

  it('should http post echo', inject([HttpService, MockBackend], fakeAsync((service: HttpService, mockBackend: MockBackend) => {

    const mockResponse = {'resp': 'Echo'};

     mockBackend.connections.subscribe((connection) => {

       expect(connection.request.method).toBe(RequestMethod.Post);

        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

    service.sendPostRequest('http://TestBed.com', req).subscribe((result) => {
      expect(result['resp']).toBe('Echo');
    });
  })));


  it('should http get echo', inject([HttpService, MockBackend], fakeAsync((service: HttpService, mockBackend: MockBackend) => {

    const mockResponse = {'resp': 'Echo'};

     mockBackend.connections.subscribe((connection) => {

        expect(connection.request.method).toBe(RequestMethod.Get);
        const params = new URLSearchParams(connection.request.url.split('?')[1]);

        expect(params.get('name')).toBe(req.$name, 'Request should equal');

        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

    service.sendGetRequest('http://TestBed.com', req).subscribe((result) => {
      expect(JSON.stringify(result)).toBe(JSON.stringify(mockResponse));
    });
  })));
});
