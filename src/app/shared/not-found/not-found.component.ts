import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  copied = false;
  constructor(private router: Router) {}

  copyAddress() {
    navigator.clipboard.writeText('8dv3udbCdEUXGFXB2m7Hs7y5T9Jthe1V7LpZ28k7tgs7');
    this.copied = true;
    setTimeout(() => this.copied = false, 1500);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
