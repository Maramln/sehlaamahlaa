import { Component } from '@angular/core';
import {firebaseConfig} from "./environments/environment";
import * as fb from 'firebase/firestore';
import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc } from "firebase/firestore";
import { isPlatformBrowser } from '@angular/common';
import {  Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { title } from "process";
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, SignupComponent,HeaderComponent,MainComponent,FooterComponent, CommonModule,ResetpasswordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sehla_mehla';
}
