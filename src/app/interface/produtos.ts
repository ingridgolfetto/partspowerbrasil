import { Categorias } from '../enums/categorias';

export interface Produtos {
  id: number;
  name: string;
  category: Categorias;
  imageUrl: string;
}