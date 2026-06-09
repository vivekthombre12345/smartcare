import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, copyArrayItem ,transferArrayItem} from '@angular/cdk/drag-drop';
import { ProductService } from '../services/product.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-estimate-master',
  templateUrl: './estimate-master.component.html',
  styleUrls: ['./estimate-master.component.css'],
  providers: [MessageService]
})
export class EstimateMasterComponent implements OnInit {

  allProducts: any[] = [];
  estimateItems: any[] = [];

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (res: any) => this.allProducts = res,
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error?.message || 'Failed to load products'
        });
      }
    });
  }

 drop(event: CdkDragDrop<any[]>) {

  // LEFT → RIGHT
  if (event.previousContainer !== event.container) {

    transferArrayItem(
      event.previousContainer.data, // allProducts
      event.container.data,          // estimateItems
      event.previousIndex,
      event.currentIndex
    );

    const item = this.estimateItems[event.currentIndex];

    // default values set
    item.qty = 1;
    item.total = item.qty * item.assignedPrice;
  }
}

removeItem(index: number) {

  // 1️⃣ estimate se remove
  const removedItem = this.estimateItems.splice(index, 1)[0];

  // 2️⃣ product list me wapas add
  this.allProducts.push({
    ...removedItem,
    qty: undefined,
    total: undefined
  });
}


  updateTotal(item: any) {
    item.total = item.qty * item.assignedPrice;
  }

  getGrandTotal() {
    return this.estimateItems.reduce((sum, item) => sum + (item.total || 0), 0);
  }
}
