import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AnimesService {

  constructor(private http:HttpClient) { }

  private URL = 'https://animechan.vercel.app/api/available/anime';

  getAll():Observable<any> {
    return this.http.get<any>(this.URL);
  }

}
