import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  price: DS.attr(),
  ratings: DS.hasMany('rating', {async: true}),
  quantity: DS.attr()
});
