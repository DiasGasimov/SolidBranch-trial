import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { SummaryComponent } from './summary/summary.component'
import { TransactionListComponent } from './transaction-list/transaction-list.component'
import { DataService } from './services/data.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports:      [ 
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [ 
        AppComponent,
        SummaryComponent,
        TransactionListComponent,
    ],
    providers: [
        DataService,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }