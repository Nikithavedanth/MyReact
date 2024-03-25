var Customer = /** @class */ (function () {
    function Customer() {
    }
    //method
    Customer.prototype.CustomerInfo = function () {
        this.customerID = 101;
        this.customerName = "Nikitha";
        this.customerBalance = 12000;
    };
    //function
    Customer.prototype.Display = function () {
        // let msg:string="Customer is:"+this.customerID+",Customer Name:"+this.customerName+"and CustomerBalance:"+this.customerBalance;
        //can use single or double quotes
        var msg = "Customer ID".concat(this.customerID, ",CustomerName:").concat(this.customerName, ",CustomerBalance is:").concat(this.customerBalance);
        return msg;
        // return "Welcome";
    };
    //function
    Customer.prototype.GetTotalValue = function (prodCost, qty) {
        return prodCost * qty;
    };
    return Customer;
}());
//object
var cust = new Customer();
//calling place
cust.CustomerInfo();
var msg = cust.Display();
console.log(msg);
var total = cust.GetTotalValue(12000, 3);
console.log(total);
