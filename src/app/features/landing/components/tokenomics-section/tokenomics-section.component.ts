import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tokenomics-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="tokenomics" class="relative min-h-screen flex items-center bg-[#6d88a3] w-screen">
      <div class="container mx-auto px-2 py-4 flex flex-col md:flex-row items-center justify-center max-w-[1800px]">
        <!-- Left: Info Box -->
        <div class="rounded-xl p-8 md:p-10 flex-1 max-w-lg flex flex-col justify-between ">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <span class="text-xl md:text-2xl font-bold text-white">Akiro ($AKR Tokenomics)</span>
              <img src="/assets/images/tokenomics-art.png" alt="Tokenomics Art" class="h-20 w-20 object-contain" />
            </div>
            <p class="text-white text-sm md:text-base mb-4 mt-1">
              The total supply of 1,000,000,000 (1 Billion) AKR tokens is distributed to ensure balanced growth and community engagement. 300M is allocated for the public sale, and another 300M for managed funds to support liquidity and institutional backing. 100M goes to development, 50M to marketing, and 50M to advisors and legal for compliance and guidance. The team and founders receive 100M, while 100M is reserved for governance, staking, and rewards, encouraging community participation and ecosystem sustainability.
            </p>
          </div>
          <div class="flex gap-3 mt-4">
            <a href="https://twitter.com/akirocoin" target="_blank" rel="noopener">
              <img src="/assets/images/twitter-logo.png" alt="Twitter" class="h-6 w-6" />
            </a>
            <a href="https://x.com/akirocoin" target="_blank" rel="noopener">
              <img src="/assets/images/x-logo.png" alt="X" class="h-6 w-6" />
            </a>
            <a href="https://telegram.org/akirocoin" target="_blank" rel="noopener">
              <img src="/assets/images/telegram-logo.png" alt="Telegram" class="h-6 w-6" />
            </a>
            <a href="https://dexscreener.com/akirocoin" target="_blank" rel="noopener">
              <img src="/assets/images/dexscreener-logo.png" alt="Dexscreener" class="h-6 w-6" />
            </a>
          </div>
        </div>
        <!-- Right: Pie Chart -->
        <div class="flex-1 flex items-center justify-center relative max-w-5xl w-full min-h-[1100px]">
          <img src="/assets/images/tokenomics-pie-chart.svg" alt="Tokenomics Pie Chart" class="w-[1100px] h-[1100px] max-w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_60px_10px_rgba(255,215,0,0.25)] rounded-full" />
        </div>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; width: 100vw; max-width: 100%; overflow-x: hidden; }
     section { margin: 0; padding: 0; width: 100vw; max-width: 100%; min-height: 100vh; background-attachment: fixed; background-size: cover; background-position: center; overflow-x: hidden; }
     .container { max-width: 1200px; }
     @media (max-width: 768px) {
       section { background-attachment: scroll; }
       .container { flex-direction: column; gap: 2rem; }
     }
    `
  ]
})
export class TokenomicsSectionComponent {}