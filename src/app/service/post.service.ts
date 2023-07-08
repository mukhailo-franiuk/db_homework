import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environments } from 'src/environments/environment';
import { PostRequire, PostResp } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = environments.BACKEND_URL;
  private apiPost = { posts: `${this.url}/messages` };
  constructor(private http: HttpClient) { }
  getAll(): Observable<PostResp[]> {
    return this.http.get<PostResp[]>(this.apiPost.posts)
  }
  getOne(id: number): Observable<PostRequire> {
    return this.http.get<PostRequire>(`${this.apiPost.posts}/${id}`)
  }
  create(post: PostRequire): Observable<PostResp> {
    return this.http.post<PostResp>(this.apiPost.posts, post);
  }
  update(post: PostRequire, id: number): Observable<PostResp> {
    return this.http.patch<PostResp>(`${this.apiPost.posts}/${id}`, post);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiPost.posts}/${id}`)
  }
}
