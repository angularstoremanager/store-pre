import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardType } from '../../enum/card-type.enum';
import { Router } from '@angular/router';


@Component({
  selector: 'app-catalog-card',
  template: `
    <div
      class="flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4"
      [class]="customClass">
      <img
        src= '{{"assets/img/" + type + ".webp"}}'
        width="200px" />

      <section>

      </section>

      <button
        class="rounded-sm border border-blue-500 bg-blue-300 p-2"
        (click)="goTo()">
        Add
      </button>
    </div>
  `,
  standalone: true,
  imports: [NgIf, NgFor],
})
export class CardComponent {
  @Input() list: any[] | null = null;
  @Input() type!: CardType;
  @Input() customClass = '';

  CardType = CardType;

  constructor(
    private router: Router
  ) {}

  goTo(){
    this.router.navigate(['/', this.type]);
  }
}
