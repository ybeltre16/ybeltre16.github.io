
var customers=[];
function creatCustomer(cname,corder){
	// this function will create a object to store customers name,and order
	var customer={
		name:cname,
		order:corder

	}
	return customer;
}
function enterCustomer() {
	

	
	// to tell how to add a customers
	var cname= document.getElementById('name').value;
	var corder=document.getElementById('order').value;
	//call create customer function
	if(cname && corder){ 
	var cus= creatCustomer(cname,corder);
	customers.push(cus);
}
	
	//alert(cus.name+" "+cus.order);

	
	showCustomer();

}
function removeCustomer(){
	// code for removing customers
	customers.shift();
	showCustomer();
}

function showCustomer(){
	var table=document.getElementsByTagName('table')[0];
	// code will show customer in a table
	if(customers.length == 0){ 
		table.innerHTML="<tr><th>#</th><th>Customer Name</th><th> Customer Order</th></tr><tr> <tr><td colspan='3'>No Customers On Line</td></tr>";
	}else{
		table.innerHTML="<tr><th>#</th><th>Customer Name</th><th> Customer Order</th></tr><tr>";
		// replaced whole table 
		for (var i = 0; i < customers.length; i++) {
			var t=i +1;
			
			table.innerHTML+="<tr><td>"+t+"</td><td>"+customers[i].name+'</td><td>'+customers[i].order +"</td></tr>";
		}

	}
}
