import { Component, HostListener, OnInit, output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ISlide } from '../../interface/slide';
import { SLIDES } from '../../enums/slides.enum';
import { FormControl, FormGroup,Validators } from '@angular/forms';
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
  constructor(
    private partsService: PartsService,
    private router: Router

  ) { }
  
  ngOnInit() {

    this.partsService.itemMenuSelecionado.subscribe((rota: string) => {
      this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            this.setScroll(rota)
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

  buscarProdutos(codigo?: string) {
    this.router.navigate(['produtos'], { queryParams: { codigo } });
  }

  setScroll(rota: string) {
    if (rota != 'home') {
    const element = document.querySelector(`#${rota}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    }
  }

  rotaComprar(id: string) {
    const mensagem = `Olá, estou interessado no produto ${id}. Poderia me fornecer um orçamento? quantidade de peças:`;
    const numeroWhatsApp = '5511991763691'; // Substitua pelo número do WhatsApp (incluindo o código do país)
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank'); // Abre o WhatsApp em uma nova aba
}
}
