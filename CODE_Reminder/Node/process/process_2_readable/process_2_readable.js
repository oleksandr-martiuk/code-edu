process.stdin.setEncoding('utf8'); // set en encoding for the input (otherwise - will get buffer input)

process.stdin.on('readable', function() {
   const input = process.stdin.read();

   if (input !== null) {
      // Эхо-вывод текста
      process.stdout.write(input);

      const command = input.trim();
      if (command === 'exit') process.exit(0);
   }
});
