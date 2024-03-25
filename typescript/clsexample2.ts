class Customer{
    customerID:number;
    customerName:string;
    customerBalance:number;
    //method
    CustomerInfo():void{
        this.customerID=101;
        this.customerName="Nikitha";
        this.customerBalance=12000;
    }
    //function
    Display():string{
        // let msg:string="Customer is:"+this.customerID+",Customer Name:"+this.customerName+"and CustomerBalance:"+this.customerBalance;
        //can use single or double quotes
        let msg:string=`Customer ID:${this.customerID},CustomerName:${this.customerName},CustomerBalance is:${this.customerBalance}`
        return msg;
        // return "Welcome";
    }
    // Display(x:number){

    // }
    //function
    GetTotalValue(prodCost:number,qty:number):number{
        return prodCost*qty;
    }
}
//object
let cust:Customer=new Customer();
//calling place
cust.CustomerInfo();
let msg:string=cust.Display();
console.log(msg);
let total:number=cust.GetTotalValue(12000,3);
console.log(total);