import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Download, Eye, FileText } from 'lucide-react';
import CVUpload from '../components/CVUpload';
import CVContent from '../components/CVContent';
import PDFViewer from '../components/PDFViewer';
import CVFile from '../assets/CV_DangNgocTien2.pdf';

const CV = () => {
  const { t } = useTranslation();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showPDFViewer, setShowPDFViewer] = useState(false);

  return (
    <section id="cv" className="min-h-screen pt-16">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('cv.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t('cv.subtitle')}
            </p>
            
            {!uploadedFile ? (
              <div className="w-full max-w-md mx-auto">
                <CVUpload 
                  onFileSelect={setUploadedFile}
                  currentFile={uploadedFile}
                />
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="btn-primary flex items-center justify-center space-x-2 cv-download-animation"
                  onClick={() => {
                    // Tải file CV thật của bạn
                    const link = document.createElement('a');
                    link.href ={CVFile}; ;
                    link.download = 'CV_DangNgocTien2.pdf';
                    link.click();
                  }}
                >
                  <Download className="w-5 h-5" />
                  <span>{t('cv.download')}</span>
                </button>
                <button 
                  className="btn-secondary flex items-center justify-center space-x-2 hover-lift"
                  onClick={() => {
                    // Mở CV thật của bạn trong tab mới
                    window.open('/CV_DangNgocTien2.pdf', '_blank');
                  }}
                >
                  <Eye className="w-5 h-5" />
                  <span>{t('cv.preview')}</span>
                </button>
              </div>
            )}
          </div>

          {/* CV Content */}
          {uploadedFile ? (
            <CVContent 
              file={uploadedFile}
              onDownload={() => {
                const url = URL.createObjectURL(uploadedFile);
                const link = document.createElement('a');
                link.href = url;
                link.download = uploadedFile.name;
                link.click();
                URL.revokeObjectURL(url);
              }}
              onPreview={() => setShowPDFViewer(true)}
            />
          ) : (
            <div className="card text-center py-12">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                <FileText className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Chưa có CV
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Hãy tải lên CV của bạn để xem nội dung chi tiết
              </p>
            </div>
          )}

          {/* PDF Viewer Modal */}
          {showPDFViewer && (
            <PDFViewer 
              file={uploadedFile}
              onClose={() => setShowPDFViewer(false)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CV;