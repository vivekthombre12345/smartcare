import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-unit-master',
  templateUrl: './unit-master.component.html',
  styleUrls: ['./unit-master.component.css'],
  providers:[MessageService]
})
export class UnitMasterComponent {
  unitName:any=[];
  allUnits:any=[];
  editMode:boolean=false;
  selectedUnit:any;

  constructor(
    private messageService:MessageService,
    private productService:ProductService
  ){}

  ngOnInit(){
    this.getUnits();
  }

  editUnit(unitData:any){
    this.selectedUnit = unitData;
    this.unitName = unitData?.unitName;
    this.editMode = true;    
  }
  deleteUnit(unitId:any){
    this.productService.deleteUnit(unitId).subscribe((res:any)=>{
      this.messageService.add({severity:'success',summary:'Success',detail:'Unit successfully deleted '});
      this.getUnits();
    },(error:any)=>{
      this.messageService.add({severity:'error',summary:'Error',detail:error.error.message});
    })
  }
  createUnit(){
    let payload = {
      unitName:this.unitName,
      createdOn:new Date().getTime()
    }

    this.productService.createUnit(payload).subscribe((res:any)=>{
      this.messageService.add({severity:'success',summary:'Success',detail:'Unit successfully Created '});
      this.getUnits();
      this.unitName = null;
    },(error:any)=>{
      this.messageService.add({severity:'error',summary:'Error',detail:error.error.message});
    })


  }
  updateUnit(){
     let payload = {
      unitName:this.unitName,
      createdOn:this.selectedUnit.createdOn
    }
    this.productService.updateUnit(payload,this.selectedUnit.id).subscribe((res:any)=>{
      this.messageService.add({severity:'success',summary:'Success',detail:'Unit successfully updated '});
      this.getUnits();      
    },(error:any)=>{
      this.messageService.add({severity:'error',summary:'Error',detail:error.error.message});
    })
  }
  getUnits(){
     this.productService.getUnits().subscribe((res:any)=>{
      this.allUnits = res;
    },(error:any)=>{
      this.messageService.add({severity:'error',summary:'Error',detail:error.error.message});
    })
  }
  
}
