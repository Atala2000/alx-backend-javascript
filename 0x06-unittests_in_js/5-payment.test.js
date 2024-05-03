const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let bigBrother;

    beforeEach(() => {
        if (!bigBrother) {
            bigBrother = sinon.spy(console);
        }
    });

    afterEach(() => {
        bigBrother.log.resetHistory();
    });

    it('logs "The total is: 120" to the console when sending payment request with amount 100 and fee 20', () => {
        sendPaymentRequestToApi(100, 20);
        expect(bigBrother.log.calledWith('The total is: 120')).to.be.true;
        expect(bigBrother.log.calledOnce).to.be.true;
    });

    it('logs "The total is: 20" to the console when sending payment request with amount 10 and fee 10', () => {
        sendPaymentRequestToApi(10, 10);
        expect(bigBrother.log.calledWith('The total is: 20')).to.be.true;
        expect(bigBrother.log.calledOnce).to.be.true;
    });
});
