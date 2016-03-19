'use strict';

/**
 * @ngdoc function
 * @name milleniumApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the milleniumApp
 */
angular.module('milleniumApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.sortType = 'Name';
  	$scope.sortReverse = false;
  	$scope.searchCriteria = { Name:'', Email:'', Country: '', $:''};

  	$scope.filterCriteria = 'Name';
  	$scope.changeFilter = function(temp){
  		$scope.filterCriteria = temp;
  	};

  	$scope.dataSet = [
  		{"Name": "Blossom Walter", "Email": "rutrum.eu@Nulla.co.uk", "Country": "Brazil"},
  		{"Name": "Kenneth Hobbs", "Email": "enim.gravida.sit@atliberoMorbi.org", "Country": "Guadeloupe"},
  		{"Name": "Abdul Holt", "Email": "Nullam.suscipit.est@disparturientmontes.org", "Country": "Namibia"},
  		{"Name": "Harrison Macdonald", "Email": "libero.Integer.in@Morbi.co.uk", "Country": "Palestine, State of"},
  		{"Name": "Kirestin Tillman", "Email": "mauris.eu.elit@magnaet.org", "Country": "Saint Helena, Ascension and Tristan da Cunha"},
  		{"Name": "Imelda Greer", "Email": "urna.Nullam@dolorsit.ca", "Country": "Monaco"},
  		{"Name": "Julie Underwood", "Email": "Integer.urna@Aliquamnec.edu", "Country": "Greenland"},
  		{"Name": "Louis Henderson", "Email": "vulputate.dui@apurus.com", "Country": "Micronesia"},
  		{"Name": "Hedwig Ramos", "Email": "vulputate@pellentesque.co.uk", "Country": "New Zealand"},
  		{"Name": "Wang Love", "Email": "sapien.imperdiet@sit.ca", "Country": "Palau"},
  		{"Name": "Mason Ware", "Email": "nec.tempus@amet.edu", "Country": "United Arab Emirates"},
  		{"Name": "Karina Hess", "Email": "tortor.Nunc.commodo@tristiqueaceleifend.org", "Country": "Iran"},
  		{"Name": "Thane Ellis", "Email": "orci.quis.lectus@sedleo.net", "Country": "Brazil"},
  		{"Name": "Shaine Osborn", "Email": "Fusce.feugiat@Cras.net", "Country": "Hungary"},
  		{"Name": "Sharon Scott", "Email": "augue.porttitor@dictummagna.edu", "Country": "Guernsey"},
  		{"Name": "Slade Fisher", "Email": "Nunc.ac@mollis.com", "Country": "Maldives"},
  		{"Name": "Owen Decker", "Email": "ultrices@nibhenimgravida.edu", "Country": "Sweden"},
  		{"Name": "William Buck", "Email": "Donec.nibh@mattisornare.net", "Country": "Eritrea"},
  		{"Name": "Lara Pruitt", "Email": "venenatis.a@Nuncmauris.com", "Country": "Viet Nam"},
  		{"Name": "Randall Roy", "Email": "vel.lectus.Cum@eunibhvulputate.com", "Country": "Djibouti"},
  		{"Name": "Drew Edwards", "Email": "Duis@ullamcorperviverra.com", "Country": "Armenia"},
  		{"Name": "Illana Combs", "Email": "neque@Mauris.com", "Country": "Ireland"},
  		{"Name": "Melissa Moore", "Email": "Vivamus@lectuspede.com", "Country": "Moldova"},
  		{"Name": "Jana Ruiz", "Email": "orci.tincidunt@diam.net", "Country": "Bermuda"},
  		{"Name": "Adria Maddox", "Email": "Donec@viverraMaecenasiaculis.co.uk", "Country": "Sierra Leone"},
  		{"Name": "Eleanor Hayes", "Email": "risus.at@nunc.net", "Country": "Iceland"},
  		{"Name": "Declan Goff", "Email": "erat.semper.rutrum@SedmolestieSed.ca", "Country": "Kyrgyzstan"},
  		{"Name": "Unity Rosario", "Email": "ut.molestie@dictumultricies.edu", "Country": "Australia"},
  		{"Name": "Lysandra Odonnell", "Email": "est.arcu@dapibusrutrumjusto.ca", "Country": "Jordan"},
  		{"Name": "Aline Wilkerson", "Email": "lectus.rutrum.urna@enim.edu", "Country": "Czech Republic"},
  		{"Name": "Marshall Flynn", "Email": "commodo.at@ultricesVivamus.com", "Country": "Saint Pierre and Miquelon"},
  		{"Name": "Yen Mckinney", "Email": "mauris.Suspendisse.aliquet@eunibh.co.uk", "Country": "Kenya"},
  		{"Name": "Cameron Cantu", "Email": "Aliquam@pretium.co.uk", "Country": "Eritrea"},
  		{"Name": "Yoshio Blankenship", "Email": "nec.eleifend@sitametdiam.com", "Country": "Mauritania"},
  		{"Name": "Kato Slater", "Email": "Cras@aliquetvelvulputate.ca", "Country": "Palestine, State of"},
  		{"Name": "Claire Wood", "Email": "auctor.odio.a@Etiamlaoreetlibero.net", "Country": "Vanuatu"},
  		{"Name": "Kadeem Adams", "Email": "Donec.est.mauris@tempuseu.org", "Country": "Guernsey"},
  		{"Name": "Octavia Brown", "Email": "accumsan@vitaediam.edu", "Country": "Japan"},
  		{"Name": "Madeson Simon", "Email": "lectus@justonecante.co.uk", "Country": "Puerto Rico"},
  		{"Name": "Rhona Willis", "Email": "pede@scelerisquenequesed.edu", "Country": "Estonia"},
  		{"Name": "Dawn Thompson", "Email": "Vivamus@duiCumsociis.edu", "Country": "South Sudan"},
  		{"Name": "Jarrod Dale", "Email": "viverra.Maecenas.iaculis@urnaVivamusmolestie.ca", "Country": "Portugal"},
  		{"Name": "Cruz Donovan", "Email": "senectus.et@purus.ca", "Country": "Costa Rica"},
  		{"Name": "Adele Rios", "Email": "Nam@tempor.co.uk", "Country": "Palau"}];

  });

