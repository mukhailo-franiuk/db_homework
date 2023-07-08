import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './components/blog/blog.component';
import { AdminBlogComponent } from './components/admin/admin-blog/admin-blog.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path: 'post',component:BlogComponent},
  {path:'admin',component : AdminComponent,children :[
    {path:'blogs',component:AdminBlogComponent},
    {path:'',pathMatch:'full',redirectTo:'blogs'}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
