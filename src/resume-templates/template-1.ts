import * as docx from "docx";
import { HeadingLevel, Paragraph, TextRun } from "docx";

/* TODO: stored data needs to be parsed into appropriate variables
  -functions needs to be created for each items to be dynamically created
 */

// FIXME: bullets are not being created correctly ( adds all items to single bullet) NEEDS TO CREATE A BULLET FOR EACH ITEM IN THE ARRAY

// Hard coded data for testing

class UserProfile {
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;

  constructor(
    firstName: string,
    lastName: string,
    email?: string,
    phoneNumber?: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}

class Education {
  degreeType: string;
  major: string;
  universityName: string;
  gpa: number;
  graduationDate: Date;

  constructor(
    degreeType: string,
    major: string,
    universityName: string,
    gpa: number,
    graduationDate: Date
  ) {
    this.degreeType = degreeType;
    this.major = major;
    this.universityName = universityName;
    this.gpa = gpa;
    this.graduationDate = graduationDate;
  }
}

class WorkHistory {
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  duties: string[];

  constructor(
    title: string,
    company: string,
    startDate: Date,
    duties: string[],
    endDate?: Date
  ) {
    this.title = title;
    this.company = company;
    this.startDate = startDate;
    this.endDate = endDate;
    this.duties = duties;
  }
}

class Certificate {
  name: string;
  issuer: string;
  issueDate: Date;

  constructor(name: string, issuer: string, issueDate: Date) {
    this.name = name;
    this.issuer = issuer;
    this.issueDate = issueDate;
  }
}

class Award {
  name: string;
  issuer: string;
  issueDate: Date;

  constructor(name: string, issuer: string, issueDate: Date) {
    this.name = name;
    this.issuer = issuer;
    this.issueDate = issueDate;
  }
}

class resumeData {
  UserProfile: UserProfile;
  Education?: Education[];
  Certificates?: Certificate[];
  WorkHistory: WorkHistory[];
  Awards?: Award[];

  constructor(
    UserProfile: UserProfile,
    WorkHistory: WorkHistory[],
    Education?: Education[],
    Certificates?: Certificate[],
    Awards?: Award[]
  ) {
    this.UserProfile = UserProfile;
    this.WorkHistory = WorkHistory;
    this.Education = Education;
    this.Certificates = Certificates;
    this.Awards = Awards;
  }
}

//Hard coded data for testing
const testData1 = new resumeData(
  new UserProfile("John", "Doe", "email@email.com, ", "(213)555-4589"),
  [
    new WorkHistory(
      "Software Engineer",
      "Google",
      new Date("2020-01-01"),
      [
        "Worked on Google Search",
        "Worked on Google Maps",
        "Worked on Google Docs",
      ],
      new Date("2019-01-01"),
    ),
    new WorkHistory(
      "Software Engineer",
      "OpenAI",
      new Date("Present"),
      [
        "Worked on Google Search",
        "Worked on Google Maps",
        "Worked on Google Docs",
      ],
      new Date("2021-01-01")
    ),
  ],
  [
    new Education(
      "Bachelor of Science",
      "Computer Science",
      "University of California, Los Angeles",
      3.5,
      new Date("2021-06-01")
    ),
  ],
  [
    new Certificate(
      "AWS Certified Cloud Practitioner",
      "Amazon",
      new Date("2021-01-01")
    ),
  ],
  [new Award("Employee of the Month", "Google", new Date("2020-01-01"))]
);

console.log(testData1.UserProfile.firstName);



// function createJobHistory(workHistory: WorkHistory[]) {
//   let jobs: unknown = [];

//   const duties = (duties: string[]) => {
//     let dutyRenders: unknown = [];
//     for (let i = 0; i < duties.length; i++) {
//       const dutyRender = new Paragraph({
//         text: duties[i],
//         bullet: {
//           level: 0, // Bullet level
//         },
//       });
//       dutyRenders.push(dutyRender);
//     }
//     dutyRenders = dutyRenders.join(", ");
//     return dutyRenders;
//   };

//   for (let i = 0; i < workHistory.length; i++) {
//     const job = new Paragraph({
//       text: workHistory[i].title,
//       heading: HeadingLevel.HEADING_3,
//     });
//     new Paragraph({
//       text: workHistory[i].company,
//       heading: HeadingLevel.HEADING_3,
//     }),
//       new Paragraph({
//         text: `${workHistory[i].startDate} - ${workHistory[i].endDate}`,
//         heading: HeadingLevel.HEADING_3,
//       }),
//       duties(workHistory[i].duties);
//     jobs.push(job);
//   }
//   jobs = jobs.join(", ");
//   console.debug(jobs)
//   return jobs;
// } // end of createJobHistory

const createDutiesList = (duties: WorkHistory["duties"]) => {

  if (!duties || duties.length === 0 || undefined) {
    return new TextRun({text:'', size: 12});
  }

  for (const duty of duties) {
    return new TextRun({text: duty});
  }

};
const createJobHistory = (workHistory: WorkHistory[]) => {
  for ( const job of workHistory) {
    return new Paragraph({
      children: [
        new TextRun({
          text: job.title,
          size: 24,
          bold: true,
          font: 'Times New Roman'
        }),
        new TextRun({
          text: job.company,
          size: 18,
        }),
        new TextRun({
          text: `${job.startDate} - ${(job.endDate) ? job.endDate : 'Present'}`,
          size: 12,
        }),
        (createDutiesList(job.duties)  !== undefined) ? createDutiesList(job.duties) : new TextRun({text: '',}),
      ]
    })
  }
  };




// Create a new document with all sections
export const doc = new docx.Document({
  sections: [
    {
      properties: {},
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: `${testData1.UserProfile.firstName} ${testData1.UserProfile.lastName}`,
              bold: true,
              size: 32,
              font: "Calibri",
            }),
          ],
        }),
        new Paragraph({
          text: `Email: ${testData1.UserProfile.email}             Phone: ${testData1.UserProfile.phoneNumber}`,
          heading: HeadingLevel.HEADING_1,
        }),
        new Paragraph(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ),
        new Paragraph({
          text: "Summary",
          heading: HeadingLevel.HEADING_1,
        }),
        createJobHistory(testData1.WorkHistory),
      ],
    },
  ],
});
