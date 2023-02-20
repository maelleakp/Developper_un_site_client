import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/data/item.model';
import { ItemService } from 'src/app/services/item.service';
import notify from 'devextreme/ui/notify';
import { wineType } from 'src/app/data/wineType.model';
import { Provider } from 'src/app/data/provider.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit{
  items: Item[]=[];
  wineTypes: wineType[]=[];
  providers: Provider[]=[];

  constructor(private itemService: ItemService, public cartService: CartService){}

  addToCart(item) {
    if (!this.cartService.itemInCart(item)) {
      item.qtyTotal = 1;
      this.cartService.addToCart(item); //add items in cart
      this.items = [...this.cartService.getItems()];
    }
  }

  searchText;

  ngOnInit(): void {

    this.itemService.GetAllItem().subscribe(resultat => {
      this.items = resultat;
      //console.log(this.items);
    });

    this.itemService.GetWineType().subscribe(resultat => {
      this.wineTypes = resultat;
      //console.log(this.wineTypes);
    });

    this.itemService.GetProvider().subscribe(resultat => {
      this.providers = resultat;
      //console.log(this.providers);
    })
  }

}


