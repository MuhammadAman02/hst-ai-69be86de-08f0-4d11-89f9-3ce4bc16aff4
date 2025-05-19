import React from 'react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <h1 className="text-6xl font-bold animate-fade-in transition-transform duration-300 ease-in-out hover:scale-110">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Hello, World!
        </span>
      </h1>
    </div>
  );
};

export default Index;