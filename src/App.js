import './App.css';
import {useState} from "react";
import DateArea from "./components/DateArea";
import AfterDateList from "./components/AfterDateList";

function App() {
  const [strDate, setStrDate] = useState('');

  return (
    <div className="px-4 py-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold underline">
          N Days After
        </h1>
        <DateArea strDate={strDate} setStrDate={setStrDate}/>
        <AfterDateList strDate={strDate}/>
      </div>
    </div>
  );
}

export default App;
