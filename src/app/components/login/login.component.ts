import { Component, VERSION } from '@angular/core';
import {
    FormGroup,
    AbstractControl,
    FormBuilder,
    Validators,
    FormControl
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../auth/service/userService/user_service';
// import { BaThemeSpinner } from '../../../theme/services';
// import { TranslateService } from '@ngx-translate/core';
// import { Store } from '@ngrx/store';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import * as auth from '../../../auth/state/auth.actions';
// import { EmailValidator } from '../../../theme/validators';
import { User } from '../../auth/model/user.model';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes
} from '@angular/animations';
// import { LoginModal } from '../loginModal/login-modal.component';
import 'style-loader!./login.scss';

// TOAST
import { ToastrService , ToastrConfig } from 'ngx-toastr';
import { cloneDeep, random } from 'lodash';
const types = ['success', 'error', 'info', 'warning'];
////////

@Component({

    selector: 'login',
    templateUrl: './login.html',

})
export class Login {
          options: ToastrConfig;
          title = '';
          type = types[0];
          message = '';
          erm;
    public form: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;
    public submitted: boolean = false;
    public session;
    
    user = new User();


    constructor(fb: FormBuilder,
     //   private translate: TranslateService,
       private user_service: UserService,
     //   private baThemeSpinner: BaThemeSpinner,
    //    private store: Store < any > ,
    //    private toastrService: ToastrService, // TOAST
     //    private modalService: NgbModal
    ) {
       this.user.email = sessionStorage.getItem('email') || '';
       this.user.password = sessionStorage.getItem('password') || '';
        // TOAST
     //   this.options = this.toastrService.toastrConfig;
        ////////
       this.user.email=sessionStorage.getItem('email');
       
    //    this.translate.use('en');


 
        this.form = fb.group({
            email: ['', Validators.compose([
                Validators.required, 
                 this.isEmail
            ])],
            password: ['', Validators.compose([
                Validators.required, 
                
            ])],
            remember:['']
       
        });

        
       
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    

    //     this.store
    //         .select('auth')
    //         .subscribe((res: any) => {
              
    //             if(res.er)
    //       {
           
    //         this.erm=res.er.message;
           
          
    //       }
    // //console.log(res.message)
            
    //             //this.domains = res.domains
                
    //         });
    }

    isEmail(control: FormControl): {
        [s: string]: boolean
    } {
       // console.log(control.value);
        if (control.value) {
            if (!control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                return {
                    noEmail: true
                };
            }
        }

    }



    onSubmit(values: Object,event) {
        event.preventDefault();
        this.submitted = true;
        if (this.form.valid) {
            sessionStorage.setItem('email',this.user.email);
            sessionStorage.setItem('password',this.user.password);
            
            let data = {
               email: this.user.email,
                password: this.user.password,
            };
            this.user_service.login(data).subscribe(res => {
               console.log(res);
              });
        }
    }

    // TOAST
    // openToast() {
    //     let m = 'amar';
    //     let t = 'amar';
    //     const opt = cloneDeep(this.options);
    //     const inserted = this.toastrService[this.type](m, t, opt);
    //     if (inserted) {
    //       this.lastInserted.push(inserted.toastId);
    //     }
    //     return inserted;
    // }
    //////////
    
}
