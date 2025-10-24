import React from 'react';

// Đây là file JSX - có extension .jsx
const ExampleJSX = () => {
  return (
    <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
      <h2 className="text-xl font-bold text-blue-800 dark:text-blue-200">
        Đây là file JSX (.jsx)
      </h2>
      <p className="text-blue-600 dark:text-blue-300">
        File này có extension .jsx thay vì .js
      </p>
      <div className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          JSX Button
        </button>
      </div>
    </div>
  );
};

export default ExampleJSX;
