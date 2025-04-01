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

}
