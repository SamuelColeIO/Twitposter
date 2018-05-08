function ContactController(MailService) {
    var $ctrl = this;

    $ctrl.contact = {};
    $ctrl.contact.error = false;

    $ctrl.submitForm = function (isValid) {
        if (isValid) {
            $ctrl.contact.error = false;
            MailService.contactMessage($ctrl.contact).then(function() {

            }, function() {

            });

        } else {
            $ctrl.contact.error = true;
        }
    }
}


angular
    .module("root")
    .controller("ContactController", ContactController);