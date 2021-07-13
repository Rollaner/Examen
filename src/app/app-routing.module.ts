import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LibrosComponent } from './components/libros/libros.component';
import { QuejasComponent } from './components/quejas/quejas.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "libros", component: LibrosComponent},
  {path: "quejas", component: QuejasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
