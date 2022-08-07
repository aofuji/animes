import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesComponent } from './animes.component'
import { RouterModule } from '@angular/router';
import { AnimesService } from './animes.service';
import { HttpClientModule } from '@angular/common/http'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HeaderModule } from 'src/app/shared/header/header.module';
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
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    HeaderModule
  ],
  providers:[AnimesService]
})
export class AnimesModule { }
