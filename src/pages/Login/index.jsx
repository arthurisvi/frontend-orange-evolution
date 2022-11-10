import React from "react";
import PrimarySearchAppBar from "../../shared/components/Header";
import CardProgress from "../../shared/components/CardProgress";

const trails = [
  { id: 1, title: "Desenvolvimento FullStack", class: "Teste" },
];

const Login = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      {trails.map((trail) => (
        <CardProgress
          trailId={trail.id}
          trailClass={trail.class}
          trailTitle={trail.title}
        />
      ))}
    </div>
  );
};

export default Login;
