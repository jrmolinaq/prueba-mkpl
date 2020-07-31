import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './interfaces/product.interface';

declare const Liferay: any;

@Component({
	templateUrl: 
		Liferay.ThemeDisplay.getPathContext() + 
		'/o/prueba-mkpl/app/app.component.html',
	styleUrls: [
		Liferay.ThemeDisplay.getPathContext() + 
		'/o/prueba-mkpl/css/application.scss']
})
export class AppComponent implements OnInit{
	paginator: Product[];
	subsidiaryId: number;
	canUpdateInventory: boolean;

	constructor(private productService: ProductService) {}

	ngOnInit(): void {
		// TODO: ver si tiene permiso para actualizar inventario
		this.canUpdateInventory = true;
  
		// TODO: traer el subsidiaryId
		this.subsidiaryId = 5;
  
		this.paginator = this.productService.getProductList(this.subsidiaryId);
	}

	onUpload() {
	  this.paginator = this.productService.getProductList(this.subsidiaryId);
	}
}
