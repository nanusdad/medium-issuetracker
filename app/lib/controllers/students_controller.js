StudentsController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('students', Meteor.userId());
  },

  data: function () {
    return Students.findOne({_id: this.params._id});
  },

  insert: function () {
    this.render('InsertStudent', {});
  },

  list: function() {
    this.render('StudentsList', {});
  },

  edit: function() {
    this.render('EditStudent', {});
  }
});
