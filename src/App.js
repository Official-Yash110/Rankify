import React from 'react';

function App() {
  return (
    <div>

      <div className="m-4 p-6">
        Content with spacing!
      </div>

      <div className="flex justify-between">
        <div>Item 1</div>
        <div>Item 2</div>
      </div>

      <div className="text-sm md:text-xl lg:text-2xl">
        This text will change size based on screen width.
      </div>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-500">Welcome to Rankify!</h1>
        <p className="text-xl mt-4">This is a great place to start building your app.</p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
