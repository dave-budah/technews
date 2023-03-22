import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../../core/services/posts.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  postArray: any = [];
  categoryObj: any;
  constructor(private route: ActivatedRoute, private postService: PostsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(val => {
      this.categoryObj = val;
        this.postService.loadCategoryPosts(val['id']).subscribe(post => {
            this.postArray = post;
        })
    })
  }
}
