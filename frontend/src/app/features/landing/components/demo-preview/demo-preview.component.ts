import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Search, FileText, BarChart, MoreVertical } from 'lucide-angular';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-demo-preview',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollAnimationDirective],
  template: `
<section class="py-24 relative bg-docu-bg">
  <div class="container mx-auto px-6">
    
    <div class="text-center mb-16 scroll-animate-fade-up" appScrollAnimation>
      <h2 class="text-3xl md:text-5xl font-bold mb-4 text-docu-text-main font-serif">
        See DocuFind in Action
      </h2>
      <p class="text-docu-text-muted text-lg">A clean, distraction-free interface for your research</p>
    </div>

    <div class="max-w-5xl mx-auto scroll-animate-fade-up delay-200" appScrollAnimation>
      <div class="bg-white rounded-xl border border-stone-200 shadow-2xl overflow-hidden">
        
        <!-- Controls -->
        <div class="h-12 border-b border-stone-100 bg-stone-50 flex items-center px-4 gap-2">
          <div class="w-3 h-3 rounded-full bg-stone-300"></div>
          <div class="w-3 h-3 rounded-full bg-stone-300"></div>
          <div class="w-3 h-3 rounded-full bg-stone-300"></div>
          <div class="ml-4 px-3 py-1 rounded bg-white border border-stone-200 text-[10px] text-stone-400 font-mono flex-1 text-center shadow-sm">docufind.app/dashboard</div>
        </div>

        <!-- UI -->
        <div class="p-8 flex flex-col gap-8 min-h-[500px] bg-white">
          <div class="flex flex-col gap-2">
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <lucide-icon [img]="SearchIcon" class="w-5 h-5 text-docu-accent"></lucide-icon>
              </div>
              <input type="text" value="Legal precedents for contract breach" readonly 
                class="w-full bg-stone-50 border border-stone-200 rounded-lg py-4 pl-12 pr-4 text-stone-700 font-medium" />
            </div>
          </div>

          <!-- Results -->
          <div class="space-y-4">
            <div class="p-4 rounded-lg bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all">
              <div class="flex justify-between items-start mb-2">
                <div class="flex items-center gap-3">
                  <div class="p-2 rounded bg-amber-50 text-docu-accent">
                    <lucide-icon [img]="FileIcon" class="w-5 h-5"></lucide-icon>
                  </div>
                  <div>
                    <h4 class="text-docu-text-main font-bold">Contract_Law_Summary_2024.pdf</h4>
                    <span class="text-xs text-stone-400">Page 42 • Case Studies</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <div class="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded font-bold">98% Match</div>
                </div>
              </div>
            </div>
            
             <div class="p-4 rounded-lg bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all opacity-80">
              <div class="flex justify-between items-start mb-2">
                <div class="flex items-center gap-3">
                  <div class="p-2 rounded bg-amber-50 text-docu-accent">
                    <lucide-icon [img]="FileIcon" class="w-5 h-5"></lucide-icon>
                  </div>
                  <div>
                    <h4 class="text-docu-text-main font-bold">Smith_v_Jones_Transcript.txt</h4>
                    <span class="text-xs text-stone-400">Line 142 • Transcripts</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <div class="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded font-bold">85% Match</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
  `
})
export class DemoPreviewComponent {
  readonly SearchIcon = Search;
  readonly FileIcon = FileText;
}