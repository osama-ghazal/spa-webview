import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule, RouterModule]
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToPageA() {
    this.router.navigate(['/pageA']);
  }
}
