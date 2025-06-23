import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-utility-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="utility" class="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat w-screen"
             style="background-image: url('/assets/images/utility-bg.png');">
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <!-- Logo and Title Centered -->
        <div class="flex flex-col items-center mb-8">
          <div class="flex items-center gap-6">
            <img src="/assets/images/akiro-coin-logo.png" alt="Akiro Coin Logo" class="h-20 w-20 rounded-full object-contain bg-white/20" />
            <span class="text-4xl md:text-5xl font-bold text-black">Akiro ($AKR) Utility</span>
          </div>
        </div>
        <!-- Utility Cards Row -->
        <div class="flex flex-col md:flex-row gap-6 justify-center mb-8 items-stretch flex-wrap">
          <!-- Card 1: Investments -->
          <div class="flex-1 max-w-sm bg-[#497cab]/80 rounded-xl p-10 flex flex-col items-start h-full min-h-[320px]">
            <div class="flex items-center justify-between w-full gap-3 mb-3">
              <div class="font-bold text-2xl text-white">Investments</div>
              <img src="/assets/images/Investments-art.png" alt="Investments Icon" class="h-16 w-16" />
            </div>
            <div class="text-lg text-white">
              AKR token enables direct investment in real-world construction, real estate, and mining projects through secure, blockchain-based tokenization.
            </div>
          </div>
          <!-- Card 2: Ownerships -->
          <div class="flex-1 max-w-sm bg-[#497cab]/80 rounded-xl p-10 flex flex-col items-start h-full min-h-[320px]">
            <div class="flex items-center justify-between w-full gap-3 mb-3">
              <div class="font-bold text-2xl text-white">Ownerships</div>
              <img src="/assets/images/Ownerships-art.png" alt="Ownerships Icon" class="h-16 w-16" />
            </div>
            <div class="text-lg text-white">AKR token represents fractional ownership in tokenized assets such as real estate, infrastructure, and mining projects.</div>
          </div>
          <!-- Card 3: Rewards -->
          <div class="flex-1 max-w-sm bg-[#497cab]/80 rounded-xl p-10 flex flex-col items-start h-full min-h-[320px]">
            <div class="flex items-center justify-between w-full gap-3 mb-3">
              <div class="font-bold text-2xl text-white">Rewards</div>
              <img src="/assets/images/Rewards-arts.png" alt="Rewards Icon" class="h-16 w-16" />
            </div>
            <div class="text-lg text-white">AKR token can be earned as rewards through staking or participation in platform activities, offering yield based on project performance.</div>
          </div>
          <!-- Card 4: Governance -->
          <div class="flex-1 max-w-sm bg-[#497cab]/80 rounded-xl p-10 flex flex-col items-start h-full min-h-[320px]">
            <div class="flex items-center justify-between w-full gap-3 mb-3">
              <div class="font-bold text-2xl text-white">Governance</div>
              <img src="/assets/images/Governance-arts.png" alt="Governance Icon" class="h-16 w-16" />
            </div>
            <div class="text-lg text-white">AKR token grants holders voting rights on project decisions, fund allocations, and governance proposals within the Akiro ecosystem.</div>
          </div>
        </div>
        <!-- Social Icons Centered Bottom -->
        <div class="flex justify-center gap-8 mt-4">
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
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; width: 100vw; max-width: 100%; overflow-x: hidden; }
     section { margin: 0; padding: 0; width: 100vw; max-width: 100%; background-attachment: fixed; background-size: cover; background-position: center; overflow-x: hidden; min-height: 100vh; @media (max-width: 768px) { background-attachment: scroll; } }`
  ]
})
export class UtilitySectionComponent {} 