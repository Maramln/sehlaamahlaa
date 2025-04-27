import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MealsforsaleModule { 
  id: string | undefined;
  nom: string | undefined;
  ingredients: string[] | undefined;
  steps: string[] | undefined;
  details: string[] | undefined;

}
