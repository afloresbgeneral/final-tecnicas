import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { GLOBAL } from './global';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  public users: Array<UserModel> = [
      {
        userName: 'tonyhero',
        _id: 'string',
        id: '111',
        name: 'Anthony',
        lastName: 'Flores',
        email: 'anthony.flores@utp.ac.pa',
        password: '111',
        role: 'user',
        image: 'string',
        department: 'Chofer'
      }, {
        userName: 'juliantz',
        _id: 'string',
        id: '2-22-22',
        name: 'edgar',
        lastName: 'Tuberquia',
        email: 'edgar.tuberquia@utp.ac.pa',
        password: '333',
        role: 'user',
        image: 'string',
        department: 'Cocina'
      }, {
        userName: 'marioelias',
        _id: 'string',
        id: '222',
        name: 'mario',
        lastName: 'Montenegro',
        email: 'mario.montenegro@utp.ac.pa',
        password: 'string',
        role: 'user',
        image: 'string',
        department: 'Amo de casa'
      }
    ];

  constructor(private _http: HttpClient) {
      this.url = GLOBAL.url;
  }



  getUsers() {
      return this.users;
  }

  getUser(id: string) {

      const user: UserModel = this.users
                                  .find((u: UserModel) => u.id === id);
      return user;
  }

}
