import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LisereComponent } from './components/lisere/lisere.component';
import { ProductComponent } from './pages/product/product.component';
import { BrandComponent } from './pages/brand/brand.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OfferServiceComponent } from './pages/offer-service/offer-service.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    SearchBarComponent,
    LisereComponent,
    ProductComponent,
    BrandComponent,
    ContactComponent,
    OfferServiceComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
