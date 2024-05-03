const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('type == "SUM"', () => {
        it('should return the sum of two positive numbers', () => {
            expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
        });


        it('should return the sum of two negative numbers', () => {
            expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
        });

        it('should return the sum of a negative and a positive number', () => {
            expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
        });

        it('should return the sum of a positive and a negative number', () => {
            expect(calculateNumber('SUM', 2.0, -2.0)).to.equal(0);
        });

        it('should return 0 when both numbers are 0', () => {
            expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
        });
    });

    describe('type == "SUBTRACT"', () => {
        it('should return the difference of two positive numbers', () => {
            expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
        });


        it('should return the difference of two negative numbers', () => {
            expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
        });


        it('should return the difference of a negative and a positive number', () => {
            expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
        });

        it('should return the difference of a positive and a negative number', () => {
            expect(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4.0);
        });

        it('should return 0 when both numbers are 0', () => {
            expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
        });
    });

    describe('type == "DIVIDE"', () => {
        it('should return the division of two positive numbers', () => {
            expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
        });

        it('should return the division of two numbers with different signs', () => {
            expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
        });

        it('should return the division of two numbers with different signs (alternate)', () => {
            expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
        });

        it('should return the division of two negative numbers', () => {
            expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
        });

        it('should return 1 when both numbers are equal and positive', () => {
            expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
        });

        it('should return 1 when both numbers are equal and negative', () => {
            expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
        });

        it('should return 1 when the division results in a rounded up number', () => {
            expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
        });

        it('should return 1 when the division results in a rounded down number', () => {
            expect(calculateNumber('DIVIDE', 2.4, 2.0)).to.equal(1);
        });

        it('should return 0 when the numerator is 0 and the denominator is a positive number', () => {
            expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
        });

        it('should return 0 when the numerator is 0 and the denominator is a negative number', () => {
            expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
        });

        it('should return "Error" when the denominator is 0 and the numerator is a positive number', () => {
            expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
        });

        it('should return "Error" when the denominator is a number rounded down to 0', () => {
            expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
        });

        it('should return "Error" when the denominator is a number rounded up to 0', () => {
            expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
        });

        it('should return "Error" when the denominator is 0 and the numerator is a negative number', () => {
            expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
        });

        it('should return "Error" when the denominator is a number rounded down to 0 and the numerator is a negative number', () => {
            expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
        });

        it('should return "Error" when the denominator is a number rounded up to 0 and the numerator is a negative number', () => {
            expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
        });

        it('should return "Error" when both numbers are 0', () => {
            expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
        });
    });
});