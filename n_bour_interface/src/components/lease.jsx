import{ useState } from 'react';

function UploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Send the selected file to the backend
  };
 console.log("the file",selectedFile);
  return (
    <form>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </form>
  );
}
export default UploadForm;