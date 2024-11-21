import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public brand: string = 'zAPP';
  public brandLogo: string = './assets/images/logo.png';
  public faBars = faBars;
  public isShow: boolean = false;

  public toggleMenu(): void {
    this.isShow = !this.isShow;
  }
}
