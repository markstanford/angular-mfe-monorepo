import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Message } from '../state/messages/message';

@Injectable({providedIn: 'root'})
export class MessagesService {

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>('assets/data/messages.json');
  }
}
