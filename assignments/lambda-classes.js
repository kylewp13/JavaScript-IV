// CODE here for your Lambda Classes

class Person {
  constructor(attrs){
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  };
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  };
};

class Instructor extends Person {
  constructor(attrs){
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  };
  demo(subject){
    return `Today we are learning about ${subject}`;
  };
  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}`;
  };
};

class Student extends Person {
  constructor(attrs){
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
  };
  listsSubjects(){
    for (let i = 0; i < this.favSubjects.length; i++){
      console.log(this.favSubjects[i])
    };
  };
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}.`;
  };
  SprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}.`;
  };
};

class ProjectManager extends Instructor {
  constructor(attrs){
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  };
  standUp(channel){
    return `${this.name} announces to ${channel}, @channel standy times!`;
  };
  debugCode(student, subject){
    return `${this.name} debug ${student.name}'s code on ${subject}.`
  };
};

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const kyle = new Student({
  name: 'kyle',
  location: 'Jacksonville, FL',
  age: 25,
  previousBackground: 'Realestate',
  className: 'WEB25',
  favSubjects: ['1','2','3'],
});

const jor = new ProjectManager({
  name: 'Jor Ming Poon',
  location: 'NYC',
  age: '?',
  gradClassName: '?',
  favInstructor: '?',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
});

console.log(fred.speak());
console.log(fred.demo('JS IV'));
console.log(fred.grade(kyle, 'JS IV'));
console.log(kyle.speak());
console.log(kyle.listsSubjects());
console.log(kyle.PRAssignment('JS IV'));
console.log(kyle.SprintChallenge('JS IV'));
console.log(jor.speak());
console.log(jor.demo('JS IV'));
console.log(jor.grade(kyle, 'JS IV'));
console.log(jor.standUp('WEB25_jor'));
console.log(jor.debugCode(kyle, 'JS IV'));
