import { Component, HostListener, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { IMenuItems } from '../../interface/menu';
import { MENU } from '../../enums/menu-itens';
import { Router } from '@angular/router';
import { PartsService } from '../../service/parts.service';
import { Categorias } from '../../enums/categorias';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  imports: [MaterialModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  itensMenu: IMenuItems[] = MENU;
  categorias = Object.values(Categorias)
  mobile: boolean = window.innerWidth < 768;
  sidenavOpened = false;
  activeRoute: string = '';
  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(
    private route: Router,
    private service: PartsService
  ) {  
    window.addEventListener('resize', () => {
    this.mobile = window.innerWidth < 768;
  });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.mobile = window.innerWidth < 768;
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
    if (this.drawer) {
      this.drawer.toggle(); // Alterna o estado do drawer (abre/fecha)
    }
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
  this.closeMenu()

}

navegacaoCategoria(categoria: string) {
  // Lógica para navegar ou filtrar produtos pela categoria
  this.route.navigate(['produtos'], { queryParams: { categoria } });
  this.closeMenu()
}

closeMenu() {
  const checkbox = document.getElementById('openSidebarMenu') as HTMLInputElement;
  if (checkbox) {
    checkbox.checked = false; // Desmarca o checkbox para fechar o menu
  }
}
}
