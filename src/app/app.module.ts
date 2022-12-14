import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { LibromaniaContactComponent } from './libromania-contact/libromania-contact.component';
import { LibromaniaBooksComponent } from './libromania-books/libromania-books.component';
import { BookReservationComponent } from './book-reservation/book-reservation.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    LibromaniaContactComponent,
    LibromaniaBooksComponent,
    BookReservationComponent,
    InputIntegerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
