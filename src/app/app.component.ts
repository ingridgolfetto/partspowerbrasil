import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { RodapeComponent } from "./components/rodape/rodape.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'partspowerflex';
}
