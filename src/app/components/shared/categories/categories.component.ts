import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../../core/services/categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryArray: any =  [];
  constructor(private category: CategoriesService) {
  }
  ngOnInit(): void {
    this.category.loadData().subscribe(val => {
      this.categoryArray = val;
    })
  }

}
