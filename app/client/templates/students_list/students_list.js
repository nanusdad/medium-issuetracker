Template.StudentsList.events({
});

Template.StudentsList.helpers({
  students: function () {
    return Students.find();
  },

  dueDateFormatted: function () {
    return moment(this.dueDate).format("MMM Do YY");
  },

  genderMale: function() {
    if (this.gender === 'male')
      return true;
    else
      return false;
  },

  genderFemale: function() {
    if (this.gender === 'female')
      return true;
    else
      return false;
  }

});
