import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat w-screen" 
             style="background-image: url('assets/images/hero-bg.png');">
    </section>
  `,
  styles: [
    `:host { display: block; width: 100vw; max-width: 100%; overflow-x: hidden; }
     section { margin: 0; padding: 0; width: 100vw; max-width: 100%; background-attachment: fixed; background-size: cover; background-position: center; overflow-x: hidden; min-height: 100vh; @media (max-width: 768px) { background-attachment: scroll; } }`
  ]
})
export class HeroSectionComponent {} 