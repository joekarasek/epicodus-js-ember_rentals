import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },
    save() {
      var params = {
        text: this.get('text'),
        monkeySauce: this.get('monkeySauce')
      };
      this.set('addNewAnnouncement', false),
      this.sendAction('save', params);
    }
  }
});
