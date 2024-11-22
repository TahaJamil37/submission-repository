import React from "react";

const Headers = ({ course }) => {
  return (
    <>
      <h1>{course?.name}</h1>
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
  console.log(parts);

  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      {parts?.map((part, index) => (
        <Parts key={index} part={part} />
      ))}
      <p>total of {totalExercises} exercises</p>
    </>
  );
};

export default function Course({ courses }) {
  return (
    <div>
      {courses?.map((course, index) => (
        <div key={course.id || index}>
          <Headers course={course} />
          <Content parts={course.parts} />
        </div>
      ))}
    </div>
  );
}
