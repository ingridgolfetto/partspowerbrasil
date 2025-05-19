import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PRODUTOS } from '../../enums/produtos';
import { Produtos } from '../../interface/produtos';
import { Categorias } from '../../enums/categorias';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { ActivatedRoute } from '@angular/router';
import { ProdutoComponent } from "./produto/produto.component";

@Component({
  selector: 'app-lista-produtos',
  imports: [CommonModule, MaterialModule, ProdutoComponent],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.scss'
})
export class ListaProdutosComponent implements OnInit {
  products: Produtos[] = PRODUTOS;
  @ViewChild('searchInput') searchInput!: ElementRef;
  filteredProducts: Produtos[] = this.products;
  categories = Object.values(Categorias);
  categoriaSelecionada: string = '';
  subcategoriaSelecionada: string = '';
  mobile: boolean = window.innerWidth < 768;
  filterPanelOpen: boolean = false;
  mostraProduto: boolean = false;
  detalhesProduto: Produtos | null = null;


  constructor(private route: ActivatedRoute) {
    window.addEventListener('resize', () => {
      this.mobile = window.innerWidth < 896;
    });
    console.log(this.mobile)
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const categoria = params['categoria'];
      const codigo = params['codigo'];
      if (categoria) {
        // Seleciona a categoria na lista
        this.filterByCategory(categoria);
      } else if (codigo) {
        // Filtra diretamente pelo código no input
        this.filterBySearch(codigo);
        this.setInputValue(codigo);
      }
    });
    
  }
  applyFilter(): void {
    this.filterPanelOpen = false; 
    this.mostraProduto = false;
  }

  toggleFilterPanel(): void {
    this.filterPanelOpen = !this.filterPanelOpen; // Alterna o estado do painel de filtros
  }

  filterByCategory(category: string) {
    this.categoriaSelecionada = category;
    this.filteredProducts = this.products.filter(product => product.category === category);
    this.resetInput();
  }

  filterBySubcategory(subcategory: string, category: string) {
    this.subcategoriaSelecionada = subcategory;
    this.categoriaSelecionada = category;
    this.filteredProducts = this.products.filter(product =>
      product.category === category && // Verifica se o produto pertence à categoria
      product.subcategories?.includes(subcategory) // Verifica se o produto pertence à subcategoria
    );
    this.resetInput();
  }

  resetFilter() {
    this.categoriaSelecionada = 'todos';
    this.subcategoriaSelecionada = '';
    this.filteredProducts = this.products;
    this.filterPanelOpen = false;
    this.setInputValue('');
    this.mostraProduto = false;
  }

  filterBySearch(valor: string) {
    const lowerCaseSearch = valor.toLowerCase();
    this.filteredProducts = this.products.filter(product => 
      product.name.toLowerCase().includes(lowerCaseSearch)
    )
  }

  resetInput() {
      const inputElement = document.querySelector('input[type="text"]') as HTMLInputElement;
      if (inputElement) {
        inputElement.value = '';
      }
  }

  setInputValue(value: string) {
    if (this.searchInput) {
      this.searchInput.nativeElement.value = value; // Define o valor no input
    }
  }

  rotaProduto(produto: Produtos) {
    this.mostraProduto = true;
    this.detalhesProduto = produto;
  }

  rotaLista(event: boolean) {
    console.log(event)
    this.mostraProduto = event;
    this.detalhesProduto = null;
  }


  isLinkAtivado(link: string, category?: string): boolean {
    // Verifica se o link é a categoria ou subcategoria ativa
    if (category) {
      // Verifica se a subcategoria pertence à categoria selecionada
      return (
        link === this.subcategoriaSelecionada &&
        category === this.categoriaSelecionada
      );
    }
    return link === this.categoriaSelecionada;
  }
}
