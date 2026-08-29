import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Download, Eye, FileText } from 'lucide-react';
import CVFile from '../assets/SOFT_DEV.pdf';

const CV = () => {
  const { t } = useTranslation();

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = CVFile;
    link.download = 'SOFT_DEV.pdf';
    link.click();
  };

  return (
    <section id="cv" className="relative overflow-hidden">
      <div className="section-shell">
        <div className="glass-panel grid gap-8 p-6 sm:p-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <div className="section-kicker">
              <FileText className="mr-2 h-3.5 w-3.5" />
              Resume
            </div>
            <h2 className="section-title">{t('cv.title')}</h2>
            <p className="section-copy">{t('cv.subtitle')}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={downloadCV} className="btn-primary">
                <Download className="h-4 w-4" />
                {t('cv.download')}
              </button>
              <a href={CVFile} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Eye className="h-4 w-4" />
                {t('cv.preview')}
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-zinc-950/70 p-5">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="font-bold text-white">SOFT_DEV.pdf</h3>
                <p className="text-sm text-zinc-500">PDF document</p>
              </div>
              <FileText className="h-8 w-8 text-teal-200" />
            </div>
            <div className="space-y-3">
              <div className="h-3 w-3/4 rounded bg-white/20" />
              <div className="h-3 w-full rounded bg-white/10" />
              <div className="h-3 w-5/6 rounded bg-white/10" />
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="h-24 rounded border border-white/10 bg-white/[0.04]" />
                <div className="h-24 rounded border border-white/10 bg-white/[0.04]" />
              </div>
              <div className="h-3 w-2/3 rounded bg-white/10" />
              <div className="h-3 w-full rounded bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
