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
  // Component properties can be added here as needed
}
