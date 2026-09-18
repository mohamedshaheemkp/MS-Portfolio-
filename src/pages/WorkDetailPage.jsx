import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import AgriAiCaseStudy from './work/AgriAiCaseStudy';
import SmartFolderCaseStudy from './work/SmartFolderCaseStudy';
import MSPortfolioCaseStudy from './work/MSPortfolioCaseStudy';
import RevoroModsCaseStudy from './work/RevoroModsCaseStudy';
import RoyalGryphonCaseStudy from './work/RoyalGryphonCaseStudy';

export default function WorkDetailPage() {
  const { slug } = useParams();

  switch (slug) {
    case 'agriai':
      return <AgriAiCaseStudy />;
    case 'smart-folder-organiser':
    case 'smart-folder':
      return <SmartFolderCaseStudy />;
    case 'ms-portfolio':
    case 'portfolio':
      return <MSPortfolioCaseStudy />;
    case 'revoro-mods':
      return <RevoroModsCaseStudy />;
    case 'royal-gryphon':
      return <RoyalGryphonCaseStudy />;
    default:
      return <Navigate to="/work" replace />;
  }
}
