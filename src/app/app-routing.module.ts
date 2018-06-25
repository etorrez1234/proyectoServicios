import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { Punto1Component } from "./components/punto1/punto1.component";
import { Punto2Component } from "./components/punto2/punto2.component";
import { Punto3Component } from "./components/punto3/punto3.component";
import { Punto4Component } from "./components/punto4/punto4.component";
import { Punto5Component } from './components/punto5/punto5.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { EscuelaComponent } from './components/escuela/escuela.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'punto1', component: Punto1Component },
    { path: 'punto2', component: Punto2Component },
    { path: 'punto3', component: Punto3Component },
    { path: 'punto4', component: Punto4Component },
    { path: 'punto5', component: Punto5Component },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'escuela', component: EscuelaComponent },
   
   
    { path: '**', pathMatch:'full',redirectTo:'home' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }