import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { firebaseConfig} from '../environments/environment';
import { initializeApp } from 'firebase/app';
import { FirebaseError } from 'firebase/app';
import { MatDialogRef} from '@angular/material/dialog';
import { getAuth,sendPasswordResetEmail } from 'firebase/auth';
 
@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [ CommonModule,FormsModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {
  constructor (public dialogRef: MatDialogRef<ResetpasswordComponent>){}
  email='';
  error=false;
  closeModal(x:boolean): void {
    this.dialogRef.close(x);
    }
  resetEmailSent = false;
  resetError: string | null = null;
  auth = getAuth(initializeApp(firebaseConfig));
  async sendMail(){
    this.error=false;
    console.log(this.email)
    this.resetEmailSent = false;
    this.resetError = null;

    try {
      await sendPasswordResetEmail(this.auth, this.email);
      this.resetEmailSent = true;
    } catch (error) {
      this.error=true;
      this.resetError = (error as FirebaseError).code === 'auth/user-not-found'
        ? 'No account with this email address was found.'
        : 'Error sending reset email. Please try again.';
      console.error('Reset password error:', error);
    }
    if(!this.error){this.closeModal(true);}
  }

}
