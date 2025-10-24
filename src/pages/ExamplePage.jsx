import React, { useState } from 'react';
import { Star, Heart, Zap } from 'lucide-react';

// Đây là trang JSX với nhiều tính năng
const ExamplePage = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes(prev => prev + (isLiked ? -1 : 1));
    setIsLiked(!isLiked);
  };

  return (
    <section id="example" className="min-h-screen pt-16 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            JSX Example Page
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Đây là trang được viết bằng JSX (.jsx)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Star className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              JSX Features
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              JSX cho phép viết HTML trong JavaScript một cách tự nhiên
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Zap className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Interactive Elements
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Có thể tạo các element tương tác dễ dàng
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Heart className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Like Counter
            </h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isLiked 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                <span>{likes} likes</span>
              </button>
            </div>
          </div>
        </div>

        {/* JSX Syntax Examples */}
        <div className="mt-16 bg-gray-100 dark:bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            JSX Syntax Examples
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Conditional Rendering
              </h3>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  {`{isVisible && <div>Hello World</div>}`}
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Event Handling
              </h3>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  {`<button onClick={handleClick}>Click me</button>`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplePage;
