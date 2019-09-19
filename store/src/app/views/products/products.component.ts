import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { IProduct } from 'src/app/models/product';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, flatMap } from 'rxjs/operators'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  productsList: IProduct[] = [];
  catId: string;
  private dataSub: Subscription;

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.dataSub = this.route.paramMap.pipe(
      map((params: ParamMap) => {
        this.catId = params.get('catId');
        return params.get('catId');
      }),
      flatMap(catId => this.data.getProductsByCategoryId(catId))
    )
      .subscribe(res => this.productsList = res);
  }

  goToProduct(product: IProduct) {
    this.router.navigate(['product', this.catId, product.Title]);
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }
}
