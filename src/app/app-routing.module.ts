import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";

const routes: Routes = [
  {path:'', component: BooksComponent},
  {path:'Cart', component: CartComponent},
  {path:'Login', component: LoginComponent},
  {path:'Register', component: RegisterComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule{}
