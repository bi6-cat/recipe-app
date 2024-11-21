import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RecipeItemComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Input() public recipes: any[] = [];

  @Output('add-item') public addItemEvent: EventEmitter<any> =
    new EventEmitter<any>();

  public addItem(recipe: any): void {
    this.addItemEvent.emit(recipe);
  }
}
