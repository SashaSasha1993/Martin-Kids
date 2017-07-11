var app = angular.module("myApp", ["ngRoute"]);

var api = 'http://127.0.0.1:8000/productID/?format=api';

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/home-en-2.html"
        }).when("/aboutUs-en", {
            templateUrl: "pages/aboutUs-en.html",
        }).when("/wholeSales-en", {
            templateUrl: "pages/whole-home-en.html"
        }).when("/retailSales-en", {
            templateUrl: "pages/catalog-home.html"
        }).when("/catalog-en", {
            templateUrl: "pages/catalog-home.html"
        }).when("/information-en", {
            templateUrl: "pages/information-en.html"
        }).when("/news-en", {
            templateUrl: "pages/news-en.html"
        }).when("/contactUs-en", {
            templateUrl: "pages/contactUs-en.html"
        }).when("/signIn-en", {
            templateUrl: "pages/signIn-en.html"
        }).when("/signUp-en", {
            templateUrl: "pages/signUp-en.html"
        }).when("/signUp-retail-en", {
            templateUrl: "pages/signUp-retail-en.html"
        }).when("/signUp-whole-en", {
            templateUrl: "pages/signUp-whole-en.html"
        }).when("/catalog-boys", {
            templateUrl: "pages/catalog-boys.html"
        }).when("/catalog-girls", {
            templateUrl: "pages/catalog-girls.html"
        }).when("/catalog-acc", {
            templateUrl: "pages/catalog-acc.html"
        });
}]);


app.controller('mainController', function ($scope,$http) {
    $scope.catalogHome = true;
    $scope.catalogSearch = false;
    
    $scope.showNano = false;
    $scope.showPeluche = false;
    $scope.showLoyal = false;

    $scope.payment = true;
    $scope.sizeTable = false;
    $scope.discount = false;

    $scope.faq = false;

//    $scope.hats = false;
//    $scope.linen = false;
//    $scope.socks = false;
//    $scope.formal = false;
//    $scope.sportswear = false;
//    $scope.accessories = false;
//    $scope.outwear = false;
//    $scope.kids = false;
//    $scope.newborn = false;
//
//
//    $scope.quickHide = function () {
//        $scope.hats = false;
//        $scope.linen = false;
//        $scope.socks = false;
//        $scope.formal = false;
//        $scope.sportswear = false;
//        $scope.accessories = false;
//        $scope.outwear = false;
//        $scope.kids = false;
//        $scope.newborn = false;
//    }
//
//    $scope.hatsF = function () {
//        $scope.quickHide();
//        $scope.hats = !$scope.hats;
//    }
//    $scope.linenF = function () {
//        $scope.quickHide();
//        $scope.linen = true;
//    }
//    $scope.socksF = function () {
//        $scope.quickHide();
//        $scope.socks = true;
//    }
//    $scope.formalF = function () {
//        $scope.quickHide();
//        $scope.formal = true;
//    }
//    $scope.sportswearF = function () {
//        $scope.quickHide();
//        $scope.sportswear = true;
//    }
//    $scope.accessoriesF = function () {
//        $scope.quickHide();
//        $scope.accessories = true;
//    }
//    $scope.outwearF = function () {
//        $scope.quickHide();
//        $scope.outwear = true;
//    }
//    $scope.kidsF = function () {
//        $scope.quickHide();
//        $scope.kids = true;
//    }
//    $scope.newbornF = function () {
//        $scope.quickHide();
//        $scope.newborn = true;
//    }

    $scope.allFalseF = function () {
        $scope.payment = false;
        $scope.sizeTable = false;
        $scope.discount = false;

        $scope.faq = false;
    }

    $scope.faqF = function () {

        $scope.allFalseF();
        $scope.faq = true;
    }

    $scope.paymentF = function () {

        $scope.allFalseF();
        $scope.payment = true;
    }

    $scope.sizeTableF = function () {
        $scope.allFalseF();
        $scope.sizeTable = true;

    }

    $scope.discountF = function () {
        $scope.allFalseF();
        $scope.discount = true;

    }


    
    $scope.one_piece = function(){
        $http.get(api).then(function(response){
            allProducts = response.data;
        })
    };
    
//
//CATALOG CCATALOG CATALOG CATALOG CATALOG CATALOG CATALOG CATALOG ATALOG CATALOG CATALOG 
    
    /*$scope.accessoriesCatalog = function(){
        $http.get('http://127.0.0.1:8000/A_ID/?format=json').then(function(response){
            $scope.accessories = response.data;
        });
    };*/
});


    
app.controller('AccessoriesCtrl', function ($scope, $http) {

        $http.get('http://127.0.0.1:8000/A_ID/?format=json').then(function(response){
            $scope.accessories = response.data;
            console.log($scope.accessories);
        });
    });

app.controller('BoysCtrl', function ($scope, $http) {

        $http.get('http://127.0.0.1:8000/b_d_1ID/?format=json').then(function(response){
            $scope.b_d_1Item = response.data;
            console.log($scope.accessories);
        });
         
          $http.get('http://127.0.0.1:8000/b_d_3ID/?format=json').then(function(response){
            $scope.b_d_3Item = response.data;
            console.log($scope.b_d_3Item)
        });
         
          $http.get('http://127.0.0.1:8000/b_d_JID/?format=json').then(function(response){
            $scope.b_d_JItem = response.data;
            console.log($scope.accessories);
        });
         
          $http.get('http://127.0.0.1:8000/b_termoID/?format=json').then(function(response){
            $scope.b_termoItem = response.data;
            console.log($scope.b_termoItem);
        });
         
          $http.get('http://127.0.0.1:8000/b_w_1ID/?format=json').then(function(response){
            $scope.b_w_1Item = response.data;
            console.log($scope.accessories);
        });
         
          $http.get('http://127.0.0.1:8000/b_w_3ID/?format=json').then(function(response){
            $scope.b_w_3Item = response.data;
            console.log($scope.accessories);
        });
         
          $http.get('http://127.0.0.1:8000/b_w_JID/?format=json').then(function(response){
            $scope.b_w_jItem = response.data;
            console.log($scope.accessories);
        });
         
});
  