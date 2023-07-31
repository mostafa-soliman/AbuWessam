import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AbuWessam';
  images: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.images = this.generateGalleryLinks(57).concat(
      this.generateGalleryHLinks(40)
    );
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
}
