class Banner {
   constructor(params) {
      this.url = params.url;
      this.resImage = params.resImage;
      this.description = params.description;
   }
   setWidth(width) {
      this.width = width;
   }
   setHeight(height) {
      this.height = height;
   }
   setImg(img) {
      this.img = img || {};
   }
   render() {
      const params = Object.keys(this);
      console.log(`These are parameters of our banner:`);
      for (let param of params) {
         const value = this[param];
         console.log(`     > ${param}: ${(typeof value === 'object') ? JSON.stringify(value) : value}`);
      }
   }
}

//----------------------------------------------------------------------------------------------------------------------
// TODO: creating builders related to the base class 'Banner'

class BuilderBanner {
   constructor(params) {
      this.banner = new Banner(params);
   }
   renderBanner() {
      this.banner.render();
   }
}

class BuilderHighResBanner extends BuilderBanner {
   constructor(params) {
      super({...params, description: 'High responsibility banner'});
   }
   setWidth() {
      this.banner.setWidth(820);
   }
   setHeight() {
      this.banner.setHeight(400);
   }
   setImg(img) {
      this.banner.setImg(img);
   }
}

class BuilderLowResBanner extends BuilderBanner {
   constructor(params) {
      super({ ...params, description: 'Low responsibility banner' });
   }
   setWidth() {
      this.banner.setWidth(320);
   }
   setHeight() {
      this.banner.setHeight(100);
   }
   setImg(img) {
      this.banner.setImg(img);
   }
}

//----------------------------------------------------------------------------------------------------------------------
// TODO: creating Director for managing our builders

class DirectorBanner {
   constructor(builder) {
      if (!builder instanceof BuilderBanner) {
         throw 'new builder object passed';
      }
      this.builder = builder;
   }
   constructBuilder() {
      this.builder.setWidth();
      this.builder.setHeight();
      this.builder.setImg();
   }
   renderBanner() {
      this.builder.renderBanner();
   }
}

//======================================================================================================================

const lowResParams = {
   url: 'http://some-url.com/image/low-res-png',
   resImage: { image: 'Low responsibility image' }
}
const lowResBanner = new BuilderLowResBanner(lowResParams);    // 1. constructing Builder
const firstBanner = new DirectorBanner(lowResBanner);          // 2. constructing Director

firstBanner.constructBuilder();
firstBanner.renderBanner();
