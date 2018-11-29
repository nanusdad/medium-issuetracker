Template.EditStudent.events({
});

Template.EditStudent.helpers({
  beforeRemove: function () {
      return function (collection, id) {
        var doc = collection.findOne(id);
        if (confirm('Really delete student: "' + doc.title + '"?')) {
          this.remove();
          Router.go('studentsList');
        }
      };
    }
});

AutoForm.addHooks(null, {
  onSuccess: function(operation, result, template) {
    Router.go('studentsList');
  }
});
