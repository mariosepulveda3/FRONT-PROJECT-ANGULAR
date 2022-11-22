import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  constructor(private router: Router, private http: HttpClient) { }

  getToken(){
    return localStorage.getItem('token')
  }

  isLogged(){
    let token = localStorage.getItem('token');
    if(token){
      this.checkSession().subscribe((data:any) => {
       if(data._id){
        this.isLoggedIn = true;
       }
      })      
    }
  }

  checkSession(){
    return this.http.get('https://back-project-angular-fnlk5fxa9-mariosepulveda3.vercel.app/users/checkSession').pipe(
      catchError(this.handleError)
    )
  }

  logout(){
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  login(user: any){
    return this.http.post('https://back-project-angular-fnlk5fxa9-mariosepulveda3.vercel.app/users/login', user)
  }

  register(user: any){
    return this.http.post('https://back-project-angular-fnlk5fxa9-mariosepulveda3.vercel.app/users/postNewUser', user)
  }

  handleError(error: HttpErrorResponse){
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    return throwError(error.error)   
  }
}
