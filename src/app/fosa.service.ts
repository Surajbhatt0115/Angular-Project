import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginValidation } from './loginValidation';
import { Food } from './shared/models/Food';

@Injectable({
  providedIn: 'root'
})
// sweet online service 
export class FosaService {
  constructor(private httpClient: HttpClient) { }

//by default username and password for login
  loginArr:LoginValidation[]=[
    {userName:"admin",  password:"admin"},

  ]
// return login details
  getAllLoginDetails(){
    return this.loginArr;
  }

  

//return the foodbyID
  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id==id)!;
  }

// storinig ALL the details of sweets
  getAll():Food[]{
    return[
      {
        id: 1,
        name: 'Kaju Katli',
        price: 850,
        favorite: true,
        origins: ['Indian Sweet'],
        imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-delicious-kaju-katli-400-gm--101059-m.jpg',
      },
      {
        id: 2,
        name: 'Anjeer Dry fruit sweet',
        price: 700,
        favorite: true,
        origins: ['Indian Sweet'],
        imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-sugar-free-anjeer-dry-fruit-sweets-400-gms--70007-m.jpg',
       },
      {
        id: 3,
        name: 'Rose Flavor Dry Fruit Katli',
        price: 1350,
        favorite: false,
        origins: ['Indian Sweet'],
        imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-rose-flavor-dry-fruit-katli-400-gm--116224-m.jpg',
      },
      {
        id: 4,
        name: 'Kaju Kesar Roll',
        price: 620,
        favorite: true,
        origins: ['Indian Sweet'],
        imageUrl:   'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-kaju-kesar-roll-400-gm--120613-m.jpg',
       },
      {
        id: 5,
        name: 'Kunafa Sweets',
        price: 1900,
        favorite: true,
        origins: ['Indian Sweet'],
        imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-kunafa-sweets-box-185204-m.jpg',
      },
      {
        id: 6,
        name: 'Assorted Caramel Ganache',
        price: 550,
         favorite: false,
        origins: ['Indian Sweet'],
        imageUrl:  'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-assorted-caramel-ganache-190794-m.jpg',
      },
      {
        id: 7,
        name: 'Thandai Katli',
        price: 333,
          favorite: false,
        origins: ['Indian Sweet'],
        imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-delicious-thandai-katli-400-grams-202988-m.jpg',
      },
      {
        id: 8,
        name: 'Pista Badam',
        price: 250,
       favorite: true,
        origins: ['Indian Sweet'],
        imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-pista-badam-barfi-400-gm--70009-m.jpg',
       },
    ]
  }
}
