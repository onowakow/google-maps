import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MarblesService } from './marbles.service';
const { API_URL } = environment;

@Component({
  selector: 'app-marbles',
  templateUrl: './marbles.component.html',
  styleUrls: ['./marbles.component.css'],
})
export class MarblesComponent {
  constructor(private marblesService: MarblesService) {}

  nameForm = new FormGroup({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  libraryName$ = this.marblesService.libraryName$;

  onSubmitName() {
    if (this.nameForm.invalid) {
      return false;
    }

    this.marblesService.submitName(this.nameForm.getRawValue());
    return true;
  }
}
