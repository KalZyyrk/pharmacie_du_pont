import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LisereComponent } from './lisere/lisere.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { BrandComponent } from './brand/brand.component';
import { ContactComponent } from './contact/contact.component';
import { OfferServiceComponent } from './offer-service/offer-service.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, NavbarComponent, SearchBarComponent, LisereComponent, ProductComponent, ServiceComponent, BrandComponent, ContactComponent, OfferServiceComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
