import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.scss']
})
export class ManageEmployeesComponent implements OnInit {
  userModel: UserModel;
  userFound: UserModel;
  userExist = true;

  constructor(public router: Router,
              public userService: UserService) {
    this.userModel  = new UserModel('', '', '', '', '', '', '' , '', '', '', '');

  }

  ngOnInit() {
  }

  onSubmit() {
    this.userFound = this.userService.getUser(this.userModel.id);
    if (!this.userFound) {
      this.userExist = false;
    }
    console.log(this.userFound);
  }

  goBack() {
    this.router.navigateByUrl('/home');
  }

}
