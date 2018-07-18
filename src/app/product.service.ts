import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { cloneDeep } from 'lodash';
const types = ['success', 'error', 'info', 'warning'];
@Injectable()
export class ProductService {
  private lastInserted: number[] = [];
  options: any;
  result: any;
  page: number;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private toastrService: ToastrService) { }

  addProduct(name, price) {
    const uri = 'http://localhost:8080/products/add';
    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
      // console.log(res['statusCode'],'resss')
      //  this.router.navigate(['index'])
      {
        if (res['statusCode'] == "200") {
          let m = 'Product Added Succesfully!!';
          let t = '';
          const opt = cloneDeep(this.options);
          const inserted = this.toastrService[types[0]](m, t, opt);
          if (inserted) {
            this.lastInserted.push(inserted.toastId);
          }
          this.router.navigate(['index'])
        }
      });
  }
  getProducts(page,limit) {
    // console.log('service now',page);
    // console.log('service now limit',limit);
    const uri = 'http://localhost:8080/products/page='+page+'/limit='+limit;
 //   console.log('uri',uri);
    return this
      .http
      .get(uri)
      .map(res => {
        
        return res;
      });
  }

  editProduct(id) {
    const uri = 'http://localhost:8080/products/edit/' + id;
    return this
      .http
      .get(uri)
      .map(res => {
      
        return res;
      
      });
  }
  updateProduct(name, price, id) {
    const uri = 'http://localhost:8080/products/update/' + id;
    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => {
        if (res['statusCode'] == "200") {
          let m = 'Product Updated Succesfully!!';
          let t = '';
          const opt = cloneDeep(this.options);
          const inserted = this.toastrService[types[0]](m, t, opt);
          if (inserted) {
            this.lastInserted.push(inserted.toastId);
          }
          this.router.navigate(['index']);
        }
      });
  }
  deleteProduct(id) {
    const uri = 'http://localhost:8080/products/delete/' + id;
    return this
      .http
      .get(uri)
      .map(res => {
       // console.log('delete res', res);
        if (res['statusCode'] == "200") {
          let m = 'Product Deleted Succesfully!!';
          let t = '';
          const opt = cloneDeep(this.options);
          const inserted = this.toastrService[types[0]](m, t, opt);
          if (inserted) {
            this.lastInserted.push(inserted.toastId);
          }
          this.router.navigate(['index'])
        }
      });
  }


}