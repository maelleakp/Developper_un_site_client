import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren
} from "@angular/core";
import { CurrencyPipe } from "@angular/common";

import { CartService } from "src/app/services/cart.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


     // @ViewChildren('myitems') subTotalItems: QueryList<ElementRef>;
     @ViewChildren("subTotalWrap") subTotalItems: QueryList<ElementRef>;
     @ViewChildren("subTotalWrap_existing") subTotalItems_existing: QueryList<
       ElementRef
     >;
   
     constructor(
       public cartService: CartService,
       private currencyPipe: CurrencyPipe // private builder: FormBuilder
     ) { }
   
     items = [];
   
     //----- calculate total
     get total() {
       return this.items.reduce(
         (sum, x) => ({
           qtyTotal: 1,
           unitPrice: sum.unitPrice + x.qtyTotal * x.unitPrice
         }),
         { qtyTotal: 1, unitPrice: 0 }
       ).unitPrice;
     }
   
     changeSubtotal(item, index) {
       const qty = 1;
       const amt = item.unitPrice;
       const subTotal = amt * qty;
       const subTotal_converted = this.currencyPipe.transform(subTotal, "EUR");
   
       this.subTotalItems.toArray()[
         index
       ].nativeElement.innerHTML = subTotal_converted;
       this.cartService.saveCart();
     }
   
     //----- remove specific item
     removeFromCart(item) {
       this.cartService.removeItem(item);
       this.items = this.cartService.getItems();
     }
   
     //----- clear cart item
     clearCart(items) {
       // this.items.forEach((item, index) => this.cartService.removeItem(index));
       this.cartService.clearCart(items);
       this.items = [...this.cartService.getItems()];
     }
   
     //----- add item to cart
     addToCart(item) {
       if (!this.cartService.itemInCart(item)) {
         item.qtyTotal = 1;
         this.cartService.addToCart(item); //add items in cart
         this.items = [...this.cartService.getItems()];
       }
     }
   
     ngOnInit(): void {
 
 
       this.cartService.loadCart();
       this.items = this.cartService.getItems();
     }
}
