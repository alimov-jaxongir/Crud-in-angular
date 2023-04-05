import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class AuthService {
 constructor(private datasource: RestDataSource, private http: HttpClient) {}
 authenticate(username: string, password: string): Observable<boolean> {
 return this.datasource.authenticate(username, password);
 }
 get authenticated(): boolean {
 return this.datasource.auth_token != null;
 }
 clear() {
 this.datasource.auth_token = undefined;
 }

 
}