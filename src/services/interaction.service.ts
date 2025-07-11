import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
    count = 0
    countSubject:Subject<number> = new Subject<number>()

    increment() {
        this.countSubject.next(this.count++)
    }
    decrement() {
        this.countSubject.next(this.count--)
    }
}