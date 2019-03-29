import { Injectable } from '@angular/core';
// http import
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://randomuser.me/api/');
  }
}
