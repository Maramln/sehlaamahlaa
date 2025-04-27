import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import {
  Firestore,
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  DocumentData,
  CollectionReference,
} from 'firebase/firestore';
import { firebaseConfig } from './environments/environment';
import { MealsforsaleModule } from './mealsforsale/mealsforsale.module';
export interface Meals {
  id: string;
  nom: string;
  ingredients: string[];
  steps: string[];
  details: string[];
}
@Injectable({
  providedIn: 'root'
})
export class MealsService {
  private app: FirebaseApp;
  private db: Firestore;
  private MealsCol: CollectionReference<DocumentData>;

  constructor() { 
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.MealsCol = collection(this.db, 'mealforsales');
  }
   async addMeals(meals:Meals): Promise<void> {
      const mealsRef = doc(this.MealsCol, meals.id);
      await setDoc(mealsRef, {
        nom:meals.nom,
        ingredients: meals.ingredients,
        steps:meals.steps,
        details:meals.details
      });
    }
     async getMealsById(id: string): Promise<Meals | null> {
        const snap = await getDoc(doc(this.MealsCol, id));
        if (!snap.exists()) return null;
        const data = snap.data();
        return { id, nom: data['nom'], ingredients: data['ingredients'], steps: data['steps'], details: data['details'] };
      }
    
      async getAllMeals(): Promise<Meals[]> {
        const querySnap = await getDocs(this.MealsCol);
        return querySnap.docs.map(d => {
          const data = d.data();
          return { id: d.id, nom: data['nom'], ingredients: data['ingredients'], steps: data['steps'], details: data['details'] };
        });
      }
}
