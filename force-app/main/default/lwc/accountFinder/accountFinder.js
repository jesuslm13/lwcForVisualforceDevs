/**
 * @description       : 
 * @author            : sr.Oh
 * @group             : 
 * @last modified on  : 01-20-2025
 * @last modified by  : sr.Oh
**/
import { LightningElement } from 'lwc';

export default class AccountFinder extends LightningElement {
    annualRevenue = null;

    handleChange(event){
        this.annualRevenue = event.detail.value;
    }

    reset(){
        this.annualRevenue = null;
    }
}