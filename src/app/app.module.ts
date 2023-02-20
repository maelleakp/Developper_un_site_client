import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { WineDetailComponent } from './components/wine-detail/wine-detail.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { ModifCompteComponent } from './components/modif-compte/modif-compte.component';
import { MesCommandesComponent } from './components/mes-commandes/mes-commandes.component';
import { DxButtonModule, DxDataGridModule, DxTemplateModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
import { ItemService } from './services/item.service';
import { WineTypeService } from './services/wine-type.service';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    WineDetailComponent,
    AboutComponent,
    ContactComponent,
    ConnexionComponent,
    InscriptionComponent,
    ShoppingCartComponent,
    PaymentComponent,
    MonCompteComponent,
    ModifCompteComponent,
    MesCommandesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxButtonModule,
    DxTemplateModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot([])
  ],
  providers: [
    ItemService,
    WineTypeService,
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
