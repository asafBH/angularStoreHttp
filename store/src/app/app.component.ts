import { Component } from '@angular/core';
import { SiblingComunicService } from './services/sibling-comunic.service';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { slideInAnimation } from 'src/animationts';
import { CartService } from './services/cart.service';
import { UserLogService } from './services/user-log.service';
import { LocalizationService } from './services/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})

export class AppComponent {
  title = 'store';
  facebook = faFacebookF;
  github = faGithub;
  email = faEnvelope;
  constructor(
    public sibCom: SiblingComunicService,
    public cart: CartService,
    public userLog: UserLogService,
    public localization: LocalizationService
  ) {
  }
}
