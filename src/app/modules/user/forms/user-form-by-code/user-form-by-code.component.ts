import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'app-user-form-by-code',
  templateUrl: './user-form-by-code.component.html',
  styleUrls: ['./user-form-by-code.component.scss']
})
export class UserFormByCodeComponent implements OnInit {
  userForm: FormGroup;
  emailCtrl: AbstractControl;


  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      id: fb.control(0, {
        validators: [
          Validators.required,
          Validators.min(0)
        ],
        asyncValidators: [],
        updateOn: "change"
      }),
      email: fb.control('', [
        Validators.required,
        Validators.email
      ], []),
      isAdmin: fb.control(false),
    });



    this.emailCtrl = this.userForm.get('email');

    this
      .userForm
      .controls
      .email
      .valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((toto) => console.log(toto));
  }

  ngOnInit(): void {
  }

  public submit() {
    console.log(this.userForm.value);
  }

}
