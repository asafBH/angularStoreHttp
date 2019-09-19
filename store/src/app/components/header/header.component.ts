import { Component, OnInit } from '@angular/core';
import { SiblingComunicService } from 'src/app/services/sibling-comunic.service';
import { CartService } from '../../services/cart.service';
import { UserLogService } from 'src/app/services/user-log.service';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public sibCom: SiblingComunicService,
    public cart: CartService,
    public userLog: UserLogService,
    public localization: LocalizationService) { }

  ngOnInit() {
  }

}
