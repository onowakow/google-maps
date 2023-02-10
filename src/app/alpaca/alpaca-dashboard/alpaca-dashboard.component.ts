import { Component } from '@angular/core';
import { AlpacaService } from '../alpaca.service';

@Component({
  selector: 'app-alpaca-dashboard',
  templateUrl: './alpaca-dashboard.component.html',
  styleUrls: ['./alpaca-dashboard.component.css'],
})
export class AlpacaDashboardComponent {
  constructor(private alpacaService: AlpacaService) {}

  accountState$ = this.alpacaService.accountState$;
}
