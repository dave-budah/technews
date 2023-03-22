import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../../core/services/posts.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  postData: any;
  relatedPostArray: any = [];
  constructor(private route: ActivatedRoute, private postService: PostsService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(val => {

      this.postService.loadOnePost(val['id']).subscribe(post => {
        this.postData = post;
        this.loadRelatedPost(this.postData.category.categoryId)
      })
    });

  }
  loadRelatedPost(catId: string) {
    this.postService.loadRelatedPosts(catId).subscribe(val => {
    this.relatedPostArray = val;
    })
  }
}
