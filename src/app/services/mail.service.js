function MailService($http) {
    this.contactMessage = function (contactForm) {
		return $http({
			method: 'POST',
			url: '/api/v1/contact-us',
            data: {subject: contactForm.subject, from: contactForm.from, message: contactForm.message}
		}).then(function(status) {
			return 200;
		})
    }
};

angular.module('root')
    .service('MailService', MailService);