import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userModel: UserModel;

  constructor(
    public router: Router
  ) {
    this.userModel  = new UserModel('', '', '', '', '', '' , 'ROLE_USER', '');

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submited');
    this.router.navigateByUrl('/home');
  }
}
