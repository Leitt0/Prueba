import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetaplaceholderComponent } from '../getaplaceholder/getaplaceholder.component';
import { GetPorIdComponent } from '../get-por-id/get-por-id.component';
import { NewPostComponent } from '../new-post/new-post.component'

const routes: Routes = [
  {path: '', component: GetaplaceholderComponent},
  {path: ':id/comments', component: GetPorIdComponent},
  {path: 'newPost', component: NewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
