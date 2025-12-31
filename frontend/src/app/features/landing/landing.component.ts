import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { FeaturesComponent } from './components/features/features.component';
import { DemoPreviewComponent } from './components/demo-preview/demo-preview.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, HowItWorksComponent, FeaturesComponent, DemoPreviewComponent, CtaComponent, FooterComponent],
  template: `
    <main class="min-h-screen flex flex-col bg-docu-bg text-docu-text-main font-sans">
      
      <!-- Navbar: Deep Espresso Brown -->
      <nav class="fixed top-0 w-full z-50 bg-[#2D1810] text-white px-6 py-4 flex justify-between items-center shadow-lg transition-all duration-300">
        <div class="text-xl font-bold tracking-tight cursor-pointer font-serif">
          Docu<span class="text-amber-500">Find</span>
        </div>
        <div>
          <!-- Gold Button -->
          <button class="text-sm font-bold bg-amber-600 hover:bg-amber-500 text-white px-5 py-2 rounded shadow-md transition-colors">
            Login
          </button>
        </div>
      </nav>

      <app-hero></app-hero>
      
      <div id="how-it-works">
        <app-how-it-works></app-how-it-works>
      </div>

      <app-features></app-features>
      
      <app-demo-preview></app-demo-preview>
      
      <app-cta></app-cta>

      <app-footer></app-footer>
    </main>
  `
})
export class LandingComponent {}