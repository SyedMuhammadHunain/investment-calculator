import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvestmentResultComponent,
  ],
  imports: [BrowserModule, UserInputModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
