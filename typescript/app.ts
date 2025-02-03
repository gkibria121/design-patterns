interface ProductInterface {
  id: string;
  price: number;
  description: string;
  display(): void;
}

class Product implements ProductInterface {
  constructor(public id: string, public price: number, public description: string) {}
  public display(): void {
    console.log(`ID : ${this.id} \nPrice: ${this.price} \nDescription : ${this.description}`);
  }
}

class Book extends Product {
  constructor(
    public author: string,
    public title: string,
    public id: string,
    public price: number,
    public description: string
  ) {
    super(id, price, description);
  }
  public display(): void {
    super.display();
    console.log(`\nAuthor : ${this.author} \nTitle: ${this.title}`);
  }
}

class Electronic extends Product {
  constructor(
    public brand: string,
    public model: string,
    public id: string,
    public price: number,
    public description: string
  ) {
    super(id, price, description);
  }
  public display(): void {
    super.display();
    console.log(`\nBrand : ${this.brand} \nModel: ${this.model}`);
  }
}

interface Customer {
  getDiscount(): number;
}

class PremiumCustomer implements Customer {
  public getDiscount() {
    return 20;
  }
}

class RegularCustomer implements Customer {
  public getDiscount() {
    return 10;
  }
}

class GoldCustomer implements Customer {
  public getDiscount() {
    return 30;
  }
}

class Discount {
  public getDiscount(customer: Customer) {
    return customer.getDiscount();
  }
}

let customer = new GoldCustomer();

let discount: Discount = new Discount();

let finalResult = discount.getDiscount(customer);
console.log(finalResult);
