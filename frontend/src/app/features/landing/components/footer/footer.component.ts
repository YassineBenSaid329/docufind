import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Twitter, Linkedin, Mail } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
<footer class="relative bg-[#2D1810] pt-16 pb-8 border-t border-[#451a03]">
  
  <div class="container mx-auto px-6 relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
      
      <div class="md:col-span-4">
        <div class="text-2xl font-bold tracking-tight text-white mb-4 font-serif">
          Docu<span class="text-amber-500">Find</span>
        </div>
        <p class="text-stone-400 leading-relaxed mb-6 max-w-sm text-sm">
          The intelligent search engine for your personal document library. 
        </p>
      </div>

      <div class="hidden md:block md:col-span-2"></div>

      <div class="md:col-span-2">
        <h4 class="text-white font-bold mb-6 font-serif">Product</h4>
        <ul class="space-y-4">
          <li><a href="#" class="text-stone-400 hover:text-amber-400 transition-colors text-sm">Features</a></li>
          <li><a href="#" class="text-stone-400 hover:text-amber-400 transition-colors text-sm">Pricing</a></li>
        </ul>
      </div>

      <div class="md:col-span-2">
        <h4 class="text-white font-bold mb-6 font-serif">Legal</h4>
        <ul class="space-y-4">
          <li><a href="#" class="text-stone-400 hover:text-amber-400 transition-colors text-sm">Privacy</a></li>
          <li><a href="#" class="text-stone-400 hover:text-amber-400 transition-colors text-sm">Terms</a></li>
        </ul>
      </div>

    </div>

    <div class="pt-8 border-t border-[#451a03] flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-stone-500 text-sm">
        &copy; 2025 DocuFind. All rights reserved.
      </p>
      <div class="flex items-center gap-2 text-sm text-amber-600 font-medium">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        System Operational
      </div>
    </div>
  </div>
</footer>
  `
})
export class FooterComponent {
  readonly GithubIcon = Github;
  readonly TwitterIcon = Twitter;
  readonly LinkedinIcon = Linkedin;
}