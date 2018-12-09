import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { AngularFireDatabase } from '../../../../node_modules/angularfire2/database';
import { Observable } from '../../../../node_modules/rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userModel: UserModel;
  users: any;
 // users: Observable<any[]>;
  constructor(
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
    this.router.navigateByUrl('/home');
  }
}
