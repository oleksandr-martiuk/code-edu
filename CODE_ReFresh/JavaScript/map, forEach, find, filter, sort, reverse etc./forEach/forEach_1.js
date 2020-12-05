const context = {
   cb: result => console.log('Result is: ', result)
}

function add(nums, i, fullParams) {
   const result = nums[0] + nums[1]
   console.log(result)

   if (this.cb) {
      this.cb(result)
   }
}

const numbers = [[1, 2], [2, 2], [18, 1], [4, 5], [8, 9], [0, 0]]

numbers.forEach(add, context);
