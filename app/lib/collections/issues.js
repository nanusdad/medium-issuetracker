Issues = new Mongo.Collection('issues');

Issues.attachSchema(new SimpleSchema({
  admissionNo:{
    type: SimpleSchema.Integer,
    label: "Admission No.",
    max: 9999 
  },
  batch:{
    type: SimpleSchema.Integer,
    label: "Batch",
    defaultValue: '2018',
    allowedValues: ['2013', '2014', '2015', '2016', '2017', '2018', '2019']
  },
  firstName:{
    type: String,
    label: "First Name",
    max: 100
  },
  lastName:{
    type: String,
    label: "Last Name",
    max: 100
  },
  dob: {
    type: Date,
    label: "Date of Birth"
  },
  gender: {
    type: String,
    label: "Gender",
    allowedValues: ['male', 'female']
  },
  doj: {
    type: Date,
    label: "Date of Joining"
  },
  email: {
    type: String,
    label: "Email",
    max: 100,
    regEx: SimpleSchema.RegEx.Email
  },
  phoneNumber1: {
    type: String,
    label: "Phone Number",
    max: 100
  },
  phoneNumber2: {
    type: String,
    label: "Alternative Phone Number",
    max: 100,
    optional: true
  },
  pincode: {
    type: String,
    label: "PIN Code",
    max: 6,
    optional: true
  },
  bloodGroup:{
    type: String,
    label: "Blood Group",
    allowedValues: ['A+ve', 'A-ve', 'B+ve', 'B-ve', 'AB+ve', 'AB-ve', 'O+ve', 'O-ve']
  },
  createdBy: {
    type: String,
    autoValue: function() {
       return this.userId
    }
  }
}));

if (Meteor.isServer) {
  Issues.allow({
    insert: function (userId, doc) {
      return userId;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return userId;
    },

    remove: function (userId, doc) {
      return userId;
    }
  });
}
