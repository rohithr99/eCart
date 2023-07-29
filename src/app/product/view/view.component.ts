import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductComponent } from '../product.component';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  pid:any;
  pdata: any ={};
  //activatedRoute -- for getting data from url
  constructor(private ar:ActivatedRoute,private ps:ProductService, private router:Router){

  }

  ngOnInit(): void {
  this.ar.params.subscribe((data:any) => {
    // console.log(data.id);
    this.pid = data.id;
    console.log(this.pid);
  })    

  //api call
  this.ps.getProduct(this.pid).subscribe((result:any)=>{
    this.pdata = result;
    console.log(this.pdata);
    
  })
  }

  deleteProduct(){
    this.ps.deleteProduct(this.pid).subscribe((result: any) => {
      alert("product deleted successfully");
      this.router.navigateByUrl("");
    })
  }

}
