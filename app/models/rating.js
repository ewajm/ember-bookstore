import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  rating: DS.attr(),
  comment: DS.attr()
});
