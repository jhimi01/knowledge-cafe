// import React from 'react';

const Blog = () => {
  return (
    <>
      <h1>Blog</h1>
      <div className="text-start mb-5">
        <h3>Props vs state</h3>
        <h5 className="text-secondary">
          'Props' are passed down from a parent component to a child component
          as a way to communicate information between them. props are read-only,
          which means that they cannot be modified by the child component. A
          parent component can update the props of a child component.
          <br />
          'State' represents the internal state of a component. It is used to
          keep track of data that can change over time, such as user input, the
          status of a form, or the visibility of a menu. Unlike props, state can
          be modified by the component itself using the setState method. When
          state is updated, the component re-renders to reflect the new state.
        </h5>
        <h3>How does useState work?</h3>
        <h5 className="text-secondary">
          useState is a hook in React that allows you to add state to functional
          components.useState allows you to add state to functional components
          by providing an initial value and a function to update that value. The
          updated value causes the component to re-render with the new state.
        </h5>
        <h3>Purpose of useEffect other than fetching data?</h3>
        <h5 className="text-secondary">
The useEffect hook will make a network request on component render. When that fetch resolves, it will set the response from the server to the local state using the setState function. This, in turn, will cause the component to render so as to update the DOM with the data.
        </h5>
        <h3>How Does React work?</h3>
        <h5 className="text-secondary">
        React is a JavaScript library for building user interfaces. It works by breaking down your UI into small, reusable components, each with its own state and behavior.React provides a powerful and flexible way to build complex user interfaces that are fast, efficient, and easy to reason about. By breaking down your UI into small, reusable components and using a virtual representation of the DOM, React allows you to create UIs that are easy to develop and maintain, even as they become more complex over time.
        </h5>
      </div>
    </>
  );
};

export default Blog;
