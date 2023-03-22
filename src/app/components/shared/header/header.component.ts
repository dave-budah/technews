import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../../core/services/categories.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categoryArray: any =  [];
  constructor(private category: CategoriesService) {}

  ngOnInit(): void {
    this.category.loadData().subscribe(val => {
        this.categoryArray = val;
    });
  }

}
