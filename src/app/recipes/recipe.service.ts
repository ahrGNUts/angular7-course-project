import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spiced Potatoes',
      'Exotic delicacy from the magical land of Foon',
      'https://i2.wp.com/thegluttonousgeek.com/wp-content/uploads/2017/03/foontatoes8.jpg?w=441&ssl=1',
      [
        new Ingredient('Potatoes', 7),
        new Ingredient('Spices', 7)
      ]),
    new Recipe(
      'Sous Vide Burger',
      'One of the most expensive ways to prepare a burger',
      'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2),
        new Ingredient('Sous Vide Machine', 1),
        new Ingredient('Lettuce', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Tomatoes', 1),
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // return copy of array
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
