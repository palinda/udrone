import { TestBed, inject } from '@angular/core/testing';

import { WebSocketService } from './web-socket.service';

describe('WebSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebSocketService]
    });
  });

  it('should be created', inject([WebSocketService], (service: WebSocketService) => {
    expect(service).toBeTruthy();
  }));

  it('unsecured test', inject([WebSocketService], (service: WebSocketService) => {
    service.init('demos.kaazing.com/echo', false, 'msgname');

    service.subscribeChannel('ALL', (msg) => {
      console.log('subscribeChannel ALL', msg);
    });

    service.subscribeChannel('testMsg', (msg) => {
      console.log('subscribeChannel testMsg', msg);
    });

    service.send({'msgname': 'testMsg', 'value': 10}).subscribe(
      (msg) => {
        console.log('next', msg);
        expect(msg).toEqual({'msgname': 'testMsg', 'value': 10});
      },
      (msg) => {
        console.log('error', msg);
      },
      () => {
        console.log('completed');
      }
    );

  }));
});
