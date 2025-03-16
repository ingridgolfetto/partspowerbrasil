import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from './material.module';
import { routes } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    CarouselModule,
    HttpClientModule,
    HomeComponent,
    RouterModule.forRoot(routes),
    MenuComponent
  ],
  exports: [RouterModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule { }
