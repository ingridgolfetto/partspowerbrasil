import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { Produtos } from '../../../interface/produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  imports: [MaterialModule]
})
export class ProdutoComponent implements OnInit {
  @Input() produto: Produtos | null = null;
  @Output() voltarListaProdutos = new EventEmitter<boolean>();

  quantidade: number = 1;

  breadcrumbs: { label: string ; link: string }[] = [
    { label: 'Home', link: 'home' },
    { label: 'Produtos', link: '/produtos' },
    { label: '', link: '' }, // O terceiro item será atualizado dinamicamente
    { label: '', link: '' }
  ]

  constructor(    
    private route: Router,
  ) {
  }

  ngOnInit(): void {
    if (this.produto) {
      this.breadcrumbs[2].label = this.produto.category;
      this.breadcrumbs[3].label = this.produto.subcategories ? this.produto.subcategories.join(', ') : '';
    }
  }

  alterarQuantidade(valor: number) {
    const novaQuantidade = this.quantidade + valor;
    if (novaQuantidade >= 1) {
      this.quantidade = novaQuantidade;
    }
  }

  validarQuantidade() {
    if (this.quantidade < 1 || isNaN(this.quantidade)) {
      this.quantidade = 1; // Garante que a quantidade mínima seja 1
    }
  }

  rotaComprar(id: string) {
    const mensagem = `Olá, estou interessado no produto ${id}. Poderia me fornecer um orçamento? quantidade de peças: ${this.quantidade}`;
    const numeroWhatsApp = '5511992217075'; // Substitua pelo número do WhatsApp (incluindo o código do país)
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank'); // Abre o WhatsApp em uma nova aba
}

navegacaoRotaMenu(categoria: string) {
  if(categoria == 'Produtos') {
    this.voltar();
  } else if (categoria == 'Home') {
  this.route.navigate(['home']);
  } else {
    this.route.navigate(['produtos'], { queryParams: { categoria } });
  this.voltarListaProdutos.emit(false);
  this.produto = null; // Limpa o produto selecionado
  }
}

voltar() {
  this.voltarListaProdutos.emit(false); 
}
}