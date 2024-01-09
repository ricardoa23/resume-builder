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
    endDate?: Date,
    duties: string[]
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


function plusMinus (arr: number[]) {
let pos = 0
let neg = 0;
let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    (arr[i] > 0) ? pos++ : (arr[i] < 0) ? neg++ : zero++
  }

}

//Hard coded data for testing
const testData1 = new resumeData(
  new UserProfile("John", "Doe", "email@email.com, ", "(213)555-4589"),
  [
    new WorkHistory(
      "Software Engineer",
      "Google",
      new Date("2019-01-01"),
      new Date("2020-01-01"),
      [
        "Worked on Google Search",
        "Worked on Google Maps",
        "Worked on Google Docs",
      ]
    ),
    new WorkHistory(
      "Software Engineer",
      "OpenAI",
      new Date("2021-01-01"),
      new Date("Present"),
      [
        "Worked on Google Search",
        "Worked on Google Maps",
        "Worked on Google Docs",
      ]
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

function createJobHistory(workHistory: WorkHistory[]) {
  let jobs: any = [];

  const duties = (duties: string[]) => {
    let dutyRenders: any = [];
    for (let i = 0; i < duties.length; i++) {
      const dutyRender = new Paragraph({
        text: duties[i],
        bullet: {
          level: 0, // Bullet level
        },
      });
      dutyRenders.push(dutyRender);
    }
    dutyRenders = dutyRenders.join(", ");
    return dutyRenders;
  };

  for (let i = 0; i < workHistory.length; i++) {
    const job = new Paragraph({
      text: workHistory[i].title,
      heading: HeadingLevel.HEADING_3,
    });
    new Paragraph({
      text: workHistory[i].company,
      heading: HeadingLevel.HEADING_3,
    }),
      new Paragraph({
        text: `${workHistory[i].startDate} - ${workHistory[i].endDate}`,
        heading: HeadingLevel.HEADING_3,
      }),
      duties(workHistory[i].duties);
    jobs.push(job);
  }
  jobs = jobs.join(", ");
  console.debug(jobs)
  return jobs;
} // end of createJobHistory

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
