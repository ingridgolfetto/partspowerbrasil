import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ISlide } from '../../interface/slide';
import { CommonModule } from '@angular/common';
import { SLIDES } from '../../enums/slides.enum';

@Component({
  selector: 'app-home',
  imports: [MenuComponent, CarouselModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  slides: ISlide[] = SLIDES;

  constructor() { }
  
  ngOnInit() {
  }

  onItemMenuSelecionado(rota: string) {
    console.log('Rota selecionada no menu:', rota);
    const element = document.querySelector(rota);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
