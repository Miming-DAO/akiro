import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-launch-app-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section id="launch-app" class="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat w-screen bg-gray-900">
    </section>
  `,
  styles: [
    `:host { display: block; width: 100vw; max-width: 100%; overflow-x: hidden; }
     section { margin: 0; padding: 0; width: 100vw; max-width: 100%; background-attachment: fixed; background-size: cover; background-position: center; overflow-x: hidden; min-height: 100vh; @media (max-width: 768px) { background-attachment: scroll; } }`
  ]
})
export class LaunchAppSectionComponent {} 