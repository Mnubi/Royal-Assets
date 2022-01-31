export class Request {
   constructor(public Item: string,public Quantity : number,public Request : string,public Urgency : string){
   }
}

export class Employee {
   constructor(public Name: string,public Department : string,public Contact : number,public Role : string){
   }
}

export class Asset {
   constructor(public Item: string,public Category: string,public Assigned: number,public Stored : number,public Broken : number){
   }
}

export class Staff {
   constructor(public Name: string,public Department: string,public Role: string,public Asset : string,public Contact : number){
   }
}

export class Repair {
   constructor(public Item: string,public Department :string, public Request : string,public Urgency : string){
   }
}

export class Assign {
   constructor(public Item: string,public Type :string, public Department : string,public Name : string,public Role : string){
   }
}