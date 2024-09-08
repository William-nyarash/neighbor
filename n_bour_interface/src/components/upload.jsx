import { loadFileUploaderFrom } from '@uploadcare/file-uploader/abstract/loadFileUploaderFrom.js';

loadFileUploaderFrom('https://cdn.jsdelivr.net/npm/@uploadcare/file-uploader@v1/web/file-uploader.iife.min.js');


const UploadPic =()=>{
    // const file = await loadFileUploaderFrom('https://cdn.jsdelivr.net/npm/@uploadcare/file-uploader@v1/web/file-uploader.iife.min.js');
    //  console.log("the file is :", file);
    return(
        <>
        <form   >
            <input  type='file' className='input'/>
            <button type='submit'>upload</button>
        </form>
        </>
    )
}
export default UploadPic;