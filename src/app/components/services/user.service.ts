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
        password: 'jmj',
        role: 'user',
        image: 'string',
        department: 'Chofer',
        courseStatus: 'Aprobado'
      }, {
        userName: 'juliantz',
        _id: 'string',
        id: '222',
        name: 'edgar',
        lastName: 'Tuberquia',
        email: 'edgar.tuberquia@utp.ac.pa',
        password: 'ganzo',
        role: 'user',
        image: 'string',
        department: 'Cocina',
        courseStatus: 'Aprobado'

      }, {
        userName: 'marioelias',
        _id: 'string',
        id: '333',
        name: 'Mario',
        lastName: 'Montenegro',
        email: 'mario.montenegro@utp.ac.pa',
        password: 'sara',
        role: 'user',
        image: 'string',
        department: 'Amo de casa',
        courseStatus: 'Reprobado'
      },  {
        userName: 'Juank',
        _id: 'string',
        id: '444',
        name: 'Juan',
        lastName: 'Castro',
        email: 'juan.castro@utp.ac.pa',
        password: 'fotosintesis',
        role: 'user',
        image: 'string',
        department: 'Leyes',
        courseStatus: 'Pendiente'
      } , {
        userName: 'Mariok',
        _id: 'string',
        id: '555',
        name: 'Mario',
        lastName: 'kirven',
        email: 'mario.kirven@utp.ac.pa',
        password: 'tavivo?',
        role: 'user',
        image: 'string',
        department: 'chistes',
        courseStatus: 'Pendiente'

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

  createUser(user: UserModel) {
      console.log(user, 'creando usuario desde el servicio');
  }

}
