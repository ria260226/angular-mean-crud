// edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product: any;
  products: any;
  angForm: FormGroup;
  public page = 1;
  public page1;
   public limit = 1;
  title = 'Edit Product';
  constructor(private route: ActivatedRoute, private router: Router, private service: ProductService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }
  getProducts() {
    this.service.getProducts(this.page,this.limit).subscribe(res => {
      this.products = res;
      if (res != "") {
        this.router.navigate(['index']);
      }
    });
  }
  updateProduct(name, price) {
    this.route.params.subscribe(params => {
      this.service.updateProduct(name, price, params['id']);
      this.getProducts();

    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.product = this.service.editProduct(params['id']).subscribe(res => {
        this.product = res;
      });
    });
  }
}