const fetch = (url) => {
   return new Promise(resolve => {
      setTimeout(() => resolve(`Hello from ${url}`), 1000);
   });
}

const showLoadingSpinner = () => console.log('Loading spinner has been started');
const hideLoadingSpinner = () => console.log('Spinner is hidden');

const fetchAndDisplay = async url => {
   showLoadingSpinner();

   await fetch(url)
      .then(response => {
         if (response.includes('http://')) throw new Error('Not secure protocol');
         else console.log(response);
      })
      .catch((error) => {
         console.log('ERROR: ', error.message);
      })
      .finally(() => {
         hideLoadingSpinner();
      });

   console.log(`\nASYNCHRONOUS method 'fetchAndDisplay' is done`);
};

//----------------------------------------------------------------------------------------------------------------------

(async () => await fetchAndDisplay('https://www.my-website.com'))();
