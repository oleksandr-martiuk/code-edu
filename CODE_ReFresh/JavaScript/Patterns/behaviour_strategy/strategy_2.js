class StrategyManager {
  constructor() {
    this._strategy = null;
  }
  set strategy(strategy) {
    this._strategy = strategy;
  }
  get strategy() {
    return this._strategy;
  }
  doAction(){
    this._strategy.doAction();
  }
}

class Strategy1 {
  doAction(){
    console.log('Strategy #1')
  }
}

class Strategy2 {
  doAction(){
    console.log('Strategy #2')
  }
}

// ---------------------------------------------------------------------------------------------------------------------

const strategyManager = new StrategyManager();
const strategy_1 = new Strategy1();
const strategy_2 = new Strategy2();

strategyManager.strategy = strategy_1;
strategyManager.doAction();

strategyManager.strategy = strategy_2;
strategyManager.doAction();
