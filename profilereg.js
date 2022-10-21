function storeUser() {
    // calling my form elements
    var Fullname = document.forms['regform']['fullname'].value;
    var acctNumb = document.forms['regform']['acct'].value;
    var acctPin = document.forms['regform']['pin'].value;
    var acctBal = document.forms['regform']['balance'].value;

    // storing the forms value into my class object

    var entity = new profile(Fullname, acctNumb, acctPin, acctBal);

    //storing the class object values into the browser local storage

    localStorage.setItem("fullname", entity.fullname);
    localStorage.setItem("Account Number", entity.acct);
    localStorage.setItem("AccountPin", entity.pin);
    localStorage.setItem("Account Balance", entity.balance);

    alert("Account Successfully Registered! Proceed to Login");
    window.open("User_login.html")
}
function randomacct() {
        
    document.getElementById("acctNo").value = Math.floor(Math.random() * 122112835145);
    
}
function loginProc() {
    var accNum = document.forms['loginForm']['acct'].value;
    var pin = document.forms['loginForm']['pin'].value;
    var acnum = localStorage.getItem("Account Number");
    var acpin = localStorage.getItem("AccountPin");

    if (accNum == acnum && acpin == pin) {
        alert("Welcome " + localStorage.getItem("fullname"))
        
        window.close("User_login.html")
        window.open("Dashboard.html")
    } else {
        alert("incorrect Login Details!");
    }
}

function logout() {
   
        alert("You have Logged Out!")
        window.open("User_login.html");
 
   
}
window.onload =  function balance() {
    let formatter = Intl.NumberFormat('en-US');
       
    document.getElementById("bal").value = formatter.format(localStorage.getItem("Account Balance"));;
    
}


function deposit() {
   
    var amt = parseInt(document.forms['wForm']['amt'].value);
    var acnum = parseInt(localStorage.getItem("Account Balance"));
  
        newbalance = amt + acnum;
        localStorage.setItem("Account Balance", newbalance);
        alert("Deposit Successful!");
   
}



function ChangePin() {
    var old = document.forms['ChangeForm']['old'].value;
    var new1 = document.forms['ChangeForm']['nw'].value;
    var new2 = document.forms['ChangeForm']['nw2'].value;
    var acpin = localStorage.getItem("AccountPin");

    if (old == acpin) {
        if (new1 == new2){
            localStorage.setItem("AccountPin", new1)
            alert("Pin Changed Successfully");
        }
        else {
            alert("Security Pin Mismatch");
        }
    } else {
        alert("Old Pin Incorrect!");
    }
}