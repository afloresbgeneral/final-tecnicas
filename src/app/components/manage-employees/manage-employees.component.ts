import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AngularFireDatabase, AngularFireList } from '../../../../node_modules/angularfire2/database';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.scss']
})
export class ManageEmployeesComponent implements OnInit {
  userModel: UserModel;
  userFound: any;
  userExist = true;
  showProfile = false;
  prubaList: AngularFireList<any>;
  paths = 'user/';

  constructor(public router: Router,
              public userService: UserService,
              public angularFireDataBase: AngularFireDatabase) {
    this.userModel  = new UserModel('', '', '', '', '', '', '' , '', '', '', '');

  }

  ngOnInit() {
  }

  onSubmit() {
    const self = this;
    this.angularFireDataBase.list('/user', ref => ref.orderByChild('id').equalTo(this.userModel.id))
               .valueChanges().take(1).subscribe(user => {
                    this.userFound = user[0];
                    if (user.length === 0) {
                      this.userExist = false;
                    } else {
                      this.userExist = true;
                      this.showProfile = true;
                    }
                 }, error => {
                   console.log(error);
                 });

                 //obteniendo path
                 let userKey = '';
                 this.angularFireDataBase.database.ref('/user/')
                   .orderByChild('id')
                   .equalTo(this.userModel.id)
                   .once('value', function(snapshot) {
                    userKey = Object.keys(snapshot.val())[0];
                    console.log(userKey, 'userKey');
                    console.log(self.paths);
                    self.paths = self.paths.concat(userKey);
                    console.log(self.paths, 'el path');
                 });
                 //obteniendo path
  }

  renewPassword() {

         this.angularFireDataBase.database.ref(this.paths).update({
          password: this.userService.randomPassword()
      });
      this.userService.toastMessage('Aviso', 'Se ha restaurado la contraseña correctamente');

  }

  goBack() {
    this.router.navigateByUrl('/home');
  }

}
