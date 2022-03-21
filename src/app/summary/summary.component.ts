import { Component, OnInit } from '@angular/core';
import { TransactionType } from '../enums/type.enum';
import { DataService } from '../services/data.service';
import { Transaction } from '../transactions';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

    public transactions: Transaction[] = [];
    public transactionTotalInfos: { total: number, type: string, tabNumber: number }[] = [];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.transactions = this.dataService.getTransactions();
        this.fillTransactionTotalInfos();
    }

    fillTransactionTotalInfos() {
        const transactionTypes = this.dataService.getTransactionTypes();
        for (const type of transactionTypes) {
            const filteredTransactions = this.dataService.getTransactionsByType(type);
            const total = filteredTransactions.length;
            const tabNumber = transactionTypes.indexOf(type);
            this.transactionTotalInfos.push({ total: total, type: type, tabNumber: tabNumber});
        }
    }
}