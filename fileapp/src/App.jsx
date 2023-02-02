import "./App.css";

function App() {
  function launchOneDrivePicker() {
    var odOptions = {
      clientId: "057f5340-51d5-4df5-bee3-d41a053cba45",
      action: "query",
      multiSelect: false,

      success: (response) => {
        console.log(response);
      },
      error: (response) => {
        console.log(response);
      },
      cancel: () => {},
    };
    OneDrive.open(odOptions);
  }

  return (
    <div className="App">
      <button onClick={launchOneDrivePicker}>Open picker</button>
    </div>
  );
}

export default App;
