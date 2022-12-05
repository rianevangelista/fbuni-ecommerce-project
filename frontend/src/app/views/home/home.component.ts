import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {

  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
  
  navigateToClientRegister(): void {
    this.router.navigate(['/clients/register'])
  }
}
