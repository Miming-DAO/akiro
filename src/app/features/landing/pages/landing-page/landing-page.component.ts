import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { UtilitySectionComponent } from '../../components/utility-section/utility-section.component';
import { TokenomicsSectionComponent } from '../../components/tokenomics-section/tokenomics-section.component';
import { TimelineSectionComponent } from '../../components/timeline-section/timeline-section.component';
/* import { LaunchAppSectionComponent } from '../../components/launch-app-section/launch-app-section.component'; */

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    AboutSectionComponent,
    UtilitySectionComponent,
    TokenomicsSectionComponent,
    TimelineSectionComponent,
  /*   LaunchAppSectionComponent */
  ],
  template: `
    <div class="w-screen overflow-hidden">
      <app-hero-section></app-hero-section>
      <app-about-section></app-about-section>
      <app-utility-section></app-utility-section>
      <app-tokenomics-section></app-tokenomics-section>
      <app-timeline-section></app-timeline-section>
      <!-- <app-launch-app-section></app-launch-app-section> -->
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100vw;
      max-width: 100%;
      overflow-x: hidden;
    }

    :host ::ng-deep section {
      width: 100vw;
      max-width: 100%;
      margin: 0 !important;
      padding: 0 !important;
      overflow-x: hidden;
      box-sizing: border-box;
    }
  `]
})
export class LandingPageComponent {} 