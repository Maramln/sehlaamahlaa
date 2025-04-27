import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';
import { RecetteService } from '../recette.service';
import { MealsService } from '../meals.service';
import { RecetteModule } from '../recette/recette.module';
import { MealsforsaleModule } from '../mealsforsale/mealsforsale.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  recipes: RecetteModule[] = [];
  mealsForSale: MealsforsaleModule[] = [];
  selectedItem: any = null;

  constructor(
    private recetteService: RecetteService,
    private mealsService: MealsService,
    private dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.recipes = await this.recetteService.getAllRecettes();
    this.mealsForSale = await this.mealsService.getAllMeals();
  }
  
  showDetails(item: any): void {
    this.dialog.open(DetailsDialogComponent, {
      data: item,
      width: '400px',
    });
  }
}
