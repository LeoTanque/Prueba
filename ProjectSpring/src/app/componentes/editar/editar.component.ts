import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from '../../services/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.scss'
})
export class EditarComponent {
  productoForm: FormGroup;
  id: number = 0;

  constructor(
    private fb: FormBuilder,
    private servicio: ServicioService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      cantidad: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.getProductById(this.id).subscribe((producto) => {
      this.productoForm.patchValue(producto);
    });
  }

  // Actualizar producto
  onEdit(): void {
    if (this.productoForm.valid) {
      this.servicio
        .updateProduct(this.id, this.productoForm.value)
        .subscribe(() => {
          console.log('Producto actualizado');
          this.router.navigate(['/lista']); // Redirigir a la lista después de actualizar
        });
    }
  }
}
