import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmigosComponent } from './amigos/amigos.component';
import { ComprasComponent } from './compras/compras.component';
import { InicioComponent } from './inicio/inicio.component';
//import { Pagina1Component } from './pagina1/pagina1.component';
//import { Pagina2Component } from './pagina2/pagina2.component';

const routes: Routes = [
{ path: '', redirectTo: './inicio', pathMatch: 'full' },
{ path: 'inicio', component: InicioComponent },
{ path: 'amigos', component: AmigosComponent },
{ path: 'compras', component: ComprasComponent }

];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}