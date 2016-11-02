import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  showModal: false,
  shoppingCart: Ember.inject.service(),
  actions: {
    checkOut(){
      var params = {
        timestamp: moment().valueOf(),
        user: 'guest',
        total: this.get('shoppingCart.totalPrice'),
        shipping: 5,
        location: 'Narnia'
      };
      var items = this.get('shoppingCart.items');
      this.sendAction('checkOut', params, items);
    },
    toggleModal(){
      this.toggleProperty('showModal');
    }
  }
});
