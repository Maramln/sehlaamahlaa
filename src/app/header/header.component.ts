import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ MatDialogModule,LoginComponent,SignupComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }

  sidebarOpen = false;
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}

