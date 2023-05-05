import React from "react";
import Pdf from "react-to-pdf";



const Blog = () => {
  const ref = React.createRef();
  return (
    <div className="ms-5 me-5">
          <div className="App">
              <div ref={ref}  className="mt-3">
                  <h1>Hello Create a pdf easily.</h1>
                  <h2>Start editing to see some magic man. try out it.</h2>
              </div>
              <Pdf targetRef={ref} filename="blog-page.pdf">
                {({ toPdf }) => <button onClick={toPdf}   className="px-4 py-3 fs-5 bg-info mt-2  mb-2 text-light border-0 rounded">Create-pdf</button>}
              </Pdf>
          </div>
          {/* above................ */}
          
          <h1 className="text-info mt-4">1.Differences between uncontrolled and controlled components?</h1>
          <p>
             <strong>Ans: </strong> In React, controlled components refer to components that have their
            state and behavior controlled by the parent component. These components
            rely on props passed down from the parent component to update their
            state and behavior. Uncontrolled components refer to components that
            manage their own state internally.
          </p>
          <h1 className="text-info">2.How to validate React props using PropTypes?</h1>
          <p>
            <strong>Ans: </strong>This Props type is should be under PropsType <br></br>PropTypes: The prop can be of any data type.<br></br> PropTypes.bool : The
            prop should be a Boolean.<br></br> PropTypes.number : The prop should be a
            number.<br></br> PropTypes.string : The prop should be a string.<br></br> PropTypes.func :
            The prop should be a function.<br></br> PropTypes.array : The prop should be an
            array.
          </p>
          <h1 className="text-info">3. Difference between nodejs and express js?</h1>
          <p><strong>Ans: </strong>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications</p>
          <h1 className="text-info">4. What is a custom hook, and why will you create a custom hook?</h1>
          <p><strong>Ans: </strong>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
    </div>
  );
};

export default Blog;
