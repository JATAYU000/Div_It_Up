# Document Object Model (DOM) 

The Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.

## DOMReact a DOM interface 

ReactDOM is a React package that lets you render React components on a web page. It acts as a bridge between React components and the DOM (Document Object Model). 

A DOMRect describes the size and position of a rectangle.

The type of box represented by the DOMRect is specified by the method or property that returned it. For example, Range.getBoundingClientRect() specifies the rectangle that bounds the content of the range using such objects.

It inherits from its parent, DOMRectReadOnly.

### How does ReactDOM work?

- You can use ReactDOM to manipulate the DOM of a web page. 
- You can use ReactDOM to render React components efficiently. 
- You can use ReactDOM to manage DOM elements of a web page. 
- You can use ReactDOM to get outside the React model if you need to. 

### How do I use ReactDOM?

- You can import ReactDOM from 'react-dom'. 
- You can use the ReactDOM.render method to render React elements into a DOM node. 
- You can use the react-dom/client APIs to render React components on the client (in the browser). 
- You can use the ReactDOMServer API for Node.js. 

### Why use ReactDOM?

- ReactDOM provides an API containing the various methods to manipulate DOM. 
- ReactDOM provides an efficient way of managing DOM elements of the web page. 
- ReactDOM provides DOM-specific methods that can be used at the top level of your app. 


### Key Features of ReactDOM:

1. Rendering Components:

- `ReactDOM.createRoot(container).render(<App />)` → Renders a React component into the specified container (introduced in React 18 for concurrent rendering).
- `ReactDOM.render(<App />, container)` → Used in React 17 and earlier (now deprecated in React 18).

2. Updating the DOM Efficiently:

- React uses a Virtual DOM to track changes and update only the necessary parts of the real DOM.

3. Portals:

- `ReactDOM.createPortal(child, container)` → Allows rendering children into a different part of the DOM outside the parent component (e.g., for modals).

4. Unmounting Components:
- `root.unmount()` → Removes a React component from the DOM.

These are few key features of the ReactDOM. 