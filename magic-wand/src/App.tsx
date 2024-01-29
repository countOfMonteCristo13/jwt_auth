import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  return (
    <>
      <Button title="Log in" />
      <Button title="Continue as Guest" type="secondary" />
      <Input placeholder="Username" />
      <Input type="password" placeholder="Password" />
    </>
  );
}

export default App;
