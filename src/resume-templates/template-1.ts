

import * as docx from "docx";
import { Paragraph, TextRun } from "docx";

const firstName: string = "Taylor";
const lastName: string = "Joe";
const email: string = "Email@email.com";
const phoneNumber: string = "(123) 456-7890";
const summary: string = "Enthusiastic and experienced professional with a passion for excellence. Skilled in Software Development, Data Analysis, and Project Management.";
const jobTitle: string = "Job Title";
const jobDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const bulletPoints: string[] = ["Achieved X% improvement in Y", "Led a team of Z", "Managed project ABC", "Developed feature XYZ"];

// Function to create a job description
function createJobDescription(title: string, description: string, bullets: string[]): docx.Paragraph[] {
    const children: docx.Paragraph[] = [
        new Paragraph({
            text: title,
            heading: "Heading2",
        }),
        new Paragraph(description),
    ];

    bullets.forEach(bullet => {
        new Paragraph({
            text: bullet,
            bullet: {
                level: 0,
            },
        });
    });

    return children;
}


// Create a new document with all sections
export const doc = new docx.Document({
    sections: [{
        properties: {},
        children: [
            new Paragraph({
                children: [
                    new TextRun({
                        text: "Taylor Joe",
                        bold: true,
                        size: 32,
                    }),
                ],
            }),
            new Paragraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
            new Paragraph({
                text: "Summary",
                heading: "Heading1",
            }),
            new Paragraph(`${summary}}`),
            new Paragraph({
                text: "Personal Details",
                heading: "Heading1",
            }),
            new Paragraph(`Name: ${firstName} ${lastName}`),
            new Paragraph(`Email: ${email}`),
            new Paragraph(`Phone: ${phoneNumber}`),
            // Add job descriptions
            ...createJobDescription(
                `${jobTitle} 1`,
                `${jobDescription}`,
                [`${bulletPoints}`]
            ),
            // Repeat for other job descriptions...
        ],
    }],
});
