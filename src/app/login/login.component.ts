import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private router: Router,
    private messageService:MessageService
  ) {}

  login() {
    // Dummy credentials (frontend only)
    const validUser = 'vivek';
    const validPass = 'vivek';

    if (this.username === validUser && this.password === validPass) {
      // Save token in localStorage
      localStorage.setItem('token', 'dummy-token');
      // Redirect to dashboard
      this.router.navigate(['/dashboard']);
    } else {
      this.messageService.add({severity:'error',summary:'Error',detail:'User not found! Please check username and password'});
    }
  }
}