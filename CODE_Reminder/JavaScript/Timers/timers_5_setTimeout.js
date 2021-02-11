const tahoe = {
   resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
   print: function(delay) {
      setTimeout(function () {
         console.log(this.resorts.join(","))
      }, delay)
   }
}

const tahoeUpdate = {
   resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
   print: function(delay) {
      setTimeout(() => {
         console.log(this.resorts.join(","))
         tahoe.print(delay) // not possible to reach property 'join' from undefined
      }, delay)
   }
}

tahoeUpdate.print(1000);
