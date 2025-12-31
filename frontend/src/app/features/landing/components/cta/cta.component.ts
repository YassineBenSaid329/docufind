import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollAnimationDirective],
  template: `
<section class="py-32 relative overflow-hidden bg-gradient-to-br from-amber-100 to-orange-50 border-t border-amber-200">
  
  <div class="container mx-auto px-6 text-center relative z-10">
    <div class="max-w-3xl mx-auto scroll-animate-scale" appScrollAnimation>
      
      <h2 class="text-4xl md:text-6xl font-bold mb-6 text-docu-text-main tracking-tight font-serif">
        Ready to Organize Your <br />
        <span class="text-docu-accent">Knowledge Base?</span>
      </h2>
      
      <p class="text-xl text-stone-600 mb-10 font-medium">
        Join researchers saving hours every week.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <input 
          type="email" 
          placeholder="Enter your email" 
          class="flex-1 bg-white border border-amber-200 rounded-lg px-4 py-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-docu-accent focus:ring-2 focus:ring-amber-200 transition-all shadow-sm"
        />
        <button class="bg-docu-accent hover:bg-docu-accent-hover text-white font-bold px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
          Get Started Free
          <lucide-icon [img]="ArrowRightIcon" class="w-4 h-4"></lucide-icon>
        </button>
      </div>
    </div>
  </div>
</section>
  `
})
export class CtaComponent {
  readonly ArrowRightIcon = ArrowRight;
}