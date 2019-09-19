import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, flatMap } from 'rxjs/operators';
import { DataService } from 'src/app/data/data.service';
import { IProduct } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { UserLogService } from 'src/app/services/user-log.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit, OnDestroy {

  // service
  public cart: CartService;

  private dataSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private data: DataService,
    private cartService: CartService,
    public userLogService: UserLogService) {
    this.cart = cartService;
  }
  productData: IProduct;

  ngOnInit() {
    this.dataSubscription = this.route.paramMap.pipe(
      map((params: ParamMap) => {
        return { catId: params.get('catId'), title: params.get('title') };
      }),
      flatMap(routeParmas => this.data.getProductByTitleAndCat(routeParmas.catId, routeParmas.title))
    ).subscribe(pData => {
      this.productData = pData;
    });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
