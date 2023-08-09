class AddressBook {
    constructor(FirstName,LastName,Address,City,State,Zip,PhoneNumber,Email){
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.Address=Address;
        this.City=City;
        this.State=State;
        this.Zip=Zip;
        this.PhoneNumber=PhoneNumber;
        this.Email=Email;
    }
       
    show(){
        console.log(this.FirstName); 
        console.log(this.LastName);
        console.log(this.Address);
        console.log(this.City);
        console.log(this.State);
        console.log(this.Zip);
        console.log(this.PhoneNumber);
        console.log(this.Email);


    }
}
var obj = new AddressBook("Debasmita","Sutar","JD-132","Rourkela","Odisha","87650","7658943276","debasmita12.ds@gmail.com");
obj.show();