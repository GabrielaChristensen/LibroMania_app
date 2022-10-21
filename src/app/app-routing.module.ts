import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibromaniaBooksComponent } from './libromania-books/libromania-books.component';
import { LibromaniaContactComponent } from './libromania-contact/libromania-contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: LibromaniaBooksComponent
  },
  {
    path: 'contact',
    component: LibromaniaContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
