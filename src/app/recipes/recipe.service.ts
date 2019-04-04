import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://www.maxpixel.net/static/photo/1x/Recipe-Healthy-Food-Seafood-Sea-Food-Healthy-Food-3785722.jpg'),
    new Recipe('Another Test Recipe', 'This is a test', 'https://www.maxpixel.net/static/photo/1x/Recipe-Healthy-Food-Seafood-Sea-Food-Healthy-Food-3785722.jpg')
  ];

  getRecipes() {
    return this.recipes.slice(); // return copy of array
  }
}
