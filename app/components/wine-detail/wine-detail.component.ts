import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/data/item.model';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.scss']
})
export class WineDetailComponent implements OnInit {

  item: Item = <Item>{};

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    public cartService: CartService
    ){}

    addToCart(item) {
      if (!this.cartService.itemInCart(item)) {
        item.qtyTotal = 1;
        this.cartService.addToCart(item); //add items in cart
        //this.item = [...this.cartService.getItems()];
      }
    }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
  
    this.itemService.GetItem(id).subscribe(resultat => {
      this.item = resultat;
      console.log(this.item);
    });

  }
}
