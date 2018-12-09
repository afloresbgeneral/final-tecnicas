import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '../../../../node_modules/angularfire2/database';

@Component({
  selector: 'app-final-report',
  templateUrl: './final-report.component.html',
  styleUrls: ['./final-report.component.scss']
})
export class FinalReportComponent implements OnInit {

  public users: any = [];

  constructor( public userService: UserService,
                public router: Router,
                public angularFireDataBase: AngularFireDatabase) {

              //  this.angularFireDataBase.list('/user', ref => ref.orderByChild('id').equalTo('8-854-1813'))
              //  .valueChanges().subscribe(user => {
              //       this.users = user;
              //      console.log(this.users, 'Usuarios desde firebase');
              //    });

                this.users =  this.angularFireDataBase.list('/user').valueChanges().subscribe(user => {
                  this.users = user;
                  console.log(this.users, 'Usuarios desde firebase');
                });
              }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/home');
  }

}
