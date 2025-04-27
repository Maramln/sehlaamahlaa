import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Auth } from 'firebase/auth';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: [''],
      phone: [''],
      email: [''],
      password: ['']
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async signup() {
    const { email, password, name, phone } = this.signupForm.value;

    try {
      await this.authService.signup(email, password, name, phone, this.selectedFile);
      alert('Compte créé avec succès !');
      this.router.navigate(['/login']); // ou vers la page d'accueil
    } catch (error: any) {
      alert('Erreur : ' + error.message);
    }
  }
}
