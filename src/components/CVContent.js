import React, { useState, useEffect } from 'react';
import { FileText, Download, Eye } from 'lucide-react';

const CVContent = ({ file, onDownload, onPreview }) => {
  const [cvData, setCvData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (file) {
      setIsLoading(true);
      // Simulate reading CV content from uploaded file
      setTimeout(() => {
        // In a real app, you would parse the PDF content here
        // For now, we'll show a message that the CV has been uploaded
        setCvData({
          isUploaded: true,
          fileName: file.name,
          fileSize: (file.size / 1024 / 1024).toFixed(2) + ' MB'
        });
        setIsLoading(false);
      }, 1500);
    }
  }, [file]);

  if (!file) return null;

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center space-x-2">
          <div className="w-6 h-6 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-600 dark:text-gray-300">Đang đọc CV...</span>
        </div>
      </div>
    );
  }

  if (!cvData) return null;

  return (
    <div className="space-y-8">
      {/* CV Upload Success */}
      <div className="text-center">
        <div className="w-32 h-32 bg-green-100 dark:bg-green-900/20 rounded-full mx-auto mb-6 flex items-center justify-center">
          <FileText className="w-16 h-16 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          CV đã được tải lên thành công!
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          File CV của bạn đã sẵn sàng để tải xuống và xem trước
        </p>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 max-w-md mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FileText className="w-6 h-6 text-primary-600" />
            <span className="font-semibold text-gray-900 dark:text-white">{cvData.fileName}</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Kích thước: {cvData.fileSize}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 pt-8">
        <button
          onClick={() => {
            // Tải file CV thật của bạn
            const link = document.createElement('a');
            link.href = '/CV_DangNgocTien2.pdf';
            link.download = 'CV_DangNgocTien2.pdf';
            link.click();
          }}
          className="btn-primary flex items-center space-x-2"
        >
          <Download className="w-5 h-5" />
          <span>Tải xuống CV</span>
        </button>
        <button
          onClick={() => {
            // Mở CV thật của bạn trong tab mới
            window.open('/CV_DangNgocTien2.pdf', '_blank');
          }}
          className="btn-secondary flex items-center space-x-2"
        >
          <Eye className="w-5 h-5" />
          <span>Xem trước</span>
        </button>
      </div>

      {/* Note */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-blue-600 text-sm font-bold">i</span>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Lưu ý
            </h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              CV của bạn đã được tải lên thành công. Bạn có thể tải xuống hoặc xem trước file PDF. 
              Để xem nội dung chi tiết, hãy sử dụng nút "Xem trước" để mở file trong tab mới.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVContent;
