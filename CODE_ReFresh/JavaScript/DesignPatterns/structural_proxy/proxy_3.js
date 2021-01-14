// Project interface
class Project {
   run(){
      throw new Error('Method run() not implemented');
   }
}

class RealProject extends Project {
   constructor(url) {
      super();
      this.url = url;
      this.load();
   }

   load() {
      console.log(`Loading project from ${this.url} ...`);
   }
   run(){
      console.log(`Running project (${this.url}) ...`);
   }
}

// Proxy
const ProxyProject = function(url){
   const gitHubUrl = url;
   let realProject = null;
   return {
      run: function(){
         if(!realProject) realProject = new RealProject(gitHubUrl);
         realProject.run();
      }
   }
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// const project = new RealProject('https://www.github.com/my-account/real-project');
// project.load();
// project.run();

// TODO: with Proxy
const project = new ProxyProject('https://www.github.com/my-account/real-project');

project.run();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
project.run();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
project.run();
