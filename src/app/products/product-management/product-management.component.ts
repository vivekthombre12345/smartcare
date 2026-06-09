import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EditableRow } from 'primeng/table';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css'],
  providers:[MessageService]
})
export class ProductManagementComponent {
  allProducts:any[]=[];
  productFormVisible:boolean = false;
  productForm!:FormGroup;
  selectedProduct:any;
  editMode: boolean=false;
  allUnits: any;
  constructor(
    private fb:FormBuilder,
    private productService:ProductService,
    private messageService:MessageService
  ){}
  ngOnInit(){
    this.initProductForm();
    this.getProducts();
    this.getUnits();
  }

  openCreateProductForm(){
    this.productFormVisible = true;
  }
  initProductForm(){
    this.productForm = this.fb.group({
      productName:['',Validators.required],
      unitName:['',Validators.required],
      brandName:['',Validators.required],
      price:['',Validators.required],
      assignedPrice:['',Validators.required],
      image:['']
    })
  }

  createProduct(){
    let payload;
    payload = this.productForm.value;
    payload = {
      ...payload,
      createdOn:new Date().getTime()
    }

    this.productService.createProduct(payload).subscribe((res:any)=>{
      this.productFormVisible = false;
      this.productForm.reset();
      this.getProducts();
      this.messageService.add({severity:'success',summary:'Success',detail:'Product successfully created '});
    },(error:any)=>{
      this.messageService.add({severity:'error',summary:'Error',detail:error.error.message});
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe((res:any)=>{
      this.allProducts = res;
    },(error:any)=>{
      this.messageService.add({severity:'error',summary:'Error',detail:error.error.message});
    })
  }

  deleteProduct(productId:any){
    this.productService.deleteProduct(productId).subscribe((res:any)=>{
      this.messageService.add({severity:'success',summary:'Success',detail:'Product successfully deleted '});
      this.getProducts();
    },(error:any)=>{
      this.messageService.add({severity:'error',summary:'Error',detail:error.error.message});
    })
  }
  editProduct(productData:any){
    this.editMode = true;
    this.selectedProduct = productData;
    console.log(this.selectedProduct);
    this.productForm.patchValue({
      productName:productData?.productName,
      brandName:productData?.brandName,
      unitName:productData?.unitName,
      price:productData?.price,
      assignedPrice:productData?.assignedPrice,
      image:productData?.image
    })
    this.productFormVisible = true;
  }

  updateProduct(){
    let payload;
    let formData = this.productForm.value;
    payload = {
      ...formData,
      createdOn:this.selectedProduct.createdOn
    }    
    this.productService.updateProduct(payload,this.selectedProduct.id).subscribe((res:any)=>{
      this.messageService.add({severity:'success',summary:'Success',detail:'Product successfully updated '});
      this.getProducts();
      this.productFormVisible = false;
    },(error:any)=>{
      this.messageService.add({severity:'error',summary:'Error',detail:error.error.message});
    })
  }

  hideProductForm(){
    this.productForm.reset();
    this.editMode = false;
  }

   getUnits(){
     this.productService.getUnits().subscribe((res:any)=>{
      this.allUnits = res;
      console.log(this.allUnits);
    },(error:any)=>{
      this.messageService.add({severity:'error',summary:'Error',detail:error.error.message});
    })
  }

  onImageSelect(event: any) {
  const file = event.target.files[0];
  if (!file) return;  
  const imagePath = `assets/images/${file.name}`;
  this.productForm.patchValue({
    image: imagePath
  });
}


 
}
