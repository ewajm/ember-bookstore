import DS from 'ember-data';

export default DS.Model.extend({
  items: DS.hasMany('item', {async: true}),
  timestamp: DS.attr(),
  user: DS.attr(),
  total: DS.attr(),
  location: DS.attr(),
  shipping: DS.attr()
});
