import { Component, OnInit } from '@angular/core';
import { PRODUTOS } from '../../enums/produtos';
import { Produtos } from '../../interface/produtos';
import { Categorias } from '../../enums/categorias';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-lista-produtos',
  imports: [CommonModule, MaterialModule],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.scss'
})
export class ListaProdutosComponent implements OnInit {
  products: Produtos[] = PRODUTOS;

  filteredProducts: Produtos[] = this.products;
  categories = Object.values(Categorias);
  valorBusca: string = '';

  constructor() {}

  ngOnInit(): void {
    
  }

  filterByCategory(category: Categorias) {
    this.filteredProducts = this.products.filter(product => product.category === category);
    this.resetInput();
  }

  resetFilter() {
    this.filteredProducts = this.products;
    this.valorBusca = ''
    
  }

  filterBySearch(event: any) {
    console.log(event)
    const lowerCaseSearch = event.target.value.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(lowerCaseSearch)
    );
  }

  resetInput() {
      const inputElement = document.querySelector('input[type="text"]') as HTMLInputElement;
      if (inputElement) {
        inputElement.value = '';
      }
  }
}
