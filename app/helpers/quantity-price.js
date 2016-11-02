import Ember from 'ember';

export function quantityPrice(params/*, hash*/) {
  var total= params[0] * params[1];
  return "$" + total + ".00"
}

export default Ember.Helper.helper(quantityPrice);
