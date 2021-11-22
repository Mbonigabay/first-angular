import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName = '';
  isDisabled = true;
  products = ['A Book', 'A Tree'];

  constructor() { 
    setTimeout(() => {
      // this.productName = 'A Tree';
      this.isDisabled = false
    }, 3000);
   }

  ngOnInit(): void {
  }

  onAddProduct(form: any) {
    // this.products.push(this.productName);
    if (form.valid){
      this.products.push(form.value.productName)
    }
  }

  onRemoveProduct(productName: string){
    this.products = this.products.filter(p => p !== productName);
  }

}
