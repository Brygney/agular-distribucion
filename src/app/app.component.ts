import { Component } from '@angular/core';
import { Product } from './model/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agular-distribucion';
  p_producto: string = "";
  p_imagen: string = "";
  p_estado: string ="";
  products: Product[] = [{
    producto: "parquet",
    imagen: "https://media.istockphoto.com/photos/sample-of-wood-chipboard-wooden-laminate-veneer-material-for-interior-picture-id1135678299?b=1&k=20&m=1135678299&s=612x612&w=0&h=JVmRpRls_0Pq9f5GT2EPtmWXbzlLMXGlKX6L4YOuKU8=",
    estado: "Entregado"
  }];
  
  addProduct(): void{
    const newProduct ={
      producto: this.p_producto,
      imagen: this.p_imagen,
      estado: this.p_estado
    }
    this.products.push(newProduct);
    this.p_producto = "";
    this.p_imagen = "";
    this.p_estado="";
  }
  deleteProduct(position: number): void{
    this.products.splice(position,1);
  }
}
