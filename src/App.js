import { useEffect, useState } from "react";
import "./App.css";
import { app } from "./firebase-config";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage();
function App() {
  const [n, setN] = useState("");
  const [k, setK] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const getFileUrl = () => {
    getDownloadURL(ref(storage, "n11k8.txt")).then((url) => {
      console.log(url);
      setFileUrl(url);
    });
  };

  return (
    <div className="App">
      <div className="d-flex px-3 py-3">
        <div style={{ minWidth: "300px" }} className="px-3">
          <div className="d-flex w-100 justify-content-between mt-2">
            <div>Input N = </div>
            <input className="ms-2" type="text"></input>
          </div>
          <div className="d-flex w-100 justify-content-between mt-2">
            <div>Input K = </div>
            <input className="ms-2" type="text"></input>
          </div>
          <div className="mt-2">
            <button className="rounded" onClick={getFileUrl}>
              Submit
            </button>
          </div>
        </div>
        <div className="px-3" style={{ borderLeft: "1px solid black", width: '1200px', height: '1200px' }}>
          {fileUrl?.length > 0 && (
            <div
              className='h-100 w-100'
              dangerouslySetInnerHTML={{
                __html: `<iframe src=${fileUrl} style='width: 100%; height: 100%;'></iframe>`,
              }}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
