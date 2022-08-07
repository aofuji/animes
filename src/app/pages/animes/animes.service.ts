import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AnimesService {

  constructor(private http:HttpClient) { }

  private API = 'https://animechan.vercel.app/api/quotes/anime?title=naruto';

  get(page?:any):Observable<any> {

    const url = `${this.API}&page=${page}`

    return this.http.get<any>(url);
  }

}
