const anyValue: any = 1;

anyValue();

anyValue(1, 2, 3);

const result = anyValue('hello');

// Chained unsafe calls
anyValue(result).then().catch();

export { anyValue };
