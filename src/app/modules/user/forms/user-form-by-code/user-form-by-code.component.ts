import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'app-user-form-by-code',
  templateUrl: './user-form-by-code.component.html',
  styleUrls: ['./user-form-by-code.component.scss']
})
export class UserFormByCodeComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      id: fb.control(0, [
        Validators.required,
        Validators.min(0)
      ], []),
      email: fb.control('', [
        Validators.required,
        Validators.email
      ], []),
      isAdmin: fb.control(false),
    });

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
