import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesComponent } from './animes.component'
import { RouterModule } from '@angular/router';
import { AnimesService } from './animes.service';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [AnimesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path:'',
        component: AnimesComponent
      }
    ]),
  ],
  providers:[AnimesService]
})
export class AnimesModule { }
