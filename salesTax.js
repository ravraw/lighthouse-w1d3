var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

// return applicable tax rate
function applicableTaxRate(location) {
  switch (location) {
    case "AB":
      return 0.05;
    case "BC":
      return 0.12;
    case "SK":
      return 0.1;
    default:
      return "Location not available";
  }
}

// Totals a given sales array
function totalSale(sales) {
  return sales.reduce((sum, cur) => sum + cur, 0);
}

// Calculates tax
function calculateTax(sales, taxRate) {
  return sales * taxRate;
}

// Main function
function calculateSalesTax(salesData, taxRates) {
  let result = {};

  for (let data in salesData) {
    let { name, province, sales } = salesData[data];
    //console.log(name, province, sales);
    let totalSales = totalSale(sales);
    let applicableTax = applicableTaxRate(province);
    let totalTaxes = calculateTax(totalSales, applicableTax);
    let companyObject = {
      totalSales,
      totalTaxes
    };
    // add sales and taxes if company repeats
    if (result[name]) {
      result[name].totalSales += companyObject.totalSales;
      result[name].totalTaxes += companyObject.totalTaxes;
    } else {
      result[name] = companyObject;
    }
  }
  return result;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.table(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
