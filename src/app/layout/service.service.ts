import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignacion } from './modelos/asignacion';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServiceService {
apiUrl:string;
  
  constructor(private http:HttpClient) { 
    this.apiUrl=environment.API_URL;
  }


  get(url:string){
    return this.http.get(this.apiUrl+url);
  }
  post(url:string,data:any){
    return this.http.post(this.apiUrl+url,data);
  }
  put(url:string,data:any){
    return this.http.put(this.apiUrl+url,data);
  }
  delete(url:string){
    return this.http.delete(this.apiUrl+url);
  }
}

