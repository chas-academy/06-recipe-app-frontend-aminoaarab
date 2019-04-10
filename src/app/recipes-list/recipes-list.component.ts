import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  searchInput = this.searchInput;
  recipes: any;

  constructor(private recipeService: RecipeService) { }

  RecipesCall = () => {
    this.recipeService.getRecipes(this.searchInput).subscribe(data => {
      this.recipes = data.hits.map(hit => hit.recipe)
    })
  }
  
  ngOnInit() {
    // this.RecipesCall();
  }

}
