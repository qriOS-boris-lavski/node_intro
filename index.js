const startTime = Date.now();

const dataStructure = {};
for (let i = 0; i < 1000; i++) {
  const productName = `Product ${i + 1}`;
  const price = i + 1;
  dataStructure[productName] = price;
}

const creationTime = Date.now() - startTime;
console.log(`Час створення об'єкта: ${creationTime} мс`);

const accessStartTime = Date.now();
const product50 = dataStructure[`Product 50`];
const accessTime = Date.now() - accessStartTime;
console.log(`Час доступу до 50-го елемента: ${accessTime} мс`);
