Template.IssuesList.events({
});

Template.IssuesList.helpers({
  issues: function () {
    return Issues.find();
  },

  dueDateFormatted: function () {
    return moment(this.dueDate).format("MMM Do YY");
  },

  priorityHigh: function() {
    if (this.priority === 'High')
      return true;
    else
      return false;
  },

  priorityMedium: function() {
    if (this.priority === 'Medium')
      return true;
    else
      return false;
  },

  priorityLow: function() {
    if (this.priority === 'Low')
      return true;
    else
      return false;
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
