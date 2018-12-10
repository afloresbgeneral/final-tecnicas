import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AngularFireDatabase } from '../../../../node_modules/angularfire2/database';

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
              public userService: UserService,
              public angularFireDataBase: AngularFireDatabase) {
    this.userModel  = new UserModel('', '', '', '', '', '', '' , 'ROLE_USER', '', '', '');
  }

  ngOnInit() {
  }

  onSubmit() {
  //  this.userService.createUser(this.userModel);




  this.userModel.password = this.randomPassword();
  this.userModel.courseStatus = 'Pendiente';
  this.angularFireDataBase.list('/user').push(this.userModel);



  this.userService.toastMessage('Aviso', 'Usuario creado correctamente');

  }

  goBack() {
    this.router.navigateByUrl('/home');
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

}
