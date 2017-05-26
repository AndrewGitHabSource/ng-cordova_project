angular.module('starter.services', []).factory('contactService',
    function ($ionicPlatform, $cordovaContacts) {

        /* load all contact */
        function loadAllContacts(callBack) {
            $cordovaContacts.find({filter: ''}).then(function (allContacts) {
                    callBack(allContacts);
                },
                function () {
                    callBack(false);
                });
        }

        // create contact on phone
        function saveContact(displayName, phoneNumbers, addresses, photo) {

            var options = {

                "displayName": displayName, "phoneNumbers": [{"value": phoneNumbers}],
                "addresses": [{"streetAddress": addresses}]

            };

            if(photo){
                options.photos = [{ "value": photo }];
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