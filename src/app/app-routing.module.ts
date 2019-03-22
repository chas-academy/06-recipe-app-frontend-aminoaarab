import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavedComponent } from './saved/saved.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';


const routes: Routes = [
  { path: 'saved', component: SavedComponent },
  { path: 'recipes-details', component: RecipesDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
