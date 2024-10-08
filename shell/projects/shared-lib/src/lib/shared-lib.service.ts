import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Product={
  id:number;
  name: string;
  price: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  private favoriteProducts = new BehaviorSubject<Product[]>([]);
  favoriteProducts$ = this.favoriteProducts.asObservable();

  addToFavorites(msg:string, data:any) {
    this.sendMessage(msg, data);
    // console.log("hello1");
    
    // const currentFavorites = this.favoriteProducts.value;
    // this.favoriteProducts.next([...currentFavorites, product]);
    // console.log("hello2");
  }

  private sendMessage(msg:string, data:any){
    PubSub.publish(msg, data);
  }

  
}
