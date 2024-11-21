import { Component } from '@angular/core';
import { InputComponent } from '../../../core/form-control/input/input.component';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from '../../master/recipe/recipe-list/recipe-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputComponent, CommonModule, RecipeListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public backgroundColor: string = 'yellow';
  public isDisabled: boolean = true;
  public inputLabel: string = 'Username';
  public placeholder: string = 'Enter your Username';

  public selectedRecipe: any = {};
  public isBlue: boolean = false;

  public newRecipes: any[] = [
    {
      name: 'Chicken Curry',
      description: 'This is a delicious chicken curry recipe',
      image: 'https://via.placeholder.com/150',
      orders: 0,
    },
    {
      name: 'Chicken Curry',
      description: 'This is a delicious chicken curry recipe',
      image: 'https://via.placeholder.com/150',
      orders: 0,
    },
    {
      name: 'Chicken Curry',
      description: 'This is a delicious chicken curry recipe',
      image: 'https://via.placeholder.com/150',
      orders: 0,
    },
    {
      name: 'Pho Bo',
      description: 'This is a delicious chicken curry recipe',
      image: 'https://via.placeholder.com/150',
      orders: 0,
    },
  ];

  public bestSellingRecipes: any[] = [
    {
      name: 'Pho Bo',
      description: 'This is a delicious chicken curry recipe',
      image: 'https://via.placeholder.com/150',
      orders: 0,
    },
    {
      name: 'Banh Cuon',
      description: 'This is a delicious chicken curry recipe',
      image: 'https://via.placeholder.com/150',
      orders: 30,
    },
    {
      name: 'Bun Rieu',
      description: 'This is a delicious chicken curry recipe',
      image: 'https://via.placeholder.com/150',
      orders: 20,
    },
    {
      name: 'Pho Tron',
      description: 'This is a delicious chicken curry recipe',
      image: 'https://via.placeholder.com/150',
      orders: 40,
    },
  ];

  public changeBackground(): void {
    this.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`;
  }

  public listenFromList(event: any): void {
    this.selectedRecipe = event;
  }

  public changeClass(): void {
    this.isBlue = !this.isBlue;
  }

  public isRed: boolean = false;

  public changeStyle(): void {
    this.isRed = !this.isRed;
  }
}
