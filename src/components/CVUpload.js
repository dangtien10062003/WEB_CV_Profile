import React, { useState, useRef } from 'react';
import { Upload, FileText, X, CheckCircle, AlertCircle } from 'lucide-react';

const CVUpload = ({ onFileSelect, currentFile }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('idle'); // idle, uploading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file) => {
    // Validate file type
    if (file.type !== 'application/pdf') {
      setErrorMessage('Chỉ chấp nhận file PDF');
      setUploadStatus('error');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage('File quá lớn. Kích thước tối đa 5MB');
      setUploadStatus('error');
      return;
    }

    setUploadStatus('uploading');
    setErrorMessage('');

    // Simulate upload process
    setTimeout(() => {
      setUploadStatus('success');
      if (onFileSelect) {
        onFileSelect(file);
      }
    }, 1500);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleRemoveFile = () => {
    setUploadStatus('idle');
    setErrorMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
          isDragOver
            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
            : uploadStatus === 'success'
            ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
            : uploadStatus === 'error'
            ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
            : 'border-gray-300 dark:border-gray-600 hover:border-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileInputChange}
          className="hidden"
        />

        {uploadStatus === 'idle' && (
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Tải lên CV của bạn
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Kéo thả file PDF vào đây hoặc click để chọn file
              </p>
              <button
                onClick={openFileDialog}
                className="btn-primary"
              >
                Chọn file PDF
              </button>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>• Chỉ chấp nhận file PDF</p>
              <p>• Kích thước tối đa 5MB</p>
            </div>
          </div>
        )}

        {uploadStatus === 'uploading' && (
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Đang tải lên...
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Vui lòng chờ trong giây lát
              </p>
            </div>
          </div>
        )}

        {uploadStatus === 'success' && (
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Tải lên thành công!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                CV của bạn đã được tải lên và sẵn sàng để tải xuống
              </p>
              <div className="flex items-center justify-center space-x-2">
                <FileText className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium text-primary-600">
                  {currentFile?.name || 'CV.pdf'}
                </span>
              </div>
            </div>
            <button
              onClick={handleRemoveFile}
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex items-center space-x-1 mx-auto"
            >
              <X className="w-4 h-4" />
              <span>Xóa file</span>
            </button>
          </div>
        )}

        {uploadStatus === 'error' && (
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Lỗi tải lên
              </h3>
              <p className="text-red-600 dark:text-red-400 mb-4">
                {errorMessage}
              </p>
              <button
                onClick={openFileDialog}
                className="btn-primary"
              >
                Thử lại
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVUpload;
