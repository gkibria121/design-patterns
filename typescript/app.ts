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
}

let book = new Book("kibria", "The song of ice and fire", "1", 100, "This is a nice book");

book.display();
