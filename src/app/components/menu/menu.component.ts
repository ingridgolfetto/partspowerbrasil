import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { IMenuItems } from '../../interface/menu';
import { MENU } from '../../enums/menu-itens';
import { Router } from '@angular/router';
import { PartsService } from '../../service/parts.service';

@Component({
  selector: 'app-menu',
  imports: [MaterialModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  itensMenu: IMenuItems[] = MENU;
  mobile = window.innerWidth < 768;
  sidenavOpened = false;
  activeRoute: string = '';

  constructor(
    private route: Router,
    private service: PartsService
  ) {  
    window.addEventListener('resize', () => {
    this.mobile = window.innerWidth < 768;
  });
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  navegacaoRotaMenu(rota: string) {
    this.itensMenu.forEach(item => {
      item.selecionado = item.rota === rota;
      if(rota != 'produtos') {
        this.route.navigate(['home']);
        this.service.itemMenuSelecionado.emit(rota); 
      } else {
      this.route.navigate(['produtos']);
    }
  })
}
}
