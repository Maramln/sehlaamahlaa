import { Injectable } from '@angular/core';
import {  getAuth, signInWithEmailAndPassword, onAuthStateChanged, User} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {firebaseConfig } from './environments/environment';
import { BehaviorSubject } from 'rxjs';
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc, getDocs } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = getAuth(initializeApp(firebaseConfig));
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable(); // Observable for user state
  afAuth: any;
  storage: any;
  firestore: any;
 
  constructor() { 
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user);
      
    }); 
  }
  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      this.userSubject.next(userCredential.user); // Update user state
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }
  async signup(email: string, password: string, name: string, phone: string, file: File | null) {
    const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    const uid = userCredential.user?.uid;

    let photoURL = '';
    if (file && uid) {
      const filePath = `users/${uid}/profile.jpg`;
      const fileRef = this.storage.ref(filePath);
      await this.storage.upload(filePath, file);
      photoURL = await fileRef.getDownloadURL().toPromise();
    }

    await userCredential.user?.updateProfile({ displayName: name, photoURL });

    // Sauvegarder dans Firestore
    await this.firestore.collection('users').doc(uid).set({
      uid,
      email,
      name,
      phone,
      photoURL,
      createdAt: new Date()
    });
  }
  logout() {
    this.auth.signOut();
    this.userSubject.next(null); // Clear user data on logout
  }
  getUserId() {
    return this.userSubject.value?.uid; // Get the current user ID
  }
  u : users [] =[];
  is=false;
  async isAdmin(){
    
    if(this.getUserId()){
   const app=initializeApp(firebaseConfig);
   const db = getFirestore(app);
   const collectionRef = collection(db, "admins");
   const a = await getDocs(collectionRef) ;
   this.u = a.docs.map(doc => ({ lid: doc.id, ...doc.data() as users}));
   this.u.forEach(e => {
    if(e.id==this.getUserId()){
      this.is=true;
    }
  });
  ;
 }
 return this.is;
 }
}
interface users {
 id:string;
   admin:string;         // Represents the unique ID, e.g., "27"
// Represents the user's first name, e.g., "riheme"
}
