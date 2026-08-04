import { Injectable, signal } from '@angular/core';
import { DrinkModel } from './models';
import { MOCK_DRINKS } from './mock-drinks';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  private readonly drinkState = signal<DrinkModel[]>(MOCK_DRINKS);
  readonly drinks = this.drinkState.asReadonly();

  getDrinkById(id: number): DrinkModel | undefined {
    return this.drinkState().find((drink) => drink.id === id);
  }

  addDrink(newDrink: DrinkModel): void{
    this.drinkState.update((current) => [...current, newDrink]);
  }

  deleteDrink(id: number): void{
    this.drinkState.update((current) => current.filter((drink) => drink.id !== id));
  }

  togglePopular(id: number): void{
    this.drinkState.update((current) =>
    current.map((drink) =>
    drink.id === id ? {...drink, isPopular: !drink.isPopular} : drink));
  }

}
