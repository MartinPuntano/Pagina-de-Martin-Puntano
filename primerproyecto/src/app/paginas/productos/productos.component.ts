import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Buzo de algodon',
      descripcion: 'Buzo de algodón 100% cómoda y fresca.',
      precio: 99.99,
      imagen: 'https://highxtar.com/wp-content/uploads/2023/04/highxtar-tyler-the-creator-wolf-destacada.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Pantalones de Jean',
      descripcion: 'Pantalones de jean Golf Wang de corte clásico.',
      precio: 59.99,
      imagen: 'https://i.pinimg.com/originals/81/83/89/818389928d61d34ea22cbcd19ca55066.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Chaqueta de Cuero',
      descripcion: 'Chaqueta de cuero genuino Golf Wang.',
      precio: 200.00,
      imagen: 'https://www.golfwangcommunity.com/u/collection/fall-winter-2022/d0f97a78b1dd49e4b3949c54a0abf62d.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Zapatillas Vans Golf Wang',
      descripcion: 'Zapatillas Vans Golf Wang, Tela Gamuza, Color verde.',
      precio: 100.00,
      imagen: 'https://sneakernews.com/wp-content/uploads/2017/10/converse-golf-le-fleur-tyler-the-creator-green-1.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Chomba Golf Wang',
      descripcion: 'Chomba Golf Wang, algodon, cuarados, color rojo y azul.',
      precio: 70.00,
      imagen: '/imagen2.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Chaqueta de Cuero',
      descripcion: 'Chaqueta de cuero genuino Golf Wang 2019.',
      precio: 89.99,
      imagen: 'https://cdn-images.farfetch-contents.com/18/08/28/37/18082837_38628084_1000.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'Sueter de lana',
      descripcion: 'Sueter de lana Golf Wang, color azul marino y blanco.',
      precio: 120.00,
      imagen: '/imagen1.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'Gorra',
      descripcion: 'Gorra Golf Wang color verde',
      precio: 50.00,
      imagen: 'https://i.etsystatic.com/39754902/r/il/842727/4842972551/il_794xN.4842972551_ox3w.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 9,
      nombre: 'Campera de tela de avion',
      descripcion: 'Campera de tela de avion matelaseada color celeste con naranja Golf Wang',
      precio: 200.00,
      imagen: 'https://i.pinimg.com/originals/d8/d5/e2/d8d5e2a0577d4f9eb86cf43d2b27f26a.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 10,
      nombre: 'Campera de algodon',
      descripcion: 'Campera de algodon Golf Wang, color rosa y negro.',
      precio: 180.00,
      imagen: '/imagen3.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 11,
      nombre: 'Pantalon de algodon',
      descripcion: 'Pantalon de algodon Golf Wang, color azul y naranja',
      precio: 100.00,
      imagen: 'https://media-photos.depop.com/b0/17138413/1079237546_48189f9d3a89442c8100c1684098f3ac/P0.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 12,
      nombre: 'Campera de algodon',
      descripcion: 'Campera de algodon Golf Wang, color blanco y naranja',
      precio: 120.00,
      imagen: '/imagen4.jpg', // Asegúrate de que esta ruta sea correcta
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
