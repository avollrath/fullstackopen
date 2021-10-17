import React from 'react'

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  }
  
  const Course = ({courses}) => {
    return (
      <div>
        {courses.map(course =>
        <div key={course.id}> 
          <Header course={course} />
          <Content course={course} />
          <h2>total of {course.parts.reduce(( sum , {exercises} ) => sum + exercises , 0)} excercises</h2>
        </div>
        )}
      </div>
    )
  }

  export default Course