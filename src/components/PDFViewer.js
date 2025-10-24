import React, { useState, useEffect } from 'react';
import { FileText, Download, Eye, X, Loader } from 'lucide-react';

const PDFViewer = ({ file, onClose }) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (file) {
      setIsLoading(true);
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
      setIsLoading(false);
    }

    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [file]);

  const handleDownload = () => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = file.name;
      link.click();
    }
  };

  const handlePreview = () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  };

  if (!file) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <FileText className="w-6 h-6 text-primary-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {file.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownload}
              className="p-2 bg-primary-100 dark:bg-primary-900/20 text-primary-600 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/30 transition-colors duration-200"
              title="Tải xuống"
            >
              <Download className="w-5 h-5" />
            </button>
            <button
              onClick={handlePreview}
              className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              title="Xem trong tab mới"
            >
              <Eye className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors duration-200"
              title="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 p-4">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <Loader className="w-8 h-8 text-primary-600 animate-spin mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300">Đang tải CV...</p>
              </div>
            </div>
          ) : (
            <div className="w-full h-full">
              <iframe
                src={pdfUrl}
                className="w-full h-full min-h-[500px] border border-gray-200 dark:border-gray-700 rounded-lg"
                title="CV Preview"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
