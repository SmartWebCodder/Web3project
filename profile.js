class profile{
  constructor(fullname, acct, pin, balance){
    this.fullname = fullname;
    this.acct = acct;
    this.pin = pin;
    this.balance = balance;
  
  }
 
  LoginProc(newpin, savedpin){
      savedpin = localStorage.getItem("pin")
      if ( savedpin == newpin){
          window.location("Dashboard.html"); 
      } else{

      }
  }

  //DetailToJson
 
  DetailsToJASON(){
      var nameConv = this.fullname;
      var namesplit = nameConv.split(" ");
      var firstnamevar = namesplit[0];
      var middlenamevar = nameConv[1];
      var surnamevar = namesplit[2];

      var person = {
          firstname: firstnamevar,
          middlename: middlenamevar,
          surname: surnamevar,
          acctNum : this.acct,
          pin: this.pin,
          acctBal: this.balance,
      }
      var JSONOBJ = JSON.stringify(person);

      return JSONOBJ;
  }
  StoreDetails(){
      localStorage.setItem();
  }
}
