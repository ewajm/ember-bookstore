import Ember from 'ember';

export function totalPrice(params/*, hash*/) {
  var total= params[0] + parseInt(params[1]);
  return "$" + total + ".00"
}

export default Ember.Helper.helper(totalPrice);
