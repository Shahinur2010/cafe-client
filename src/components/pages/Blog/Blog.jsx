import React from 'react';
import { FaDownload } from "react-icons/fa";

const Blog = () => {
    return (
        <div>
            <h2 className='text-3xl font-semibold my-2 p-4 text-center'>Questions-Answers <button className="btn btn-success">Download <FaDownload/></button>
            </h2>
            <div className="text-lg my-4 p-4">1. A controlled component is bound to a value, and its changes will be handled in code by using event-based callbacks. The component is under control of the component's state. Components are under the control of DOM.  The uncontrolled component react does not use state. Thus uncontrolled components do not depend on any state of input elements or any event handler. This type of component does not care about real-time input changes.</div>
            <div className="text-lg my-4 p-4">2. PropTypes are a great way to catch errors at run time and act as the first line of defense for your applications. They're not as type-safe as TypeScript but they're much easier to set up and work with. PropTypes exports a range of validators that can be used to make sure the data received is valid. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.

            </div>
            <div className="text-lg my-4 p-4">3.  Nodejs is a javascript based server side platform, Where as express js is a NodeJs framework to build websites / web services. The best use of the Node. js framework is to create a web server or a chat app. Express. js is used to create web-apps using principles and approaches of Node. Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</div>
            <div className="text-lg my-4 p-4">4. Hooks are reusable functions. When component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom React hooks are an essential tool that let us add special, unique functionality to our React applications. Custom Hooks allow us to access the React ecosystem in terms of hooks, which means we have access to all the known hooks like useState, useMemo, useEffect, etc. Custom Hooks consist of built-in React Hooks or other custom Hooks. Therefore a custom Hook is always a new composition of one or multiple Hooks. As a function, it takes input and returns output. Its name starts with use. The main reason to write a custom hook is for code reusability.</div>
        </div>
    );
};

export default Blog;