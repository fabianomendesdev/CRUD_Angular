import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../../events/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.showMessage("Produto criado!")
      this.router.navigate(["/products"])
    })
  }

  cancel(): void {
    this.router.navigate(["/products"])
  }

}
