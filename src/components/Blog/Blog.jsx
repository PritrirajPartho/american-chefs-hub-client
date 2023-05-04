import React from "react";

const Blog = () => {
  const ref = React.createRef();
  return (
    <div className="ms-5 me-5">
          {/* <div>
              <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                  {({toPdf}) => (
                      <button className="px-4 py-3 fs-5 bg-info mt-5 text-light border-0 rounded" onClick={toPdf}>Generate pdf</button>
                  )}
              </ReactToPdf>
              <div style={{width: 500, height: 500, background: 'blue'}} ref={ref}/>
          </div> */}
          {/* above................ */}
          <button className="px-4 py-3 fs-5 bg-info mt-5 text-light border-0 rounded">Create-pdf</button>
          <h1 className="text-info mt-4">1.Differences between uncontrolled and controlled components?</h1>
          <p>
            In React, controlled components refer to components that have their
            state and behavior controlled by the parent component. These components
            rely on props passed down from the parent component to update their
            state and behavior. Uncontrolled components refer to components that
            manage their own state internally
          </p>
          <h1 className="text-info">2.How to validate React props using PropTypes?</h1>
          <p>
            PropTypes.any : The prop can be of any data type. PropTypes.bool : The
            prop should be a Boolean. PropTypes.number : The prop should be a
            number. PropTypes.string : The prop should be a string. PropTypes.func :
            The prop should be a function. PropTypes.array : The prop should be an
            array.
          </p>
          <h1 className="text-info">3. Difference between nodejs and express js?</h1>
          <p>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications</p>
          <h1 className="text-info">4. What is a custom hook, and why will you create a custom hook?</h1>
          <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
    </div>
  );
};

export default Blog;
