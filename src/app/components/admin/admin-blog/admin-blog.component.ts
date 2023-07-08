import { Component } from '@angular/core';
import { Post, PostRequire } from 'src/app/interface/interface';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent {
  public allPost: Post[] = []
  public title = '';
  public post = '';
  public author = '';
  public imagePath = "https://www.wilsoncenter.org/sites/default/files/styles/embed_text_block/public/media/uploads/images/shutterstock_2130635387_1.jpg";

  public editStatus = false;
  public listStatus = true;
  public addStatus = false;

  public editID!: number;

  constructor(private adminPost: PostService) { }
  ngOnInit(): void {
    this.getAllPost();
  }
  getAllPost(): void {
    this.adminPost.getAll().subscribe(data => {
      this.allPost = data;
    })
  }
  addPost(): void {
    if (this.title.length > 0 && this.post.length > 0 && this.author.length > 0) {
      const newPost = {
        title: this.title,
        post: this.post,
        author: this.author,
        imagePath: this.imagePath
      }
      this.adminPost.create(newPost).subscribe(() => {
        this.getAllPost();
        this.resetForm();
      })
    }
    else {
      return
    }
  }
  editPost(post: Post): void {
    this.title = post.title;
    this.post = post.post;
    this.author = post.author
    this.editStatus = true;
    this.editID = post.id;
    this.imagePath = post.imagePath;
  }
  savePost(): void {
    const updatePost = {
      title: this.title,
      author: this.author,
      post: this.post,
      imagePath: this.imagePath
    };
    this.adminPost.update(updatePost, this.editID).subscribe((data) => {
      this.getAllPost();
      this.resetForm();
    });
  }
  deleteDiscount (posts:Post) :void {
    if(confirm('Are you sure?')){
      this.adminPost.delete(posts.id).subscribe(()=>{
        this.getAllPost();
      });
    }
  }
  resetForm(): void {
    this.title = '';
    this.post = ''
    this.author = ''
    this.imagePath = 'https://www.wilsoncenter.org/sites/default/files/styles/embed_text_block/public/media/uploads/images/shutterstock_2130635387_1.jpg'
    this.editStatus = false;
  }
}
