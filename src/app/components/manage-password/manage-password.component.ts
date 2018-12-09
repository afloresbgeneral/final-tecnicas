import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-password',
  templateUrl: './manage-password.component.html',
  styleUrls: ['./manage-password.component.scss']
})
export class ManagePasswordComponent implements OnInit {
  public departments = ['Tecnologìa', 'Recursos Humanos',
  'Docencia', 'Administrativo'];

  userModel: UserModel;

  constructor(public router: Router) {
    this.userModel  = new UserModel('', '', '', '', '', '', '' , 'ROLE_USER', '', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userModel);
  }

  goBack() {
    this.router.navigateByUrl('/home');
  }

}
