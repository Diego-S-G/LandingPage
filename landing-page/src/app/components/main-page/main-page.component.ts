import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  images: string[] = [
    'assets/summer-collection/photo1.webp',
    'assets/summer-collection/photo2.webp',
    'assets/summer-collection/photo3.webp',
    'assets/summer-collection/photo4.jpg'
  ];

  currentImage: string = this.images[0];
  selectedIndex: number = 0; // Inicialmente, a primeira imagem está selecionada

  changeImage(index: number) {
    this.currentImage = this.images[index];
    this.selectedIndex = index; // Atualiza o índice da imagem selecionada
  }

  prevImage() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.currentImage = this.images[this.selectedIndex];
    }
  }

  nextImage() {
    if (this.selectedIndex < this.images.length - 1) {
      this.selectedIndex++;
      this.currentImage = this.images[this.selectedIndex];
    }
  }
}
