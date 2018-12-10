import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { GLOBAL } from './global';
import { UserModel } from '../../models/user.model';
import { AngularFireDatabase } from '../../../../node_modules/angularfire2/database';
import { ToastrService } from '../../../../node_modules/ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
   users: any;
  // public users: Array<UserModel> = [];

  constructor(private _http: HttpClient,
              public angularFireDataBase: AngularFireDatabase,
              public toastrService: ToastrService,
  ) {
      this.url = GLOBAL.url;
  }



  public getUsers() {
     this.angularFireDataBase.list('/user').valueChanges().subscribe(user => {
      this.users = user;
      console.log(this.users, 'Usuarios desde firebase');
      return this.users;
    });

  }

  getUser(id: string) {

      const user: UserModel = this.users
                                  .find((u: UserModel) => u.id === id);
      return user;
  }

  createUser(user: UserModel) {
      console.log(user, 'creando usuario desde el servicio');
  }

  randomPassword() {
    const length = 10;
    const chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890';
    let pass = '';
    for (let x = 0; x < length; x++) {
        const i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

 toastMessage(title: string, message: string) {
  this.toastrService.success(message, title, {
    positionClass: 'toast-top-left'
  });
 }

 toastErrorMessage(title: string, message: string) {
  this.toastrService.error(message, title, {
    positionClass: 'toast-top-left'
  });
 }

}
