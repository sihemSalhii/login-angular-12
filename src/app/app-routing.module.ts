import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthGuard} from "./shared/auth.guard";
import {ItemPageComponent} from "./item-page/item-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginPageComponent },
  { path: 'item/:id', component: ItemPageComponent, canActivate: [AuthGuard]  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
