import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import sample from './sample.pdf'
const Resume = () => {
return (
    <div >
      <Document file={sample} >
        <Page pageNumber={1} className = {"hello"} renderTextLayer={false}/ >
      </Document>
    </div>
  )
}


export default Resume;