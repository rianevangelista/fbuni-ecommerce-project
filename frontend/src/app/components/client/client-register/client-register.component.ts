import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from './../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})

export class ClientRegisterComponent implements OnInit {
  
  client: Client = {
    email: '',
    senha: ''
  }
  constructor(private clientService: ClientService, 
    private router: Router) { }

  ngOnInit(): void {
    
  }

  registerClient(): void {
    this.clientService.register(this.client).subscribe(() => {
      this.clientService.showMessage('Cliente registrado com sucesso!')
      this.router.navigate(['/']);
    })
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
