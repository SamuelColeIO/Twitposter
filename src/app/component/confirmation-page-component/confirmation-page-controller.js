function ConfirmationController() {
    var $ctrl = this;

    $ctrl.createAnother = function () {
        alert("create new");
    }
}

angular
    .module("root")
    .controller("ConfirmationController", ConfirmationController);