import React from 'react';

const Faq = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <h2 className='text-3xl font-bold mt-3 underline'> FAQ </h2>
            <div className="collapse mx-auto mb-12 mt-3 rounded-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-gray-200 text-black peer-checked:bg-secondary peer-checked:text-secondary-content font-bold flex justify-center">
                    <h4 className="mr-3">
                        1. How Does React Works?
                    </h4>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                <div className="collapse-content bg-gray-200 text-black peer-checked:bg-primary peer-checked:text-secondary-content">
                    <p className='p-5'>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                        A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.</p>
                </div>
            </div>
            <div className="collapse mx-auto mb-12 mt-3 rounded-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-gray-200 text-black peer-checked:bg-secondary peer-checked:text-secondary-content font-bold flex justify-center">
                    <h4 className="mr-3">
                        2. Difference Beetween Props And State?
                    </h4>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className="collapse-content bg-gray-200 text-black peer-checked:bg-primary peer-checked:text-secondary-content">
                    <p className='p-5'>Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
                </div>
            </div>
            <div className="collapse mx-auto mb-12 mt-3 rounded-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-gray-200 text-black peer-checked:bg-secondary peer-checked:text-secondary-content font-bold flex justify-center">
                    <h4 className="mr-3">
                        3. What Is The Uses Of useEffect Hook without Data Load?
                    </h4>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className="collapse-content bg-gray-200 text-black peer-checked:bg-primary peer-checked:text-secondary-content">
                    <p className='p-5'>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM updates.
                        If you’re familiar with React class lifecycle methods,
                        you can think of useEffect Hook as componentDidMount,
                        componentDidUpdate, and componentWillUnmount combined.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;