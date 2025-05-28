import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  imports: [CommonModule, RouterModule]
})
export class PageBComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/pageA']);
  }
}
