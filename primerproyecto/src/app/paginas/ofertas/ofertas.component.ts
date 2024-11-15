import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Pantalones de Jean',
      descripcion: 'Pantalones de jean Golf Wang de corte clásico.',
      precio: 59.99,
      imagen: 'https://i.pinimg.com/originals/81/83/89/818389928d61d34ea22cbcd19ca55066.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Campera de algodon',
      descripcion: 'Campera de algodon Golf Wang, color blanco y naranja',
      precio: 120.00,
      imagen: '/imagen4.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Chomba Golf Wang',
      descripcion: 'Chomba Golf Wang, algodon, cuarados, color rojo y azul.',
      precio: 70.00,
      imagen: '/imagen2.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Sueter de lana',
      descripcion: 'Sueter de lana Golf Wang, color azul marino y blanco.',
      precio: 120.00,
      imagen: '/imagen1.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Campera de algodon',
      descripcion: 'Campera de algodon Golf Wang, color rosa y negro.',
      precio: 180.00,
      imagen: '/imagen3.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Zapatillas Vans Golf Wang',
      descripcion: 'Zapatillas Vans Golf Wang, Tela Gamuza, Color verde.',
      precio: 100.00,
      imagen: 'https://sneakernews.com/wp-content/uploads/2017/10/converse-golf-le-fleur-tyler-the-creator-green-1.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },

  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}