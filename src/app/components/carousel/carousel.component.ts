import { Component, Input } from '@angular/core';
import { Slide } from 'src/app/types/post.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: []
})
export class CarouselComponent {
  @Input()
  slides: Slide[] = [];

  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }

  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 5000);
  }

  getCurrentSlideUrl(): string {
    return this.slides[this.currentIndex].url;
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }
}
