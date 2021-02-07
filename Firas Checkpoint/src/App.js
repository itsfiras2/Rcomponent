import "./App.css";
import FullName from "./component/profile/FullName";
import Address from "./component/profile/Address";
import ProfilePhoto from "./component/profile/ProfilePhoto.js";

function App() {
  return (
    <div className="App">
      <FullName />
      <Address />
      <ProfilePhoto />
    </div>
  );
}

export default App;
