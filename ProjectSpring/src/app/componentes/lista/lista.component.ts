import { Component, OnInit, PipeTransform } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { Producto } from '../../clases/Producto';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
  providers: [DecimalPipe],
})
export class ListaComponent implements OnInit{

  productos:Producto[]=[];
  productos$!: Producto[];
  filter = new FormControl('', { nonNullable: true });
  productosFiltrados!: Producto[];

  constructor(private servicio: ServicioService, pipe: DecimalPipe){
    this.getAllProductos();



  }



  ngOnInit(): void {


  }

getAllProductos(){
  this.servicio.getProducts().subscribe(data=>{
    this.productos = data;
    this.productosFiltrados = data;
    console.log(data)
  })
}

  // Eliminar un producto
  eliminarProducto(id: number) {
    this.servicio.deleteProduct(id).subscribe(() => {
      this.productos = this.productos.filter((p) => p.id !== id);

      console.log(this.productos)
    });
  }




}
