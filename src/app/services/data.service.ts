import { Injectable } from '@angular/core';
import { TransactionType } from '../enums/type.enum';
import { Transaction, transactions } from '../transactions'

@Injectable()
export class DataService {
    getTransactions(): Transaction[] {
        return transactions;
    }
    getTransactionsByType(transactionType: string): Transaction[] {
        return transactions.filter(t => t.type === transactionType.toLowerCase());
    }
    getTransactionTypes(): string[] {
        const transactionTypes: string[] = [];
        for (const type in TransactionType) {
            if (isNaN(Number(type))) {
                transactionTypes.push(type);
            }
        }
        return transactionTypes;
    }
}