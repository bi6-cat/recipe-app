import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() public recipe: any = {};

  @Output('add-to-cart') public addToCartEvent: EventEmitter<any> =
    new EventEmitter<any>();

  public addToCart(): void {
    this.addToCartEvent.emit(this.recipe);
  }
}
