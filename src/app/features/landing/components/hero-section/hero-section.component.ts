import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section id="hero" class="relative w-full min-h-screen flex items-center bg-cover bg-center bg-no-repeat pb-12 md:pb-20 mb-8 md:mb-16 lg:pb-0 lg:mb-0 lg:w-screen" 
             style="background-image: url('assets/images/hero-bg.png');">
      <div class="flex flex-col items-center justify-center w-full py-16 px-2 md:px-8 lg:items-start lg:justify-start lg:py-0 lg:px-0">
        <!-- Rectangle Overlay Card: Contains project info, contract address, and social icons -->
        <div 
          class="bg-[#497cab]/80 rounded-2xl shadow-xl p-4 md:p-6 w-[95vw] max-w-2xl flex flex-col gap-6 md:gap-8 text-[#f1d4a6] pr-[2px]
                 lg:absolute lg:left-40 lg:bottom-40 lg:w-[90vw] lg:max-w-2xl lg:gap-8 lg:-mb-[3px]">
          <!-- Project Title and Logo -->
          <div class="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 text-left mx-auto md:mx-0
                      lg:flex-row lg:items-start lg:gap-8 lg:text-left lg:-ml-[10px] lg:-mt-[1px]">
            <img src="/assets/images/akiro-coin-logo.png" alt="Akiro Coin Logo" class="h-20 w-20 md:h-24 md:w-24 rounded-full object-contain bg-white/20" />
            <div>
              <div class="font-bold text-2xl md:text-4xl mt-2 md:-ml-4 text-center md:text-left lg:text-4xl lg:mt-2 lg:-ml-4">Akiro Real-world Assets</div>
              <div class="text-lg md:text-2xl md:-ml-4 text-center md:text-left lg:text-2xl lg:-ml-4">$AKR</div>
            </div>
          </div>
          <!-- Solana Contract Address -->
          <div class="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-8 text-left mx-auto md:mx-0
                      lg:flex-row lg:items-start lg:gap-8 lg:text-left lg:-ml-[10px] lg:-mt-[8px]">
            <img src="/assets/images/solana-logo.png" alt="Solana Logo" class="h-20 w-20 md:h-24 md:w-24 rounded-full object-contain bg-white/20" />
            <div class="flex flex-col items-center md:items-start w-full lg:items-start">
              <div class="font-semibold text-lg md:text-2xl mt-2 md:-ml-4 lg:text-2xl lg:mt-2 lg:-ml-4">Solana Contract Address:</div>
              <div class="flex flex-col md:flex-row items-center gap-2 w-full lg:block">
                <span class="break-all text-base md:text-xl opacity-90 md:-ml-4 lg:text-xl lg:opacity-90 lg:-ml-4">8dv3udbCdEUXGFXB2m7Hs7y5T9Jthe1V7LpZ28k7tgs7</span>
                <button (click)="copyAddress()" class="mt-2 md:mt-0 bg-[#f1d4a6] text-[#497cab] px-3 py-1 rounded font-semibold text-xs md:text-sm hover:bg-[#ffd700] transition" [attr.aria-label]="copied ? 'Copied!' : 'Copy address'">
                  <span *ngIf="!copied">Copy Address</span>
                  <span *ngIf="copied">Copied!</span>
                </button>
              </div>
            </div>
          </div>
          <!-- Social Media Icons Row -->
          <div class="flex gap-6 md:gap-8 justify-center md:justify-end mt-4 lg:gap-8 lg:justify-end">
            <a href="https://twitter.com/" target="_blank" rel="noopener">
              <img src="/assets/images/twitter-logo.png" alt="Twitter" class="h-8 w-8 md:h-10 md:w-10 lg:h-10 lg:w-10" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener">
              <img src="/assets/images/x-logo.png" alt="X" class="h-8 w-8 md:h-10 md:w-10 lg:h-10 lg:w-10" />
            </a>
            <a href="https://telegram.org/" target="_blank" rel="noopener">
              <img src="/assets/images/telegram-logo.png" alt="Telegram" class="h-8 w-8 md:h-10 md:w-10 lg:h-10 lg:w-10" />
            </a>
            <a href="https://dexscreener.com/" target="_blank" rel="noopener">
              <img src="/assets/images/dexscreener-logo.png" alt="Dexscreener" class="h-8 w-8 md:h-10 md:w-10 lg:h-10 lg:w-10" />
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; width: 100vw; max-width: 100%; overflow-x: hidden; }
     section { margin: 0; padding: 0; width: 100vw; max-width: 100%; background-attachment: fixed; background-size: cover; background-position: center; overflow-x: hidden; min-height: 100vh; }
     @media (max-width: 768px) { section { background-attachment: scroll; } }`
  ]
})
export class HeroSectionComponent {
  copied = false;
  copyAddress() {
    navigator.clipboard.writeText('8dv3udbCdEUXGFXB2m7Hs7y5T9Jthe1V7LpZ28k7tgs7');
    this.copied = true;
    setTimeout(() => this.copied = false, 1500);
  }
}