function format (code, indent='  ') {
    const startKeywords = ['class', 'module', 'def', 'if', 'unless', 'case', 'while', 'until', 'for', 'begin']
    const pCode = code.split('\n');
    const fCode = [];
    let bOpen = 0;

    for (let line of pCode) {
      const pLine = line.split(' ');
      let updLine = line;

      if (!bOpen && line === 'end')
        throw new RangeError("Invalid count value")

      if (line.length) {

        if (!bOpen && startKeywords.includes(pLine[0])) {
          bOpen++;
        } else {
          if (pLine[0] === 'end')
            bOpen--;

            updLine = indent.repeat(bOpen) + line;

            if (startKeywords.includes(pLine[0]))
              bOpen++;
        }
        fCode.push(updLine);
      }
    }

    return (fCode.length) ? fCode.join('\n') : '';
}

// ----------------------------------------------------------------------------
var code = `
module CodeWars
class Kata

def FizzBuzz n
n%15==0 ? 'FizzBuzz' : n%5==0 ? 'Buzz' : n%3==0 ? 'Fizz' : n
end
  
end
end
`;

format(code, '  ');

var formatted = `
module CodeWars
  class Kata
    def FizzBuzz n
      n%15==0 ? 'FizzBuzz' : n%5==0 ? 'Buzz' : n%3==0 ? 'Fizz' : n
    end
  end
end
`;
