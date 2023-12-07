import { AlignmentType, Document, HeadingLevel, Paragraph, TabStopPosition, TabStopType, TextRun } from "docx";

export const doc = new Document({
    sections: [{
        children: [
            new Paragraph({
                text: "Hello World",
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
            }),
        ],
    }],
});
