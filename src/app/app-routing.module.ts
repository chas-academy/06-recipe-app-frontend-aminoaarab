import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavedComponent } from './saved/saved.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';


const routes: Routes = [
  { path: 'saved', component: SavedComponent },
  { path: 'recipes-details/:id', component: RecipesDetailsComponent },
  { path: 'recipes-list', component: RecipesListComponent },
  { path: '', redirectTo: '/recipes-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
