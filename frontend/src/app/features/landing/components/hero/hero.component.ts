import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Added for ngClass/ngFor
import { LucideAngularModule, Search, ArrowRight, FileText, Database, Shield, FileCode, Server } from 'lucide-angular';
import { ViewportScroller } from '@angular/common'; 

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit, OnDestroy {
  // Icons
  readonly SearchIcon = Search;
  readonly ArrowRightIcon = ArrowRight;
  readonly FileIcon = FileText;
  readonly DbIcon = Database;
  readonly ShieldIcon = Shield;
  // Extra icons for floating elements
  readonly CodeIcon = FileCode; 
  readonly ServerIcon = Server;

  // Typing Animation State
  displayText = '';
  private queries = [
    "Find lecture notes on neural networks...",
    "Search for machine learning papers...",
    "Locate thesis research documents..."
  ];
  private currentQueryIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingSpeed = 80;
  private deletingSpeed = 40;
  private pauseDelay = 2000;
  private timeoutId: any;

  constructor(private scroller: ViewportScroller) {}

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private type() {
    const currentQuery = this.queries[this.currentQueryIndex];

    if (this.isDeleting) {
      // Deleting logic
      this.displayText = currentQuery.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      // Typing logic
      this.displayText = currentQuery.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    // Logic to switch states
    if (!this.isDeleting && this.charIndex === currentQuery.length) {
      // Finished typing full phrase
      typeSpeed = this.pauseDelay;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      // Finished deleting
      this.isDeleting = false;
      this.currentQueryIndex = (this.currentQueryIndex + 1) % this.queries.length;
      typeSpeed = 500; // Small pause before typing next
    }

    this.timeoutId = setTimeout(() => this.type(), typeSpeed);
  }

  scrollToHowItWorks() {
    // This looks for an element with id="how-it-works"
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });}
    
}