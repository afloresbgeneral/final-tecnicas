import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AngularFireDatabase } from '../../../../node_modules/angularfire2/database';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.scss']
})
export class ManageEmployeesComponent implements OnInit {
  userModel: UserModel;
  userFound: any;
  userExist = false;

  constructor(public router: Router,
              public userService: UserService,
              public angularFireDataBase: AngularFireDatabase) {
    this.userModel  = new UserModel('', '', '', '', '', '', '' , '', '', '', '');

  }

  ngOnInit() {
  }

  onSubmit() {
    //this.userFound = this.userService.getUser(this.userModel.id);
    this.angularFireDataBase.list('/user', ref => ref.orderByChild('id').equalTo(this.userModel.id))
               .valueChanges().subscribe(user => {
                    this.userFound = user[0];
                    if ( this.userFound.length === 0) {
                      this.userExist = false;
                    } else {
                      this.userExist = true;
                    }
                 });
  }

  renewPassword() {
  }

  goBack() {
    this.router.navigateByUrl('/home');
  }

}
