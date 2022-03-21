import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TransactionType } from '../enums/type.enum';
import { DataService } from '../services/data.service';
import { Transaction } from '../transactions';

@Component({
    selector: 'app-transaction-list',
    templateUrl: './transaction-list.component.html',
    styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

    public navTabs: { type: string, tabNumber: number }[] = [];
    public currentTabNumber: number = 0;

    public transactions: Transaction[] = [];
    
    private querySubscription!: Subscription;

    constructor(private dataService: DataService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.fillNavTabs();
        this.currentTabNumber = +this.route.snapshot.queryParams['tab'];
        this.querySubscription = this.route.queryParams.subscribe(
            (queryParam: any) => {
                this.currentTabNumber = +queryParam['tab'];
                this.fillTransactions();
            }
        );
    }

    fillNavTabs() {
        const transactionTypes = this.dataService.getTransactionTypes();
        for (const type of transactionTypes) {
            this.navTabs.push({ type: type, tabNumber: transactionTypes.indexOf(type) })
        }
    }

    fillTransactions() {
        if (!isNaN(this.currentTabNumber) && this.currentTabNumber < this.navTabs.length) {
            let targetTab = this.navTabs.find(t => t.tabNumber === this.currentTabNumber);
            this.transactions = targetTab != null ? this.dataService.getTransactionsByType(targetTab.type) : [];
        } else {
            this.transactions = [];
        }
    }
}