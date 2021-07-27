import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { GestionTempsComponent } from './components/services/gestion-temps/gestion-temps.component';
import { InstallationDomotiqueComponent } from './components/services/installation-domotique/installation-domotique.component';
import { InstallationElectricComponent } from './components/services/installation-electric/installation-electric.component';
import { SecuriteComponent } from './components/services/securite/securite.component';
import { ServicesComponent } from './components/services/services.component';
import { SurveillanceComponent } from './components/services/surveillance/surveillance.component';

const routes: Routes = [
  {path:"Accueil",component:AccueilComponent},
  {path:"Services",component:ServicesComponent,
      children:[
        {path:"securite",component:SecuriteComponent},
        {path:"installation-domotique",component:InstallationDomotiqueComponent},
        {path:"installation-electrique",component:InstallationElectricComponent},
        {path:"gestion-du-temps",component:GestionTempsComponent},
        {path:"surveillance",component:SurveillanceComponent},
        {path:"",redirectTo:"Securite",pathMatch:'full'}
      ]},
  {path:"",redirectTo:"/Accueil",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
