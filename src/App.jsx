import './App.css'
import Counter from './components/Counter/Counter'
import Team from './components/Team/Team'
function App() {
  // default function 
  function handleClick() {
    alert("Button One Clicked")
  }
  // arrow function
  const  handleClick2 = () => {
    alert("Button Two Clicked")
  }

  const add  = (a, b) => {
    alert("Summation of 10 + 2 is " + (a+b));
  }





  return (
    <>
     <h2>React Core Concepts</h2>
     <button className='margin' onClick={handleClick}>click button 1 </button>
     <button className='margin' onClick={handleClick2}>click button 2 </button>
     <button className='margin' onClick={() => {alert("Button Three Clicked")} }>click button 3 </button>     
     <button className='margin' onClick={() => {alert(`The sum of : ${10} and ${2} is : ${10 + 2}`)}}>The Summation of 10 and 2 </button>     
     {/* More Easier Way */}
     <button className='margin' onClick={() => {add(10, 2)}}>The Summation of 10 and 2  </button>

    <br /> <br />
     {/* Counter Data load */}
     <Counter></Counter>
     <Team></Team>

    </>
  )
}

export default App
