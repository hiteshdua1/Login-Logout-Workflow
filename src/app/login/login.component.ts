import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from './../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public isValidField(field) {
    return field.invalid && field.dirty;
  }

  login(form: NgForm) {
    this.authService.login(form.value).subscribe(res => {
      if (res.success) {
        this.router.navigate(['user-details']);
      } else {
        alert(res.errorMessage);
      }
    });
  }

}
