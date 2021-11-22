import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  // userForm!: FormGroup

  constructor(private api: ApiServicesService) { }

  errMsg: any;
  successMSG: any

  ngOnInit(): void {
  }
  userForm = new FormGroup({
    'fullname': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'mobile': new FormControl('', Validators.required)
  })
  userSubmit() {
    if (this.userForm.valid) {
      this.api.createData(this.userForm.value).subscribe((res) => {
        this.successMSG = res.message
        this.userForm.reset()
      })
    } else {
      this.errMsg = "All Fields Are Reqired"
    }
  }

}
