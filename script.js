
function calculateticket(){
    let name=document.getElementById("name").value;
    let age=Number(document.getElementById("age").value);
    let tickets=Number(document.getElementById("ticket").value)
    let result= document.getElementById("result")

    if (age<0){
        result.innerHTML="Please enter a valid age.";
        return;
    }
    let Price=0;
    if (age<12){
        Price= 5
    }
    else if (age>=12 && age<=17) {
        Price=7
    }
    else{
        Price=10
    }
    let totalprice= Price*tickets;

    result.innerHTML= "<h2>" + name + "'s Ticket</h2>" +
                       "<p>Price per ticket: $" + Price + "</p>" +
                       "<p>Number of tickets: " + tickets + "</p>" +
                       "<p>Total: $" + totalprice + "</p>";

}
function clearticket(){
    document.getElementById("name").value=" ";
    document.getElementById("age").value=" ";
    document.getElementById("ticket").value=" ";
    document.getElementById("result").innerHTML=" ";
}