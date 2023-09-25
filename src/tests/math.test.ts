import { difference, product, quotient, sum } from "../utils/math";


test('should sum two numbers', () => { 
    const sumNumbers = sum(5, 10);

    expect(sumNumbers).toEqual(15);
});

test('should get difference between two numbers', () => {  
    const result = difference(30, 5);

    expect(result).toEqual(25);
});

test('should get product between two numbers', () => {  
    const result = product(10, 5);

    expect(result).toEqual(50);
});

test('should get quotient between two numbers', () => {  
    const result = quotient(20, 5);

    expect(result).toEqual(4);
});

