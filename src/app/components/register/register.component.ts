import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
// import { EmailValidator, EqualPasswordsValidator } from '../../../theme/validators';

import 'style-loader!./register.scss';
import { UserService } from '../../auth/service/userService/user_service';
import { User } from '../../auth/model/user.model';
@Component({
  selector: 'register',
  templateUrl: './register.html',
})
export class Register {

  public form: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public password: AbstractControl;
  public passwordConf: AbstractControl;
  public passwords: FormGroup;
  public username:AbstractControl;

  public submitted: boolean = false;
  user = new User();
  constructor(fb: FormBuilder,private user_service: UserService,) {

    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
     'email': ['', Validators.compose([Validators.required])],
     'password': ['', Validators.compose([Validators.required])],
     'passwordConf': ['', Validators.compose([Validators.required])],
    });

    this.username = this.form.controls['username'];
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
    this.passwordConf = this.form.controls['passwordConf'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    sessionStorage.setItem('email',this.user.email);
    sessionStorage.setItem('password',this.user.password);
    
    let data = {
      username:this.user.username,
       email: this.user.email,
       password: this.user.password,
       passwordConf: this.user.passwordConf,
    };
    // if (this.form.valid) {
      this.user_service.create(data).subscribe(res => {
        console.log(res);
       });
      console.log('valuesjahdjash',values);
    // }
  }
}
