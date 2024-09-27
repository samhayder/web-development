const transactions = [
	{ id: 1, text: "Flower", amount: -20 },
	{ id: 2, text: "Salary", amount: 300 },
	{ id: 3, text: "Book", amount: -10 },
	{ id: 4, text: "Camera", amount: 50 },
];

const filtering = transactions.reduce((preValue,currValue) => {
  return preValue + currValue.amount;
},0)

console.log(filtering);

// 0 + -20 = -20
// -20 + 300 = 280
// 280 + -10 = 270
// 270 + 50 = 320
