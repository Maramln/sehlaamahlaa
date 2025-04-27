import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RecetteModule { 
  id: string | undefined;
  nom: string | undefined;
  ingredients: string[] | undefined;
  steps: string[] | undefined;
  details: string[] | undefined;
}
