import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { AngularFireDatabase } from '../../../../node_modules/angularfire2/database';
import { Observable } from '../../../../node_modules/rxjs';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userModel: UserModel;
  users: any;
  emailCheck: string;
  passwordCheck: string;
  userFound: any;
 // users: Observable<any[]>;
  constructor(
    public userService: UserService,
    public router: Router,
    public angularFireDataBase: AngularFireDatabase
  ) {


  this.users = angularFireDataBase.list('/user').valueChanges().subscribe(user => {
    this.users = user;
    console.log(this.users, 'Usuarios desde firebase');
  });

    this.userModel  = new UserModel('', '', '', '', '', '', '' , 'ROLE_USER', '', '', '');

  }

  ngOnInit() {
  }

  onSubmit() {

    this.angularFireDataBase.list('/user', ref => ref.orderByChild('email').equalTo(this.emailCheck))
               .valueChanges().subscribe(user => {
                  this.userFound = user;
                console.log(user, 'userrr');
                    if ( user.length === 0) {
                      this.userService.toastErrorMessage('Error', 'El usuario no existe');
                    } else if (this.userFound[0].password !== this.passwordCheck ) {
                      this.userService.toastErrorMessage('Error', 'La contraseña no coincide');
                    }  else if (this.userFound[0].role !== 'admin' ) {
                      this.userService.toastErrorMessage('Error', 'No tiene permisos para ver esta pagina');
                    } else {
                      this.router.navigateByUrl('/home');
                    }
                 });
  }



  }

