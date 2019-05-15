import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss']
})

export class RecipesDetailsComponent implements OnInit {
  recipe: any;
  
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
  ) {}

ngOnInit() {
  let label = this.route.snapshot.params['id'];
  this.recipeService.getRecipe(label).subscribe(data => {
    this.recipe = data.hits[0].recipe;
    console.log(this.recipe);
  });
}



}
