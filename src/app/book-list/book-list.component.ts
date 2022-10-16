import { Component, OnInit } from '@angular/core';
import { Book } from './book';

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
    },
    {
      img: "assets/img/caliban.jpg",
      nombre: "El calibán y la bruja",
      genero: "Histórico",
      precio: 1567,
      stock: 5,
      promocion: true,
    },
    {
      img: "assets/img/una habitacion propia.jpg",
      nombre: "Una habitación propia",
      genero: "Ensayo",
      precio: 1060,
      stock: 0,
      promocion: false,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
