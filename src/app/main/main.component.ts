import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  selectedItem: any = null;

  recipes = [
    { name: 'Pizza Margherita', image: 'assets/pizza.jpg', details: 'Tomate, mozzarella, basilic' },
    { name: 'Salade César', image: 'assets/salad.jpg', details: 'Poulet, laitue, parmesan' }
  ];

  mealsForSale = [
    { name: 'Tacos Poulet', image: 'assets/tacos.jpg', details: 'Poulet épicé, sauce blanche' },
    { name: 'Couscous', image: 'assets/couscous.jpg', details: 'Semoule, légumes, viande' }
  ];

  showDetails(item: any) {
    this.selectedItem = item;
  }

}
