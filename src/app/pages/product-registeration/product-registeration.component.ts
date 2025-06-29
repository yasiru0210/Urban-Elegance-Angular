import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-registeration',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './product-registeration.component.html',
  styleUrl: './product-registeration.component.css'
})
export class ProductRegisterationComponent {
  public product = {
    id: '',
    name: '',
    category: '',
    price: null,
    description: '',
    imageUrl: '',
    stock: null
  };

  public isSubmitting = false;
  public showSuccessMessage = false;

  async register() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.showSuccessMessage = false;

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Product registered:', this.product);
      
      this.showSuccessMessage = true;
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
      
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      this.isSubmitting = false;
    }
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.product = {
      id: '',
      name: '',
      category: '',
      price: null,
      description: '',
      imageUrl: '',
      stock: null
    };
    this.showSuccessMessage = false;
  }
}