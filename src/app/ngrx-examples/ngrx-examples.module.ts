import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxSimpleComponent } from './ngrx-simple/ngrx-simple.component';
import { NgrxWithEffectsComponent } from './ngrx-with-effects/ngrx-with-effects.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgrxSimpleComponent, 
    NgrxWithEffectsComponent
  ],
  exports: [
    NgrxSimpleComponent, 
    NgrxWithEffectsComponent
  ]
})
export class NgrxExamplesModule { }
