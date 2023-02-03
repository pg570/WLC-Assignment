import React, { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [per, setPer] = useState(0);

  function launchOneDrivePicker() {
    var odOptions = {
      clientId: "00bba23a-1fc5-486a-9c18-6b53fded6de0",
      action: "query",
      multiSelect: false,
      advanced: {
        queryParameters:
          "select=id,name,size,file,folder,photo,@microsoft.graph.downloadUrl,webUrl",
      },
      success: (res) => {
        console.log(res.value[0]);
        setName(res.value[0].name);
        setUrl(res.value[0]["@microsoft.graph.downloadUrl"]);
      },
      error: (response) => {
        console.log(response);
      },
      cancel: () => {},
    };
    OneDrive.open(odOptions);
  }
  function launchSaveToOneDrive() {
    var odOptions = {
      clientId: "00bba23a-1fc5-486a-9c18-6b53fded6de0",
      action: "save",
      sourceInputElementId: "fileUploadControl",
      sourceUri: "",
      fileName: "file.txt",
      openInNewWindow: true,
      advanced: {},
      success: function (files) {
        alert(`file saved to onedrive`);
      },
      progress: function (percent) {
        console.log(percent);
        setPer(percent);
      },
      cancel: function () {
        /* cancel handler */
      },
      error: function (error) {
        console.log(error);
      },
    };
    OneDrive.save(odOptions);
  }

  return (
    <>
      <button onClick={launchOneDrivePicker}>Open picker</button>

      {name && url ? (
        <div>
          <h3>File Name : {name}</h3>
          <h4>
            File Link : <a href={url}>{url}</a>
          </h4>
        </div>
      ) : (
        <div></div>
      )}

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input id="fileUploadControl" name="fileUploadControl" type="file" />
        {per ? <p>{per}%</p> : <></>}
        <button onClick={launchSaveToOneDrive}>Save to OneDrive</button>
      </div>
    </>
  );
}

export default Home;
