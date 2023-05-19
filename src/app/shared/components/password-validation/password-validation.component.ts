import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-validation',
  templateUrl: './password-validation.component.html',
  styleUrls: ['./password-validation.component.css']
})
export class PasswordValidationComponent implements OnInit {
  @Input() type: string = 'password';
  @Input() placeholder: string = '';
  @Input() class!: string;
  @Input() required: boolean = false;
  @Input() control: FormControl = new FormControl();
  @Input() errorMessage: string = '';
  @Input() value: string = '';
  @Input() readonly: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  showPassword() {
    this.type === 'password' ? (this.type = 'text') : (this.type = 'password');
  }
}
