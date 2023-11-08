import { Document, Packer, SectionType, Paragraph, TextRun } from "docx";


 export const doc = new Document({
    sections: [{
children: [
    new Paragraph({
        children: [new TextRun("Hello World")],
    })
],
    }],
});