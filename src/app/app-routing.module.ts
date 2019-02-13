import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoomifyComponent } from './boomify/boomify.component';
import { SavedComponent } from './saved/saved.component';
import { RecipesComponent } from './recipes/recipes.component';


const routes: Routes = [
  { path: 'boomify', component: BoomifyComponent },
  { path: 'saved', component: SavedComponent },
  { path: 'recipes', component: RecipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
