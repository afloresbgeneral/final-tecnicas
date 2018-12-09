import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-manage-password',
  templateUrl: './manage-password.component.html',
  styleUrls: ['./manage-password.component.scss']
})
export class ManagePasswordComponent implements OnInit {
  public departments = ['Tecnologìa', 'Recursos Humanos',
  'Docencia', 'Administrativo'];

  userModel: UserModel;

  constructor(public router: Router,
              public userService: UserService) {
    this.userModel  = new UserModel('', '', '', '', '', '', '' , 'ROLE_USER', '', '', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.createUser(this.userModel);
  }

  goBack() {
    this.router.navigateByUrl('/home');
  }

}
