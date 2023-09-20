import React from 'react';
import { useSelector } from 'react-redux';
import { Document, Page, pdfjs } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function SuccessPage() {
    const data=useSelector((state)=>{return state.application.applicationData })
    const pdfUrl = data.resume;
    const desiredWidth = 600; 
  const desiredHeight = 0; 
  const scale = desiredWidth / 8.5 / 72;
  return (
    <div>
      <h2>Application Submitted Successfully</h2>
      <p>Here is a preview of your application:</p>
      <p><strong>Name:</strong>{data.name} </p>
      <p><strong>Email:</strong>{data.email} </p>
      <p><strong>Cover Letter Note:</strong>{data.coverLetter} </p>
      <p><strong>Resume Preview</strong></p>
      <Document file={pdfUrl} onLoadSuccess={console.log}>
        <Page pageNumber={1} scale={scale} width={desiredWidth} height={desiredHeight}/>
      </Document>
    </div>
  );
}

export default SuccessPage;
