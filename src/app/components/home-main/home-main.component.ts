import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
})
export class HomeMainComponent {
  @ViewChild('carousel')
  carousel!: ElementRef<HTMLDivElement>;

  foodImages = [
    '/assets/images/carousel/food1.jpg',
    '/assets/images/carousel/food2.jpg',
    '/assets/images/carousel/food3.jpg',
    '/assets/images/carousel/food4.jpg',
    '/assets/images/carousel/food5.jpg',
    '/assets/images/carousel/food1.jpg',
    '/assets/images/carousel/food2.jpg',
    '/assets/images/carousel/food3.jpg',
    '/assets/images/carousel/food4.jpg',
    '/assets/images/carousel/food5.jpg',
    '/assets/images/carousel/food1.jpg',
    '/assets/images/carousel/food2.jpg',
    '/assets/images/carousel/food3.jpg',
    '/assets/images/carousel/food4.jpg',
    '/assets/images/carousel/food5.jpg',
  ];

  private scrollAmount = 180;

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({
      left: -this.scrollAmount,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({
      left: this.scrollAmount,
      behavior: 'smooth',
    });
  }
}
