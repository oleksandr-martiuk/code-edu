process.stdin.on('readable', function() {
   const input = process.stdin.read();
   console.log(input);

   if (input !== null) {
      // Эхо-вывод текста
      process.stdout.write(input);

      // 1. convert buffer to sting & trim()
      //    * buffer does not support string
      const command = input.toString().trim();
      console.log(command);

      if (command === 'exit') {
         process.exit(0);
      }
   }
});
