public with sharing class criarDespesa {
    @AuraEnabled
    public static Despesa__c criarDespesa(String name, Decimal valor, String descricao){
        Despesa__c novo = new Despesa__c(
            name = name,
            ValorDespesaInstalacao__c = valor,
            DescricaoDespesasInstalacao__c = descricao
        );
        insert novo;
        return novo;
    }
}