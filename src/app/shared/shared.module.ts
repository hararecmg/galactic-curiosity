import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';


@NgModule({
  declarations: [
    TopMenuComponent,
    BottomMenuComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TopMenuComponent,
    BottomMenuComponent,
  ]
})
export class SharedModule { }
