import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

 public itemMenuSelecionado = new EventEmitter<string>();
  

  constructor() { }

  
}
