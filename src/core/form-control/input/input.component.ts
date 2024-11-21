import { Component, Input } from '@angular/core';

// Type Alias
type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public diabled: boolean = false;
  @Input() public type: InputType = 'text';
}
