type TEducationData = {
    schoolName: string;
    degreeType: degreeTypes;
    dateStarted: Date;
    dateComplete: Date;
}

type TTrainingData = {
    programName: string;
    description: string;
    dateStarted: Date;
    dateComplete: Date;
}
type TCertificationData = {
    certificationName: string;

}

enum degreeTypes {
    Associates = 'Associates',
    Bachelors = 'Bachelors',
    Masters = 'Masters',
    Doctorate = 'Doctorate',
}