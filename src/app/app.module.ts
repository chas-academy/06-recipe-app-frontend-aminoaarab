import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoomifyComponent } from './boomify/boomify.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SavedComponent } from './saved/saved.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BoomifyComponent,
    RecipesComponent,
    SavedComponent,
    RecipesListComponent,
    RecipesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
