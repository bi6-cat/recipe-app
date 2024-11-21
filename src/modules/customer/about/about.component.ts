import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  public count: number = 0;
  public index: number = 0;

  public changeBackground(): void {
    // Get the body element
    const body = document.querySelector('body');
    // Change the background color with random color
    body!.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
  }

  public increment(): void {
    this.count++;
  }

  public decrement(): void {
    this.count--;
  }

  public changeIndex(index: number): void {
    this.index = index;
  }
}
