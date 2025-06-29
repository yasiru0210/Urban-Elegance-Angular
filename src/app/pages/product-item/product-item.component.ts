import { Component, Input } from '@angular/core';
import { NgFor, SlicePipe, TitleCasePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [NgFor, SlicePipe, TitleCasePipe, DecimalPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input()
  public productInfo: any;

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }
}