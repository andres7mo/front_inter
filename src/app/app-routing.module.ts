import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { PersonalComponent } from './personal/personal.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
{path:'HOME' , component: InfoComponent},
{path:'PERSONAL' , component: PersonalComponent},
{path:'LOGIN' , component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
