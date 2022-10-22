import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './home/cards/cards.component';
import { LoginComponent } from './home/login/login.component';
import { PresentacionComponent } from './home/presentacion/presentacion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { TopComponent } from './pages/top/top.component';
import { ProveedoresComponent } from './home/proveedores/proveedores.component';

const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'juegos',component: JuegosComponent},
  {path:'usuarios',component: UsuariosComponent},
  {path:'top',component: TopComponent},
  {path:'presentacion',component:PresentacionComponent},
  {path: 'login',component:LoginComponent},  
  {path: 'cards',component:CardsComponent},
  {path: 'proveedores', component : ProveedoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
