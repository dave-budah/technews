import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../../../core/services/posts.service";

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.css']
})
export class RecentsComponent implements OnInit {
  latestPostsArray: any = [];
  constructor(private postService: PostsService) {
  }
  ngOnInit(): void {
    this.postService.loadLatest().subscribe(val => {
      this.latestPostsArray = val;
    })
  }

}
