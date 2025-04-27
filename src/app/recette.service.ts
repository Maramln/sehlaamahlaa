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
import { RecetteModule } from './recette/recette.module';

// Define your Recette model
export interface Recette {
  id: string;
  nom: string;
  ingredients: string[];
  steps: string[];
  details: string[];
}

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  private app: FirebaseApp;
  private db: Firestore;
  private recettesCol: CollectionReference<DocumentData>;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.recettesCol = collection(this.db, 'recette');
  }

  async addRecette(recette: Recette): Promise<void> {
    const recetteRef = doc(this.recettesCol, recette.id);
    await setDoc(recetteRef, {
      nom: recette.nom,
      ingredients: recette.ingredients,
      steps: recette.steps,
      details: recette.details
    });
  }

  async getRecetteById(id: string): Promise<Recette | null> {
    const snap = await getDoc(doc(this.recettesCol, id));
    if (!snap.exists()) return null;
    const data = snap.data();
    return { id, nom: data['nom'], ingredients: data['ingredients'], steps: data['steps'], details: data['details'] };
  }

  async getAllRecettes(): Promise<Recette[]> {
    const querySnap = await getDocs(this.recettesCol);
    return querySnap.docs.map(d => {
      const data = d.data();
      return { id: d.id, nom: data['nom'], ingredients: data['ingredients'], steps: data['steps'], details: data['details'] };
    });
  }
}
