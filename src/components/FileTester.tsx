import React from 'react'
import { doc } from '../resume-templates/template-1'
import { saveAs } from 'file-saver'
import { Packer } from 'docx';


const downloadFile = async () => {
    const blob = await Packer.toBlob(doc);
    saveAs(blob, "example.docx");
}

const sample = console.log('hello world')
const FileTester = () => {
  return (
    <>
    <h1></h1>
    <h1>Hello world</h1>
        <button onClick={downloadFile}>Download</button>
    </>
  )
}

export default FileTester;