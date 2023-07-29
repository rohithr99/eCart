import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  //create an object for behaviour subject 
  search = new BehaviorSubject("");
  

  constructor(private http: HttpClient) { }


  //api to get all products
  getAllProduct(){
    return this.http.get('http://localhost:8002/products');
  }

  //api to get single product 
  getProduct(pid: any){
    return this.http.get('http://localhost:8002/products/'+pid);
  }
  
  //add product api
  addProduct(productObject:any){
    return this.http.post('http://localhost:8002/products',productObject);
  }

  //api to update product
  updateProduct(pid :any, productObject :any){
    return this.http.put("http://localhost:8002/products/"+pid,productObject);
  }

  //api to delete a product
  deleteProduct(pid :any){
    return this.http.delete('http://localhost:8002/products/'+pid);
  }

}
