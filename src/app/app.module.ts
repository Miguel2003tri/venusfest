import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EntradasComponent } from './components/entradas/entradas.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { TrabajaConNosotrosComponent } from './components/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { MyApiService } from './services/my-api.services'; // Importar el servicio


const Route:Routes=[ 
  {path:'',component:InicioComponent},
  {path:'entradas',component:EntradasComponent},
  {path:'sobre-nosotros',component:SobreNosotrosComponent},
  {path:'trabaja-con-nosostros',component:TrabajaConNosotrosComponent},
  {path:'contacto',component:ContactoComponent},

  
 ];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EntradasComponent,
    SobreNosotrosComponent,
    TrabajaConNosotrosComponent,
    ContactoComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(Route),
    HttpClientModule ,
  ],
  
  providers: [MyApiService],
  bootstrap: [AppComponent],

})
export class AppModule { }
