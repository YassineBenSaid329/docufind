import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Upload, Brain, Search } from 'lucide-angular';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollAnimationDirective],
  template: `
<section class="py-24 relative bg-docu-bg">
  <div class="container mx-auto px-6 relative z-10">
    
    <div class="text-center mb-24 scroll-animate-fade-up" appScrollAnimation>
      <h2 class="text-3xl md:text-5xl font-bold mb-4 text-docu-text-main font-serif">
        How It Works
      </h2>
      <p class="text-docu-text-muted text-lg">Three steps to a smarter library</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <!-- Step 1 -->
      <div appScrollAnimation class="scroll-animate-fade-up delay-100 relative group">
        <div class="bg-white p-8 rounded-2xl h-full border border-stone-200 shadow-card hover:shadow-gold hover:border-amber-300 transition-all duration-300">
          <div class="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-docu-accent text-white flex items-center justify-center font-bold shadow-lg z-20">1</div>
          <div class="mb-6 inline-flex p-4 rounded-xl bg-amber-50 text-docu-accent border border-amber-100">
            <lucide-icon [img]="UploadIcon" class="w-8 h-8"></lucide-icon>
          </div>
          <h3 class="text-xl font-bold text-docu-text-main mb-3 font-serif">Upload Documents</h3>
          <p class="text-docu-text-muted leading-relaxed">
            Drop your PDFs, research papers, or markdown notes directly into the app.
          </p>
        </div>
      </div>

      <!-- Step 2 -->
      <div appScrollAnimation class="scroll-animate-fade-up delay-200 relative group">
        <div class="bg-white p-8 rounded-2xl h-full border border-stone-200 shadow-card hover:shadow-gold hover:border-amber-300 transition-all duration-300">
          <div class="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-docu-accent text-white flex items-center justify-center font-bold shadow-lg z-20">2</div>
          <div class="mb-6 inline-flex p-4 rounded-xl bg-amber-50 text-docu-accent border border-amber-100">
            <lucide-icon [img]="BrainIcon" class="w-8 h-8"></lucide-icon>
          </div>
          <h3 class="text-xl font-bold text-docu-text-main mb-3 font-serif">Build Your Index</h3>
          <p class="text-docu-text-muted leading-relaxed">
            Our engine analyzes text using TF-IDF vectorization to create a searchable index.
          </p>
        </div>
      </div>

      <!-- Step 3 -->
      <div appScrollAnimation class="scroll-animate-fade-up delay-300 relative group">
        <div class="bg-white p-8 rounded-2xl h-full border border-stone-200 shadow-card hover:shadow-gold hover:border-amber-300 transition-all duration-300">
          <div class="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-docu-accent text-white flex items-center justify-center font-bold shadow-lg z-20">3</div>
          <div class="mb-6 inline-flex p-4 rounded-xl bg-amber-50 text-docu-accent border border-amber-100">
            <lucide-icon [img]="SearchIcon" class="w-8 h-8"></lucide-icon>
          </div>
          <h3 class="text-xl font-bold text-docu-text-main mb-3 font-serif">Search Instantly</h3>
          <p class="text-docu-text-muted leading-relaxed">
            Retrieve citations, snippets, and answers in milliseconds using keyword relevance.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
  `
})
export class HowItWorksComponent {
  readonly UploadIcon = Upload;
  readonly BrainIcon = Brain;
  readonly SearchIcon = Search;
}