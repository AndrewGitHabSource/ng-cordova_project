angular.module('starter.services', []).factory('contactService',
    function ($ionicPlatform, $cordovaContacts) {

        function loadAllContacts(callBack) {
            $cordovaContacts.find({filter: ''}).then(function (allContacts) {
                    callBack(allContacts);
                },
                function () {
                    callBack(false);
                });
        }

        function saveContact(displayName, phoneNumbers, addresses, phone) {

            var options = {

                "displayName": displayName, "phoneNumbers": [{"value": phoneNumbers}],
                "addresses": [{"streetAddress": addresses}]

            };

            if(phone){
                options.photos = [{ "value": phone }];
            }

            $cordovaContacts.save(options).then(function (result) {

            }, function (error) {

                alert(error);

            });
        }

        return {
            loadAllContacts: loadAllContacts,
            saveContact: saveContact
        };
    });