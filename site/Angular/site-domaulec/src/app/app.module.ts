import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InnerPageComponent } from './components/inner-page/inner-page.component';
import { HeaderComponent } from './components/inner-page/header/header.component';
import { FooterComponent } from './components/inner-page/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ServicesComponent } from './components/services/services.component';
import { InstallationElectricComponent } from './components/services/installation-electric/installation-electric.component';
import { SecuriteComponent } from './components/services/securite/securite.component';
import { SurveillanceComponent } from './components/services/surveillance/surveillance.component';
import { GestionTempsComponent } from './components/services/gestion-temps/gestion-temps.component';
import { InstallationDomotiqueComponent } from './components/services/installation-domotique/installation-domotique.component';
import { TabProduitsComponent } from './components/tab-produits/tab-produits.component';

@NgModule({
  declarations: [
    AppComponent,
    InnerPageComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ActivitiesComponent,
    ServicesComponent,
    InstallationElectricComponent,
    SecuriteComponent,
    SurveillanceComponent,
    GestionTempsComponent,
    InstallationDomotiqueComponent,
    TabProduitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
