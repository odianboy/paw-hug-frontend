import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor() { }

  getTarget(event: Event) {
    return event.target as HTMLInputElement;
  }

  checkClassName(event: Event, className: string): boolean {
    return this.getTarget(event).className.includes(className);
  }
}
