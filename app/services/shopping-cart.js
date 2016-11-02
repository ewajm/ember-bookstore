import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    if(item.get('quantity') > 0){
      this.get('items').pushObject(item);
    }
  }
});
