import { NgModule } from '@angular/core';

import { 
  MatToolbarModule
 } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbar } from '@angular/material/toolbar';

const material = [
  MatToolbarModule, 
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatToolbar,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatDividerModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatMenuModule
];

@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule { }
