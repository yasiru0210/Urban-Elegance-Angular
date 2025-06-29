import { Component } from '@angular/core';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public header: string = "Shop More. With Love.";

  changeheader() {
    this.header = this.header === "Shop More. With Love." ? "Let's Go Shopping!" : "Shop More. With Love.";
  }
}