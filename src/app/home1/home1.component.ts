import { Component } from '@angular/core';
import { FosaService } from '../fosa.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component {
  foods:Food[]=[];
  constructor(private foodService:FosaService, private route:ActivatedRoute){}
  ngOnInit():void{
    this.route.params.subscribe(params =>{
      if(params['searchTerm']){
        this.foods=this.foodService.getAll().filter(food=>
          food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
      }
      else{
        this.foods=this.foodService.getAll();
      }
    })
  }
}

