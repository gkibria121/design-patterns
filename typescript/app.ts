// interface ProductInterface {
//   id: string;
//   price: number;
//   description: string;
//   display(): void;
// }

// class Product implements ProductInterface {
//   constructor(public id: string, public price: number, public description: string) {}
//   public display(): void {
//     console.log(`ID : ${this.id} \nPrice: ${this.price} \nDescription : ${this.description}`);
//   }
// }

// class Book extends Product {
//   constructor(
//     public author: string,
//     public title: string,
//     public id: string,
//     public price: number,
//     public description: string
//   ) {
//     super(id, price, description);
//   }
//   public display(): void {
//     super.display();
//     console.log(`\nAuthor : ${this.author} \nTitle: ${this.title}`);
//   }
// }

// class Electronic extends Product {
//   constructor(
//     public brand: string,
//     public model: string,
//     public id: string,
//     public price: number,
//     public description: string
//   ) {
//     super(id, price, description);
//   }
//   public display(): void {
//     super.display();
//     console.log(`\nBrand : ${this.brand} \nModel: ${this.model}`);
//   }
// }

// interface Customer {
//   getDiscount(): number;
// }

// class PremiumCustomer implements Customer {
//   public getDiscount() {
//     return 20;
//   }
// }

// class RegularCustomer implements Customer {
//   public getDiscount() {
//     return 10;
//   }
// }

// class GoldCustomer implements Customer {
//   public getDiscount() {
//     return 30;
//   }
// }

// class Discount {
//   public getDiscount(customer: Customer) {
//     return customer.getDiscount();
//   }
// }

// let customer = new GoldCustomer();

// let discount: Discount = new Discount();

// let finalResult = discount.getDiscount(customer);

// abstract class PaymentMethod {
//   public abstract process(amount: number): void;
// }

// class CreditCard extends PaymentMethod {
//   process(amount: number): void {
//     console.log(`Processing Credit Card - Amount : $${amount}`);
//   }
// }

// class DebitCard extends PaymentMethod {
//   process(amount: number): void {
//     console.log(`Processing Debit Card - Amount : $${amount}`);
//   }
// }

// class Paypal extends PaymentMethod {
//   process(amount: number): void {
//     console.log(`Processing PayPal - Amount : $${amount}`);
//   }
// }

// class PaymentPrcoessor {
//   public process(pyamentMethod: PaymentMethod, amount: number) {
//     pyamentMethod.process(amount);
//   }
// }

// let paymentMethod = new Paypal();

// let processor = new PaymentPrcoessor();
// processor.process(paymentMethod, 10);

//singleton

// class Logger {
//   private static instance: Logger;

//   private constructor() {}

//   public static getInstance(): Logger {
//     if (!Logger.instance) Logger.instance = new Logger();
//     return Logger.instance;
//   }
// }

// let logger = Logger.getInstance();

// // protoType design pattern

// interface ShapeProperties {
//   color: string;
//   x: number;
//   y: number;
// }

// abstract class Shape {
//   abstract clone(): Shape;
//   constructor(public properties: ShapeProperties) {}
// }

// class Rectangle extends Shape {
//   constructor(properties: ShapeProperties, public width: number, public height: number) {
//     super(properties);
//   }
//   clone(): Shape {
//     let clonedProperties: ShapeProperties = { ...this.properties };
//     let clone = new Rectangle(clonedProperties, this.width, this.height);
//     return clone;
//   }
// }

// class Circle extends Shape {
//   constructor(properties: ShapeProperties, public radius: number) {
//     super(properties);
//   }
//   clone(): Shape {
//     let clonedProperties: ShapeProperties = { ...this.properties };
//     let clone = new Circle(clonedProperties, this.radius);
//     return clone;
//   }
// }

// let rectangle1 = new Rectangle({ color: "red", x: 10, y: 20 }, 30, 40);
// let rectangle2 = rectangle1.clone();

// console.log(rectangle1, rectangle2, rectangle1 === rectangle2);

//add builder pattern

// interface ICustomerBuilder {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phoneNumber: string;
//   setFirstName(firstName: string): ICustomerBuilder;
//   setLastName(lastName: string): ICustomerBuilder;
//   setEmail(email: string): ICustomerBuilder;
//   setPhone(phoneNumber: string): ICustomerBuilder;
//   build(): ICustomer;
// }

// interface ICustomer {
//   fisrtName: string;
//   lastName: string;
//   email: string;
//   phoneNumber: string;
// }

// class Customer implements ICustomer {
//   constructor(
//     public fisrtName: string,
//     public lastName: string,
//     public email: string,
//     public phoneNumber: string
//   ) {}
// }

// class CustomerBuilder implements ICustomerBuilder {
//   firstName: string = "";
//   lastName: string = "";
//   email: string = "";
//   phoneNumber: string = "";

//   setFirstName(firstName: string): ICustomerBuilder {
//     this.firstName = firstName;
//     return this;
//   }
//   setLastName(lastName: string): ICustomerBuilder {
//     this.lastName = lastName;
//     return this;
//   }
//   setEmail(email: string): ICustomerBuilder {
//     this.email = email;
//     return this;
//   }

//   setPhone(phone: string): ICustomerBuilder {
//     this.phoneNumber = phone;
//     return this;
//   }
//   build() {
//     return new Customer(this.firstName, this.lastName, this.email, this.phoneNumber);
//   }
// }

// class CustomerDirector {
//   private builder!: ICustomerBuilder;
//   public buildMinimal(firstName: string, lastName: string, email: string): ICustomer {
//     this.builder.setFirstName(firstName);
//     this.builder.setLastName(lastName);
//     this.builder.setEmail(email);
//     return this.builder.build();
//   }
//   public setBuilder(builder: ICustomerBuilder) {
//     this.builder = builder;
//   }
// }

// let customerBuilder = new CustomerBuilder();

// let director = new CustomerDirector();
// director.setBuilder(customerBuilder);
// let customer = director.buildMinimal("kibria", "Ahmed", "gkibria121@gmail.com");
// console.log(customer);

// class Amplifier {
//   public turnOn(): void {
//     console.log("Turning on Amplifier...");
//   }
//   setVolume(level: number): void {
//     console.log(`Volume set to ${level}`);
//   }
// }

// class DvdPlayer {
//   public turnOn(): void {
//     console.log("Turning on DvdPlayer...");
//   }
//   play(movie: string): void {
//     console.log(`Playing ${movie}...`);
//   }
// }

// class Projector {
//   public turnOn(): void {
//     console.log("Turning on Projector...");
//   }
//   public setInput(dvdPlayer: DvdPlayer) {
//     console.log("Showing on projector..");
//   }
// }

// class Ligts {
//   dim(level: number): void {
//     console.log(`Dim light to ${level}`);
//   }
// }

// class HomeTheaterFacede {
//   constructor(
//     private amplifier: Amplifier,
//     private dvdPlayer: DvdPlayer,
//     private projector: Projector,
//     private lights: Ligts
//   ) {}

//   watchMovie(movie: string, volume: number = 50, level: number = 50): void {
//     this.dvdPlayer.turnOn();
//     this.amplifier.turnOn();
//     this.projector.turnOn();
//     this.projector.setInput(this.dvdPlayer);

//     this.lights.dim(level);
//     this.amplifier.setVolume(volume);
//     this.dvdPlayer.play(movie);
//   }
// }

// let amplifier = new Amplifier();
// let dvdPlayer = new DvdPlayer();
// let projector = new Projector();

// let light = new Ligts();

// let homeTheaterFacede = new HomeTheaterFacede(amplifier, dvdPlayer, projector, light);

// homeTheaterFacede.watchMovie("Saale Ashik");

interface Database {
  connect(): void;
  query(sql: string): void;
  close(): void;
}

class PostgreSQLDatabase implements Database {
  connect(): void {
    console.log("Connecting to PostgreSQL Database");
  }
  query(sql: string): void {
    console.log("Execute : " + sql);
  }

  close(): void {
    console.log("Closing PostgreSQL");
  }
}

class MongoDBDatabase implements Database {
  connect(): void {
    console.log("Connecting to MongoDB Database");
  }
  query(sql: string): void {
    console.log("Execute : " + sql);
  }

  close(): void {
    console.log("Closing MongoDB");
  }
}

abstract class DatabaseService {
  constructor(protected database: Database) {}
  abstract fetchData(query: string): any;
}

class ClientDatabaseService extends DatabaseService {
  fetchData(query: string): any {
    this.database.connect();
    let result = this.database.query(query);
    this.database.close();
    return result;
  }
}

let mongoDB = new MongoDBDatabase();

let clientDatabaseService = new ClientDatabaseService(mongoDB);

clientDatabaseService.fetchData("select * from students;");
