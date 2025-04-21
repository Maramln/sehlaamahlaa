import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,MatDialogModule,],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  selectedItem: any = null;
  

  recipes = [
    {
      name: 'Pizza Margherita',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Pizza_Margherita_stu_spivack.jpg',
      details: 'Pizza classique avec sauce tomate, mozzarella et basilic.',
      ingredients: 'Pâte à pizza, sauce tomate, mozzarella, basilic',
      steps: '1. Étalez la pâte. 2. Ajoutez sauce et fromage. 3. Cuire au four 15min.'
    },
    {
      name: 'Couscous',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Couscous-01.jpg/800px-Couscous-01.jpg',
      details: 'Semoule, légumes, viande (agneau ou poulet)',
      ingredients: 'Semoule, carottes, courgettes, pois chiches, viande',
      steps: '1. Cuire la viande. 2. Faire les légumes. 3. Cuire la semoule à la vapeur.'
    }
  ];

  mealsForSale = [
    {
      name: 'Salade Méchouia',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Tunisian_mashwiya_salade.jpg',
      details: 'Poivrons grillés, tomates, oignons et thon',
      ingredients: 'Poivrons, tomates, oignons, thon, œuf, huile d’olive',
      steps: '1. Griller les légumes. 2. Mixer grossièrement. 3. Garnir de thon et œuf.'
    },
    {
      name: 'Brik à l’œuf',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Brik_tunisien.jpg',
      details: 'Feuille de brick garnie d’un œuf et frite',
      ingredients: 'Feuilles de brick, œufs, thon, câpres',
      steps: '1. Mettre la garniture. 2. Plier. 3. Frire dans l’huile chaude.'
    }
  ];

 
  constructor(private dialog: MatDialog) {}
  showDetails(item: any): void {
    this.dialog.open(DetailsDialogComponent, {
      data: item,
      width: '400px',
    });
  }

}
