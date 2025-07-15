import { Component, computed, input, inject } from '@angular/core';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: false,
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
}
