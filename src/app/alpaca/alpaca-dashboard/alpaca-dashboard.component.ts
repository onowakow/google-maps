import { Component, OnInit } from '@angular/core';
import { AlpacaService } from '../alpaca.service';
import { HttpRequestState } from '../shared/httpRequestState.model';

@Component({
  selector: 'app-alpaca-dashboard',
  templateUrl: './alpaca-dashboard.component.html',
  styleUrls: ['./alpaca-dashboard.component.css'],
})
export class AlpacaDashboardComponent implements OnInit {
  constructor(private alpacaService: AlpacaService) {}

  accountState$ = this.alpacaService.accountState$;

  ngOnInit() {
    this.accountState$.subscribe((val) =>
      console.log(val instanceof HttpRequestState)
    );
  }
}
