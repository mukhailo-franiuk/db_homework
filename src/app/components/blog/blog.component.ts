import { Component } from '@angular/core';
import { Post, PostRequire } from 'src/app/interface/interface';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  public posts: Post[] = [];
  constructor(private allPosts: PostService) { }
  ngOnInit(): void {
this.getAllPost()
  }
  getAllPost(): void {
    this.allPosts.getAll().subscribe(data => {
      this.posts = data;
    })
  }
}
