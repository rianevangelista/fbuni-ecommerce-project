import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs/internal/Observable";
import { Client } from "./client.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "http://localhost:3001/clients"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  register(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client)
  }
}