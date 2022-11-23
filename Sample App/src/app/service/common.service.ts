import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
dataFromLogin=new EventEmitter<string>();
  constructor(private http:HttpClient) { }
  dataFromLoginComponent(data:string){
    this.dataFromLogin.next(data);
  }

  userLogin(){
    return this.http.get<Array<any>>('https://6369cabe28cd16bba7247496.mockapi.io/login');
  }
}
