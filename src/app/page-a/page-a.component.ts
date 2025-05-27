import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

declare global {
  interface Window { AndroidBridge: { sendMessage(msg: string): void }; }
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-page-a',
  templateUrl: './page-a.component.html'
})
export class PageAComponent {
  bridgeMessage = '';

  constructor(private router: Router) {}

  goToPageB(type: string) {
    if (type === 'spa') {
      this.router.navigate(['/pageB']);
    } else {
      const msg = '/pageB';
   if (window.AndroidBridge && typeof window.AndroidBridge.sendMessage === 'function') {
     window.AndroidBridge.sendMessage(msg);
   } else {
     console.warn('AndroidBridge not available — message was:', msg);
   }      this.bridgeMessage = msg;
    }
  }
}
