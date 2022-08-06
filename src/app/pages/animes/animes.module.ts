import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesComponent } from './animes.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AnimesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: AnimesComponent
      }
    ]),
  ]
})
export class AnimesModule { }
