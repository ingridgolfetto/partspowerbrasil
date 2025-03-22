import { IMenuItems } from "../interface/menu";

export const MENU: IMenuItems[] =
    [ 
        {
        nome: 'Home',
        rota: 'home',
        selecionado: true
      }, 
      {
        nome: 'Produtos',
        rota: 'produtos',
        selecionado: false
      },
      {
        nome: 'Sobre',
        rota: 'sobre',
        selecionado: false
      }, 
      {
        nome: 'Contato',
        rota: 'contato',
        selecionado: false
      }  
    ];