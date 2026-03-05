
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

//BVT
    test('BVT1: a at minimum boundary (1)', () => {
      expect(classifyTriangle(1, 100, 100)).toBe('Isosceles');
    });

    test ('BVT2: a at a negative minimum boundary (-1)', () => {
      expect(classifyTriangle(-1, 50, 50)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('BVT3: a at just above minimum (2)', () => {
      expect(classifyTriangle(2, 100, 100)).toBe('Isosceles');
    });
    
    test('BVT4: a at midpoint (100)', () => {
      expect(classifyTriangle(100, 100, 100)).toBe('Equilateral');
    });

    test('BVT5: a at maximum (200)', () => {
      expect(classifyTriangle(200, 100, 100)).toBe('Not a Triangle');
    });

    test('BVT6: a at maximum (200)', () => {
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
    });

    test('BVT7: a at just below maximum (199)', () => {
      expect(classifyTriangle(199, 100, 100)).toBe('Isosceles');
    });

     test('BVT8: a above maximum (201)', () => {
      expect(classifyTriangle(201, 100, 100)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('BVT9: all sides at maximum', () => {
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
    });

    test('BVT10: all sides at minimum', () => {
      expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
    });

    test('BVT11: two sides at maximum, one at minimum', () => {
      expect(classifyTriangle(1, 200, 200)).toBe('Isosceles');
    });

    test('BVT12: All sides more than maximum', () => {
      expect(classifyTriangle(300, 230, 230)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('BVT13: two sides at minimum, one at maximum', () => {
      expect(classifyTriangle(1, 200, 1)).toBe('Not a Triangle');
    });

    test('BVT14: mixed boundaries a at minimum, b at maximum, c in the midpoint', () => {
      expect(classifyTriangle(1, 200, 100)).toBe('Not a Triangle');
    });

    //ECP

    test('ECP1: should classify an Isosceles triangle', () => {
      expect(classifyTriangle(5, 5, 7)).toBe('Isosceles');
    });

    test('ECP2: Not an Isosceles triangle', () => {
      expect(classifyTriangle(5, 5, 12)).toBe('Not a Triangle');
    });

    test('ECP3: should classify an Isosceles triangle', () => {
      expect(classifyTriangle(5, 9, 5)).toBe('Isosceles');
    });

    test('ECP4: should classify an Scalene triangle', () => {
      expect(classifyTriangle(5, 6, 7)).toBe('Scalene');
    });

    test('ECP5: Not a Triangle (a > b + c)', () => {
     expect(classifyTriangle(10, 3, 4)).toBe('Not a Triangle');
    });

    test('ECP6: Not a Triangle (a == b + c)', () => {
      expect(classifyTriangle(7, 3, 4)).toBe('Not a Triangle');
    });

    test('ECP7: All sides zero', () => {
      expect(classifyTriangle(0, 0, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('ECP8: All sides negative', () => {
      expect(classifyTriangle(-1, -2, -3)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('ECP9: Scalene Triangle in mid-range', () => {
      expect(classifyTriangle(100, 101, 102)).toBe('Scalene');
    });

    test('ECP10: Not a Triangle', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
    });

   });
    
  

  