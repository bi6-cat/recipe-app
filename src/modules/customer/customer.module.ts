import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    // Home Page
    path: '',
    component: HomeComponent,
  },
  {
    // About Page
    path: 'about',
    component: AboutComponent,
  },
  {
    // Contact Page
    path: 'contact',
    component: ContactComponent,
  },
  {
    // Redirect any other route to home
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CustomerModule {}
