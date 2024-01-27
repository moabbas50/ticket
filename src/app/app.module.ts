import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { TooltipModule } from 'primeng/tooltip';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { QRCodeModule } from 'angularx-qrcode';
import { NgApexchartsModule } from "ng-apexcharts";
import { CHarttComponent } from './chartt/chartt.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { TableEnComponent } from './En/table-en/table-en.component';
import { ChartEnComponent } from './En/chart-en/chart-en.component';
import { CardEnComponent } from './En/card-en/card-en.component';
import { ENsharedComponent } from './En/enshared/enshared.component';
import { ArbicsharedComponent } from './arbicshared/arbicshared.component';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent,
    CHarttComponent,
    TableEnComponent,
    ChartEnComponent,
    CardEnComponent,
    ENsharedComponent,
    ArbicsharedComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    TooltipModule,
    SplitButtonModule,
    FormsModule,
    InputTextModule,
    QRCodeModule,
    NgApexchartsModule,
    InputSwitchModule,
    TableModule,
    DropdownModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
