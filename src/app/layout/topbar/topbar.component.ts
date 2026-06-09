import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  items:any[]=[
    {
      label:'Profile',
      icon:'fa-solid fa-user',
      routerLink:['/login']
    },
    {
      label:'Logout',
      icon:'fa-solid fa-arrow-right',
      command:()=> this.logout()
    }
  ]
  constructor(
    private router:Router
  ){}
  ngOnInit(){}
  logout(){
    this.router.navigate(['/login']);
    localStorage.removeItem('token');    
  }
}
