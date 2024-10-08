import { Component, OnInit } from '@angular/core';
import PubSub from 'pubsub-js'
import ProductCount from '../../../models/product-count.model';
import { SharedLibService } from "../../../../../projects/shared-lib/src/lib/shared-lib.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  productsCartCount:number = 0;
  productsFavoriteCount:number = 0;

  constructor(private sharedLibService:SharedLibService) {}

  ngOnInit(): void {
     this.listenerMessagesProductsApp();
    // console.log("hello3");
    // this.sharedLibService.favoriteProducts$.subscribe(favorites => {
    //   console.log("hello4");
    //   this.productsFavoriteCount = favorites.length;
    // });
  }

  listenerMessagesProductsApp(){
    PubSub.subscribe('product_interested', (__msg:string, data:ProductCount) => {
       switch(data.topic){
          case 'cart':
            this.productsCartCount = data.count;
            break;
          case 'favorities':
            this.productsFavoriteCount = data.count;
       }
    })
  }

}
