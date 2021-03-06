import React from "react";

const File = () => {
   return (<>
      <form method="post" encType="multipart/form-data">
         <div>
            <label htmlFor="file">Choose file to upload</label>
            <input type="file" id="file" name="file" multiple/>
         </div>
         <div>
            <button>Submit</button>
         </div>
      </form>
   </>);
}

export default File;
