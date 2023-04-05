/*
  Example

  As a User buying stuff in a virtual store, I have a package ready to be delivered, 
  but I would like to calculate the final shipping cost, the deadline and a
  code to track my order's path to its destination. 
  And of course, know what service will deliver my order (Sedex, PAC, Fedex).

*/

/*
  interface ShippingStrategy
  Responsible for declaring the structure of 
  ... the contract that should be implemented by all the strategies
*/
interface ShippingStrategy {
  calculate: (_package: Package) => ShippingMethod;
}

class ShippingMethod {
  private id: number;
  private serviceName: string;
  private shippingCost: number;
  private deadline: number;
  private trackingCode: string;

  constructor(
    _id: number,
    _serviceName: string,
    _shippingCost: number,
    _deadline: number,
    _trackingCode: string
  ) {
    this.id = _id;
    this.serviceName = _serviceName;
    this.shippingCost = _shippingCost;
    this.deadline = _deadline;
    this.trackingCode = _trackingCode;
  }
}

class SedexStrategy implements ShippingStrategy {
  calculate(_package: Package): ShippingMethod {
    // Code and Logic Here

    // End of Logic and Code

    // Returning ShippingMethod
    return new ShippingMethod(1, "Sedex", 20.45, 4, "sedex#acsudiocode");
  }
}

class Package {
  private width: number;
  private height: number;
  private length: number;
  private weight: number;
  private value: number;
  private code: string;

  constructor(
    _width: number,
    _height: number,
    _length: number,
    _weight: number,
    _value: number,
    _code: string
  ) {
    this.height = _height;
    this.width = _width;
    this.length = _length;
    this.weight = _weight;
    this.value = _value;
    this.code = _code;
  }

  getPackage(): Package {
    return new Package(
      this.height,
      this.width,
      this.length,
      this.weight,
      this.value,
      this.code
    );
  }

  calculateShipping(_shippingStrategy: ShippingStrategy) {
    return _shippingStrategy.calculate(this.getPackage());
  }
}

// Test

function main() {
  const _package = new Package(10, 10, 10, 1, 150, "#niamtigstset");
  const sedexStrategy = new SedexStrategy();

  console.log("Result: ", _package.calculateShipping(sedexStrategy));
}

main();
