import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { Categorias } from '../../enums/categorias';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rodape',
  imports: [MaterialModule],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.scss'
})
export class RodapeComponent {

  categoriasProdutos = Object.values(Categorias);

  constructor(private route: Router) {}


  navegarProdutos(item: string) {
    this.route.navigate(['produtos', {categoria: item}]);
  }

  navegarWhatsApp() {
    const mensagem = `Olá, estou entrando em contato pelo site da Parts Power Flex.`;
    const numeroWhatsApp = '5511991763691'; // Substitua pelo número do WhatsApp (incluindo o código do país)
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank'); // Abre o WhatsApp em uma nova aba
  }
}
