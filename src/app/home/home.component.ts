import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { ProductService } from './services/product.service';
import { Product } from './models/products.interface';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, InputTextModule, CarouselModule, TagModule, ButtonModule],
  providers: [ProductService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  value: Event | undefined;
  products: Product[];

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) {
    this.products = []
  }

  ngOnInit() {
      this.productService.getProductsSmall().then((products) => {
          this.products = products;
      });

      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }

  getSeverity(status: string): string | undefined {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          case 'OUTOFSTOCK':
              return 'danger';
          default:
            return '';
      }
  }
}
