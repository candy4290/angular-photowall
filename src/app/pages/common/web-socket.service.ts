import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WebSocketService {
    private subject: Observable<any>;
    private ws: WebSocket;

    public connect(url: string): Observable<any> {
        if (!this.subject) {
            this.subject = this.create(url);
        }
        return this.subject;
    }

    private create(url: string): Observable<any> {
        // 判断当前浏览器是否支持WebSocket
        if ('WebSocket' in window) {
            this.ws = new WebSocket(url);
        } else {
            throw new Error('the current browser Not support websocket');
        }
        return new Observable(observer => {
            this.ws.onmessage = (event) => {
                observer.next(event.data);
            };

            this.ws.onerror = (event) => {
                observer.error(event);
            };

            this.ws.onclose = () => {
                observer.complete();
            };
        });
    }

    send(data: any) {
        this.ws.send(JSON.stringify(data));
    }

}
