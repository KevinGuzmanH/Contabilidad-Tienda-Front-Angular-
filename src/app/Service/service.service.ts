import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Producto} from '../Model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}
     URL = `http://localhost:5000/tabla`;

    getProductos(){
      return this.http.get<Producto[]>(this.URL);
    }
}
