
export interface Produtos {
  id: number;
  name: string;
  category: string;
  subcategories?: string[]; 
  imageUrl: string;
}