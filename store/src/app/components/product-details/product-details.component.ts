import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, flatMap } from 'rxjs/operators';
import { DataService } from 'src/app/data/data.service';
import { IProduct } from 'src/app/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  public product: IProduct;
  private idTitleSub: Subscription;
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.idTitleSub = this.route.paramMap.pipe(
      map((params: ParamMap) => {
        return { id: params.get('id'), title: params.get('title') };
      }),
      flatMap(routeParams => this.data.getProductByTitleAndCat(routeParams.id, routeParams.title))
    )
      .subscribe(res => this.product = res);
  }

  ngOnDestroy() {
    this.idTitleSub.unsubscribe();
  }

}
