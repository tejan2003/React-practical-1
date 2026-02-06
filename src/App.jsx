import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Card from './components/Card'
// import Student from './components/Student'
// import Ternary from './components/Ternary'
// import MyComponent from './components/MyComponent'
// import Timer from './components/Timer'
//import Timers from './components/Timers'
//import Timerss from './components/Timerss'
//import SimpleInput from './components/SimpleInput'
//import Form from './components/Form'
//import Formm from './components/Formm'
//import Forms from './components/Forms'
//import FormHook from './components/FormHook'
//import { ErrorBoundary }from "react-error-boundary"
//import ErrorFallback from './components/ErrorFallback'
//import MyComponents from './components/MyComponents'
//import MemoParent from './components/MemoParent'
import MemoComputation from './components/MemoComputation'
import CallbackExample from './components/CallBackExample'
import ParentComponent from './components/ParentComponent'


// function Header() {
  // return <h1 style={{color: "blue", fontSize: "24"}}>this is a header</h1>
// }
function App(){
  return(
     <>
    <MemoComputation />
    <CallbackExample />
    <ParentComponent />
    </>
  );
}

export default App;
    //  <Card/>
    //  <Header/>
    //  <Student name="Tejan" age={21}/>
    //  <Ternary isLoggedIn={true} /> 
    //  <MyComponent />
    //  <Timer />
    //  <Timers />
    //  <Timerss />
    //  <SimpleInput />
    // <Form />
    // <Formm />
    // <Forms />
    // <FormHook />
    // <ErrorBoundary FallbackComponent={ErrorFallback}>
    //<MyComponents />
    //</ErrorBoundary>
    //<MemoParent />

