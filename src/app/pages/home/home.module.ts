import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/shared/header/header.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild([
      {
        path:'',
        component: HomeComponent
      }
    ]),
  ],
})
export class HomeModule { }
