import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { NosotrosComponent } from './home/nosotros/nosotros.component';
import { NoticiasComponent } from './home/noticias/noticias.component';
import { MainBannerComponent } from './home/main-banner/main-banner.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PresentacionComponent } from './home/presentacion/presentacion.component';
import { LoginComponent } from './home/login/login.component';
import { CardsComponent } from './home/cards/cards.component';
import { TopComponent } from './pages/top/top.component';
import { TopConsolasComponent } from './home/top-consolas/top-consolas.component';
import { ProveedoresComponent } from './home/proveedores/proveedores.component';
import { EncabezadoComponent } from './common/encabezado/encabezado.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    NosotrosComponent,
    NoticiasComponent,
    MainBannerComponent,
    MainNavComponent,
    JuegosComponent,
    UsuariosComponent,
    InicioComponent,
    PresentacionComponent,
    LoginComponent,
    CardsComponent,
    TopComponent,
    TopConsolasComponent,
    ProveedoresComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
