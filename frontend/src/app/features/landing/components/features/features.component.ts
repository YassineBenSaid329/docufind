import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, FolderOpen, FileText, Shield } from 'lucide-angular';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollAnimationDirective],
  template: `
    <section class="py-24 bg-white relative border-t border-stone-100">
  <div class="container mx-auto px-6">
    
    <div class="text-center mb-20 scroll-animate-fade-up" appScrollAnimation>
      <h2 class="text-3xl md:text-5xl font-bold mb-4 text-docu-text-main font-serif">
        Powerful Features
      </h2>
      <p class="text-docu-text-muted text-lg max-w-2xl mx-auto">
        Everything you need to organize your professional knowledge base.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      
      <!-- Card 1 -->
      <div appScrollAnimation class="scroll-animate-scale delay-100">
        <div class="bg-docu-bg p-6 md:p-8 rounded-2xl border border-stone-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold h-full flex items-start gap-4">
          <div class="p-3 rounded-lg bg-white border border-stone-200 text-docu-accent shrink-0 shadow-sm">
            <lucide-icon [img]="SparklesIcon" class="w-6 h-6"></lucide-icon>
          </div>
          <div>
            <h3 class="text-xl font-bold text-docu-text-main mb-2 font-serif">Smart Search</h3>
            <p class="text-docu-text-muted text-sm leading-relaxed">
              Relevance ranking ensures the most important documents appear first.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div appScrollAnimation class="scroll-animate-scale delay-200">
        <div class="bg-docu-bg p-6 md:p-8 rounded-2xl border border-stone-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold h-full flex items-start gap-4">
          <div class="p-3 rounded-lg bg-white border border-stone-200 text-docu-accent shrink-0 shadow-sm">
            <lucide-icon [img]="FolderIcon" class="w-6 h-6"></lucide-icon>
          </div>
          <div>
            <h3 class="text-xl font-bold text-docu-text-main mb-2 font-serif">Organize Collections</h3>
            <p class="text-docu-text-muted text-sm leading-relaxed">
              Group documents by case file, thesis chapter, or research topic.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div appScrollAnimation class="scroll-animate-scale delay-300">
        <div class="bg-docu-bg p-6 md:p-8 rounded-2xl border border-stone-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold h-full flex items-start gap-4">
          <div class="p-3 rounded-lg bg-white border border-stone-200 text-docu-accent shrink-0 shadow-sm">
            <lucide-icon [img]="FileIcon" class="w-6 h-6"></lucide-icon>
          </div>
          <div>
            <h3 class="text-xl font-bold text-docu-text-main mb-2 font-serif">Multiple Formats</h3>
            <p class="text-docu-text-muted text-sm leading-relaxed">
              Native support for PDF, Markdown, and TXT files.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div appScrollAnimation class="scroll-animate-scale delay-400">
        <div class="bg-docu-bg p-6 md:p-8 rounded-2xl border border-stone-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold h-full flex items-start gap-4">
          <div class="p-3 rounded-lg bg-white border border-stone-200 text-docu-accent shrink-0 shadow-sm">
            <lucide-icon [img]="ShieldIcon" class="w-6 h-6"></lucide-icon>
          </div>
          <div>
            <h3 class="text-xl font-bold text-docu-text-main mb-2 font-serif">Secure & Private</h3>
            <p class="text-docu-text-muted text-sm leading-relaxed">
              Your documents never leave your control. 100% local processing.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
  `
})
export class FeaturesComponent {
  readonly SparklesIcon = Sparkles;
  readonly FolderIcon = FolderOpen;
  readonly FileIcon = FileText;
  readonly ShieldIcon = Shield;
}