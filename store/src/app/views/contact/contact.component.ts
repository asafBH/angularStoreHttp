import { Component, OnInit, Directive } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {
  email: string;
  subject: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

}
