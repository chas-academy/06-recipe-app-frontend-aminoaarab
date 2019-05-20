import { RecipeService } from './../recipe.service';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {
  id: any;
  recipe: any;
  
  constructor(
    private service: AuthenticationService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.showSavedRecipes()
  }

  info: any
  showSavedRecipes(){
  this.service.showSavedRecipes().subscribe(res => {
    this.info = res.recipes
  });
}

deleteRecipe(id){
  this.service.deleteSavedRecipe(id).subscribe(res => {
  })
  this.showSavedRecipes()

  console.log("this should delete recipe")
}
  
}
