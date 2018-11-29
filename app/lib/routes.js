Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

/* Issues */
Router.route('/insert_issue', {
  name: 'insertIssue',
  controller: 'IssuesController',
  action: 'insert',
  where: 'client'
});

Router.route('issues_list', {
  name: 'issuesList',
  controller: 'IssuesController',
  action: 'list',
  where: 'client'
});

Router.route('/issue/:_id', {
  name: 'editIssue',
  controller: 'IssuesController',
  action: 'edit',
  where: 'client'
});

/* Students */
Router.route('/insert_student', {
  name: 'insertStudent',
  controller: 'StudentsController',
  action: 'insert',
  where: 'client'
});

Router.route('students_list', {
  name: 'studentsList',
  controller: 'StudentsController',
  action: 'list',
  where: 'client'
});

Router.route('/student/:_id', {
  name: 'editStudent',
  controller: 'StudentsController',
  action: 'edit',
  where: 'client'
});


Router.onBeforeAction(function() {
  if (!Meteor.user()) {
    this.render('AccessDenied');
  } else
  {
     this.next();
  }
}, {only: ['issuesList', 'insertIssue']});
