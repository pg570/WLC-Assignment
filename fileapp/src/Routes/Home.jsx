import React, { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  function launchOneDrivePicker() {
    var odOptions = {
      clientId: "00bba23a-1fc5-486a-9c18-6b53fded6de0",
      action: "query",
      multiSelect: false,
      advanced: {
        queryParameters:
          "select=id,name,size,file,folder,photo,@microsoft.graph.downloadUrl",
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

  return (
    <>
      <button onClick={launchOneDrivePicker}>Open picker</button>

      {name && url ? (
        <div>
          <h3>File Name : {name}</h3>
          <h3>
            File Link : <a href={url}>{url}</a>
          </h3>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Home;
