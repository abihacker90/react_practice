import './App.css';
import Button from './components/button/button.js';

const items = ["first", "second", "third", "fourth", "fifth"];
const listItems = items.map((item) =>
  <li>{item}</li>
);
function App() {
  return (
    <>
    <div className="form">
     <Button text="Send" />
    </div>
      <div>Hello New Branch</div>
    <div className="form2">
      <Button text="Send2" />
    </div>
    <ul>{listItems}</ul>

    <div className="form3">
      {items.map((item) => (
        <div><Button text={item} /></div>
      ))};
    </div>

    </>
  );
}

export default App;
