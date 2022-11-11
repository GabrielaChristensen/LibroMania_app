import { Component, OnInit } from '@angular/core';
import { BookReserveService } from '../book-reserve.service';
import { Book } from './Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [
    {
      img: "assets/img/carrie.jpg",
      nombre: "Carrie",
      genero: "Terror",
      precio: 2000,
      stock: 10,
      promocion: false,
      cantidad: 0,
    },
    {
      img: "assets/img/caliban.jpg",
      nombre: "El calibán y la bruja",
      genero: "Histórico",
      precio: 1567,
      stock: 5,
      promocion: true,
      cantidad: 0,
    },
    {
      img: "assets/img/una habitacion propia.jpg",
      nombre: "Una habitación propia",
      genero: "Ensayo",
      precio: 1060,
      stock: 0,
      promocion: false,
      cantidad: 0,
    },
  ];

  ;

  constructor(private reserve: BookReserveService) {
  }

  ngOnInit(): void {
  }

  canReserve(book: Book): boolean {
    return book.cantidad > 0;
  }

  reserveBook(book: Book): void {
    this.reserve.reserveBook(book);
    book.stock -= book.cantidad;
    book.cantidad = 0;
  }


  maxReached(m: string) {
    console.log(m);
  }


  // reservarLibro(book: Book): void {
  //   if (book.stock < book.cantidad)
  //     window.alert("Stock insuficiente");
  // }
}
