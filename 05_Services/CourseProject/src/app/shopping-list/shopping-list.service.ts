import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
 
    // triple dots are used in two ways 
    // For details https://medium.com/@oprearocks/what-do-the-three-dots-mean-in-javascript-bc5749439c9a
    // Here it is used to pass ingredient array as list of elements individually.
    this.ingredients.push(...ingredients);

    // slice is used to send the copy of the element
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
