import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
// const parent = React.createElement(
//     "div", 
//     {id: "parent"},
//     React.createElement(
//         "div", 
//         {id: "child"},
//         React.createElement("h1", {id: "heading"},"Hello world!") ));

// React Functional Component
// const FunctionalParent1 = ()=> <h1>React </h1>
// const FunctionalParent = ()=>{
//     return <><FunctionalParent1/>
//     <h1>hellooooo!</h1></>
// }

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// div with class “title”)
// ○ Create the same element using JSX
// ○ Create a functional component of the same with JSX
// ○ Pass attributes into the tag in JSX
// ○ Composition of Component(Add a component inside another)
// ○ {TitleComponent} vs {<TitleComponent/>} vs
// {<TitleComponent></TitleComponent>} in JSX

const header = React.createElement("div", {className: "title"}, 
React.createElement("h1",{},"I am h1"),
React.createElement("h2",{}, "I am h2"),
React.createElement("h3",{},"Hello! I am h3")
)
const HeaderJ = (
    <div className="title">
        <h1>I am heading 1 JSX</h1>
    </div>
)
const HeaderC = () => (
    <div className="title">
        {HeaderJ}
        <h1 className='hello'>I am heading 1</h1>
        <h2>I am heading 2</h2>
        <h3>I am heading 3</h3>
    </div>
)

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderC/>)