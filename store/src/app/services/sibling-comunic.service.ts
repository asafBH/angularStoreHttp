import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiblingComunicService {

  sideNavIsOpen = false;

  constructor() { }

  toggle() {
    this.sideNavIsOpen = !this.sideNavIsOpen;
  }
}
