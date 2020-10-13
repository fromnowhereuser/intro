import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form-by-code',
  templateUrl: './user-form-by-code.component.html',
  styleUrls: ['./user-form-by-code.component.scss']
})
export class UserFormByCodeComponent implements OnInit {

  userForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      id: fb.control(0),
      email: fb.control(''),
      isAdmin: fb.control(false),
    });
  }

  ngOnInit(): void {
  }

  public submit() {
    console.log(this.userForm.value);
  }

}
