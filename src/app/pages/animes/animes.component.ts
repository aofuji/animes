import { Component, OnInit } from '@angular/core';
import { AnimesService } from './animes.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {

  constructor(private service:AnimesService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((res) => {
      console.log(res)
    })
  }

}
