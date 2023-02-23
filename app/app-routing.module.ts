import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MentionComponent } from './components/mention/mention.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PolitiquesComponent } from './components/politiques/politiques.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { WineDetailComponent } from './components/wine-detail/wine-detail.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'shop/:id',
    component: WineDetailComponent,
  },
  {
    path:'shop',
    component: ShopComponent,
  },
  {
    path:'about',
    component: AboutComponent,
  },
  {
    path:'contact',
    component: ContactComponent,
  },
  {
    path:'panier',
    component: ShoppingCartComponent,
  },
  {
    path:'conditionsgénérales',
    component: ConditionsComponent,
  },
  {
    path:'mentionslégales',
    component: MentionComponent,
  },
  {
    path:'politiquesconfidentialités',
    component: PolitiquesComponent,
  },
  {
    path:'paiement',
    component: PaymentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
