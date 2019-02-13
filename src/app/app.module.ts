import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoomifyComponent } from './boomify/boomify.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SavedComponent } from './saved/saved.component';

@NgModule({
  declarations: [
    AppComponent,
    BoomifyComponent,
    RecipesComponent,
    SavedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
