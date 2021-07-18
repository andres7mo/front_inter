import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { PersonalComponent } from './personal/personal.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
{path:'HOME' , component: InfoComponent},
{path:'PERSONAL' , component: PersonalComponent},
{path:'USUARIO' , component: UsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
