/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */

(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var DEFAULT_CAFFEINE_LEVEL = 30;
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    formHandler.addChangeHandler(
        function () {
            var strength = document.getElementById('strengthLevel').value;
            document.getElementById('caffeineRating').innerHTML = strength;
            if (strength <= 30){
                document.getElementById('caffeineRating').style.color = 'green';
            }else if (strength >= 70){
                document.getElementById('caffeineRating').style.color = 'red';
            }else{
                document.getElementById('caffeineRating').style.color = 'yellow';
            }
        }
    );
    formHandler.addResetHandler(
        function () {
            document.getElementById('caffeineRating').innerHTML = DEFAULT_CAFFEINE_LEVEL;
            document.getElementById('caffeineRating').style.color = 'green';
        }
    );

    console.log(formHandler);
})(window);
