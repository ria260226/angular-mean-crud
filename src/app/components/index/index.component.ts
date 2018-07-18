import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  products: any;
  public page = 1;
  public page1;
  public limit = 4;
  public data;
  public totalproducts;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  constructor(private http: HttpClient, private service: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProducts(this.page, this.limit);
  }

  getProducts(page, limit) {
    page = this.page;
    limit = this.limit;
    this.service.getProducts(page,limit).subscribe(res => {

      this.data = res;
      console.log('ressss',this.data);
      if (this.data) {
        this.totalproducts = this.data.totalproducts;
       
        this.products = this.data.products;
      }


    });
  }
  deleteProduct(id) {
    this.service.deleteProduct(id).subscribe(res => {
      // console.log('Deleted');
      this.getProducts(this.page, this.limit);
    });
  }
  pageChanged(page) {
    this.page = page.pageIndex;
    this.limit = page.pageSize;
    this.page1 = this.page + 1;
    this.service.getProducts(this.page1,this.limit).subscribe(res => {
      this.data = res;
      console.log('ressss',this.data);
      if (this.data) {
        this.totalproducts = this.data.totalproducts;
        this.products = this.data.products;
      }


    });
  }
}
