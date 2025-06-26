import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shared-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shared-footer.component.html',
  styleUrl: './shared-footer.component.css'
})
export class SharedFooterComponent {
  currentYear = new Date().getFullYear();
  akiroName = 'Akiro ($AKR)';
  akiroLogo = '/assets/images/akiro-coin-logo.png';
}
