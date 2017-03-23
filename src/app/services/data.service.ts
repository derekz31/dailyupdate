import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getCats(): Observable<any> {
    return this.http.get('/api/health').map(res => res.json());
  }

  countCats(): Observable<any> {
    return this.http.get('/api/health/count').map(res => res.json());
  }

  addCat(cat): Observable<any> {
    return this.http.post('/api/health', JSON.stringify(cat), this.options);
  }

  getCat(cat): Observable<any> {
    return this.http.get(`/api/health/${cat._id}`, this.options);
  }

  editCat(cat): Observable<any> {
    return this.http.put(`/api/health/${cat._id}`, JSON.stringify(cat), this.options);
  }

  deleteCat(cat): Observable<any> {
    return this.http.delete(`/api/health/${cat._id}`, this.options);
  }

}
