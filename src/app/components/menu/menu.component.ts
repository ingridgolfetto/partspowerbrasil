import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [MaterialModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  itensMenu = [ 
    {
    nome: 'Home',
    rota: '/',
    selecionado: true
  }, 
  {
    nome: 'Produtos',
    rota: '/produtos',
    selecionado: false
  },
  {
    nome: 'Sobre',
    rota: '/sobre',
    selecionado: false
  }, 
  {
    nome: 'Contato',
    rota: '/contato',
    selecionado: false
  }  
];
  mobile = window.innerWidth < 768;
  sidenavOpened = false;
  activeRoute: string = '';
  @Output() itemMenuSelecionado = new EventEmitter<string>();

  constructor(private renderer: Renderer2) {  
    window.addEventListener('resize', () => {
    this.mobile = window.innerWidth < 768;
  });
  console.log(this.mobile);
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  navegacaoRotaMenu(rota: string) {
   this.itensMenu.forEach(item => {
      item.selecionado = item.rota === rota;
    });
    this.itemMenuSelecionado.emit(rota); 
  }
}
