import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {RecipeService } from '../recipe.service';
import { UsersService } from '../services/users.service';

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
    private userService: UsersService,
  ) {}

ngOnInit() {
  let label = this.route.snapshot.params['id'];
  this.recipeService.getRecipe(label).subscribe(data => {
    this.recipe = data.hits[0].recipe;
    console.log(this.recipe);
  });
}

saveRecipe() {
  console.log("heloo!")

  let saveDbModel = this.constructModel(this.recipe[0])

  this.userService.sendRecipe(saveDbModel).subscribe(data => {

  })
}

arrayToString(array) {
  let string = "";
  array.forEach(e => {
    string = string + e + ",";
  });
  return string;
}

constructModel(recipe) {
  let saveDbModel = {

    // email: this.token.getEmail(),
    
    title : this.recipe.label,
    description : this.arrayToString(this.recipe.ingredientLines),
    
  }

  return saveDbModel;
}

}
