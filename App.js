
let parent = React.createElement(
    "div", 
    {id: "parent"},
    React.createElement(
        "div", 
        {id: "child"},
        React.createElement("h1", {id: "heading"},"Hello world!") ));

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
// let heading = React.createElement('h2', {id: "heading"}, "Hello From React!");
// let root = ReactDOM.createRoot(document.getElementById('root'));
// console.log("heading", heading);
// root.render(heading);