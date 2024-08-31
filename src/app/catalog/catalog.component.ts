import { Component, inject } from '@angular/core';
import { IProduct } from '../models/product.model';
import { CommonModule, NgFor } from '@angular/common';
import { ProductComponent } from "../product/product.component";
import { ProductService } from '../services/product.service';
import { minesweeperResponse } from '../models/minesweeperResponse.model';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgFor, ProductComponent, CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  providers: [ProductService]
})
export class CatalogComponent {
  products!: IProduct[];
  minesweeperResponse!: minesweeperResponse;
  private productService = inject(ProductService);

  constructor() 
  { 
    this.productService.getProducts().subscribe(minesweeperResponse => {
      this.minesweeperResponse = minesweeperResponse;
    })
  }
}
