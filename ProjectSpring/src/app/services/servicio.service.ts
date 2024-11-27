import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../clases/Producto';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
private url = "http://localhost:8080/api/productos"

  constructor(private http: HttpClient) { }

getProducts():Observable<Producto[]>{
  return this.http.get<Producto[]>(`${this.url}`)
}


 // Obtener producto por ID
 getProductById(id: number): Observable<Producto> {
  return this.http.get<Producto>(`${this.url}/${id}`);
}

// Crear un nuevo producto
addProduct(producto: Producto): Observable<Producto> {
  return this.http.post<Producto>(this.url, producto);
}

// Actualizar un producto existente
updateProduct(id: number, producto: Producto): Observable<Producto> {
  return this.http.put<Producto>(`${this.url}/${id}`, producto);
}

// Eliminar un producto
deleteProduct(id: number): Observable<void> {
  return this.http.delete<void>(`${this.url}/${id}`);
}


}
