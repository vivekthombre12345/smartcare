import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../utils';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http:HttpClient
  ) { }

  url= BASE_URL


  // product apis
  
  createProduct(payload:any){
    let url = `${this.url}/products`
    return this.http.post(url,payload);
  }

  getProducts(){
    let url = `${this.url}/products`
    return this.http.get(url);
  }

  deleteProduct(productId:any){
    let url = `${this.url}/products/${productId}`
    return this.http.delete(url);
  }

  updateProduct(productData:any,productId:any){
    let url = `${this.url}/products/${productId}`
    return this.http.put(url,productData);
  }

  // Units api

   createUnit(payload:any){
    let url = `${this.url}/units`
    return this.http.post(url,payload);
  }

  getUnits(){
    let url = `${this.url}/units`
    return this.http.get(url);
  }

  deleteUnit(unitId:any){
    let url = `${this.url}/units/${unitId}`
    return this.http.delete(url);
  }

  updateUnit(unitData:any,unitId:any){
    let url = `${this.url}/units/${unitId}`
    return this.http.put(url,unitData);
  }

  saveEstimate(payload:any){
    let url = `${this.url}/myEstimates`
    return this.http.post(url,payload);
  }

  getMyEstimates(){
    let url = `${this.url}/myEstimates`
    return this.http.get(url);
  }

}
