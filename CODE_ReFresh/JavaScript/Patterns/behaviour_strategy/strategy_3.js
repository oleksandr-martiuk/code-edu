class StrategyManager {
  constructor() {
    this._strategies = [];
  }
  addStrategy(strategy) {
    this._strategies = [...this._strategies, strategy];
  }
  getStrategy(name) {
    const result = this._strategies.find(strategy => strategy._name === name);
    return result;
  }
}

class Strategy {
  constructor(name, handler) {
    this._name = name;
    this._handler = handler;
  }

  doAction(){
    this._handler();
  }
}

//----------------------------------------------------------------------------------------------------------------------
// Initialization of strategy (strategy builder)
const strategyManager = new StrategyManager();
const strategy1 = new Strategy('strategy1', () => console.log('Strategy1'));
const strategy2 = new Strategy('strategy2', () => console.log('Strategy2'));
strategyManager.addStrategy(strategy1);
strategyManager.addStrategy(strategy2);

// Get strategy:
const s1 = strategyManager.getStrategy('strategy1');
const s2 = strategyManager.getStrategy('strategy2');
const s3 = strategyManager.getStrategy('strategy3');

// Use strategy:
s1.doAction();
s2.doAction();

try {
  s3.doAction();
} catch (err) {
  console.error('Caught an Error');
  console.error(err);
}
