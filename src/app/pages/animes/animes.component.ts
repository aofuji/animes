import {  AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { take } from 'rxjs';
import { AnimesService } from './animes.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss'],
})
export class AnimesComponent implements OnInit, AfterViewInit {

  length = 0;
  pageSize = 0;
  pageSizeOptions = [10, 25, 100];
  pageIndex = 0;

  displayedColumns: string[] = ['anime', 'character', 'quote'];

  dataSource :any;

  isLoading:boolean = false

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(private service:AnimesService,
    private activatedRoute: ActivatedRoute,private router: Router, ) {}

  ngOnInit(): void {}

  ngAfterViewInit():void{
    setTimeout(() => {
      this.activatedRoute.queryParamMap.subscribe((paramMap)=>{

        const pageIndex = Number(paramMap.get('pageIndex'))== 0 ? 0 : Number(paramMap.get('pageIndex'))
        const pageSize = Number(paramMap.get('pageSize')) ? 10 : Number(paramMap.get('pageSize'))

        console.log(pageSize)

        if(pageSize){
          this.paginator.pageSize = pageSize

        }
        if(pageIndex){
          this.paginator.pageIndex = pageIndex

        }

        this.get(pageIndex)

      })
    }, 300);

  }

  get(pageIndex:any):void {
    this.isLoading = true
    this.dataSource = new MatTableDataSource([])
    this.service.get(pageIndex).pipe(take(1))
    .subscribe((res) => {
      console.log(res)
     this.dataSource = new MatTableDataSource(res)
     this.paginator.length = 100
     this.isLoading = false
    })
  }

  pageChanged(event: PageEvent) {
    console.log(event)

    const pageIndex = event.pageIndex
      const pageSize = event.pageSize

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        pageIndex: pageIndex === 0 ? null : pageIndex  ,
        pageSize:pageSize,
      },
      queryParamsHandling: 'merge',
    });

    return event
  }

}
