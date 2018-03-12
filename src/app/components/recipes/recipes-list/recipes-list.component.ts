import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test","This is a simple test","https://www.w3schools.com/howto/img_fjords.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
