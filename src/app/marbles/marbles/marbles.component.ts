import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-marbles',
  templateUrl: './marbles.component.html',
  styleUrls: ['./marbles.component.css'],
})
export class MarblesComponent {
  name$ = new Subject<void>();

  nameForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  onSubmitName() {
    if (this.nameForm.invalid) {
      return false;
    }
    return true;
  }
}
