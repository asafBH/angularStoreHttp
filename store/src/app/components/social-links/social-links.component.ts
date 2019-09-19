import { Component, OnInit, ContentChildren, QueryList, ElementRef, AfterContentInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit, AfterContentInit {

  @ContentChildren("Sociallink") elmList!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.elmList.forEach(elm => {
      this.renderer.setProperty(elm.nativeElement, 'target', '_blank');
    })
  }

}
