import * as docx from "docx";
import {HeadingLevel, Paragraph, TextRun} from "docx";
import { resumeData } from "../utilities/resumeData.ts";



/* TODO: stored data needs to be parsed into appropriate variables
  -functions needs to be created for each items to be dynamically created
    -- createProfile()
    -- createJobDescription()
    -- createEducation()
    -- createCertificate()
    -- createAward()
 */

// FIXME: bullets are not being created correctly ( adds all items to single bullet) NEEDS TO CREATE A BULLET FOR EACH ITEM IN THE ARRAY

//variables for the resume
const resumeProfile: resumeData;
const jobData: string | null = localStorage.getItem("jobs");

// Hard coded data for testing
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
            heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph(description),
    ];

    // Creating a bullet point for each item in the bullets array
    bullets.forEach(bullet => {
        children.push(
            new Paragraph({
                text: bullet,
                bullet: {
                    level: 0, // Bullet level
                },
            })
        );
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
                        font: "Calibri",
                    }),
                ],
            }),
            new Paragraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
            new Paragraph({
                text: "Summary",
                heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph(`${summary}}`),
            new Paragraph({
                text: "Personal Details",
                heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph(`Name: ${firstName} ${lastName}`),
            new Paragraph(`Email: ${email}`),
            new Paragraph(`Phone: ${phoneNumber}`),
            ...createJobDescription(
                `${jobTitle} 1`,
                `${jobDescription}`,
                [`${bulletPoints}`]
            ),
        ],
    }],
});
