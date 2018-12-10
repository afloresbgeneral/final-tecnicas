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

  constructor(public router: Router,
              public userService: UserService,
              public angularFireDataBase: AngularFireDatabase) {
    this.userModel  = new UserModel('', '', '', '', '', '', '' , '', '', '', '');

  }

  ngOnInit() {
  }

  onSubmit() {
    this.angularFireDataBase.list('/user', ref => ref.orderByChild('id').equalTo(this.userModel.id))
               .valueChanges().take(1).subscribe(user => {
                    this.userFound = user[0];
                      console.log(user.length, 'serrr');
                    if (user.length === 0) {
                      this.userExist = false;
                      console.log('userexist', this.userExist)

                    } else {
                      this.userExist = true;
                      this.showProfile = true;
                    }
                 }, error => {
                   console.log(error);
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
