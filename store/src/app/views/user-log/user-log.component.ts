import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserLogService } from 'src/app/services/user-log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.scss']
})
export class UserLogComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  error = '';

  constructor(public userLogService: UserLogService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.userLogService.logIn(this.form.value.username, this.form.value.password).subscribe(user => {
      this.router.navigate(['home']);
    },
      err => { this.error = err });

    return false;
  }

}
