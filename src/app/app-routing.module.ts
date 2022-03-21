import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

const routes: Routes = [
  { path: '', component: SummaryComponent },
  { path: 'navigator', component: TransactionListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
