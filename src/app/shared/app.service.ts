import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "./models/article";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly http: HttpClient) { }

  login(username: string, password: string) {
    // @TODO
    localStorage.setItem('currentUser', username);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  isLogged(): boolean {
   return !!localStorage.getItem('currentUser');
  }

  getDataAPI(): Observable<Article[]>{
   // return this.http.get<Article[]>('https://content-cache.watchcorridor.com/v6/interview');
    return this.http.get<Article[]>('/api/v6/interview');
  }

}
