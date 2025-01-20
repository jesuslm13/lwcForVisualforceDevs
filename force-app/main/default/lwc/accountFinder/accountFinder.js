/**
 * @description       : 
 * @author            : sr.Oh
 * @group             : 
 * @last modified on  : 01-20-2025
 * @last modified by  : sr.Oh
**/
import { LightningElement, wire } from 'lwc';
import queryAccountsByRevenue from '@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue';
export default class AccountFinder extends LightningElement {
    annualRevenue = null;

    handleChange(event){
        this.annualRevenue = event.detail.value;
    }

    reset(){
        this.annualRevenue = null;
    }

    @wire(queryAccountsByRevenue, { annualRevenue: '$annualRevenue' })
    accounts;
}