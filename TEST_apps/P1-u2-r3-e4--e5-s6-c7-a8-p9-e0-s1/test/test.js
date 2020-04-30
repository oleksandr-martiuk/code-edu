import {expect} from 'chai';
import Number from '../services/numbers';

const numberService = new Number();

describe("'Integers' tests:", function(){
    it("Return 'P' when 'int' query param is a multiple of 3", function(){
        expect(numberService.getIntegerRes(3)).to.eql('P');
        expect(numberService.getIntegerRes(-3)).to.eql('P');
        expect(numberService.getIntegerRes(9)).to.eql('P');
        expect(numberService.getIntegerRes(-9)).to.eql('P');
    })
    it("Return 'P' when 'int' query param is a multiple of 5", function(){
        expect(numberService.getIntegerRes(5)).to.eql('E');
        expect(numberService.getIntegerRes(-5)).to.eql('E');
        expect(numberService.getIntegerRes(10)).to.eql('E');
        expect(numberService.getIntegerRes(-10)).to.eql('E');
    })
    it("Return 'PE' when 'int' query param is a multiple of 3 and 5", function(){
        expect(numberService.getIntegerRes(15)).to.eql('PE');
        expect(numberService.getIntegerRes(-15)).to.eql('PE');
        expect(numberService.getIntegerRes(30)).to.eql('PE');
        expect(numberService.getIntegerRes(-30)).to.eql('PE');
    })
    it("Return value of query parameter when 'int' is not a multiple of 3 and 5", function(){
        expect(numberService.getIntegerRes(1)).to.eql(1);
        expect(numberService.getIntegerRes(7)).to.eql(7);
        expect(numberService.getIntegerRes(-2)).to.eql(-2);
        expect(numberService.getIntegerRes(-17)).to.eql(-17);
    })

    it("Return 'The value is not an integer' if the value sent is not an integer", function(){
        expect(numberService.getIntegerRes(NaN)).to.eql('The value is not an integer');
        expect(numberService.getIntegerRes(0.55)).to.eql('The value is not an integer');
        expect(numberService.getIntegerRes(-8.88)).to.eql('The value is not an integer');
    })
})
