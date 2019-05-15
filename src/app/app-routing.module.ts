import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavedComponent } from './saved/saved.component';
import { LoginComponent } from './login/login.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SignupComponent } from './signup/signup.component';



const appRoutes: Routes = [
  { path: 'saved', component: SavedComponent },
  { path: 'recipes-details/:id', component: RecipesDetailsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: SignupComponent },
  { path: 'recipes-list', component: RecipesListComponent },
  { path: '', redirectTo: '/recipes-list', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

