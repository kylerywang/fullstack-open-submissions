const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ name, exercises }) =>  {
  return (
  <p>
    {name} {exercises}
  </p>
  )
}

const Content = ({parts}) => {
  return (
  <>
    {parts.map(part => 
      <Part key={part.id}
        name={part.name} exercises = {part.exercises}
      />
    )}
    
    <Part
      part={parts[1]} 
    />
    <Part
      part={parts[2]} 
    />      
  </>
  )
}

const Course = ({course}) => {
  const sum = course.parts.reduce(
    (acc, current) => acc + current.exercises, 
    0
  )
  return (
    <>
      <Header course = {course.name} />
      <Content parts={course.parts}/>
      <Total sum={sum}/>
    </>
  )
}

export default Course