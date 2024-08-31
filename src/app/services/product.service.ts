import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';
import { minesweeperResponse } from '../models/minesweeperResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<minesweeperResponse>{
    let test = this.http.get<minesweeperResponse>('http://localhost:5282/v1/Game?Width=6&Height=5&NumberOfMines=7');
    return test; 
  }
  
}
