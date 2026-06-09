import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private productService:ProductService
  ) { }
}
