/**
 * @description       : 
 * @author            : sr.Oh
 * @group             : 
 * @last modified on  : 01-22-2025
 * @last modified by  : sr.Oh
**/
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRNST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
export default class contactCreator extends LightningElement {
    objectApiName = CONTACT_OBJECT;
    fields = [FIRNST_NAME_FIELD, LAST_NAME_FIELD, EMAIL_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}