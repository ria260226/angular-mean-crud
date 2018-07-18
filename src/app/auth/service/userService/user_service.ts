import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
// import { AuthHttp ,JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ToastrService , ToastrConfig } from 'ngx-toastr';
const types = ['success', 'error', 'info', 'warning'];
@Injectable()
export class UserService {
  options: ToastrConfig;
          title = '';
         // type = types[0];
          message = '';

//  version = VERSION;
  private lastInserted: number[] = [];

  constructor( public http: Http, private toastrService: ToastrService) { 
  //api for login
  
        this.options = this.toastrService.toastrConfig;

  }
  login(data){
    let token=localStorage.getItem('token');
     let headers = new Headers({ 'Authorization':token });
    let options = new RequestOptions({ headers: headers }); 
    const uri = 'http://localhost:8080/login';
    return this
      .http
      .post(uri,data,options)
      .map(res => {
        return res;
      });
    }
      create(data) {
       const uri = 'http://localhost:8080/users/register';
       return this
         .http
         .post(uri,data)
         .map(res => {
           console.log('res',res);
           return res;
         });
        
    
 
    // // //console.log(token)
    // // var header_token = 'Bearer '+token
    // let url = environment.APP.API_URL+environment.APP.LOGIN_API;
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    //  // headers.append('Authorization',header_token);
    // let options = new RequestOptions({ headers: headers }); 
    // //console.log(url)
    // return this.http.post(url,data,options)
    //   .map((res: Response) => res.json())
    //   .catch((error: any) => {
        
    //     try {
    //       return (Observable.throw(error.json()));
    //     } catch (jsonError) {
    //       let minimumViableError = {
    //         success: false
    //       };
    //       return (Observable.throw(minimumViableError));
    //     }
    //   });
  }
  //api for logout
  // logoutUser(){
  //   //console.log("looged out service")
  //    let token=localStorage.getItem('token');
   
  //    let header_token = 'bearer '+token;
  //     console.log('Tokeammm',header_token);
  //    //console.log(header_token)
  //    let headers = new Headers({ 'Content-Type': 'application/json'});
  //    headers.append('Authorization',header_token);
  //    let options = new RequestOptions({ headers: headers });
  //    let data='';
  //   let url=environment.APP.API_URL+environment.APP.LOGOUT_API;
  //   return this.http.post(url,data,options)
  //     .map((res: Response) => res.json())
  //     .catch((error: any) => {
  //       try {
  //         return (Observable.throw(error.json()));
  //       } catch (jsonError) {
  //         // If the error couldn't be parsed as JSON data
  //         // then it's possible the API is down or something
  //         // went wrong with the parsing of the successful
  //         // response. In any case, to keep things simple,
  //         // we'll just create a minimum representation of
  //         // a parsed error.
  //         let minimumViableError = {
  //           success: false
  //         };
  //         return (Observable.throw(minimumViableError));
  //       }
  //     });
  // }
  //  forgotpassword(payload){
  //   //  let token=localStorage.getItem('token')
  //   // //console.log(token)
  //   // var header_token = 'Bearer '+token
  //   let url = environment.APP.API_URL+environment.APP.FORGOT_PASSWORD+ "?email=" + payload.email;
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //    // headers.append('Authorization',header_token);
  //   let options = new RequestOptions({ headers: headers }); 
  //   //console.log(url)
  //   return this.http.get(url,options)
  //     .map((res: Response) => res.json())
  //     .catch((error: any) => {
  //       console.log(error)
  //       try {
  //         return (Observable.throw(error.json()));
  //       } catch (jsonError) {
  //         // If the error couldn't be parsed as JSON data
  //         // then it's possible the API is down or something
  //         // went wrong with the parsing of the successful
  //         // response. In any case, to keep things simple,
  //         // we'll just create a minimum representation of
  //         // a parsed error.
  //         var minimumViableError = {
  //           success: false
  //         };
  //         return (Observable.throw(minimumViableError));
  //       }
  //     })
  // }
  // show()          {
  //   console.log("cghmvhjnb")
  //              const activeModal = this.modalService.open(LoginModal, {size: 'lg',
  //     backdrop: 'static'});
  //   activeModal.componentInstance.modalHeader = 'Static modal';
  //             }
  //**********************FORGOT **************************/
// forgotPass(data){

 
  
   
//     let url = environment.APP.API_URL+environment.APP.FORGOT_PASSWORD;
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     // headers.append('Authorization',header_token);
//     let options = new RequestOptions({ headers: headers }); 
    
//     return this.http.post(url,data,options)
//       .map((res: Response) => res.json())
//       .catch((error: any) => {


//          let m = 'Email does not exist !';
//               let t = 'Authentication';
//               const opt = cloneDeep(this.options);
//               const inserted = this.toastrService[types[1]](m, t, opt);
//               if (inserted) {
//                 this.lastInserted.push(inserted.toastId);
//               // }
//             }
//         try {
//           return (Observable.throw(error.json()));
//         } catch (jsonError) {
          
//           // If the error couldn't be parsed as JSON data
//           // then it's possible the API is down or something
//           // went wrong with the parsing of the successful
//           // response. In any case, to keep things simple,
//           // we'll just create a minimum representation of
//           // a parsed error.
//           let minimumViableError = {
//             success: false
//           };
//           return (Observable.throw(minimumViableError));
//         }
//       });
//   }
  

// /*****************************FORGOT PASS ENDS************************ */
// forgotAdminPass(data){
//   console.log('djfhdjsf');
// let url = environment.APP.API_URL+environment.APP.FORGOT_PASSWORD1;
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     // headers.append('Authorization',header_token);
//     let options = new RequestOptions({ headers: headers }); 
    
//     return this.http.put(url,data,options)
//       .map((res: Response) => res.json())
//       .catch((error: any) => {


//          let m = 'Email does not exist !';
//               let t = 'Authentication';
//               const opt = cloneDeep(this.options);
//               const inserted = this.toastrService[types[1]](m, t, opt);
//               if (inserted) {
//                 this.lastInserted.push(inserted.toastId);
//               // }
//             }
//         try {
//           return (Observable.throw(error.json()));
//         } catch (jsonError) {
          
//           // If the error couldn't be parsed as JSON data
//           // then it's possible the API is down or something
//           // went wrong with the parsing of the successful
//           // response. In any case, to keep things simple,
//           // we'll just create a minimum representation of
//           // a parsed error.
//           let minimumViableError = {
//             success: false
//           };
//           return (Observable.throw(minimumViableError));
//         }
//       });
//   }
  
// //******************************VERIFY ACCESS TOKEN******************* */

// authenticateResetPassToken(data){
  
//     let url = environment.APP.API_URL+environment.APP.VERIFY_TOKEN;
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers }); 
//     return this.http.put(url,data,options)
//       .map((res: Response) => res.json())
//       .catch((error: any) => {
//         try {
//           return (Observable.throw(error.json()));
//         } catch (jsonError) {
//           let minimumViableError = {
//             success: false
//           };
//           return (Observable.throw(minimumViableError));
//         }
//       });
//   }
// authenticateVerifyPassToken(data){
  
//     let url = environment.APP.API_URL+environment.APP.VERIFY_EMAIL_TOKEN;
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers }); 
//     return this.http.put(url,data,options)
//       .map((res: Response) => res.json())
//       .catch((error: any) => {
//         try {
//           return (Observable.throw(error.json()));
//         } catch (jsonError) {
//           let minimumViableError = {
//             success: false
//           };
//           return (Observable.throw(minimumViableError));
//         }
//       });
//   }




//   //**************************TOKEN ENDS******************************** */
// //**********************************RESET********************************* */
// resetPassword(data){
//     //  let token=localStorage.getItem('token')
//     // //console.log(token)
//     // var header_token = 'Bearer '+token
//     let url = environment.APP.API_URL+environment.APP.RESET_API;
    
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//      // headers.append('Authorization',header_token);
//     let options = new RequestOptions({ headers: headers }); 
//     //console.log(url)
//     return this.http.put(url,data,options)
//       .map((res: Response) => res.json())
//       .catch((error: any) => {
      
//         try {
//           return (Observable.throw(error.json()));
//         } catch (jsonError) {
//           // If the error couldn't be parsed as JSON data
//           // then it's possible the API is down or something
//           // went wrong with the parsing of the successful
//           // response. In any case, to keep things simple,
//           // we'll just create a minimum representation of
//           // a parsed error.
//           let minimumViableError = {
//             success: false
//           };
//           return (Observable.throw(minimumViableError));
//         }
//       });
//   }
  
}