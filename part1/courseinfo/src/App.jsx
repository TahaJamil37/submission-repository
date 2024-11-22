const Headers = ({course}) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

const Parts = ({ part }) => {
  return (
    <>
      <p>
        {part?.name} {part?.exercises}
      </p>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => (
        <Parts key={index} part={part} />
      ))}
    </>
  );
};

const Total = ({ exercises }) => {
  const total = exercises.reduce((sum, count) => sum + count, 0);
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Headers course={course?.name} />

      <Content
        parts={course?.parts}
    
      />

      <Total exercises={course?.parts.map((p) => p.exercises)} />
    </div>
  );
};

export default App;
