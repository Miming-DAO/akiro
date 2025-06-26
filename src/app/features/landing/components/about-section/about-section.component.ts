import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="relative w-full py-12 md:py-20 pb-12 md:pb-20 mb-16 md:mb-16 flex items-center bg-cover bg-center bg-no-repeat min-h-screen lg:min-h-screen lg:w-screen"
             style="background-image: url('/assets/images/about-bg.png');">
      <div class="flex items-center justify-center w-full px-2 md:px-8 lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center">
        <div class="relative bg-[#497cab]/80 border border-white/40 rounded-2xl shadow-xl p-6 md:p-12 w-full max-w-5xl text-white backdrop-blur-md mt-10 mb-10
                    lg:p-8 lg:mt-0 lg:mb-0 lg:w-[95vw] lg:max-w-5xl">
          <!-- Social Icons Top Right -->
          <div class="absolute top-6 right-8 flex gap-6">
            <a href="https://twitter.com/" target="_blank" rel="noopener">
              <img src="/assets/images/twitter-logo.png" alt="Twitter" class="h-7 w-7" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener">
              <img src="/assets/images/x-logo.png" alt="X" class="h-7 w-7" />
            </a>
            <a href="https://telegram.org/" target="_blank" rel="noopener">
              <img src="/assets/images/telegram-logo.png" alt="Telegram" class="h-7 w-7" />
            </a>
            <a href="https://dexscreener.com/" target="_blank" rel="noopener">
              <img src="/assets/images/dexscreener-logo.png" alt="Dexscreener" class="h-7 w-7" />
            </a>
          </div>
          <!-- Logo and Title -->
          <div class="flex flex-col md:flex-row items-center gap-6 mb-4 mt-16 md:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:mb-4 lg:mt-0">
            <img src="/assets/images/akiro-coin-logo.png" alt="Akiro Coin Logo" class="h-16 w-16 rounded-full object-contain bg-white/20" />
            <span class="text-3xl md:text-4xl font-bold text-[#FFD700]">About Akiro ($AKR)</span>
          </div>
          <!-- Description -->
          <p class="mb-4 text-base md:text-lg">
            Akiro ($AKR) is a real-world asset (RWA) token that aims to redefine global access to tangible asset investments, beginning with the construction sector and expanding into real estate, commodities, and other real-world industries. Powered by blockchain technology, AKR facilitates fractional ownership, capital formation, and decentralized participation in traditionally illiquid asset classes.
          </p>
          <!-- Vision -->
          <div class="mb-2">
            <span class="font-bold text-[#FFD700]">Vision</span>
          </div>
          <p class="mb-4 text-base md:text-lg">
            AKR envisions an open, global investment ecosystem where real-world assets can be accessed, owned, and traded as digital tokens.
          </p>
          <!-- Objective -->
          <div class="mb-2">
            <span class="font-bold text-[#FFD700]">Objective</span>
          </div>
          <ol class="list-decimal list-inside space-y-1 text-base md:text-lg">
            <li>Enable capital formation for real-world projects across multiple sectors.</li>
            <li>Tokenize real-world assets (RWAs) such as land, equipment, buildings, and future income streams.</li>
            <li>Make global investment accessible, borderless, and efficient through blockchain.</li>
            <li>Provide growth potential to investors via capital appreciation and staking.</li>
            <li>Establish a liquid digital marketplace for traditionally illiquid assets.</li>
            <li>Position Akiro as a pioneer in Web3 infrastructure financing and asset tokenization.</li>
          </ol>
        </div>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; width: 100vw; max-width: 100%; overflow-x: hidden; margin: 0; padding: 0; }
     section { margin: 0; padding: 0; width: 100vw; max-width: 100%; background-attachment: fixed; background-size: cover; background-position: center; overflow: hidden; box-sizing: border-box; min-height: 100vh; }
     @media (max-width: 768px) { section { background-attachment: scroll; } }
     :host ::ng-deep * { box-sizing: border-box; }`
  ]
})
export class AboutSectionComponent {}