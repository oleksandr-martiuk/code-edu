class Project {
   generateUrl(accountName, appName) {
      this.url = `https://github.com/${accountName}/${appName}`;
   }
   load() {
      //...loading project locally to the 'app' by using this.url
      return true;
   }
   save(commit) {
      //...loading project locally by using this.url and this.app
      return true;
   }
}

const myApp = new Project();
myApp.generateUrl('sam-little', 'my_vlog')
myApp.load();
myApp.save({ name: 'some commit #1', file: 'Buffer' });
myApp.save({ name: 'some commit #2', file: 'Buffer' });
myApp.save({ name: 'some commit #3', file: 'Buffer' });

/** ----------------------------------------------------------------------------------------------------------------- */

class ProxyProject {
   constructor(accountName, appName) {
      this.project = new Project();
      this.url = this.project.generateUrl(accountName, appName);
      this.readyApp = null;
   }
   save(commit) {
      if (!this.readyApp) {
         console.log('Init app');
         this.readyApp = this.project.load();
      }
      this.project.save();
   };
}

const project = new ProxyProject('sam-little', 'my_vlog');
project.save({ name: 'commit #1', file: 'Buffer' });
project.save({ name: 'commit #2', file: 'Buffer' });
project.save({ name: 'commit #3', file: 'Buffer' });
