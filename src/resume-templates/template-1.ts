

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
            new Paragraph(`Enthusiastic and experienced professional with a passion for excellence. Skilled in Software Development, Data Analysis, and Project Management.`),
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

// Export the document (this part depends on your environment and how you want to save or send the document)



// // Create a new document
// export const doc = new docx.Document({
//     sections: [{
//         properties: {},
//         children: [
//             new Paragraph({
//                 children: [
//                     new TextRun({
//                         text: "Resume",
//                         bold: true,
//                         size: 32,
//                     }),
//                     new Paragraph({
//                         children: [
//                             new TextRun({
//                                 text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//                             }),
//                         ],
//                     }),
//                 ],
//             }),
//         ],
//     }],
// });


// // Add a summary section
// doc.addSection({
//     children: [
//         new Paragraph("Summary"),
//         new Paragraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
//     ],
// });
//
// // Placeholder for personal details
// doc.addSection({
//     children: [
//         new Paragraph("Name: Taylor Joe"),
//         new Paragraph("Email: example@example.com"),
//         // Add other personal details here
//     ],
// });
//
// // Function to add a job description
// function addJobDescription(title: string, description: string, bullets: string[]) {
//     const children = [
//         new TextRun({
//             text: title,
//             bold: true,
//         }),
//         new Paragraph(description),
//     ];
//
//     bullets.forEach(bullet => {
//         children.push(new Paragraph({
//             text: bullet,
//             bullet: {
//                 level: 0, // Bullet level
//             },
//         }));
//     });
//
//     doc.addSection({ children });
// }
//
// // Adding job descriptions with placeholders
// for (let i = 1; i <= 4; i++) {
//     addJobDescription(
//         `Job Title ${i}`,
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         ["Bullet Point 1", "Bullet Point 2", "Bullet Point 3", "Bullet Point 4"]
//     );
// }
//
// // Pack the document and save it
// Packer.toBuffer(doc).then((buffer) => {
//     // Here, you can save the buffer as a .docx file
//     // For example, using File System in Node.js
// });
