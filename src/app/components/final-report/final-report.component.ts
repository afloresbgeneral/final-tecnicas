import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-report',
  templateUrl: './final-report.component.html',
  styleUrls: ['./final-report.component.scss']
})
export class FinalReportComponent implements OnInit {

  public users: Array<UserModel> = [];

  constructor( public userService: UserService,
                public router: Router) {
    this.users = userService.getUsers();
    console.log(this.users);
   }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/home');
  }

}
