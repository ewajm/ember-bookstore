import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  totalItems: 0,
  totalPrice: 0,
  add(item) {
    if(item.get('quantity') > 0){
      this.get('items').pushObject(item);
      this.set('totalItems', this.get('totalItems')+1);
      this.set('totalPrice', this.get('totalPrice')+item.get('price'));
    }
  }
});
