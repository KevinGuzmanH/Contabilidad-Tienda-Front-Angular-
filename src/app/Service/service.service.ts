import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Producto} from '../Model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}
     URL = `http://localhost:5000/tienda`;

    getProductos(){
      return this.http.get<Producto[]>(this.URL + '/tabla');
    }
    createProducto(producto: Producto){
        return this.http.post<Producto>(this.URL + `/guardar`, producto);
    }

    getById(id: number){
      return this.http.get<Producto>(this.URL + `/getbyid` + `/` + id);
    }

    updateProduct(producto: Producto){
      return this.http.put<Producto> (this.URL + `/updateProduct`, producto);
    }

    deleteProduct(id: number){
      return this.http.delete<Producto> (this.URL + `/delete/` + id);
    }
    getFullBalance(){
      return this.http.get<number> (this.URL + `/balancetotal`);
    }

}
