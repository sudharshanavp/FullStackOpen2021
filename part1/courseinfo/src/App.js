import React from "react";

const Header = (data) => {
  return <h1>{data.course}</h1>;
};

const Content = (data) => {
  return [
    <p>{data.parts[0].name + " " + data.parts[0].exercises}</p>,
    <p>{data.parts[1].name + " " + data.parts[1].exercises}</p>,
    <p>{data.parts[2].name + " " + data.parts[2].exercises}</p>,
  ];
};
const Total = (data) => {
  return (
    <p>Number of Excercises {data.parts[0].exercises + data.parts[1].exercises + data.parts[2].exercises}</p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 8,
      },
      {
        name: "State of a component",
        exercises: 15,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
