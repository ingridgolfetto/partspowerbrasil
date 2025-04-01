# Parts Power Flex

---

## Descrição do Projeto

O **Parts Power Flex** é um projeto desenvolvido para exibir e gerenciar uma lista de produtos de alta performance para indústrias. Ele inclui funcionalidades como busca por código, filtragem por categorias e subcategorias, exibição de produtos em destaque e integração com o WhatsApp para facilitar a comunicação com os clientes.

---

## Estrutura do Projeto

```
src/
├── index.html
├── main.ts
├── styles.scss
├── app/
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── app.routes.ts
│   ├── material.module.ts
│   ├── components/
│   │   ├── home/
│   │   │   ├── home.component.html
│   │   │   ├── home.component.scss
│   │   │   ├── home.component.ts
│   │   ├── lista-produtos/
│   │   │   ├── lista-produtos.component.html
│   │   │   ├── lista-produtos.component.scss
│   │   │   ├── lista-produtos.component.ts
│   │   ├── menu/
│   │   ├── rodape/
│   ├── enums/
│   │   ├── categorias.ts
│   │   ├── menu-itens.ts
│   │   ├── produtos.ts
│   │   ├── slides.enum.ts
│   ├── interface/
│   │   ├── menu.ts
│   │   ├── produtos.ts
│   │   ├── slide.ts
│   ├── service/
│   │   ├── parts.service.ts
├── assets/
│   ├── imgs/
│   │   ├── bg-principal-fundopreto30.png
│   │   ├── bg-principal.jpg
```

---

## Funcionalidades

### 1. **Página Inicial**
- Exibe um carrossel com produtos em destaque.
- Botão para visualizar todos os produtos.
- Integração com o Angular Material para design responsivo.

### 2. **Lista de Produtos**
- **Busca por Código**: Permite buscar produtos pelo código diretamente no input.
- **Filtragem por Categorias e Subcategorias**:
  - Exibe categorias e subcategorias disponíveis.
  - Permite filtrar produtos com base na categoria ou subcategoria selecionada.
- **Exibição de Produtos**:
  - Mostra os produtos filtrados com imagem, nome e botão de compra.
  - Botão "Comprar" redireciona para o WhatsApp com uma mensagem personalizada.

### 3. **Menu Responsivo**
- Menu lateral para dispositivos móveis.
- Exibe categorias e subcategorias no menu.
- Fecha automaticamente ao clicar em um item.

### 4. **Integração com WhatsApp**
- O botão "Comprar" redireciona para o WhatsApp com o ID do produto e uma mensagem personalizada.

---

## Tecnologias Utilizadas

- **Angular**: Framework principal para desenvolvimento do front-end.
- **Angular Material**: Biblioteca de componentes para design responsivo e moderno.
- **TypeScript**: Linguagem principal para desenvolvimento.
- **SCSS**: Pré-processador CSS para estilização.
- **Owl Carousel**: Biblioteca para o carrossel de produtos em destaque.

---

## Configuração do Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- Angular CLI (versão 15 ou superior)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/partspowerflex.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd partspowerflex
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

5. Acesse o projeto no navegador:
   ```
   http://localhost:4200
   ```

---

## Estrutura de Componentes

### **HomeComponent**
- Local: `src/app/components/home/`
- Exibe o carrossel de produtos em destaque.
- Botão para redirecionar para a lista de produtos.

### **ListaProdutosComponent**
- Local: `src/app/components/lista-produtos/`
- Gerencia a exibição e filtragem de produtos.
- Permite busca por código e filtragem por categorias/subcategorias.

### **MenuComponent**
- Local: `src/app/components/menu/`
- Menu responsivo com categorias e subcategorias.
- Fecha automaticamente ao clicar em um item.

### **RodapeComponent**
- Local: `src/app/components/rodape/`
- Exibe informações de contato e links úteis.

---

## Serviços

### **PartsService**
- Local: `src/app/service/parts.service.ts`
- Gerencia a comunicação entre componentes e fornece dados para o projeto.

---

## Enums e Interfaces

### **Enums**
- `categorias.ts`: Define as categorias disponíveis.
- `produtos.ts`: Define os produtos disponíveis.
- `slides.enum.ts`: Define os slides do carrossel.

### **Interfaces**
- `menu.ts`: Interface para itens do menu.
- `produtos.ts`: Interface para produtos.
- `slide.ts`: Interface para slides do carrossel.

---

## Estilização

- **SCSS**: Utilizado para criar estilos responsivos e reutilizáveis.
- **Media Queries**: Implementadas para garantir que o design seja adaptável a diferentes tamanhos de tela.

---

## Rotas

### Configuração de Rotas
- Local: `src/app/app.routes.ts`

Exemplo de rotas configuradas:
```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ListaProdutosComponent },
  { path: '**', redirectTo: '' }
];
```

---

## Como Funciona a Integração com WhatsApp?

O método `rotaComprar` no componente `ListaProdutosComponent` redireciona o usuário para o WhatsApp com uma mensagem personalizada. Exemplo:

```typescript
rotaComprar(id: number) {
  const mensagem = `Olá, estou interessado no produto com ID ${id}. Poderia me fornecer mais informações?`;
  const numeroWhatsApp = '5511999999999'; // Substitua pelo número do WhatsApp
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}
```

---

## Melhorias Futuras

- Adicionar paginação na lista de produtos.
- Implementar autenticação para acesso a áreas restritas.
- Adicionar integração com uma API para gerenciar produtos dinamicamente.

---

## Contato

Para dúvidas ou sugestões, entre em contato:

- **Email**: contato@partspowerflex.com
- **WhatsApp**: +55 11 99999-9999

---
