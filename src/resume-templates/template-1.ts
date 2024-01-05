

import { Packer, Paragraph, TextRun } from "docx";

// Create a new document
const doc = new docx.Document({
    creator: "John Doe",
    title: "Resume",
    description: "A nice, concise resume.",
});

// Add a title
doc.addSection({
    children: [
        new TextRun({
            text: "Resume",
            heading: "TITLE",
        }),
    ],
});

// Add a summary
doc.addSection({
    children: [
        new Paragraph("Summary"),
        new Paragraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
    ],
});

// Placeholder for personal details
doc.addSection({
    children: [
        new Paragraph("Name: Taylor Joe"),
        new Paragraph("Email: example@example.com"),
        // Add other personal details here
    ],
});

// Function to add a job description
function addJobDescription(title: string, description: string, bullets: string[]) {
    const children = [
        new TextRun({
            text: title,
            bold: true,
        }),
        new Paragraph(description),
    ];

    bullets.forEach(bullet => {
        children.push(new Paragraph({
            text: bullet,
            bullet: {
                level: 0, // Bullet level
            },
        }));
    });

    doc.addSection({ children });
}

// Adding job descriptions with placeholders
for (let i = 1; i <= 4; i++) {
    addJobDescription(
        `Job Title ${i}`,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ["Bullet Point 1", "Bullet Point 2", "Bullet Point 3", "Bullet Point 4"]
    );
}

// Pack the document and save it
Packer.toBuffer(doc).then((buffer) => {
    // Here, you can save the buffer as a .docx file
    // For example, using File System in Node.js
});
