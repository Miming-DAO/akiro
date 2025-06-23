import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section id="hero" class="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat w-screen" 
             style="background-image: url('assets/images/hero-bg.png');">
      <!-- Rectangle Overlay Card: Contains project info, contract address, and social icons -->
      <div class="absolute left-30 md:left-40 bottom-40 md:bottom-50 bg-[#497cab]/80 rounded-2xl shadow-xl p-4 md:p-6 w-[90vw] max-w-2xl flex flex-col gap-8 text-[#f1d4a6] -mb-[3px] pr-[2px]">
        <!-- Project Title and Logo -->
        <div class="flex items-start gap-8 text-left -ml-[10px] -mt-[1px]">
          <img src="/assets/images/akiro-coin-logo.png" alt="Akiro Coin Logo" class="h-24 w-24 rounded-full object-contain bg-white/20" />
          <div>
            <div class="font-bold text-4xl mt-2 -ml-4">Akiro Real-world Assets</div>
            <div class="text-2xl -ml-4">$AKR</div>
          </div>
        </div>
        <!-- Solana Contract Address -->
        <div class="flex items-start gap-8 text-left -ml-[10px] -mt-[8px]">
          <img src="/assets/images/solana-logo.png" alt="Solana Logo" class="h-24 w-24 rounded-full object-contain bg-white/20" />
          <div>
            <div class="font-semibold text-2xl mt-2 -ml-4">Solana Contract Address:</div>
            <div class="break-all text-xl opacity-90 -ml-4">8dv3udbCdEUXGFXB2m7Hs7y5T9Jthe1V7LpZ28k7tgs7</div>
          </div>
        </div>
        <!-- Social Media Icons Row -->
        <div class="flex gap-8 justify-end mt-4">
          <a href="https://twitter.com/" target="_blank" rel="noopener">
            <img src="/assets/images/twitter-logo.png" alt="Twitter" class="h-10 w-10" />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener">
            <img src="/assets/images/x-logo.png" alt="X" class="h-10 w-10" />
          </a>
          <a href="https://telegram.org/" target="_blank" rel="noopener">
            <img src="/assets/images/telegram-logo.png" alt="Telegram" class="h-10 w-10" />
          </a>
          <a href="https://dexscreener.com/" target="_blank" rel="noopener">
            <img src="/assets/images/dexscreener-logo.png" alt="Dexscreener" class="h-10 w-10" />
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; width: 100vw; max-width: 100%; overflow-x: hidden; }
     section { margin: 0; padding: 0; width: 100vw; max-width: 100%; background-attachment: fixed; background-size: cover; background-position: center; overflow-x: hidden; min-height: 100vh; @media (max-width: 768px) { background-attachment: scroll; } }`
  ]
})
export class HeroSectionComponent {} 