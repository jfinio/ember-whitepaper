import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '', // Don't wrap in an ember-view div
  isExpanded: false,
  expandedGraphic: false,

  actions: {
    expandComponent() {
      this.toggleProperty('isExpanded');
    },
    expandGraphic() {
      this.set('expandedGraphic', true);
    },
    endZoom() {
      this.toggleProperty('expandedGraphic');
    }
  }
});
