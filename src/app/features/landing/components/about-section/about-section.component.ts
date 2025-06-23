import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat w-screen"
             style="background-image: url('assets/images/about-bg.png');">
    </section>
  `,
  styles: [
    `:host { display: block; width: 100vw; max-width: 100%; overflow-x: hidden; margin: 0; padding: 0; }
     section { margin: 0; padding: 0; width: 100vw; max-width: 100%; background-attachment: fixed; background-size: cover; background-position: center; overflow: hidden; box-sizing: border-box; min-height: 100vh; @media (max-width: 768px) { background-attachment: scroll; } }
     :host ::ng-deep * { box-sizing: border-box; }`
  ]
})
export class AboutSectionComponent {} 