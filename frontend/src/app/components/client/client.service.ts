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

  read(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl)
  }

  readById(id: number): Observable<Client> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Client>(url)
  }

  update(client: Client): Observable<Client> {
    const url = `${this.baseUrl}/${client.id}`
    return this.http.put<Client>(url, client)
  }

  register(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client)
  }

  delete(id: number): Observable<Client> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Client>(url);
  }
}