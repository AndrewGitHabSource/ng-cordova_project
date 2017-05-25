angular.module('starter.services').factory('galleryService',
    function ($ionicPlatform, $cordovaContacts, $cordovaCamera) {

        function loadPictureFromCamera(callBack) {
            var optionsCamera = {
                quality: 80,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 200,
                targetHeight: 200,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };

            $cordovaCamera.getPicture(optionsCamera).then(function (data) {

                callBack(data);

            }, function (error) {

                alert(error);

            });
        }

        return {
            loadPictureFromCamera: loadPictureFromCamera
        };
    });