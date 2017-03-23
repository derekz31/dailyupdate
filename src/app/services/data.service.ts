import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getHealthData(): Observable<any> {
    return this.http.get('/api/health/data').map(res => res.json());
  }

  countHealthData(): Observable<any> {
    return this.http.get('/api/health/data/count').map(res => res.json());
  }

  addHealth(health): Observable<any> {
    return this.http.post('/api/health/data', JSON.stringify(health), this.options);
  }

  getHealth(health): Observable<any> {
    return this.http.get(`/api/health/data/${health._id}`, this.options);
  }

  editHealth(health): Observable<any> {
    return this.http.put(`/api/health/data/${health._id}`, JSON.stringify(health), this.options);
  }

  deleteHealth(health): Observable<any> {
    return this.http.delete(`/api/health/data/${health._id}`, this.options);
  }

}
