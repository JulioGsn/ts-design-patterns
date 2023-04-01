interface Item {
  name: string;
  unitValue: number;
  quantity: number;
}

interface ShoppingCart {
  items: Array<Item>;
  shippingCost: number;
  total: number;
}

interface ShippingMethod {
  name: string;
  value: number;
}

// Strategies

const sedexShipping = (items: Array<Item>): ShippingMethod => {
  const shippingCost = 10;
  return { name: "Sedex", value: shippingCost };
};

// Context

const getShippingMethod = (
  items: Array<Item>,
  shippingContext: (items: Array<Item>) => ShippingMethod
): ShippingMethod => {
  return shippingContext(items);
};

// Functions
const calcShippingCostForShoppingCart = (
  shoppingCart: ShoppingCart
): Array<ShippingMethod> => {
  const sedexShippingMethod = getShippingMethod(
    shoppingCart.items,
    sedexShipping
  );

  return [sedexShippingMethod];
};

// Usage

const shoppingCart: ShoppingCart = {
  items: [],
  shippingCost: 0,
  total: 0,
};

console.log(
  "Calculating shippingCost: ",
  calcShippingCostForShoppingCart(shoppingCart)
);
