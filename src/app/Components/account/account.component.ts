import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  // accountFormGroup!: FormGroup;

  ngOnInit(): void {
    // this.accountFormGroup = new FormGroup({
    //   bankCode: new FormControl(null),
    //   serial: new FormControl(null)
    // });
  }



  // accountFormGroup: FormGroup;

  constructor(private service:ServiceService, private router:Router) {}

  formsErrors = '';
  errorMessage = '';
  data!: any;

  accountFormGroup = new FormGroup({
    bankCode: new FormControl('',Validators.required),
    serial: new FormControl('', Validators.required),
  })

  get bankCode() {
    return this.accountFormGroup.get('bankCode');
  }

  get serial() {
    return this.accountFormGroup.get('serial');
  }

   submitDate(){
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    this.service.createAccount("create-account", JSON.stringify(this.accountFormGroup.value), options).subscribe((response: any) => {
      this.data = response;
      this.errorMessage = this.data.message;
      console.log("data ", this.errorMessage);
    })
   }


}
