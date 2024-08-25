import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { DataViewModule } from 'primeng/dataview';
import { PokemonService } from './services/pokemon.service';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    DataViewModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  list: string = 'list';

  first: number = 0;
  rows: number = 10;


  items: MenuItem[] | undefined;
  products: any;
  responsiveOptions: any[] | undefined;
  value: string | undefined;



  constructor(private pokemonService: PokemonService) {
    this.value = '';
    this.products = []
  }

  ngOnInit() {
    this.pokemonService.getProductsData().subscribe(data => {
      console.log(data.data)
      this.products = data.data
    });
      this.items = [
        {
            label: 'Cards',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Pokemon',
                    icon: 'pi pi-fw pi-plus',
                    command: () => this.getCards(),
                }
            ]
        },
        {
            label: 'Sets',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Pokemon',
                    icon: 'pi pi-fw pi-align-left',
                    command: () => this.getSets(),
                }
            ]
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

  trackProductId(index: number, product: any): string {
    return product.id;
  }


  onPageChange(event: any){

  }

  getSets(): void {
    this.pokemonService.getSets().subscribe((data: any) => {
      console.log(data.data)
      this.products = data.data
    });
    //this.pokemonService.getCards().pipe(map((value)=>this.products = value))
  }

  getCards(): void {
    this.pokemonService.getCards().subscribe((data: any) => {
      console.log(data.data)
      this.products = data.data
    });
    //this.pokemonService.getSets().pipe(map((value)=>this.products = value))
  }
}
