import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(public data: DataService, private router: Router) { }

  ngOnInit() {
  }

  goToCategory(id: string) {
    this.router.navigate(['products', id]);
  }
}
