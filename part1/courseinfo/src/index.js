import React from 'react'
import ReactDOM from 'react-dom'


/*
  const Titulo = ({course}) => <h1>{course}</h1>
*/

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

//const Content = ({content,numbers}) => <p>{content} {numbers}</p>

/*
const Content = ({part1,exercises1,part2,exercises2,part3,exercises3}) => {
  return(
    <div>
      <Part part={part1} nexercises={exercises1}/>
      <Part part={part2} nexercises={exercises2}/>
      <Part part={part3} nexercises={exercises3}/>
    </div>
  )
} 
*/

const Content = (props) => {
  return(
    <div>
      <Part part={props.part1} nexercises={props.exercises1}/>
      <Part part={props.part2} nexercises={props.exercises2}/>
      <Part part={props.part3} nexercises={props.exercises3}/>
    </div>
  )
}

//const Part = ({part,nexercises}) => <p>{part} {nexercises}</p> 


const Part = (props) => {
  return(
    <p>{props.part} {props.nexercises}</p>
  )
}

//const Total = ({a,b,c}) => <p>Numbers of exercises {a + b + c}</p>

const Total = (props) => {
  //const resultado = props.a + props.b + props.c
  return(
    <p>Numbers of exercises {props.a + props.b + props.c}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total a={exercises1} b={exercises2} c={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))