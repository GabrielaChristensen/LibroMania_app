import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookDataService } from '../book-data.service';
import { BookReserveService } from '../book-reserve.service';
import { Book } from './Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];


  constructor(
    private reserve: BookReserveService,
    private booksDataService: BookDataService,
    private toast: ToastrService) {
  }

  ngOnInit(): void {

    this.booksDataService.getAll()
      .subscribe((books: Book[]) => {
        this.books = books;
      });
  }

  canReserve(book: Book): boolean {
    return book.cantidad > 0;
  }

  reserveBook(book: Book): void {
    this.reserve.reserveBook(book);
    book.stock -= book.cantidad;
    this.booksDataService.updateBook(book.id, book).subscribe(() => {
      book.cantidad = 0;
    });
  }

  maxReached(m: string) {
    this.toast.info(m, '', {
      positionClass: 'toast-bottom-right'
    });
  }

}
