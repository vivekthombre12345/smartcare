import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-my-estimates',
  templateUrl: './my-estimates.component.html',
  styleUrls: ['./my-estimates.component.css'],
  providers:[MessageService]
})
export class MyEstimatesComponent {

  constructor(
    private productService:ProductService,
    private messageService:MessageService
  ){}

  myEstimates:any[]=[];

  ngOnInit(){
    this.getMyEstimates();
  }

  getMyEstimates(){
    this.productService.getMyEstimates().subscribe((res:any)=>{
      this.myEstimates = res;      
    })
  }
  
  openProducts(products:any){
    
  }
  

}
