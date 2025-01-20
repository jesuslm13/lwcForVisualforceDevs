/**
 * @description       : 
 * @author            : sr.Oh
 * @group             : 
 * @last modified on  : 01-20-2025
 * @last modified by  : sr.Oh
**/
public with sharing class AccountListControllerLwc {
    public AccountListControllerLwc() {}

    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccountsByEmployeeNumber(Integer numberOfEmployees) {
        return [
            SELECT Name
            FROM Account
            WHERE NumberOfEmployees >= :numberOfEmployees
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccountsByRevenue(Decimal annualRevenue){
        List<Account> listAccount = [
            SELECT
                Name
            FROM Account
            WHERE
                AnnualRevenue >= :annualRevenue
        ];

        return listAccount;
    }
}