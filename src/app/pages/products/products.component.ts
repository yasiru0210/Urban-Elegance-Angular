import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemComponent, NgFor, NgIf, FormsModule, TitleCasePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  public ProductList: any[] = [];
  public filteredProducts: any[] = [];
  public categories: string[] = [];
  public searchTerm: string = '';
  public selectedCategory: string = '';
  public isLoading: boolean = true;

  ngOnInit(): void {
    this.loadProductInfo();
  }

  async loadProductInfo() {
    try {
      this.isLoading = true;
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      
      this.ProductList = data;
      this.filteredProducts = [...this.ProductList];
      this.extractCategories();
      
      console.log(`Loaded ${this.ProductList.length} products`);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      this.isLoading = false;
    }
  }

  extractCategories() {
    const categorySet = new Set(this.ProductList.map(product => product.category));
    this.categories = Array.from(categorySet);
  }

  onSearch() {
    this.filterProducts();
  }

  onCategoryChange() {
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.ProductList.filter(product => {
      const matchesSearch = !this.searchTerm || 
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesCategory = !this.selectedCategory || 
        product.category === this.selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }

  trackByProductId(index: number, product: any): number {
    return product.id;
  }
}