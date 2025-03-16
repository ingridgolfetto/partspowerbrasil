import { Component, HostListener, OnInit, output } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ISlide } from '../../interface/slide';
import { CommonModule } from '@angular/common';
import { SLIDES } from '../../enums/slides.enum';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MenuComponent, MatCardModule, MatButtonModule, CarouselModule, CommonModule, ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mudaEstado: boolean = false;
  formContato: FormGroup | undefined;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const menu = document.getElementById('menu');
    if (window.pageYOffset > 50) { // Adjust the scroll position as needed
      menu?.classList.add('scrolled');
      this.mudaEstado = true;
    } else {
      menu?.classList.remove('scrolled');
      this.mudaEstado = false;
    }
  }

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
    this.formContato = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mensagem: new FormControl('', Validators.required),

    });
  }

  onItemMenuSelecionado(rota: string) {
    console.log('Rota selecionada no menu:', rota);
    const element = document.querySelector(`#${rota}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  }

  enviarContato() {
    console.log(this.formContato?.value);
  }
}
