import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AbuWessam';
  images: string[] = [];
  displayedImages: string[] = [];
  imagesPerLoad = 8;

  constructor() {}

  ngOnInit(): void {
    this.images = this.generateGalleryLinks(57).concat(
      this.generateGalleryHLinks(40)
    );
    this.loadMoreImages();
  }

  generateGalleryLinks(count: number): string[] {
    return Array.from(Array(count).keys()).map(
      (i) => `../assets/img/gallery(${i + 1}).jpeg`
    );
  }

  generateGalleryHLinks(count: number): string[] {
    return Array.from(Array(count).keys()).map(
      (i) => `../assets/img/galleryH(${i + 1}).jpeg`
    );
  }
  loadMoreImages() {
    const startIndex = this.displayedImages.length;
    const endIndex = startIndex + this.imagesPerLoad;
    this.displayedImages = this.images.slice(0, endIndex);
    if (endIndex >= this.images.length) {
      const moreButton = document.getElementById('moreButton');
      if (moreButton) {
        moreButton.style.display = 'none';
      }
    }
  }
}
