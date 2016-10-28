import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/preferences', {
  name: 'Preferences',
  action() {
    BlazeLayout.render('App_Body', { main: 'Preferences' });
  },
});


FlowRouter.route('/profile', {
  name: 'Profile',
  action() {
    BlazeLayout.render('App_Body', { main: 'Profile' });
  },
});

FlowRouter.route('/top', {
  name: 'Top',
  action() {
    BlazeLayout.render('App_Body', { main: 'Top' });
  },
});

FlowRouter.route('/admin', {
  name: 'Admin',
  action() {
    BlazeLayout.render('App_Body', { main: 'Admin' });
  },
});


FlowRouter.route('/open', {
  name: 'Open',
  action() {
    BlazeLayout.render('App_Body', { main: 'Open' });
  },
});

FlowRouter.route('/preferences', {
  name: 'Preferences',
  action() {
    BlazeLayout.render('App_Body', { main: 'Preferences' });
  },
});

FlowRouter.route('/user', {
  name: 'user',
  action() {
    BlazeLayout.render('App_Body', { main: 'user' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
