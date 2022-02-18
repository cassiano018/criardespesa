import { LightningElement, track } from 'lwc';

//importa método da classe que deve ser usada
import criarDespesa from '@salesforce/apex/criarDespesa.criarDespesa';

export default class despesaLwc extends LightningElement {
     //será responsável por armazenar mensagens de erro
     @track error;
     //será responsável por armazenar o id da conta Criada
     @track nameId;
     
     //objeto com os dados do form, que será usado para enviar os dados para Org
     @track Despesa__c = {
        name: "",
        valor: "",
        descricao: ""
        };


    handleInputChange(event){
        let name_ = event.target.name;
        let value_ = event.target.value;

        this.Despesa__c = {...this.Despesa__c, [name_]:value_};
        console.log(this.Despesa__c);
    }

    /**
     * o MÉTODO será responsavel por executar a função createAccount.
     * 
     * then(
     *      caso ocorra sucesso na operação ele faz alguma coisa
     * ).catch(
     *      caso falhe ele faz alguma sobre a falha
     * );
     * 
     * função anonima - uma função que é executada automaticamente, não possui nome
     * 
     * (parametros) => {
     *  comandos
     * }
     */

     handleInsertDespesa__c(){
        criarDespesa(this.Despesa__c).then(
            (result) => {
                if(result){
                    this.nameId = result.Id;
                }else{
                    this.error = "Não foi possivel criar a conta";
                }
            }
        ).catch(
            (error) => {
                this.error = error;
                console.log(error);
            }
        )
    }
}
