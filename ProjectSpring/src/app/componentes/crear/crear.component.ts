import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.scss'
})
export class CrearComponent {
  productoForm: FormGroup;

  constructor(private fb: FormBuilder,
    private servicio: ServicioService,
    private router: Router) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(25)]],
      cantidad: ['', [Validators.required, Validators.min(1)]],
    });
  }



onSubmit(): void {
  if (this.productoForm.valid) {
    this.servicio.addProduct(this.productoForm.value).subscribe(() => {
      this.router.navigate(['/lista']);
      console.log('Producto creado');

    });
  }
}

}
