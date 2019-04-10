import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Observable } from 'rxjs';
import { stringify } from '@angular/core/src/util';
import { RecipesListComponent } from './recipes-list/recipes-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bombastic-Food';
  search: any;
  recipes: any [];
  
  constructor() {}

  ngOnInit(){
    // this.searchForRecipes();
  }
    }
    
  
