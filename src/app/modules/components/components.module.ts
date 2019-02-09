import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenComponent } from '../../components/token/token.component';

@NgModule({
  declarations: [TokenComponent],
  imports: [
    CommonModule
  ],
  exports: [TokenComponent]
})
export class ComponentsModule { }
