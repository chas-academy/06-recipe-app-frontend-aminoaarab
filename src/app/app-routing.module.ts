import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavedComponent } from './saved/saved.component';


const routes: Routes = [
  { path: 'saved', component: SavedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
