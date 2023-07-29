import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  constructor(private fb:FormBuilder,private ps:ProductService,private router:Router){

  }

  ngOnInit(): void {
    
  }

  //model Form for add
  addForm = this.fb.group({
    pid:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pname:[''],
    catId:[''],
    desc:[''],
    price:[''],
    is_available:[''],
    productImg:[''],
    rating:[''],
    review:[''],
    vendorName:[''],
    warranty:['']
  })

  add(){
    var path = this.addForm.value;
    
    var productData = {
      id: path.pid,
      productName: path.pname,
      category: path.catId,
      description: path.desc,
      price: path.price,
      is_available: path.is_available,
      productImage: path.productImg,
      rating: path.rating,
      review: path.review,
      vendorName: path.vendorName,
      warranty: path.warranty
    }

    this.ps.addProduct(productData).subscribe((result:any) => {
      alert("Product added");
      this.router.navigateByUrl("");
    });
  }
  
}
