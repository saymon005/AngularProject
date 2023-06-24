import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BookComponent } from './books/book/book.component';
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';
import { AppRountingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations : [AppComponent, CartComponent],
  imports: [BrowserModule, BooksModule, AppRountingModule, AuthModule],
  bootstrap: [AppComponent],
})
export class AppModule{}
