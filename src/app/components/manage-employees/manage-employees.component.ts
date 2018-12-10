import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AngularFireDatabase, AngularFireList } from '../../../../node_modules/angularfire2/database';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.scss']
})
export class ManageEmployeesComponent implements OnInit {
  userModel: UserModel;
  userFound: any;
  userExist = false;
  prubaList: AngularFireList<any>;

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
  let userKey = '';
         this.angularFireDataBase.database.ref('/user/')
           .orderByChild('id')
           .equalTo(this.userModel.id)
           .once('value', function(snapshot) {
            userKey = Object.keys(snapshot.val())[0];
         });
         this.angularFireDataBase.database.ref('user/' + userKey).update({
          password: this.userService.randomPassword()
      });

      this.userService.toastMessage('Aviso', 'Se ha restaurado la contraseña correctamente');

  }

  goBack() {
    this.router.navigateByUrl('/home');
  }

}
