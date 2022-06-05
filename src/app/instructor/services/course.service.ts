import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  apiUrl: string = environment.apiURL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {

  }
  all(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/api/courses`, {headers: this.headers});
  }
}
