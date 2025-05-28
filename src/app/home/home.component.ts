import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

declare global {
  interface Window { AndroidBridge: { sendMessage(msg: string): void } }
}

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule, RouterModule]
})
export class HomeComponent {
  showButtons = false;
  bridgeMessage = '';

  constructor(private router: Router) {}

  toggleButtons() {
    this.showButtons = !this.showButtons;
  }

  goToPageB(type: 'spa' | 'bridge') {
    if (type === 'spa') {
      this.router.navigate(['/pageA']);   // ← route to Page A now
    } else if (window.AndroidBridge?.sendMessage) {
      const msg = '/pageB';
      window.AndroidBridge.sendMessage(msg);
      this.bridgeMessage = msg;
    } else {
      console.warn('AndroidBridge not available');
    }
  }
}
