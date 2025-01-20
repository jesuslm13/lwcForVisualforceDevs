/**
 * @description       : 
 * @author            : sr.Oh
 * @group             : 
 * @last modified on  : 01-20-2025
 * @last modified by  : sr.Oh
**/
import { LightningElement, wire } from 'lwc';
import queryAccountsByEmployeeNumber from '@salesforce/apex/AccountListControllerLwc.queryAccountsByEmployeeNumber';
export default class AccountSearch extends LightningElement {
    numberOfEmployees = null;
    handleChange(event) {
        this.numberOfEmployees = event.detail.value;
    }
    
    reset() {
        this.numberOfEmployees = null;
    }

    @wire(queryAccountsByEmployeeNumber, { numberOfEmployees: '$numberOfEmployees' })
    accounts;
}