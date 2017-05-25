angular.module('starter.services', []).factory('contactService',
    function ($ionicPlatform, $cordovaContacts) {

        function loadAllCont(callBack) {
            $cordovaContacts.find({filter: ''}).then(function (allContacts) {
                    callBack(allContacts);
                },
                function () {
                    callBack(false);
                });
        }

        return {
            loadAllCont: loadAllCont
        };
    });