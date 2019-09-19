import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DataService } from 'src/app/data/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addProduct: FormGroup = new FormGroup({
    category: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', Validators.required),
  });


  constructor(public dialog: MatDialog, private dataService: DataService, private location: Location) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.dataService.addProduct(this.addProduct.value);
        this.location.back();
      }
    });
  }

  canDeactivate() {
    return confirm("Do you want to leave?");
  }

}
