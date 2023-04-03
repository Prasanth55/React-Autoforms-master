import "./style.css";

const FileUpload = () => {
  const fileUploadHandler = (event) => {
    console.log(event.target.files[0]);
    // API call to send it to back end comes here
  };

  return (
    <div className="fileUploadBox">
      <form>
        <p className="uploadLabel">File upload comes here</p>
        <input
          type="file"
          onChange={fileUploadHandler}
          className="uploadbox"
        ></input>
        <button className="uploadButton">Upload</button>
      </form>
    </div>
  );
};

export default FileUpload;
