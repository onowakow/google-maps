import { Component } from '@angular/core';
import { interval, switchMap } from 'rxjs';
import { AlpacaService } from '../alpaca.service';

@Component({
  selector: 'app-alpaca-dashboard',
  templateUrl: './alpaca-dashboard.component.html',
  styleUrls: ['./alpaca-dashboard.component.css'],
})
export class AlpacaDashboardComponent {
  constructor(private alpacaService: AlpacaService) {}

  // accountState$ = interval(1000).pipe(
  //   switchMap(() => this.alpacaService.accountState$)
  // );
  accountState$ = this.alpacaService.accountState$;
}
