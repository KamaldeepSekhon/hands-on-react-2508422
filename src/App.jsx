import React, { component } from "react";
import Welcome from "./components/Welcome"; //import file Welcome.jsx
// class Welcome extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return <h1>First React Project</h1>;
//   }
// }

// class Welcome2 extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h1>{this.props.name} React Project</h1>;
//   }
// }

// const Welcome3 = (props) => {
//   //hooks
//   return (
//     <h1>
//       {" "}
//       Hello <i>{props.gold}</i>
//     </h1>
//   );
// };
function App() {
  const name = "StarGazers";
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <Welcome name="First Project"></Welcome>
          {/* <Welcome />
          <Welcome2 name="second" />
          <Welcome2 name="third" />
          <Welcome3 gold="Kamal" /> */}

          <h1>
            Meet the <i style={{ color: "SteelBlue" }}>{name}</i>
          </h1>
          <p>
            Members of an <b>intergalactic alliance</b>
            <br />
            paving the way for peace and benevolence among all species. They are
            known for their enthusiasm for science, for their love of fun, and
            their dedication to education.
          </p>
          <button className="outline" onClick={() => alert("Hi there")}>
            Click Me
          </button>
        </hgroup>
      </article>
    </div>
  );
}
export default App;
