import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://www.maxpixel.net/static/photo/1x/Recipe-Healthy-Food-Seafood-Sea-Food-Healthy-Food-3785722.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
