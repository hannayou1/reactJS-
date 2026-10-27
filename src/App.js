import { useState, useEffect } from "react";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time");
  
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  }

  useEffect(iRunOnlyOnce, []);

  useEffect ( ()=>{
	if(keyword !== "" && keyword.length > 5) {
	 	console.log("search for", keyword);
	}
  }, [keyword])

  
  useEffect ( ()=>{
	
	 	console.log("i rrun", counter);

  }, [counter])

  useEffect(() => {
	console.log("i run when keyword, counter change")
  },[keyword, counter])
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick} >Click me</button>
    </div>
  );
}

export default App;
