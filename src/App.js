import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Card = ({ image, title, description, buttonText }) => {
  return (
    <div className="card h-100 shadow">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary">{buttonText}</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-white mb-4">Carteles con React y Bootstrap</h1>
      <div className="row">
        <div className="col-md-4">
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
            title="Web primero"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatem deleniti quo molestiae."
            buttonText="Ir a la página"
          />
        </div>
        <div className="col-md-4">
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            title="Web Segundo"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatem deleniti quo molestiae."
            buttonText="Ir a la página"
          />
        </div>
        <div className="col-md-4">
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
            title="Web tercero"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatem deleniti quo molestiae."
            buttonText="Ir a la página"
          />
        </div>
      </div>
    </div>
  );
};

export default App;