import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-on-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-on-progress.component.html',
  styleUrl: './work-on-progress.component.css'
})
export class WorkOnProgressComponent {
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
