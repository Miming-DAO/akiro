import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="timeline" class="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat w-screen"
             style="background-image: url('assets/images/timeline-bg.png');">
      <!-- Right-side overlay -->
      <div class="absolute right-0 top-0 h-full w-full md:w-1/2 bg-[#7a521f] bg-opacity-90 z-10 flex items-center justify-center">
        <div class="items-center justify-center p-8 md:p-10 max-w-lg w-full">
          <div class="flex items-center justify-between mb-4">
            <span class="text-2xl md:text-3xl font-bold text-white">Timeline</span>
            <div class="flex gap-3">
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
          <div class="text-white text-base md:text-lg space-y-4">
            <div>
              <span class="font-bold">Token Creation (May – June 2025):</span><br />
              AKR token will be launched, accompanied by strategic investor awareness campaigns to build early interest and community momentum.
            </div>
            <div>
              <span class="font-bold">Phase 1 (Q3 2025):</span><br />
              Targeting a $50K market cap, AKR will onboard 2–3 tokenized construction projects to showcase real-world asset utility and build initial traction.
            </div>
            <div>
              <span class="font-bold">Phase 2 (Q4 2025):</span><br />
              With a $100K market cap goal, the project will expand into tokenized real estate and mining, diversifying asset offerings for AKR holders.
            </div>
            <div>
              <span class="font-bold">Phase 3 (2026):</span><br />
              The full Real-World Asset (RWA) dashboard will launch, featuring integrated staking and initial partnerships with international projects.
            </div>
            <div>
              <span class="font-bold">Phase 4 (2027 and beyond):</span><br />
              AKR aims to evolve into a global platform enabling decentralized investment in tokenized real-world assets across multiple industries and regions.
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; width: 100vw; max-width: 100%; overflow-x: hidden; }
     section { margin: 0; padding: 0; width: 100vw; max-width: 100%; background-attachment: fixed; background-size: cover; background-position: center; overflow-x: hidden; min-height: 100vh; @media (max-width: 768px) { background-attachment: scroll; } }`
  ]
})
export class TimelineSectionComponent {}