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
  productVisible:boolean=false;
  productList:any[]=[];
  selectedEstimate:any;

  ngOnInit(){
    this.getMyEstimates();
  }

  getMyEstimates(){
    this.productService.getMyEstimates().subscribe((res:any)=>{
      this.myEstimates = res;      
    })
  }
  
  openProducts(estimate:any){
    this.productVisible=true;
    this.selectedEstimate=estimate
    this.productList=estimate?.products;
    console.log(this.selectedEstimate);
  }

  deleteEstimate(id:any){
    this.productService.deleteEstimate(id).subscribe((res:any)=>{
       this.messageService.add({
        severity:'success',
        summary:'Success',
        detail:'Estimate deleted Successfully.'
      })
      this.getMyEstimates();
    })
  }

  updateTotal(item: any) {
    item.total = item.qty * item.assignedPrice;
  }

  getGrandTotal() {
    return this.productList.reduce((sum, item) => sum + (item.total || 0), 0);
  }
  onCloseProductList(){
    this.selectedEstimate = [];
    this.productList = [];
    this.productVisible=false
  }

  

}
