import { Component, HostListener, OnInit, output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ISlide } from '../../interface/slide';
import { SLIDES } from '../../enums/slides.enum';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { IMenuItems } from '../../interface/menu';
import { MENU } from '../../enums/menu-itens';
import { MaterialModule } from '../../material.module';
import { PartsService } from '../../service/parts.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mudaEstado: boolean = false;
  formContato: FormGroup | undefined;
  

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    autoplay: true, // Ativa o autoplay
    autoplayTimeout: 3000, // Tempo entre as transições (em milissegundos)
    autoplayHoverPause: true,
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
  menu: IMenuItems[] = MENU;
  categoriasProdutos: string[] = ['Linha amarela', 'Linha verde', 'Acoplamentos']

  constructor(
    private partsService: PartsService,
    private router: Router

  ) { }
  
  ngOnInit() {

    this.partsService.itemMenuSelecionado.subscribe((rota: string) => {
      console.log('Rota selecionada no menu:', rota);
      this.router.events.subscribe((event) => {
        console.log(event)
          if (event instanceof NavigationEnd) {
            this.setScroll(rota)
            console.log(event)

        } 
      });
      this.setScroll(rota)

    });

    this.formContato = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mensagem: new FormControl('', Validators.required),

    });
  }
  enviarContato() {
    console.log(this.formContato?.value);
  }

  setScroll(rota: string) {
    const element = document.querySelector(`#${rota}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
