webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(session) {
        this.session = session;
        this.title = 'app';
    }
    AppComponent.prototype.logout = function () {
        this.session.logout().subscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_selection_service__ = __webpack_require__("../../../../../src/services/selection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_confirmation_service__ = __webpack_require__("../../../../../src/services/confirmation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_form_signup_form_component__ = __webpack_require__("../../../../../src/app/signup-form/signup-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__selection_location_location_component__ = __webpack_require__("../../../../../src/app/selection/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__selection_club_club_component__ = __webpack_require__("../../../../../src/app/selection/club/club.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__selection_type_type_component__ = __webpack_require__("../../../../../src/app/selection/type/type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__selection_alcohol_alcohol_component__ = __webpack_require__("../../../../../src/app/selection/alcohol/alcohol.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__selection_brand_brand_component__ = __webpack_require__("../../../../../src/app/selection/brand/brand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__selection_soft_soft_component__ = __webpack_require__("../../../../../src/app/selection/soft/soft.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__selection_confirmation_confirmation_component__ = __webpack_require__("../../../../../src/app/selection/confirmation/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__selection_add_or_check_out_add_or_check_out_component__ = __webpack_require__("../../../../../src/app/selection/add-or-check-out/add-or-check-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__selection_checkout_checkout_component__ = __webpack_require__("../../../../../src/app/selection/checkout/checkout.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//import { NavbarComponent } from './selection/src/app/selection/navbar/navbar.component';



//import { NavbarComponent } from './navbar/navbar.component';
//import { AddOrCheckOutComponent } from './selection/src/app/selection/add-or-check-out/add-or-check-out.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_12__signup_form_signup_form_component__["a" /* SignupFormComponent */],
            __WEBPACK_IMPORTED_MODULE_13__selection_location_location_component__["a" /* LocationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__selection_club_club_component__["a" /* ClubComponent */],
            __WEBPACK_IMPORTED_MODULE_16__selection_alcohol_alcohol_component__["a" /* AlcoholComponent */],
            __WEBPACK_IMPORTED_MODULE_17__selection_brand_brand_component__["a" /* BrandComponent */],
            __WEBPACK_IMPORTED_MODULE_18__selection_soft_soft_component__["a" /* SoftComponent */],
            __WEBPACK_IMPORTED_MODULE_15__selection_type_type_component__["a" /* TypeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__selection_confirmation_confirmation_component__["a" /* ConfirmationComponent */],
            __WEBPACK_IMPORTED_MODULE_21__selection_checkout_checkout_component__["a" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_20__selection_add_or_check_out_add_or_check_out_component__["a" /* AddOrCheckOutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_4__services_selection_service__["a" /* SelectionService */], __WEBPACK_IMPORTED_MODULE_5__services_confirmation_service__["a" /* ConfirmationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_form_signup_form_component__ = __webpack_require__("../../../../../src/app/signup-form/signup-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_location_location_component__ = __webpack_require__("../../../../../src/app/selection/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selection_club_club_component__ = __webpack_require__("../../../../../src/app/selection/club/club.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selection_type_type_component__ = __webpack_require__("../../../../../src/app/selection/type/type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selection_alcohol_alcohol_component__ = __webpack_require__("../../../../../src/app/selection/alcohol/alcohol.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selection_brand_brand_component__ = __webpack_require__("../../../../../src/app/selection/brand/brand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selection_soft_soft_component__ = __webpack_require__("../../../../../src/app/selection/soft/soft.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selection_confirmation_confirmation_component__ = __webpack_require__("../../../../../src/app/selection/confirmation/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__selection_add_or_check_out_add_or_check_out_component__ = __webpack_require__("../../../../../src/app/selection/add-or-check-out/add-or-check-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selection_checkout_checkout_component__ = __webpack_require__("../../../../../src/app/selection/checkout/checkout.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });











//import { addOrCheckComponent } from './selection/add-or-check-out/add-or-check-out.component';
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_form_login_form_component__["a" /* LoginFormComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_1__signup_form_signup_form_component__["a" /* SignupFormComponent */] },
    { path: 'locations', component: __WEBPACK_IMPORTED_MODULE_2__selection_location_location_component__["a" /* LocationComponent */] },
    { path: 'clubs', component: __WEBPACK_IMPORTED_MODULE_3__selection_club_club_component__["a" /* ClubComponent */] },
    { path: 'types', component: __WEBPACK_IMPORTED_MODULE_4__selection_type_type_component__["a" /* TypeComponent */] },
    { path: 'alcohols', component: __WEBPACK_IMPORTED_MODULE_5__selection_alcohol_alcohol_component__["a" /* AlcoholComponent */] },
    { path: 'brands', component: __WEBPACK_IMPORTED_MODULE_6__selection_brand_brand_component__["a" /* BrandComponent */] },
    { path: 'softs', component: __WEBPACK_IMPORTED_MODULE_7__selection_soft_soft_component__["a" /* SoftComponent */] },
    { path: 'confirmation', component: __WEBPACK_IMPORTED_MODULE_8__selection_confirmation_confirmation_component__["a" /* ConfirmationComponent */] },
    { path: 'add-or-check-out', component: __WEBPACK_IMPORTED_MODULE_9__selection_add_or_check_out_add_or_check_out_component__["a" /* AddOrCheckOutComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_10__selection_checkout_checkout_component__["a" /* CheckoutComponent */] }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-touched {\n  border-color: blue;\n}\n\n.ng-touched.ng-invalid {\n  border-color: red;\n}\n\n.ng-touched.ng-valid {\n  border-color: green;\n}\n\nh1.text-center {\nfont-family: 'Digital-7', arial;\nfont-size: 100px;\ntext-shadow: 4px 4px 4px #aaa;\n}\nh2.text-center {\nfont-family: 'Digital-7';\nfont-size: 40px;\ntext-shadow: 4px 4px 4px #aaa;\n}\n\n.panel.panel-default {\n  padding: 40px;\n}\n\nbody{\n    padding-top: 20px;\n  background-color: black;\n}\nform{\n\tpadding: 20px;\n\t    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 15px 0 rgba(0,0,0,0.12) !important;\n}\nh4{\n    text-align: center;\n}\n.btn{\n\tborder-radius: 0px;\n}\n.form-control{\n\tborder-radius: 0px;\n\tmargin-bottom: 10px;\n}\np{\n\tmargin-bottom: 10px;\n\tmargin-top: 10px;\n\ttext-align: center;\n}\n.blue{\n\tcolor: #337ab7;\n}\n.fa{\n\tcolor: #337ab7;\n}\n.fa-facebook-f{\n\tpadding: 10px 12px 10px 12px;\n\tborder: 1px solid #337ab7;\n\tborder-radius: 50%;\n}\ni{\n\tmargin-left: 5px;\n\tmargin-right: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" />\n<link href=\"http://allfont.es/allfont.css?fonts=digital-7\" rel=\"stylesheet\" type=\"text/css\" />\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" />\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<link href=\"/stylesheets/style.css\" type=\"text/css\" rel=\"stylesheet\" />\n<script src=\"../../public/javascript/javascript.js\" type=\"text/javascript\"></script>\n\n<h1 class=\"text-center\">00:00</h1>\n<h2 class=\"text-center\">fourzeros</h2><br/>\n<form>\n  <label style=\"font-size:30px\">Log In Information</label>\n  <br> <br>\n  <input class=\"form-control\" id=\"email\" type=\"text\" [(ngModel)]=\"formInfo.email\" name=\"email\" placeholder=\"Email Address\" style=\"font-size:20px\" />\n  <br>\n  <input class=\"form-control\" id=\"password\" type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\" placeholder=\"Password\" style=\"font-size:20px\" />\n  <p class=\"text-right\" style=\"font-size:20px\"><a href=\"\">Forgot Password</a></p>\n  <button (click)=\"login()\" class=\"btn btn-primary btn-block\" type=\"submit\" style=\"font-size:30px\">LOG IN</button>\n  <hr/>\n  <p class=\"blue\" style=\"font-size:20px\">Sign in with</p>\n  <p><a href=\"/auth/facebook\"><i class=\"fa fa-facebook-f fa-lg\"></i></a></p>\n  <hr/>\n  <br><br>\n  <p class=\"text-center\">\n    <a [routerLink]=\"['/signup']\" style=\"font-size:30px\">Create new account?</a>\n  </p>\n    <a [routerLink]=\"['/locations']\" style=\"font-size:30px\">Locations</a>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = (function () {
    function LoginFormComponent(router, session) {
        this.router = router;
        this.session = session;
        this.formInfo = {
            email: '',
            password: ''
        };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        console.log(this.formInfo);
        this.session.login(this.formInfo)
            .subscribe(function (user) {
            console.log(user);
            _this.router.navigate(['/locations']);
        }, function (err) { return _this.error = err; });
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-login-form',
        template: __webpack_require__("../../../../../src/app/login-form/login-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-form/login-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], LoginFormComponent);

var _a, _b;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbody {\n     font: 400 15px Lato, sans-serif;\n     line-height: 1.8;\n     color: #818181;\n }\n .navbar-default {\n   background-color:#ccc !important;}\n h2 {\n     font-size: 24px;\n     text-transform: uppercase;\n     color: #303030;\n     font-weight: 600;\n     margin-bottom: 30px;\n }\n h4 {\n     font-size: 19px;\n     line-height: 1.375em;\n     color: #303030;\n     font-weight: 400;\n     margin-bottom: 30px;\n }\n .jumbotron {\n     background-color: #f4511e;\n     color: #fff;\n     padding: 100px 25px;\n     font-family: Montserrat, sans-serif;\n }\n .container-fluid {\n     padding: 60px 50px;\n }\n .bg-grey {\n     background-color: #f6f6f6;\n }\n .logo-small {\n     color: #f4511e;\n     font-size: 50px;\n }\n .logo {\n     color: #f4511e;\n     font-size: 200px;\n }\n .thumbnail {\n     padding: 0 0 15px 0;\n     border: none;\n     border-radius: 0;\n }\n .thumbnail img {\n     width: 100%;\n     height: 100%;\n     margin-bottom: 10px;\n }\n .carousel-control.right, .carousel-control.left {\n     background-image: none;\n     color: #f4511e;\n }\n .carousel-indicators li {\n     border-color: #f4511e;\n }\n .carousel-indicators li.active {\n     background-color: #f4511e;\n }\n .item h4 {\n     font-size: 19px;\n     line-height: 1.375em;\n     font-weight: 400;\n     font-style: italic;\n     margin: 70px 0;\n }\n .item span {\n     font-style: normal;\n }\n .panel {\n     border: 1px solid #f4511e;\n     border-radius:0 !important;\n     transition: box-shadow 0.5s;\n }\n .panel:hover {\n     box-shadow: 5px 0px 40px rgba(0,0,0, .2);\n }\n .panel-footer .btn:hover {\n     border: 1px solid #f4511e;\n     background-color: #fff !important;\n     color: #f4511e;\n }\n .panel-heading {\n     color: #fff !important;\n     background-color: #f4511e !important;\n     padding: 25px;\n     border-bottom: 1px solid transparent;\n     border-top-left-radius: 0px;\n     border-top-right-radius: 0px;\n     border-bottom-left-radius: 0px;\n     border-bottom-right-radius: 0px;\n }\n .panel-footer {\n     background-color: white !important;\n }\n .panel-footer h3 {\n     font-size: 32px;\n }\n .panel-footer h4 {\n     color: #aaa;\n     font-size: 14px;\n }\n .panel-footer .btn {\n     margin: 15px 0;\n     background-color: #f4511e;\n     color: #fff;\n }\n .navbar {\n     margin-bottom: 0;\n     background-color: #f4511e;\n     z-index: 9999;\n     border: 0;\n     font-size: 12px !important;\n     line-height: 1.42857143 !important;\n     letter-spacing: 4px;\n     border-radius: 0;\n     font-family: Montserrat, sans-serif;\n }\n .navbar li a, .navbar .navbar-brand {\n     color: #fff !important;\n }\n .navbar-nav li a:hover, .navbar-nav li.active a {\n     color: #f4511e !important;\n     background-color: #fff !important;\n }\n .navbar-default .navbar-toggle {\n     border-color: transparent;\n     color: #fff !important;\n }\n footer .glyphicon {\n     font-size: 20px;\n     margin-bottom: 20px;\n     color: #f4511e;\n }\n .slideanim {visibility:hidden;}\n .slide {\n     animation-name: slide;\n     -webkit-animation-name: slide;\n     animation-duration: 1s;\n     -webkit-animation-duration: 1s;\n     visibility: visible;\n }\n @keyframes slide {\n   0% {\n     opacity: 0;\n     -webkit-transform: translateY(70%);\n             transform: translateY(70%);\n   }\n   100% {\n     opacity: 1;\n     -webkit-transform: translateY(0%);\n             transform: translateY(0%);\n   }\n }\n @-webkit-keyframes slide {\n   0% {\n     opacity: 0;\n     -webkit-transform: translateY(70%);\n   }\n   100% {\n     opacity: 1;\n     -webkit-transform: translateY(0%);\n   }\n }\n @media screen and (max-width: 768px) {\n   .col-sm-4 {\n     text-align: center;\n     margin: 25px 0;\n   }\n   .btn-lg {\n       width: 100%;\n       margin-bottom: 35px;\n   }\n }\n @media screen and (max-width: 480px) {\n   .logo {\n       font-size: 150px;\n   }\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <!-- Theme Made By www.w3schools.com - No Copyright -->\n  <title>Bootstrap Theme Company Page</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\" type=\"text/css\">\n  <link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\" type=\"text/css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n</head>\n<body id=\"myPage\" data-spy=\"scroll\" data-target=\".navbar\" data-offset=\"60\">\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#myPage\">Logo</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#about\">ABOUT</a></li>\n        <li><a href=\"#services\">SERVICES</a></li>\n        <li><a href=\"#portfolio\">PORTFOLIO</a></li>\n        <li><a href=\"#pricing\">PRICING</a></li>\n        <li><a href=\"#contact\">CONTACT</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"jumbotron text-center\">\n  <h1>Company</h1>\n  <p>We specialize in blablabla</p>\n  <form class=\"form-inline\">\n    <input type=\"email\" class=\"form-control\" size=\"50\" placeholder=\"Email Address\" required>\n    <button type=\"button\" class=\"btn btn-danger\">Subscribe</button>\n  </form>\n</div>\n\n<!-- Container (About Section) -->\n<div id=\"about\" class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h2>About Company Page</h2><br>\n      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n      <br><button class=\"btn btn-default btn-lg\">Get in Touch</button>\n    </div>\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-signal logo\"></span>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid bg-grey\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-globe logo slideanim\"></span>\n    </div>\n    <div class=\"col-sm-8\">\n      <h2>Our Values</h2><br>\n      <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br>\n      <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n    </div>\n  </div>\n</div>\n\n<!-- Container (Services Section) -->\n<div id=\"services\" class=\"container-fluid text-center\">\n  <h2>SERVICES</h2>\n  <h4>What we offer</h4>\n  <br>\n  <div class=\"row slideanim\">\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-off logo-small\"></span>\n      <h4>POWER</h4>\n      <p>Lorem ipsum dolor sit amet..</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-heart logo-small\"></span>\n      <h4>LOVE</h4>\n      <p>Lorem ipsum dolor sit amet..</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-lock logo-small\"></span>\n      <h4>JOB DONE</h4>\n      <p>Lorem ipsum dolor sit amet..</p>\n    </div>\n  </div>\n  <br><br>\n  <div class=\"row slideanim\">\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-leaf logo-small\"></span>\n      <h4>GREEN</h4>\n      <p>Lorem ipsum dolor sit amet..</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-certificate logo-small\"></span>\n      <h4>CERTIFIED</h4>\n      <p>Lorem ipsum dolor sit amet..</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-wrench logo-small\"></span>\n      <h4 style=\"color:#303030;\">HARD WORK</h4>\n      <p>Lorem ipsum dolor sit amet..</p>\n    </div>\n  </div>\n</div>\n\n<!-- Container (Portfolio Section) -->\n<div id=\"portfolio\" class=\"container-fluid text-center bg-grey\">\n  <h2>Portfolio</h2><br>\n  <h4>What we have created</h4>\n  <div class=\"row text-center slideanim\">\n    <div class=\"col-sm-4\">\n      <div class=\"thumbnail\">\n        <img src=\"paris.jpg\" alt=\"Paris\" width=\"400\" height=\"300\">\n        <p><strong>Paris</strong></p>\n        <p>Yes, we built Paris</p>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"thumbnail\">\n        <img src=\"newyork.jpg\" alt=\"New York\" width=\"400\" height=\"300\">\n        <p><strong>New York</strong></p>\n        <p>We built New York</p>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"thumbnail\">\n        <img src=\"sanfran.jpg\" alt=\"San Francisco\" width=\"400\" height=\"300\">\n        <p><strong>San Francisco</strong></p>\n        <p>Yes, San Fran is ours</p>\n      </div>\n    </div>\n  </div><br>\n\n  <h2>What our customers say</h2>\n  <div id=\"myCarousel\" class=\"carousel slide text-center\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"item active\">\n        <h4>\"This company is the best. I am so happy with the result!\"<br><span style=\"font-style:normal;\">Michael Roe, Vice President, Comment Box</span></h4>\n      </div>\n      <div class=\"item\">\n        <h4>\"One word... WOW!!\"<br><span style=\"font-style:normal;\">John Doe, Salesman, Rep Inc</span></h4>\n      </div>\n      <div class=\"item\">\n        <h4>\"Could I... BE any more happy with this company?\"<br><span style=\"font-style:normal;\">Chandler Bing, Actor, FriendsAlot</span></h4>\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n\n<!-- Container (Pricing Section) -->\n<div id=\"pricing\" class=\"container-fluid\">\n  <div class=\"text-center\">\n    <h2>Pricing</h2>\n    <h4>Choose a payment plan that works for you</h4>\n  </div>\n  <div class=\"row slideanim\">\n    <div class=\"col-sm-4 col-xs-12\">\n      <div class=\"panel panel-default text-center\">\n        <div class=\"panel-heading\">\n          <h1>Basic</h1>\n        </div>\n        <div class=\"panel-body\">\n          <p><strong>20</strong> Lorem</p>\n          <p><strong>15</strong> Ipsum</p>\n          <p><strong>5</strong> Dolor</p>\n          <p><strong>2</strong> Sit</p>\n          <p><strong>Endless</strong> Amet</p>\n        </div>\n        <div class=\"panel-footer\">\n          <h3>$19</h3>\n          <h4>per month</h4>\n          <button class=\"btn btn-lg\">Sign Up</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4 col-xs-12\">\n      <div class=\"panel panel-default text-center\">\n        <div class=\"panel-heading\">\n          <h1>Pro</h1>\n        </div>\n        <div class=\"panel-body\">\n          <p><strong>50</strong> Lorem</p>\n          <p><strong>25</strong> Ipsum</p>\n          <p><strong>10</strong> Dolor</p>\n          <p><strong>5</strong> Sit</p>\n          <p><strong>Endless</strong> Amet</p>\n        </div>\n        <div class=\"panel-footer\">\n          <h3>$29</h3>\n          <h4>per month</h4>\n          <button class=\"btn btn-lg\">Sign Up</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4 col-xs-12\">\n      <div class=\"panel panel-default text-center\">\n        <div class=\"panel-heading\">\n          <h1>Premium</h1>\n        </div>\n        <div class=\"panel-body\">\n          <p><strong>100</strong> Lorem</p>\n          <p><strong>50</strong> Ipsum</p>\n          <p><strong>25</strong> Dolor</p>\n          <p><strong>10</strong> Sit</p>\n          <p><strong>Endless</strong> Amet</p>\n        </div>\n        <div class=\"panel-footer\">\n          <h3>$49</h3>\n          <h4>per month</h4>\n          <button class=\"btn btn-lg\">Sign Up</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Container (Contact Section) -->\n<div id=\"contact\" class=\"container-fluid bg-grey\">\n  <h2 class=\"text-center\">CONTACT</h2>\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <p>Contact us and we'll get back to you within 24 hours.</p>\n      <p><span class=\"glyphicon glyphicon-map-marker\"></span> Chicago, US</p>\n      <p><span class=\"glyphicon glyphicon-phone\"></span> +00 1515151515</p>\n      <p><span class=\"glyphicon glyphicon-envelope\"></span> myemail@something.com</p>\n    </div>\n    <div class=\"col-sm-7 slideanim\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 form-group\">\n          <input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\" type=\"text\" required>\n        </div>\n        <div class=\"col-sm-6 form-group\">\n          <input class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" type=\"email\" required>\n        </div>\n      </div>\n      <textarea class=\"form-control\" id=\"comments\" name=\"comments\" placeholder=\"Comment\" rows=\"5\"></textarea><br>\n      <div class=\"row\">\n        <div class=\"col-sm-12 form-group\">\n          <button class=\"btn btn-default pull-right\" type=\"submit\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"googleMap\" style=\"height:400px;width:100%;\"></div>\n\n<!-- Add Google Maps -->\n<script src=\"https://maps.googleapis.com/maps/api/js\"></script>\n<script>\nvar myCenter = new google.maps.LatLng(41.878114, -87.629798);\n\nfunction initialize() {\nvar mapProp = {\n  center:myCenter,\n  zoom:12,\n  scrollwheel:false,\n  draggable:false,\n  mapTypeId:google.maps.MapTypeId.ROADMAP\n  };\n\nvar map = new google.maps.Map(document.getElementById(\"googleMap\"),mapProp);\n\nvar marker = new google.maps.Marker({\n  position:myCenter,\n  });\n\nmarker.setMap(map);\n}\n\ngoogle.maps.event.addDomListener(window, 'load', initialize);\n</script>\n\n<footer class=\"container-fluid text-center\">\n  <a href=\"#myPage\" title=\"To Top\">\n    <span class=\"glyphicon glyphicon-chevron-up\"></span>\n  </a>\n  <p>Bootstrap Theme Made By <a href=\"http://www.w3schools.com\" title=\"Visit w3schools\">www.w3schools.com</a></p>\n</footer>\n\n\n\n</body>\n\n<script>  $(document).ready(function(){\n// Add smooth scrolling to all links in navbar + footer link\n$(\".navbar a, footer a[href='#myPage']\").on('click', function(event) {\n  // Make sure this.hash has a value before overriding default behavior\n  if (this.hash !== \"\") {\n    // Prevent default anchor click behavior\n    event.preventDefault();\n\n    // Store hash\n    var hash = this.hash;\n\n    // Using jQuery's animate() method to add smooth page scroll\n    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area\n    $('html, body').animate({\n      scrollTop: $(hash).offset().top\n    }, 900, function(){\n\n      // Add hash (#) to URL when done scrolling (default click behavior)\n      window.location.hash = hash;\n    });\n  } // End if\n});\n\n$(window).scroll(function() {\n  $(\".slideanim\").each(function(){\n    var pos = $(this).offset().top;\n\n    var winTop = $(window).scrollTop();\n      if (pos < winTop + 600) {\n        $(this).addClass(\"slide\");\n      }\n  });\n});\n}) </script>\n\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/selection/add-or-check-out/add-or-check-out.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);", ""]);

// module
exports.push([module.i, "body {\n  background-color: #6A5ACD;\n  font-family: \"Roboto\", helvetica, arial, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  text-rendering: optimizeLegibility;\n}\n\ndiv.table-title {\n   display: block;\n  margin: auto;\n  max-width: 600px;\n  padding:5px;\n  width: 100%;\n  text-align: center;\n}\n\n.table-title h3 {\n   color: #fafafa;\n   font-size: 30px;\n   font-weight: 400;\n   font-style:normal;\n   font-family: \"Sans\", helvetica, arial, sans-serif;\n   text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\n   text-transform:uppercase;\n}\n\n\n/*** Table Styles **/\n\n.table-fill {\n  background: white;\n  border-radius:3px;\n  border-collapse: collapse;\n  height: auto;\n  margin: auto;\n  max-width: 1050px;\n  padding:5px;\n  width: 100%;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n  -webkit-animation: float 5s infinite;\n          animation: float 5s infinite;\n}\n\nth {\n  color:#D5DDE5;\n  background:#1b1e24;\n  border-bottom:4px solid #9ea7af;\n  border-right: 1px solid #343a45;\n  font-size:18px;\n  font-weight: bold;\n  padding:20px;\n  text-align:left;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  vertical-align:middle;\n}\n\nth:first-child {\n  border-top-left-radius:3px;\n}\n\nth:last-child {\n  border-top-right-radius:3px;\n  border-right:none;\n}\n\ntr {\n  border-top: 1px solid #C1C3D1;\n  border-bottom: 1px solid #C1C3D1;\n  color:#7B68EE;\n  font-size:13px;\n  font-weight:bold;\n  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\ntr:hover td {\n  background:#4E5066;\n  color:#FFFFFF;\n  border-top: 1px solid #22262e;\n  border-bottom: 1px solid #22262e;\n}\n\ntd {\n  background: #FFF8DC;\n  padding:5px;\n  padding-left: 20px;\n  text-align:left;\n  vertical-align:middle;\n  font-weight:300;\n  font-size:18px;\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\n  border-right: 1px solid #C1C3D1;\n}\n\ntd:last-child {\n  border-right: 0px;\n}\n\nth.text-left {\n  text-align: left;\n}\n\nth.text-center {\n  text-align: center;\n}\n\nth.text-right {\n  text-align: right;\n}\n\ntd.text-left {\n  text-align: left;\n}\n\ntd.text-center {\n  text-align: center;\n}\n\ntd.text-right {\n  text-align: right;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/selection/add-or-check-out/add-or-check-out.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"initial-scale=1.0; maximum-scale=1.0; width=device-width;\">\n</head>\n\n<body>\n\n  <div class=\"table-title\">\n    <h3>Your current order</h3>\n  </div>\n\n  <table class=\"table-fill\">\n\n    <thead>\n\n      <tr>\n        <th class=\"text-center\"> Type of drink </th>\n        <th class=\"text-center\"> Base </th>\n        <th class=\"text-center\"> Base brand </th>\n        <th class=\"text-center\"> Soft Drink </th>\n        <th class=\"text-center\"> Quantity </th>\n      </tr>\n\n    </thead>\n\n    <tbody class=\"table-hover\" *ngFor=\"let drink of orders\">\n\n      <tr>\n        <td class=\"text-left\">{{drink.size}}</td>\n        <td class=\"text-left\">{{drink.alcohol}}</td>\n        <td class=\"text-left\">{{drink.brand}}</td>\n        <td class=\"text-left\">{{drink.soft}}</td>\n        <td class=\"text-center\">{{drink.number}}</td>\n      </tr>\n\n\n    </tbody>\n\n  </table>\n\n  <button (click)=\"addAnother()\"> Add another  drink </button>\n  <button (click)=\"checkout()\"> Checkout </button>\n\n\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/selection/add-or-check-out/add-or-check-out.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_selection_service__ = __webpack_require__("../../../../../src/services/selection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_confirmation_service__ = __webpack_require__("../../../../../src/services/confirmation.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOrCheckOutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddOrCheckOutComponent = (function () {
    function AddOrCheckOutComponent(router, selection, session, confirmation) {
        this.router = router;
        this.selection = selection;
        this.session = session;
        this.confirmation = confirmation;
    }
    AddOrCheckOutComponent.prototype.ngOnInit = function () {
        this.orders = this.confirmation.orderDrinks;
    };
    AddOrCheckOutComponent.prototype.addAnother = function () {
        this.router.navigate(['/types']);
        this.selection.type = '';
        this.selection.alcohol = '';
        this.selection.brand = '';
        this.selection.soft = '';
    };
    AddOrCheckOutComponent.prototype.checkout = function () {
        this.router.navigate(['/checkout']);
    };
    return AddOrCheckOutComponent;
}());
AddOrCheckOutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-add-or-check-out',
        template: __webpack_require__("../../../../../src/app/selection/add-or-check-out/add-or-check-out.component.html"),
        styles: [__webpack_require__("../../../../../src/app/selection/add-or-check-out/add-or-check-out.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_confirmation_service__["a" /* ConfirmationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_confirmation_service__["a" /* ConfirmationService */]) === "function" && _d || Object])
], AddOrCheckOutComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-or-check-out.component.js.map

/***/ }),

/***/ "../../../../../src/app/selection/alcohol/alcohol.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/selection/alcohol/alcohol.component.html":
/***/ (function(module, exports) {

module.exports = "<div> Select your Club\n\n  <ul class=\"alcohols\" *ngFor = \"let alcohol of alcohols\">\n    <button (click)=\"saveAlcoholComponent(alcohol)\"> {{alcohol}} </button>\n  </ul>\n\n  <button (click)=\"back()\"> Back </button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/selection/alcohol/alcohol.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_selection_service__ = __webpack_require__("../../../../../src/services/selection.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlcoholComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlcoholComponent = (function () {
    function AlcoholComponent(router, alcoholComponent) {
        this.router = router;
        this.alcoholComponent = alcoholComponent;
    }
    AlcoholComponent.prototype.ngOnInit = function () {
        this.alcohols = this.alcoholComponent.getAlcohol();
    };
    AlcoholComponent.prototype.saveAlcoholComponent = function (alcohol) {
        this.alcoholComponent.saveAlcohol(alcohol);
        this.router.navigate(['/brands']);
    };
    AlcoholComponent.prototype.back = function () {
        this.router.navigate(['/types']);
    };
    return AlcoholComponent;
}());
AlcoholComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-alcohol',
        template: __webpack_require__("../../../../../src/app/selection/alcohol/alcohol.component.html"),
        styles: [__webpack_require__("../../../../../src/app/selection/alcohol/alcohol.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */]) === "function" && _b || Object])
], AlcoholComponent);

var _a, _b;
//# sourceMappingURL=alcohol.component.js.map

/***/ }),

/***/ "../../../../../src/app/selection/brand/brand.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/selection/brand/brand.component.html":
/***/ (function(module, exports) {

module.exports = "<div> Select your Club\n\n  <ul class=\"brands\" *ngFor = \"let brand of brands\">\n    <button (click)=\"saveBrandComponent(brand)\"> {{brand}} </button>\n  </ul>\n\n  <button (click)=\"back()\"> Back </button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/selection/brand/brand.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_selection_service__ = __webpack_require__("../../../../../src/services/selection.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrandComponent = (function () {
    function BrandComponent(router, brandComponent) {
        this.router = router;
        this.brandComponent = brandComponent;
    }
    BrandComponent.prototype.ngOnInit = function () {
        this.brands = this.brandComponent.getBrands();
    };
    BrandComponent.prototype.saveBrandComponent = function (brand) {
        this.brandComponent.saveBrand(brand);
        if (this.brandComponent.type == "Shot") {
            this.router.navigate(['/confirmation']);
        }
        else {
            this.router.navigate(['/softs']);
        }
    };
    BrandComponent.prototype.back = function () {
        this.router.navigate(['/alcohols']);
    };
    return BrandComponent;
}());
BrandComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-brand',
        template: __webpack_require__("../../../../../src/app/selection/brand/brand.component.html"),
        styles: [__webpack_require__("../../../../../src/app/selection/brand/brand.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */]) === "function" && _b || Object])
], BrandComponent);

var _a, _b;
//# sourceMappingURL=brand.component.js.map

/***/ }),

/***/ "../../../../../src/app/selection/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/selection/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  checkout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/selection/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_selection_service__ = __webpack_require__("../../../../../src/services/selection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_confirmation_service__ = __webpack_require__("../../../../../src/services/confirmation.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckoutComponent = (function () {
    function CheckoutComponent(router, selection, session, confirmation) {
        this.router = router;
        this.selection = selection;
        this.session = session;
        this.confirmation = confirmation;
        this.order = [];
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-checkout',
        template: __webpack_require__("../../../../../src/app/selection/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/selection/checkout/checkout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_confirmation_service__["a" /* ConfirmationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_confirmation_service__["a" /* ConfirmationService */]) === "function" && _d || Object])
], CheckoutComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../src/app/selection/club/club.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/selection/club/club.component.html":
/***/ (function(module, exports) {

module.exports = "<div> Select your Club\n\n  <ul class=\"clubs\" *ngFor = \"let club of clubs\">\n    <button (click)=\"saveClubComponent(club)\"> {{club}} </button>\n  </ul>\n\n  <button (click)=\"back()\"> Back </button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/selection/club/club.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_selection_service__ = __webpack_require__("../../../../../src/services/selection.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClubComponent = (function () {
    function ClubComponent(router, clubComponent) {
        this.router = router;
        this.clubComponent = clubComponent;
    }
    ClubComponent.prototype.ngOnInit = function () {
        this.clubs = this.clubComponent.getClubs();
    };
    ClubComponent.prototype.saveClubComponent = function (club) {
        this.clubComponent.saveClub(club);
        this.router.navigate(['/types']);
    };
    ClubComponent.prototype.back = function () {
        this.router.navigate(['/locations']);
    };
    return ClubComponent;
}());
ClubComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-club',
        template: __webpack_require__("../../../../../src/app/selection/club/club.component.html"),
        styles: [__webpack_require__("../../../../../src/app/selection/club/club.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */]) === "function" && _b || Object])
], ClubComponent);

var _a, _b;
//# sourceMappingURL=club.component.js.map

/***/ }),

/***/ "../../../../../src/app/selection/confirmation/confirmation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/selection/confirmation/confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <div>\n    Club: <span> {{this.beverage.club}} </span>\n  </div>\n\n  <div class=\"drinkBriefing\">\n    Your Selection:\n    <span> {{this.beverage.size}},  </span>\n    <span> {{this.beverage.alcohol}}, </span>\n     <span> {{this.beverage.brand}}, </span>\n     <span> {{this.beverage.soft}}, </span>\n     <span> Number: {{this.beverage.number}} </span>\n\n     <div>\n       <button (click)=\"increment()\"> + </button>\n       <button (click)=\"decrement()\"> - </button>\n     </div>\n\n  </div>\n\n<button (click)=\"confirmBeverage()\"> Confirm Selection </button>\n<br>\n<button (click)=\"back()\"> Back </button>\n"

/***/ }),

/***/ "../../../../../src/app/selection/confirmation/confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_selection_service__ = __webpack_require__("../../../../../src/services/selection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_confirmation_service__ = __webpack_require__("../../../../../src/services/confirmation.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmationComponent = (function () {
    function ConfirmationComponent(router, selection, session, confirmation) {
        this.router = router;
        this.selection = selection;
        this.session = session;
        this.confirmation = confirmation;
        this.beverage = {
            size: '',
            alcohol: '',
            brand: '',
            soft: '',
            club: '',
            number: null,
            user: null,
        };
        this.units = 1;
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        this.beverage.size = this.selection.type,
            this.beverage.alcohol = this.selection.alcohol,
            this.beverage.brand = this.selection.brand,
            this.beverage.soft = this.selection.soft,
            this.beverage.club = this.selection.club,
            this.beverage.number = this.units,
            this.beverage.user = this.session.user;
    };
    ConfirmationComponent.prototype.confirmBeverage = function () {
        var _this = this;
        console.log(this.beverage);
        this.confirmation.orderDrinks.push(this.beverage);
        console.log(this.confirmation.orderDrinks);
        this.confirmation.saveBeverage(this.beverage)
            .subscribe(function (beverage) {
            console.log(beverage);
            _this.router.navigate(['/add-or-check-out']);
        }, function (err) { return console.log(err); });
    };
    ConfirmationComponent.prototype.increment = function () {
        this.units++;
        this.beverage.number = this.units;
    };
    ConfirmationComponent.prototype.decrement = function () {
        if (this.units > 1) {
            this.units--;
            this.beverage.number = this.units;
        }
        ;
    };
    ConfirmationComponent.prototype.back = function () {
        if (this.selection.type !== "Shot") {
            this.router.navigate(['/softs']);
        }
        else {
            this.router.navigate(['/brands']);
        }
    };
    return ConfirmationComponent;
}());
ConfirmationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-confirmation',
        template: __webpack_require__("../../../../../src/app/selection/confirmation/confirmation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/selection/confirmation/confirmation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_confirmation_service__["a" /* ConfirmationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_confirmation_service__["a" /* ConfirmationService */]) === "function" && _d || Object])
], ConfirmationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=confirmation.component.js.map

/***/ }),

/***/ "../../../../../src/app/selection/location/location.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/selection/location/location.component.html":
/***/ (function(module, exports) {

module.exports = "<div> Select your location\n\n  <ul class=\"locations\" *ngFor = \"let location of locations\">\n    <button (click)=\"saveLocationComponent(location)\"> {{location}} </button>\n  </ul>\n\n  <button (click)=\"back()\"> Back </button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/selection/location/location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_selection_service__ = __webpack_require__("../../../../../src/services/selection.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationComponent = (function () {
    function LocationComponent(router, locationComponent) {
        this.router = router;
        this.locationComponent = locationComponent;
    }
    LocationComponent.prototype.ngOnInit = function () {
        this.locations = this.locationComponent.getLocation();
    };
    LocationComponent.prototype.saveLocationComponent = function (location) {
        this.locationComponent.saveLocation(location);
        this.router.navigate(['/clubs']);
    };
    LocationComponent.prototype.back = function () {
        this.router.navigate(['/']);
    };
    return LocationComponent;
}());
LocationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-location',
        template: __webpack_require__("../../../../../src/app/selection/location/location.component.html"),
        styles: [__webpack_require__("../../../../../src/app/selection/location/location.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */]) === "function" && _b || Object])
], LocationComponent);

var _a, _b;
//# sourceMappingURL=location.component.js.map

/***/ }),

/***/ "../../../../../src/app/selection/soft/soft.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/selection/soft/soft.component.html":
/***/ (function(module, exports) {

module.exports = "<div> Select your Soft Drink\n\n  <ul class=\"softs\" *ngFor = \"let soft of softs\">\n    <button (click)=\"saveSoftComponent(soft)\"> {{soft}} </button>\n  </ul>\n\n<button (click)=\"back()\"> Back </button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/selection/soft/soft.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_selection_service__ = __webpack_require__("../../../../../src/services/selection.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoftComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SoftComponent = (function () {
    function SoftComponent(router, softComponent) {
        this.router = router;
        this.softComponent = softComponent;
    }
    SoftComponent.prototype.ngOnInit = function () {
        this.softs = this.softComponent.getSofts();
    };
    SoftComponent.prototype.saveSoftComponent = function (soft) {
        this.softComponent.saveSoft(soft);
        console.log(soft);
        this.router.navigate(['/confirmation']);
    };
    SoftComponent.prototype.back = function () {
        if (this.softComponent.type !== "Soft") {
            this.router.navigate(['/brands']);
        }
        else {
            this.router.navigate(['/types']);
        }
    };
    return SoftComponent;
}());
SoftComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-soft',
        template: __webpack_require__("../../../../../src/app/selection/soft/soft.component.html"),
        styles: [__webpack_require__("../../../../../src/app/selection/soft/soft.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */]) === "function" && _b || Object])
], SoftComponent);

var _a, _b;
//# sourceMappingURL=soft.component.js.map

/***/ }),

/***/ "../../../../../src/app/selection/type/type.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/selection/type/type.component.html":
/***/ (function(module, exports) {

module.exports = "<div> Select your Type of Drink\n\n  <ul class=\"types\" *ngFor = \"let type of types\">\n    <button (click)=\"saveTypeComponent(type)\"> {{type}} </button>\n  </ul>\n\n<button (click)=\"back()\"> Back </button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/selection/type/type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_selection_service__ = __webpack_require__("../../../../../src/services/selection.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypeComponent = (function () {
    function TypeComponent(router, typeComponent) {
        this.router = router;
        this.typeComponent = typeComponent;
    }
    TypeComponent.prototype.ngOnInit = function () {
        this.types = this.typeComponent.getTypes();
    };
    TypeComponent.prototype.saveTypeComponent = function (type) {
        this.typeComponent.saveType(type);
        if (type == "Soft") {
            this.router.navigate(['/softs']);
        }
        else {
            this.router.navigate(['/alcohols']);
        }
    };
    TypeComponent.prototype.back = function () {
        this.router.navigate(['/clubs']);
    };
    return TypeComponent;
}());
TypeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-type',
        template: __webpack_require__("../../../../../src/app/selection/type/type.component.html"),
        styles: [__webpack_require__("../../../../../src/app/selection/type/type.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_selection_service__["a" /* SelectionService */]) === "function" && _b || Object])
], TypeComponent);

var _a, _b;
//# sourceMappingURL=type.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup-form/signup-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-touched {\n  border-color: blue;\n}\n\n.ng-touched.ng-invalid {\n  border-color: red;\n}\n\n.ng-touched.ng-valid {\n  border-color: green;\n}\n\nh1.text-center {\nfont-family: 'Digital-7', arial;\nfont-size: 100px;\ntext-shadow: 4px 4px 4px #aaa;\n}\nh2.text-center {\nfont-family: 'Digital-7';\nfont-size: 40px;\ntext-shadow: 4px 4px 4px #aaa;\n}\n\n.panel.panel-default {\n  padding: 40px;\n}\n\nbody{\n    padding-top: 20px;\n  background-color: black;\n}\nform{\n\tpadding: 20px;\n\t    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 15px 0 rgba(0,0,0,0.12) !important;\n}\nh4{\n    text-align: center;\n}\n.btn{\n\tborder-radius: 0px;\n}\n.form-control{\n\tborder-radius: 0px;\n\tmargin-bottom: 10px;\n}\np{\n\tmargin-bottom: 10px;\n\tmargin-top: 10px;\n\ttext-align: center;\n}\n.blue{\n\tcolor: #337ab7;\n}\n.fa{\n\tcolor: #337ab7;\n}\n.fa-facebook-f{\n\tpadding: 10px 12px 10px 12px;\n\tborder: 1px solid #337ab7;\n\tborder-radius: 50%;\n}\ni{\n\tmargin-left: 5px;\n\tmargin-right: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup-form/signup-form.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" />\n<link href=\"http://allfont.es/allfont.css?fonts=digital-7\" rel=\"stylesheet\" type=\"text/css\" />\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" />\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<link href=\"/stylesheets/style.css\" type=\"text/css\" rel=\"stylesheet\" />\n<script src=\"../../public/javascript/javascript.js\" type=\"text/javascript\"></script>\n\n<h1 class=\"text-center\">00:00</h1>\n<h2 class=\"text-center\">fourzeros</h2><br/>\n\n<form novalidate>\n<label style=\"font-size:30px\">Basic Information</label>\n    <input class=\"form-control\" id=\"name\" placeholder=\"Name\" style=\"font-size:20px\" type=\"text\" [(ngModel)]=\"formInfo.name\" name=\"name\" required />\n    <input class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\" style=\"font-size:20px\"  type=\"text\" [(ngModel)]=\"formInfo.lastName\" name=\"lastName\" required />\n    <input  class=\"form-control\" id=\"email\" placeholder=\"Email\" style=\"font-size:20px\" type=\"text\" [(ngModel)]=\"formInfo.email\" name=\"email\" required />\n    <input class=\"form-control\" id=\"dateOfBirth\" placeholder=\"Date of Birth\" style=\"font-size:20px\" type=\"date\" [(ngModel)]=\"formInfo.dateOfBirth\" name=\"dateOfBirth\" required />\n    <input class=\"form-control\" id=\"cityOfResidence\" placeholder=\"City of Residence\" style=\"font-size:20px\" type=\"text\" [(ngModel)]=\"formInfo.cityOfResidence\" name=\"cityOfResidence\" required />\n  <label style=\"font-size:30px\">Private Information</label>\n    <input class=\"form-control\" id=\"password\" placeholder=\"password\" style=\"font-size:20px\" type=\"password\"[(ngModel)]=\"formInfo.password\" name=\"password\" required minlength=\"6\" />\n  <!-- <div *ngIf=\"myPassword.errors && (myPassword.dirty || myPassword.touched)\">\n    <p class=\"error\" [hidden]=\"!myPassword.errors.required.minlength\">\n      Password must be at least 6 characters long.\n    </p>\n  </div> -->\n    <input class=\"form-control\" id=\"mobileNumber\" placeholder=\"Phone Number\" style=\"font-size:20px\" type=\"number\" [(ngModel)]=\"formInfo.mobileNumber\" name=\"mobileNumber\" required maxlength=\"8\"/>\n  <button (click)=\"signup()\" type=\"submit\" class=\"btn btn-primary btn-block\" style=\"font-size:30px\">SIGN UP</button>\n  <p class=\"text-center\"><a [routerLink]=\"['/login']\" style=\"font-size:30px\">Already have an account?</a></p>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/signup-form/signup-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupFormComponent = (function () {
    function SignupFormComponent(router, session) {
        this.router = router;
        this.session = session;
        this.formInfo = {
            name: '',
            lastName: '',
            email: '',
            password: '',
            dateOfBirth: '',
            cityOfResidence: '',
            mobileNumber: ''
        };
    }
    SignupFormComponent.prototype.ngOnInit = function () {
    };
    SignupFormComponent.prototype.signup = function () {
        var _this = this;
        console.log(this.formInfo);
        this.session.signup(this.formInfo)
            .subscribe(function (user) {
            console.log(user);
            _this.router.navigate(['/locations']);
        }, function (err) { return console.log(err); });
    };
    return SignupFormComponent;
}());
SignupFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-signup-form',
        template: __webpack_require__("../../../../../src/app/signup-form/signup-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup-form/signup-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], SignupFormComponent);

var _a, _b;
//# sourceMappingURL=signup-form.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    //BASE_URL: "http://localhost:3000",
    BASE_URL: "",
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/services/confirmation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfirmationService = (function () {
    function ConfirmationService(http) {
        this.http = http;
        this.options = { withCredentials: true };
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASE_URL + "/api/beverage"; //environment.BASE_URL: "http://localhost:3000",
        this.orderDrinks = [];
    }
    ConfirmationService.prototype.saveBeverage = function (beverage) {
        return this.http.post(this.BASE_URL + "/confirm", beverage, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ConfirmationService.prototype.saveOrder = function (orderDrinks) {
        return this.http.post(this.BASE_URL + "/order", orderDrinks, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ConfirmationService.prototype.handleError = function (e) {
        console.error("Error en la llamada a la API");
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    return ConfirmationService;
}());
ConfirmationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ConfirmationService);

var _a;
//# sourceMappingURL=confirmation.service.js.map

/***/ }),

/***/ "../../../../../src/services/selection.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectionService = (function () {
    function SelectionService() {
        this.type = "";
        this.location = "";
        this.club = "";
        this.alcohol = "";
        this.brand = "";
        this.soft = "";
        this.counter = 1;
        this.order = [];
        this.types = [
            { type: "Regular" },
            { type: "Shot" },
            { type: "Soft" }
        ];
        this.clubs = [
            { location: "Madrid", club: "Pacha" },
            { location: "Madrid", club: "Kapital" },
            { location: "Madrid", club: "Commodoro" },
            { location: "Madrid", club: "Graff" },
            { location: "Barcelona", club: "Razzmatazz" },
            { location: "Barcelona", club: "Opium" },
            { location: "Barcelona", club: "Soho" },
            { location: "Barcelona", club: "Hyde" },
            { location: "Ibiza", club: "Pacha" },
            { location: "Ibiza", club: "Ushuaia" },
            { location: "Ibiza", club: "Amnesia" },
            { location: "Ibiza", club: "Space" }
        ];
        this.alcohols = [
            { alcohol: "Whisky", brand: "Johnie Walker" },
            { alcohol: "Whisky", brand: "Ballantine's" },
            { alcohol: "Whisky", brand: "J&B" },
            { alcohol: "Whisky", brand: "Chivas" },
            { alcohol: "Whisky", brand: "Cardhu" },
            { alcohol: "Whisky", brand: "DYC" },
            { alcohol: "Whisky", brand: "100 Pipers" },
            { alcohol: "Whisky", brand: "Jack Daniel´s" },
            { alcohol: "Whisky", brand: "John Dewars" },
            { alcohol: "Rum", brand: "Santa Teresa" },
            { alcohol: "Rum", brand: "Captain Morgan" },
            { alcohol: "Rum", brand: "Bacardí" },
            { alcohol: "Rum", brand: "Negrita" },
            { alcohol: "Rum", brand: "Barceló" },
            { alcohol: "Rum", brand: "Arehucas" },
            { alcohol: "Rum", brand: "Santa Cruz" },
            { alcohol: "Rum", brand: "Habana Club" },
            { alcohol: "Vodka", brand: "Absolut" },
            { alcohol: "Vodka", brand: "Grey Goose" },
            { alcohol: "Vodka", brand: "Smirnoff" },
            { alcohol: "Vodka", brand: "Svedka" },
            { alcohol: "Vodka", brand: "Eristoff" },
            { alcohol: "Vodka", brand: "Moskovskaya" },
            { alcohol: "Gin", brand: "Beefeater" },
            { alcohol: "Gin", brand: "Seagram´s" },
            { alcohol: "Gin", brand: "Martin Miller´s" },
            { alcohol: "Gin", brand: "Bulldog" },
            { alcohol: "Gin", brand: "Bombay Sapphire" },
            { alcohol: "Gin", brand: "Tanqueray" },
            { alcohol: "Gin", brand: "Larios" },
            { alcohol: "Gin", brand: "Gordon´s" }
        ];
        this.softs = [
            { soft: "Coca-Cola" },
            { soft: "Fanta Naranja" },
            { soft: "Fanta Limón" },
            { soft: "Schweppes" },
            { soft: "Water" },
            { soft: "Sprite" }
        ];
    }
    SelectionService.prototype.getLocation = function () {
        var locations = [];
        for (var i = 0; i < this.clubs.length; i++) {
            locations.push(this.clubs[i].location);
        }
        var unique = locations.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
        });
        return unique;
    };
    SelectionService.prototype.saveLocation = function (location) {
        this.location = location;
        console.log(this.location);
    };
    SelectionService.prototype.getClubs = function () {
        var location = this.location;
        var clubListObject = this.clubs.filter(function (elem) {
            return location == elem.location;
        });
        var clubList = [];
        for (var i = 0; i < clubListObject.length; i++) {
            clubList.push(clubListObject[i].club);
        }
        console.log(clubList);
        return clubList;
    };
    SelectionService.prototype.saveClub = function (club) {
        this.club = club;
        console.log(this.club);
    };
    SelectionService.prototype.getTypes = function () {
        var types = [];
        for (var i = 0; i < this.types.length; i++) {
            types.push(this.types[i].type);
        }
        return types.sort();
    };
    SelectionService.prototype.saveType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    SelectionService.prototype.getAlcohol = function () {
        var alcohols = [];
        for (var i = 0; i < this.alcohols.length; i++) {
            alcohols.push(this.alcohols[i].alcohol);
        }
        var unique = alcohols.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
        });
        return unique.sort();
    };
    SelectionService.prototype.saveAlcohol = function (alcohol) {
        this.alcohol = alcohol;
        console.log(this.alcohol);
    };
    SelectionService.prototype.getBrands = function () {
        var alcohol = this.alcohol;
        var brandListObject = this.alcohols.filter(function (elem) {
            return alcohol == elem.alcohol;
        });
        var brandList = [];
        for (var i = 0; i < brandListObject.length; i++) {
            brandList.push(brandListObject[i].brand);
        }
        console.log(brandList);
        return brandList.sort();
    };
    SelectionService.prototype.saveBrand = function (brand) {
        this.brand = brand;
        console.log(this.brand);
    };
    SelectionService.prototype.getSofts = function () {
        var softs = [];
        for (var i = 0; i < this.softs.length; i++) {
            softs.push(this.softs[i].soft);
        }
        return softs.sort();
    };
    SelectionService.prototype.saveSoft = function (soft) {
        this.soft = soft;
        console.log(this.soft);
    };
    return SelectionService;
}());
SelectionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SelectionService);

/*
  getList(): Array<Object> {
    return this.contacts;
  }

  get(idContact: number): Object {
    return _.findWhere(this.contacts, { id: idContact });
  }

  edit(contact) {
    let idx = _.findIndex(this.contacts, { id: contact.id });
    if (idx >= 0) {
      this.contacts[idx] = contact;
    }
    return this.contacts[idx];

  }*/
//# sourceMappingURL=selection.service.js.map

/***/ }),

/***/ "../../../../../src/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SessionService = (function () {
    function SessionService(http) {
        var _this = this;
        this.http = http;
        this.startLoginCompleted = false;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASE_URL + "/api/auth"; //environment.BASE_URL: "http://localhost:3000",
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe(function (user) {
            console.log("Welcome again user " + user.email);
            _this.user = user;
            _this.startLoginCompleted = true;
        }, function (e) { return _this.startLoginCompleted = true; });
    }
    SessionService.prototype.handleError = function (e) {
        console.error("Error en la llamada a la API");
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    SessionService.prototype.signup = function (formInfo) {
        return this.http.post(this.BASE_URL + "/signup", formInfo, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.login = function (formInfo) {
        var _this = this;
        return this.http.post(this.BASE_URL + "/login", formInfo, this.options)
            .map(function (res) {
            _this.user = res.json();
            return _this.user;
        })
            .catch(this.handleError);
    };
    SessionService.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.BASE_URL + "/logout", this.options)
            .map(function (res) {
            res.json();
            _this.user = undefined;
        })
            .catch(this.handleError);
    };
    SessionService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(this.BASE_URL + "/loggedin", this.options)
            .map(function (res) {
            _this.user = res.json();
            return _this.user;
        })
            .catch(this.handleError);
    };
    SessionService.prototype.getPrivateData = function () {
        return this.http.get(this.BASE_URL + "/private", this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return SessionService;
}());
SessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SessionService);

var _a;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map