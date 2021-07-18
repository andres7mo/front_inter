import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  public Get_Service(url:string){
    return this.http.get(url)
  }
}
