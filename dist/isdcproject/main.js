(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./mystories-module/mystories.module": [
		"./src/app/mystories-module/mystories.module.ts",
		"mystories-module-mystories-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_module_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core-module/home/home.component */ "./src/app/core-module/home/home.component.ts");
/* harmony import */ var _shared_module_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-module/error-page/error-page.component */ "./src/app/shared-module/error-page/error-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', component: _core_module_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'mystory', loadChildren: './mystories-module/mystories.module#MyStoriesModule' },
    { path: 'not-found', component: _shared_module_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"], data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/not-found' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'isdcproject';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_module_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core-module/core.module */ "./src/app/core-module/core.module.ts");
/* harmony import */ var _auth_module_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-module/auth.module */ "./src/app/auth-module/auth.module.ts");
/* harmony import */ var _webpages_module_webpages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webpages-module/webpages.module */ "./src/app/webpages-module/webpages.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared-module/shared.module */ "./src/app/shared-module/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ml_module_ml_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ml-module/ml.module */ "./src/app/ml-module/ml.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                // Own modules
                _webpages_module_webpages_module__WEBPACK_IMPORTED_MODULE_6__["WebPagesModule"],
                _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _ml_module_ml_module__WEBPACK_IMPORTED_MODULE_10__["MlModule"],
                _auth_module_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _core_module_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"] // This has to be the last one
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-module/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/auth-module/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth-module/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        // return this.authService.isAuthenticated()
        //   .then(
        //     (authenticated: boolean) => {
        //       if (authenticated) {
        //         return true;
        //       } else {
        //         this.router.navigate(['/']);
        //         return false;
        //       }
        //     }
        //   );
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth-module/auth-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/auth-module/auth-routing.module.ts ***!
  \****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth-module/signin/signin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var authRoutes = [
    { path: 'login', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"] },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(authRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth-module/auth.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/auth-module/auth.interceptor.ts ***!
  \*************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth-module/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        console.log('Intercepted!', req);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'JWT ' + this.authService.getToken());
        var copiedReq = req.clone({ headers: headers });
        if (this.authService.getToken()) {
            return next.handle(copiedReq);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth-module/auth.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth-module/auth.module.ts ***!
  \********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth-module/auth-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth-module/signup/signup.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth-module/signin/signin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__["AuthRoutingModule"]
            ],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth-module/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/auth-module/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.serverurl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_URL + '/api-token-auth/';
        this.loggedIn = false;
        //localStorage.setItem('token', '');
    }
    AuthService.prototype.isAuthenticated = function () {
        // should be check on the server whether the token is valid yet
        return this.loggedIn;
    };
    AuthService.prototype.login = function (username, password) {
        var user = { username: username, password: password };
        return this.http.post(this.serverurl, user, httpOptions);
        // .pipe(
        //   catchError(this.handleError<User>('login error'))
        // );
    };
    AuthService.prototype.logout = function () {
        localStorage.setItem('token', '');
        this.loggedIn = false;
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.setLoggedIn = function (value) {
        this.loggedIn = value;
    };
    AuthService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            if (error.status === 404) {
                console.log('Not found' + operation);
            }
            else if (error.status === 400) {
                console.log('Bad Request' + operation);
                console.error(error);
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }
            else if (error.status === 401) {
                console.log('Not Authenticated' + operation);
            }
            else {
                console.log('Other error' + operation);
                console.error(error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth-module/signin/signin.component.css":
/*!*********************************************************!*\
  !*** ./src/app/auth-module/signin/signin.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth-module/signin/signin.component.html":
/*!**********************************************************!*\
  !*** ./src/app/auth-module/signin/signin.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loginError\" class=\"alert alert-danger\">\n    Username or password is invalid!\n</div> \n<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <form (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"username\" id=\"username\" name=\"username\" ngModel class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          id=\"password\"\n          name=\"password\"\n          ngModel\n          class=\"form-control\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Sign In</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth-module/signin/signin.component.ts":
/*!********************************************************!*\
  !*** ./src/app/auth-module/signin/signin.component.ts ***!
  \********************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth-module/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginError = false;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var _this = this;
        var username = form.value.username;
        var password = form.value.password;
        this.authService.login(username, password).subscribe(function (resp) {
            console.log(resp);
            if (resp) {
                _this.authService.setLoggedIn(true);
                localStorage.setItem('token', resp.token);
                _this.router.navigate(['/']);
            }
        }, function (error) {
            _this.loginError = true;
            _this.authService.setLoggedIn(false);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth-module/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth-module/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth-module/signup/signup.component.css":
/*!*********************************************************!*\
  !*** ./src/app/auth-module/signup/signup.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth-module/signup/signup.component.html":
/*!**********************************************************!*\
  !*** ./src/app/auth-module/signup/signup.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n"

/***/ }),

/***/ "./src/app/auth-module/signup/signup.component.ts":
/*!********************************************************!*\
  !*** ./src/app/auth-module/signup/signup.component.ts ***!
  \********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth-module/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth-module/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/core-module/core.module.ts":
/*!********************************************!*\
  !*** ./src/app/core-module/core.module.ts ***!
  \********************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/core-module/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core-module/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_module_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth-module/auth-guard.service */ "./src/app/auth-module/auth-guard.service.ts");
/* harmony import */ var _auth_module_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth-module/auth.service */ "./src/app/auth-module/auth.service.ts");
/* harmony import */ var _services_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/can-deactivate-guard.service */ "./src/app/core-module/services/can-deactivate-guard.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_module_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth-module/auth.interceptor */ "./src/app/auth-module/auth.interceptor.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot(),
            ],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            providers: [_auth_module_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _auth_module_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_8__["CanDeactivateGuard"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _auth_module_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"], multi: true },
            ],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core-module/home/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/core-module/home/home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core-module/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/core-module/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>This is our Angular site</h1>\n<p>\n<ul>\n    <li>\n      Front end:\n      <a href=\"http://www.isdckft.com/tutorial/html\">HTML</a>, \n      <a href=\"http://www.isdckft.com/tutorial/ts\">TypeScript</a>, \n      <a href=\"http://www.isdckft.com/tutorial/css\">CSS</a>, \n      <a href=\"http://www.isdckft.com/tutorial/css\">Bootstrap 4</a>,   \n      <a href=\"http://www.isdckft.com/tutorial/angular\">Angular</a>,   \n      <a href=\"http://www.isdckft.com/tutorial/angular\">JWT authentication client side</a>\n\n    </li>\n    <li>\n        Back end: <a href=\"http://www.isdckft.com/tutorial/python\">Python</a>,  <a href=\"http://www.isdckft.com/tutorial/python\">Django REST Framework</a>,  \n        <a href=\"http://www.isdckft.com/tutorial/python\">JWT authentication server side</a>\n    </li>\n    <li>\n        Database: <a href=\"http://www.isdckft.com/tutorial/linux\">PostgreSQL</a>,  \n    </li>\n    <li>\n        Server side: <a href=\"http://www.isdckft.com/tutorial/linux\">Linux, Node.Js, npm, Express, Nginx, PM2, Gunicorn, Jenkins</a>\n    </li>\n    <li>SSh</li>\n  \n  </ul>\n\n"

/***/ }),

/***/ "./src/app/core-module/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/core-module/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/core-module/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/core-module/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core-module/navbar/navbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/core-module/navbar/navbar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    margin-bottom: 20px\r\n}"

/***/ }),

/***/ "./src/app/core-module/navbar/navbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core-module/navbar/navbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"https://www.isdckft.com\">isdckft.com</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" \n            data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" \n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"nav navbar-nav mr-auto\">\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\">Home</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/webpages\" routerLinkActive=\"active\">Favorite web pages</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/webpagereactive\" routerLinkActive=\"active\">New webpage(reactive)</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/webngxdtable\" routerLinkActive=\"active\">Web Pages Datatable</a>\n        </li>\n\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown3\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Machine Learning\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown3\">\n              <a class=\"dropdown-item\" routerLink=\"/ml/tensorflow\">Tensorflow JS</a>\n              <a class=\"dropdown-item\" routerLink=\"/ml/tensordemo\">Tensorflow pretrained</a>\n            </div>\n        </li>\n\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n\n        <ng-template [ngIf]=\"!isAuthenticated()\">\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n          </li>\n        </ng-template>\n        <ng-template [ngIf]=\"isAuthenticated()\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" style=\"cursor:pointer;\" (click)=\"onLogout()\">Logout</a>\n          </li>\n        </ng-template>\n        <ng-template [ngIf]=\"isAuthenticated()\">\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown4\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Admin\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown4\">\n                  <a class=\"dropdown-item\" routerLink=\"/\">Manage PageType</a>\n                  <a class=\"dropdown-item\" routerLink=\"/\">Do something else</a>\n                </div>\n            </li>\n          </ng-template>\n        </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/core-module/navbar/navbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core-module/navbar/navbar.component.ts ***!
  \********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_module_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth-module/auth.service */ "./src/app/auth-module/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    NavbarComponent.prototype.isAuthenticated = function () {
        return this.authService.isAuthenticated();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/core-module/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/core-module/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_module_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/core-module/services/can-deactivate-guard.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core-module/services/can-deactivate-guard.service.ts ***!
  \**********************************************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        return component.canDeactivate();
    };
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/ml-module/ml-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/ml-module/ml-routing.module.ts ***!
  \************************************************/
/*! exports provided: MlRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MlRoutingModule", function() { return MlRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tensor_flow_basic_tensor_flow_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tensor-flow-basic/tensor-flow-basic.component */ "./src/app/ml-module/tensor-flow-basic/tensor-flow-basic.component.ts");
/* harmony import */ var _tensor_flow_demo_tensor_flow_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tensor-flow-demo/tensor-flow-demo.component */ "./src/app/ml-module/tensor-flow-demo/tensor-flow-demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var mlRoutes = [
    { path: 'ml/tensorflow', component: _tensor_flow_basic_tensor_flow_basic_component__WEBPACK_IMPORTED_MODULE_2__["TensorFlowBasicComponent"] },
    { path: 'ml/tensordemo', component: _tensor_flow_demo_tensor_flow_demo_component__WEBPACK_IMPORTED_MODULE_3__["TensorFlowDemoComponent"] },
];
var MlRoutingModule = /** @class */ (function () {
    function MlRoutingModule() {
    }
    MlRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(mlRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MlRoutingModule);
    return MlRoutingModule;
}());



/***/ }),

/***/ "./src/app/ml-module/ml.module.ts":
/*!****************************************!*\
  !*** ./src/app/ml-module/ml.module.ts ***!
  \****************************************/
/*! exports provided: MlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MlModule", function() { return MlModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tensor_flow_basic_tensor_flow_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tensor-flow-basic/tensor-flow-basic.component */ "./src/app/ml-module/tensor-flow-basic/tensor-flow-basic.component.ts");
/* harmony import */ var _ml_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ml-routing.module */ "./src/app/ml-module/ml-routing.module.ts");
/* harmony import */ var _ngx_prism_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-prism/core */ "./node_modules/@ngx-prism/core/dist/index.js");
/* harmony import */ var _tensor_flow_demo_tensor_flow_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tensor-flow-demo/tensor-flow-demo.component */ "./src/app/ml-module/tensor-flow-demo/tensor-flow-demo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MlModule = /** @class */ (function () {
    function MlModule() {
    }
    MlModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _tensor_flow_basic_tensor_flow_basic_component__WEBPACK_IMPORTED_MODULE_2__["TensorFlowBasicComponent"],
                _tensor_flow_demo_tensor_flow_demo_component__WEBPACK_IMPORTED_MODULE_5__["TensorFlowDemoComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_prism_core__WEBPACK_IMPORTED_MODULE_4__["PrismModule"],
                _ml_routing_module__WEBPACK_IMPORTED_MODULE_3__["MlRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            exports: []
        })
    ], MlModule);
    return MlModule;
}());



/***/ }),

/***/ "./src/app/ml-module/tensor-flow-basic/tensor-flow-basic.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/ml-module/tensor-flow-basic/tensor-flow-basic.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ml-module/tensor-flow-basic/tensor-flow-basic.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/ml-module/tensor-flow-basic/tensor-flow-basic.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "The source code of this example is here:\n<a href=\"http://isdckft.com/tutorial/ml/\" target=\"_blank\" rel=\"noopener noreferrer\">TensorFlow basic example</a>\n<br>\n\n<button type=\"submit\" class=\"btn btn-success\"  (click)=\"runLinRegDemo()\">Run Linear Regression</button>\n\nResult: {{rank}}\n<hr>\n<button type=\"submit\" class=\"btn btn-success\"  (click)=\"displayTensors()\">Display Tensors</button> <br>\nTensor A: {{tensorA}} <br>\nTensor B: {{tensorB}} <br>\nTensor 2D : {{tensor2D}} <br>\nTensor zeros : {{tensorZeros}} <br>\nTensorAdd : {{tensorAdd}} <br>\nPredict(2) : {{pred}} <br>\n\n"

/***/ }),

/***/ "./src/app/ml-module/tensor-flow-basic/tensor-flow-basic.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ml-module/tensor-flow-basic/tensor-flow-basic.component.ts ***!
  \****************************************************************************/
/*! exports provided: TensorFlowBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TensorFlowBasicComponent", function() { return TensorFlowBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TensorFlowBasicComponent = /** @class */ (function () {
    function TensorFlowBasicComponent() {
        // Define a model for linear regression.
        this.model = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["sequential"]();
        this.a = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["scalar"](2);
        this.b = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["scalar"](4);
        this.c = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["scalar"](8);
    }
    TensorFlowBasicComponent.prototype.ngOnInit = function () {
    };
    TensorFlowBasicComponent.prototype.runLinRegDemo = function () {
        var _this = this;
        this.model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["layers"].dense({ units: 1, inputShape: [1] }));
        // Prepare the model for training: Specify the loss and the optimizer.
        this.model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
        // Generate some synthetic data for training.
        var xs = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor2d"]([1, 2, 3, 4], [4, 1]);
        var ys = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor2d"]([1, 3, 5, 7], [4, 1]);
        // Train the model using the data.
        this.model.fit(xs, ys, { epochs: 10 }).then(function () {
            // Use the model to do inference on a data point the model hasn't seen before:
            _this.rank = _this.model.predict(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor2d"]([5], [1, 1]));
        });
    };
    TensorFlowBasicComponent.prototype.displayTensors = function () {
        // 2x3 Tensor
        var shape = [2, 3]; // 2 rows, 3 columns
        this.tensorA = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor"]([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);
        // The shape can also be inferred:
        this.tensorB = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor"]([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
        this.tensor2D = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor2d"]([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
        this.tensorZeros = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["zeros"]([3, 5]);
        var e = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor2d"]([[1.0, 2.0], [3.0, 4.0]]);
        var f = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor2d"]([[5.0, 6.0], [7.0, 8.0]]);
        var e_plus_f = e.add(f);
        this.tensorAdd = e_plus_f;
        // Predict output for input of 2
        var result = this.predict(2);
        this.pred = result;
    };
    // Define function
    TensorFlowBasicComponent.prototype.predict = function (input) {
        var _this = this;
        // y = a * x ^ 2 + b * x + c
        // More on tf.tidy in the next section
        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tidy"](function () {
            var x = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["scalar"](input);
            var ax2 = _this.a.mul(x.square());
            var bx = _this.b.mul(x);
            var y = ax2.add(bx).add(_this.c);
            return y;
        });
    };
    TensorFlowBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tensor-flow-basic',
            template: __webpack_require__(/*! ./tensor-flow-basic.component.html */ "./src/app/ml-module/tensor-flow-basic/tensor-flow-basic.component.html"),
            styles: [__webpack_require__(/*! ./tensor-flow-basic.component.css */ "./src/app/ml-module/tensor-flow-basic/tensor-flow-basic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TensorFlowBasicComponent);
    return TensorFlowBasicComponent;
}());



/***/ }),

/***/ "./src/app/ml-module/tensor-flow-demo/loader.js":
/*!******************************************************!*\
  !*** ./src/app/ml-module/tensor-flow-demo/loader.js ***!
  \******************************************************/
/*! exports provided: urlExists, loadHostedPretrainedModel, loadHostedMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlExists", function() { return urlExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHostedPretrainedModel", function() { return loadHostedPretrainedModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHostedMetadata", function() { return loadHostedMetadata; });
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/app/ml-module/tensor-flow-demo/ui.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */




/**
 * Test whether a given URL is retrievable.
 */
async function urlExists(url) {
  _ui__WEBPACK_IMPORTED_MODULE_1__["status"]('Testing url ' + url);
  try {
    const response = await fetch(url, {method: 'HEAD'});
    return response.ok;
  } catch (err) {
    return false;
  }
}

/**
 * Load pretrained model stored at a remote URL.
 *
 * @return An instance of `tf.Model` with model topology and weights loaded.
 */
async function loadHostedPretrainedModel(url) {
  _ui__WEBPACK_IMPORTED_MODULE_1__["status"]('Loading pretrained model from ' + url);
  try {
    const model = await _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["loadModel"](url);
    _ui__WEBPACK_IMPORTED_MODULE_1__["status"]('Done loading pretrained model.');
    // We can't load a model twice due to
    // https://github.com/tensorflow/tfjs/issues/34
    // Therefore we remove the load buttons to avoid user confusion.
    _ui__WEBPACK_IMPORTED_MODULE_1__["disableLoadModelButtons"]();
    return model;
  } catch (err) {
    console.error(err);
    _ui__WEBPACK_IMPORTED_MODULE_1__["status"]('Loading pretrained model failed.');
  }
}

/**
 * Load metadata file stored at a remote URL.
 *
 * @return An object containing metadata as key-value pairs.
 */
async function loadHostedMetadata(url) {
  _ui__WEBPACK_IMPORTED_MODULE_1__["status"]('Loading metadata from ' + url);
  try {
    const metadataJson = await fetch(url);
    const metadata = await metadataJson.json();
    _ui__WEBPACK_IMPORTED_MODULE_1__["status"]('Done loading metadata.');
    return metadata;
  } catch (err) {
    console.error(err);
    _ui__WEBPACK_IMPORTED_MODULE_1__["status"]('Loading metadata failed.');
  }
}


/***/ }),

/***/ "./src/app/ml-module/tensor-flow-demo/tensor-flow-demo.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/ml-module/tensor-flow-demo/tensor-flow-demo.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-div {\r\n  padding: 5px;\r\n  font-family: monospace;\r\n}\r\n.input-output-label {\r\n  display: inline-block;\r\n}\r\n.output {\r\n  font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/ml-module/tensor-flow-demo/tensor-flow-demo.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ml-module/tensor-flow-demo/tensor-flow-demo.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <h1>TensorFlow.js Layers: Sequence-to-Sequence (English-Hungarian Translation) Demo</h1>\n  <div class=\"create-model\">\n    <button id=\"load-pretrained-remote\" style=\"display:none\">Load hosted pretrained model</button>\n    <button id=\"load-pretrained-local\" style=\"display:none\">Load local pretrained model</button>\n  </div>\n  <div>\n    <span id=\"status\">Standing by.</span>\n  </div>\n  <hr>\n  <div class=\"input-div\">\n    <span class=\"input-output-label\">Input English sentence:</span>\n    <input id=\"englishSentence\" size=16 maxlength=\"16\">\n  </div>\n  <div class=\"input-div\">\n    <span class=\"input-output-label\">Output Hungarian sentence:</span>\n    <span class=\"output\" id=\"hunSentence\"></span>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/ml-module/tensor-flow-demo/tensor-flow-demo.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ml-module/tensor-flow-demo/tensor-flow-demo.component.ts ***!
  \**************************************************************************/
/*! exports provided: TensorFlowDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TensorFlowDemoComponent", function() { return TensorFlowDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ "./src/app/ml-module/tensor-flow-demo/loader.js");
/* harmony import */ var _translator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translator */ "./src/app/ml-module/tensor-flow-demo/translator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var TensorFlowDemoComponent = /** @class */ (function () {
    function TensorFlowDemoComponent() {
        this.HOSTED_URLS = {
            model: 'https://storage.googleapis.com/tfjs-models/tfjs/translation_en_fr_v1/model.json',
            metadata: 'https://storage.googleapis.com/tfjs-models/tfjs/translation_en_fr_v1/metadata.json'
        };
        this.LOCAL_URLS = {
            model: '/assets/tensorflow/model.json',
            metadata: '/assets/tensorflow/metadata.json'
        };
    }
    TensorFlowDemoComponent.prototype.ngOnInit = function () {
        this.setupTranslator();
    };
    /**
     * Loads the pretrained model and metadata, and registers the translation
     * function with the UI.
     */
    // async function setupTranslator() {
    TensorFlowDemoComponent.prototype.setupTranslator = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button_1, button;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _loader__WEBPACK_IMPORTED_MODULE_1__["urlExists"](this.HOSTED_URLS.model)];
                    case 1:
                        if (_a.sent()) {
                            this.status('Model available: ' + this.HOSTED_URLS.model);
                            button_1 = document.getElementById('load-pretrained-remote');
                            button_1.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                                var translator;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, new _translator__WEBPACK_IMPORTED_MODULE_2__["Translator"]()];
                                        case 1:
                                            translator = _a.sent();
                                            translator.init(this.HOSTED_URLS);
                                            this.setTranslationFunction(function (x) { return translator.translate(x); });
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            button_1.style.display = 'inline-block';
                        }
                        button = document.getElementById('load-pretrained-local');
                        button.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                            var translator;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new _translator__WEBPACK_IMPORTED_MODULE_2__["Translator"]()];
                                    case 1:
                                        translator = _a.sent();
                                        translator.init(this.LOCAL_URLS);
                                        this.setTranslationFunction(function (x) { return translator.translate(x); });
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        button.style.display = 'inline-block';
                        // }
                        this.status('Standing by.');
                        return [2 /*return*/];
                }
            });
        });
    };
    TensorFlowDemoComponent.prototype.status = function (statusText) {
        console.log(statusText);
        document.getElementById('status').textContent = statusText;
    };
    TensorFlowDemoComponent.prototype.setEnglish = function (text, translate) {
        document.getElementById('englishSentence').value = text;
        document.getElementById('hunSentence').textContent = translate(text);
    };
    TensorFlowDemoComponent.prototype.setTranslationFunction = function (translate) {
        var englishElement = document.getElementById('englishSentence');
        englishElement.addEventListener('input', function (e) {
            var inputSentence = englishElement.value;
            document.getElementById('hunSentence').textContent =
                translate(inputSentence);
        });
    };
    TensorFlowDemoComponent.prototype.disableLoadModelButtons = function () {
        document.getElementById('load-pretrained-remote').style.display = 'none';
        document.getElementById('load-pretrained-local').style.display = 'none';
    };
    TensorFlowDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tensor-flow-demo',
            template: __webpack_require__(/*! ./tensor-flow-demo.component.html */ "./src/app/ml-module/tensor-flow-demo/tensor-flow-demo.component.html"),
            styles: [__webpack_require__(/*! ./tensor-flow-demo.component.css */ "./src/app/ml-module/tensor-flow-demo/tensor-flow-demo.component.css")]
        })
    ], TensorFlowDemoComponent);
    return TensorFlowDemoComponent;
}());



/***/ }),

/***/ "./src/app/ml-module/tensor-flow-demo/translator.ts":
/*!**********************************************************!*\
  !*** ./src/app/ml-module/tensor-flow-demo/translator.ts ***!
  \**********************************************************/
/*! exports provided: Translator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Translator", function() { return Translator; });
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ "./src/app/ml-module/tensor-flow-demo/loader.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Translator = /** @class */ (function () {
    function Translator() {
    }
    Translator.prototype.init = function (urls) {
        return __awaiter(this, void 0, void 0, function () {
            var model;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('My URL : ' + urls);
                        this.urls = urls;
                        return [4 /*yield*/, _loader__WEBPACK_IMPORTED_MODULE_1__["loadHostedPretrainedModel"](urls.model)];
                    case 1:
                        model = _a.sent();
                        return [4 /*yield*/, this.loadMetadata()];
                    case 2:
                        _a.sent();
                        this.prepareEncoderModel(model);
                        this.prepareDecoderModel(model);
                        return [2 /*return*/, this];
                }
            });
        });
    };
    Translator.prototype.loadMetadata = function () {
        return __awaiter(this, void 0, void 0, function () {
            var translationMetadata;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _loader__WEBPACK_IMPORTED_MODULE_1__["loadHostedMetadata"](this.urls.metadata)];
                    case 1:
                        translationMetadata = _a.sent();
                        this.maxDecoderSeqLength = translationMetadata['max_decoder_seq_length'];
                        this.maxEncoderSeqLength = translationMetadata['max_encoder_seq_length'];
                        console.log('maxDecoderSeqLength = ' + this.maxDecoderSeqLength);
                        console.log('maxEncoderSeqLength = ' + this.maxEncoderSeqLength);
                        this.inputTokenIndex = translationMetadata['input_token_index'];
                        this.targetTokenIndex = translationMetadata['target_token_index'];
                        this.reverseTargetCharIndex =
                            Object.keys(this.targetTokenIndex)
                                .reduce(function (obj, key) { return (obj[_this.targetTokenIndex[key]] = key, obj); }, {});
                        return [2 /*return*/];
                }
            });
        });
    };
    Translator.prototype.prepareEncoderModel = function (model) {
        this.numEncoderTokens = model.input[0].shape[2];
        console.log('numEncoderTokens = ' + this.numEncoderTokens);
        var encoderInputs = model.input[0];
        var stateH = model.layers[2].output[1];
        var stateC = model.layers[2].output[2];
        var encoderStates = [stateH, stateC];
        this.encoderModel =
            _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["model"]({ inputs: encoderInputs, outputs: encoderStates });
    };
    Translator.prototype.prepareDecoderModel = function (model) {
        this.numDecoderTokens = model.input[1].shape[2];
        console.log('numDecoderTokens = ' + this.numDecoderTokens);
        var stateH = model.layers[2].output[1];
        var latentDim = stateH.shape[stateH.shape.length - 1];
        console.log('latentDim = ' + latentDim);
        var decoderStateInputH = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["input"]({ shape: [latentDim], name: 'decoder_state_input_h' });
        var decoderStateInputC = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["input"]({ shape: [latentDim], name: 'decoder_state_input_c' });
        var decoderStateInputs = [decoderStateInputH, decoderStateInputC];
        var decoderLSTM = model.layers[3];
        var decoderInputs = decoderLSTM.input[0];
        var applyOutputs = decoderLSTM.apply(decoderInputs, { initialState: decoderStateInputs });
        var decoderOutputs = applyOutputs[0];
        var decoderStateH = applyOutputs[1];
        var decoderStateC = applyOutputs[2];
        var decoderStates = [decoderStateH, decoderStateC];
        var decoderDense = model.layers[4];
        decoderOutputs = decoderDense.apply(decoderOutputs);
        this.decoderModel = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["model"]({
            inputs: [decoderInputs].concat(decoderStateInputs),
            outputs: [decoderOutputs].concat(decoderStates)
        });
    };
    /**
     * Encode a string (e.g., a sentence) as a Tensor3D that can be fed directly
     * into the TensorFlow.js model.
     */
    Translator.prototype.encodeString = function (str) {
        var strLen = str.length;
        var encoded = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["buffer"]([1, this.maxEncoderSeqLength, this.numEncoderTokens]);
        for (var i = 0; i < strLen; ++i) {
            if (i >= this.maxEncoderSeqLength) {
                console.error('Input sentence exceeds maximum encoder sequence length: ' +
                    this.maxEncoderSeqLength);
            }
            var tokenIndex = this.inputTokenIndex[str[i]];
            if (tokenIndex == null) {
                console.error('Character not found in input token index: "' + tokenIndex + '"');
            }
            encoded.set(1, 0, i, tokenIndex);
        }
        return encoded.toTensor();
    };
    Translator.prototype.decodeSequence = function (inputSeq) {
        // Encode the inputs state vectors.
        var statesValue = this.encoderModel.predict(inputSeq);
        // Generate empty target sequence of length 1.
        var targetSeq = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["buffer"]([1, 1, this.numDecoderTokens]);
        // Populate the first character of the target sequence with the start
        // character.
        targetSeq.set(1, 0, 0, this.targetTokenIndex['\t']);
        // Sample loop for a batch of sequences.
        // (to simplify, here we assume that a batch of size 1).
        var stopCondition = false;
        var decodedSentence = '';
        while (!stopCondition) {
            var predictOutputs = this.decoderModel.predict([targetSeq.toTensor()].concat(statesValue));
            var outputTokens = predictOutputs[0];
            var h = predictOutputs[1];
            var c = predictOutputs[2];
            // Sample a token.
            // We know that outputTokens.shape is [1, 1, n], so no need for slicing.
            var logits = outputTokens.reshape([outputTokens.shape[2]]);
            var sampledTokenIndex = logits.argMax().dataSync()[0];
            var sampledChar = this.reverseTargetCharIndex[sampledTokenIndex];
            decodedSentence += sampledChar;
            // Exit condition: either hit max length or find stop character.
            if (sampledChar === '\n' ||
                decodedSentence.length > this.maxDecoderSeqLength) {
                stopCondition = true;
            }
            // Update the target sequence (of length 1).
            targetSeq = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["buffer"]([1, 1, this.numDecoderTokens]);
            targetSeq.set(1, 0, 0, sampledTokenIndex);
            // Update states.
            statesValue = [h, c];
        }
        return decodedSentence;
    };
    /** Translate the given English sentence into Hun */
    Translator.prototype.translate = function (inputSentence) {
        this.status('Translating...');
        var inputSeq = this.encodeString(inputSentence);
        var decodedSentence = this.decodeSequence(inputSeq);
        this.status('');
        return decodedSentence;
    };
    Translator.prototype.status = function (statusText) {
        console.log(statusText);
        document.getElementById('status').textContent = statusText;
    };
    return Translator;
}());



/***/ }),

/***/ "./src/app/ml-module/tensor-flow-demo/ui.js":
/*!**************************************************!*\
  !*** ./src/app/ml-module/tensor-flow-demo/ui.js ***!
  \**************************************************/
/*! exports provided: status, setEnglish, setTranslationFunction, disableLoadModelButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "status", function() { return status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEnglish", function() { return setEnglish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTranslationFunction", function() { return setTranslationFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableLoadModelButtons", function() { return disableLoadModelButtons; });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

function status(statusText) {
  console.log(statusText);
  document.getElementById('status').textContent = statusText;
}

function setEnglish(text, translate) {
  document.getElementById('englishSentence').value = text;
  document.getElementById('frenchSentence').textContent = translate(text);
}

function setTranslationFunction(translate) {
  const englishElement = document.getElementById('englishSentence');
  englishElement.addEventListener('input', (e) => {
    const inputSentence = englishElement.value;
    document.getElementById('frenchSentence').textContent =
        translate(inputSentence);
  });
}

function disableLoadModelButtons() {
  document.getElementById('load-pretrained-remote').style.display = 'none';
  document.getElementById('load-pretrained-local').style.display = 'none';
}


/***/ }),

/***/ "./src/app/model/web-page.ts":
/*!***********************************!*\
  !*** ./src/app/model/web-page.ts ***!
  \***********************************/
/*! exports provided: WebPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPage", function() { return WebPage; });
var WebPage = /** @class */ (function () {
    function WebPage(id, pagetype, name, about, url, official, date) {
        this.id = id;
        this.pagetype = pagetype;
        this.name = name;
        this.about = about;
        this.url = url;
        this.official = official;
        this.date = date;
    }
    return WebPage;
}());



/***/ }),

/***/ "./src/app/shared-module/directives/change-background.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared-module/directives/change-background.directive.ts ***!
  \*************************************************************************/
/*! exports provided: ChangeBackgroundDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeBackgroundDirective", function() { return ChangeBackgroundDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangeBackgroundDirective = /** @class */ (function () {
    function ChangeBackgroundDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.defaultColor = 'transparent';
        this.highlightColor = 'green';
    }
    ChangeBackgroundDirective.prototype.ngOnInit = function () {
        this.backgroundColor = this.defaultColor;
        // set the border of the element with renderer
        this.renderer.setStyle(this.el.nativeElement, 'border', 'thick solid');
    };
    ChangeBackgroundDirective.prototype.mouseover = function (eventDate) {
        // set the color with hostbinding
        this.backgroundColor = this.highlightColor;
    };
    ChangeBackgroundDirective.prototype.mouseleave = function (eventDate) {
        // set the color with hostbinding
        this.backgroundColor = this.defaultColor;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChangeBackgroundDirective.prototype, "defaultColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChangeBackgroundDirective.prototype, "highlightColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.backgroundColor'),
        __metadata("design:type", String)
    ], ChangeBackgroundDirective.prototype, "backgroundColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter') // change color in case of mouse over
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ChangeBackgroundDirective.prototype, "mouseover", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave') // change color in case of mouse leave
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ChangeBackgroundDirective.prototype, "mouseleave", null);
    ChangeBackgroundDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appChangeBackground]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ChangeBackgroundDirective);
    return ChangeBackgroundDirective;
}());



/***/ }),

/***/ "./src/app/shared-module/directives/show-this.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared-module/directives/show-this.directive.ts ***!
  \*****************************************************************/
/*! exports provided: ShowThisDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowThisDirective", function() { return ShowThisDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowThisDirective = /** @class */ (function () {
    function ShowThisDirective(templateRef, vcRef) {
        this.templateRef = templateRef;
        this.vcRef = vcRef;
    }
    Object.defineProperty(ShowThisDirective.prototype, "appShowThis", {
        set: function (condition) {
            if (condition) {
                this.vcRef.createEmbeddedView(this.templateRef);
            }
            else {
                this.vcRef.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ShowThisDirective.prototype, "appShowThis", null);
    ShowThisDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appShowThis]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], ShowThisDirective);
    return ShowThisDirective;
}());



/***/ }),

/***/ "./src/app/shared-module/error-page/error-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/shared-module/error-page/error-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared-module/error-page/error-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared-module/error-page/error-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{errorMessage}}</h2>\n"

/***/ }),

/***/ "./src/app/shared-module/error-page/error-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared-module/error-page/error-page.component.ts ***!
  \******************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent(route) {
        this.route = route;
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.errorMessage = this.route.snapshot.data['message'];
        this.route.data.subscribe(function (data) {
            _this.errorMessage = data['message'];
        });
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/shared-module/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.css */ "./src/app/shared-module/error-page/error-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/shared-module/pipes/custom-pipe.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared-module/pipes/custom-pipe.pipe.ts ***!
  \*********************************************************/
/*! exports provided: CustomPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPipePipe", function() { return CustomPipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomPipePipe = /** @class */ (function () {
    // it shortens the text to limit
    function CustomPipePipe() {
    }
    CustomPipePipe.prototype.transform = function (text, limit) {
        return text.substr(0, limit) + ' ...';
    };
    CustomPipePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'customPipe'
        })
        // it shortens the text to limit
    ], CustomPipePipe);
    return CustomPipePipe;
}());



/***/ }),

/***/ "./src/app/shared-module/pipes/page-type-pipe.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/shared-module/pipes/page-type-pipe.pipe.ts ***!
  \************************************************************/
/*! exports provided: PageTypePipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTypePipePipe", function() { return PageTypePipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _webpages_module_services_page_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../webpages-module/services/page-type.service */ "./src/app/webpages-module/services/page-type.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageTypePipePipe = /** @class */ (function () {
    function PageTypePipePipe(pageTypeService) {
        this.pageTypeService = pageTypeService;
        this.pageTypes = [];
    }
    PageTypePipePipe.prototype.transform = function (value, args) {
        return this.pageTypeService.getPageTypeById(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            // if name is already taken
            if (res.name) {
                // return error
                return res.name;
            }
            else {
                return null;
            }
        }));
    };
    ;
    PageTypePipePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'pageTypePipe'
        }),
        __metadata("design:paramtypes", [_webpages_module_services_page_type_service__WEBPACK_IMPORTED_MODULE_1__["PageTypeService"]])
    ], PageTypePipePipe);
    return PageTypePipePipe;
}());



/***/ }),

/***/ "./src/app/shared-module/shared.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared-module/shared.module.ts ***!
  \************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipes_custom_pipe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/custom-pipe.pipe */ "./src/app/shared-module/pipes/custom-pipe.pipe.ts");
/* harmony import */ var _pipes_page_type_pipe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/page-type-pipe.pipe */ "./src/app/shared-module/pipes/page-type-pipe.pipe.ts");
/* harmony import */ var _directives_change_background_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/change-background.directive */ "./src/app/shared-module/directives/change-background.directive.ts");
/* harmony import */ var _directives_show_this_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/show-this.directive */ "./src/app/shared-module/directives/show-this.directive.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/shared-module/error-page/error-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _pipes_custom_pipe_pipe__WEBPACK_IMPORTED_MODULE_2__["CustomPipePipe"],
                _pipes_page_type_pipe_pipe__WEBPACK_IMPORTED_MODULE_3__["PageTypePipePipe"],
                _directives_change_background_directive__WEBPACK_IMPORTED_MODULE_4__["ChangeBackgroundDirective"],
                _directives_show_this_directive__WEBPACK_IMPORTED_MODULE_5__["ShowThisDirective"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            exports: [_directives_show_this_directive__WEBPACK_IMPORTED_MODULE_5__["ShowThisDirective"], _directives_change_background_directive__WEBPACK_IMPORTED_MODULE_4__["ChangeBackgroundDirective"], _pipes_custom_pipe_pipe__WEBPACK_IMPORTED_MODULE_2__["CustomPipePipe"], _pipes_page_type_pipe_pipe__WEBPACK_IMPORTED_MODULE_3__["PageTypePipePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared-module/validators/asyncname.validators.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared-module/validators/asyncname.validators.ts ***!
  \******************************************************************/
/*! exports provided: AsyncNameValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncNameValidators", function() { return AsyncNameValidators; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _webpages_module_services_web_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../webpages-module/services/web-page.service */ "./src/app/webpages-module/services/web-page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AsyncNameValidators = /** @class */ (function () {
    function AsyncNameValidators(webPageService) {
        this.webPageService = webPageService;
    }
    AsyncNameValidators.prototype.AsyncNameValidator = function () {
        var _this = this;
        return function (control) {
            return _this.webPageService.getWebPageByName(control.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                // if name is already taken
                if (res.name) {
                    // return error
                    return { 'appNameExists': true };
                }
                else {
                    return null;
                }
            }));
        };
    };
    AsyncNameValidators = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_webpages_module_services_web_page_service__WEBPACK_IMPORTED_MODULE_2__["WebPageService"]])
    ], AsyncNameValidators);
    return AsyncNameValidators;
}());



/***/ }),

/***/ "./src/app/shared-module/validators/name.validators.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared-module/validators/name.validators.ts ***!
  \*************************************************************/
/*! exports provided: NameValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameValidators", function() { return NameValidators; });
var NameValidators = /** @class */ (function () {
    function NameValidators() {
    }
    NameValidators.cannotContainSpace = function (control) {
        if (control.value !== null && control.value.indexOf(' ') > -1) {
            return { cannotContainSpace: true };
        }
        return null;
    };
    return NameValidators;
}());



/***/ }),

/***/ "./src/app/webpages-module/services/page-type.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/webpages-module/services/page-type.service.ts ***!
  \***************************************************************/
/*! exports provided: PageTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTypeService", function() { return PageTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PageTypeService = /** @class */ (function () {
    function PageTypeService(http) {
        this.http = http;
        this.serverurl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SERVER_URL + '/rest/pagetypes/';
        this.serverurlId = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SERVER_URL + '/rest/pagetype/';
        this.serverurlPost = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SERVER_URL + '/rest/pagetype-post/';
        this.serverurlPut = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SERVER_URL + '/rest/pagetype-put/';
    }
    PageTypeService.prototype.getPageTypes = function () {
        return this.http.get(this.serverurl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPagetypes', [])));
    };
    PageTypeService.prototype.getPageTypeById = function (id) {
        return this.http.get(this.serverurlId + id + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPagetypesid=${id}')));
    };
    PageTypeService.prototype.newPageType = function (newPageType) {
        return this.http.post(this.serverurlPost, newPageType, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPagetypes')));
    };
    PageTypeService.prototype.deletePageType = function (pageType) {
        return this.http.delete(this.serverurlPut + pageType.id + '/', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPagetypes')));
    };
    PageTypeService.prototype.updatePageType = function (modPageType) {
        return this.http.put(this.serverurlPut + modPageType.id + '/', modPageType, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPagetypes')));
    };
    /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
    PageTypeService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            if (error.status === 404) {
                console.log('Not found' + operation);
            }
            else if (error.status === 400) {
                console.log('Bad Request ' + operation);
                console.error(error);
            }
            else if (error.status === 401) {
                console.log('Not Authenticated ' + operation);
            }
            else {
                console.log('Other error ' + operation);
                console.error(error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    PageTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PageTypeService);
    return PageTypeService;
}());



/***/ }),

/***/ "./src/app/webpages-module/services/web-page.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/webpages-module/services/web-page.service.ts ***!
  \**************************************************************/
/*! exports provided: WebPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPageService", function() { return WebPageService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
var WebPageService = /** @class */ (function () {
    function WebPageService(http) {
        this.http = http;
        this.serverurl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_URL + '/rest/webpages/';
        this.serverurlId = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_URL + '/rest/webpage/';
        this.serverurlName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_URL + '/rest/webpage-name/';
        this.serverurlPost = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_URL + '/rest/webpage-post/';
        this.serverurlPut = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_URL + '/rest/webpage-put/';
    }
    // get all web pages
    WebPageService.prototype.getWebPages = function () {
        return this.http.get(this.serverurl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getWebPages', [])));
    };
    // get a web page by ID
    WebPageService.prototype.getWebPageById = function (id) {
        return this.http.get(this.serverurlId + id + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getWebPageById id=${id}')));
    };
    // get a web page by name
    WebPageService.prototype.getWebPageByName = function (name) {
        return this.http.get(this.serverurlName + name + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getWebPageByName name=${name}')));
    };
    // create a new web page
    WebPageService.prototype.newWebPage = function (webPage) {
        return this.http.post(this.serverurlPost, webPage, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('newWebPage')));
    };
    // delete a web page
    WebPageService.prototype.deleteWebPage = function (webPage) {
        return this.http.delete(this.serverurlPut + webPage.id + '/', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteWebPage')));
    };
    // update a webpage
    WebPageService.prototype.updateWebPage = function (modWebPage) {
        return this.http.put(this.serverurlPut + modWebPage.id + '/', modWebPage, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateWebPage')));
    };
    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    WebPageService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            if (error.status === 404) {
                console.log('Not found' + operation);
            }
            else if (error.status === 400) {
                console.log('Bad Request ' + operation);
                console.error(error);
            }
            else if (error.status === 401) {
                console.log('Not Authenticated ' + operation);
            }
            else {
                console.log('Other error ' + operation);
                console.error(error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    WebPageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WebPageService);
    return WebPageService;
}());



/***/ }),

/***/ "./src/app/webpages-module/web-ngxd-table/web-ngxd-table.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/webpages-module/web-ngxd-table/web-ngxd-table.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-official {\r\n    background: #ffc91f;\r\n  }\r\n.is-header{\r\n    background: blue;\r\n    color: white;\r\n}\r\n.row-color {\r\n    background: pink;\r\n}"

/***/ }),

/***/ "./src/app/webpages-module/web-ngxd-table/web-ngxd-table.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/webpages-module/web-ngxd-table/web-ngxd-table.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Web Pages in NGX DataTable</h1>\n  <ngx-datatable class=\"bootstrap\"\n    [rows]=\"rows\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [reorderable]=\"reorderable\"\n    [limit]=\"limit\"\n    [rowHeight]=\"rowHeight\"\n    [headerHeight]=\"50\"\n    [footerHeight]=\"40\"\n    [summaryRow]=\"summaryRow\"\n    [summaryPosition]=\"summaryPosition\"\n    [columnMode]=\"columnMode\"\n    [rowClass]=\"getRowClass\"\n    >\n    \n      <ngx-datatable-column name=\"Id\"></ngx-datatable-column>\n      <ngx-datatable-column name=\"Name\"></ngx-datatable-column>\n      <ngx-datatable-column name=\"About\"></ngx-datatable-column>\n      <ngx-datatable-column name=\"Pagetype\">\n          <ng-template ngx-datatable-cell-template let-value=\"value\">\n              {{value | pageTypePipe | async}}\n          </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Url\"></ngx-datatable-column>\n      <ngx-datatable-column name=\"Official\" headerClass= \"is-header\" cellClass=\"is-official text-right\"></ngx-datatable-column>\n      <ngx-datatable-column name=\"Date\" cellClass = \"text-center\"></ngx-datatable-column>\n      <ngx-datatable-column name=\"Delete\">\n          <ng-template ngx-datatable-cell-template let-row=\"row\">\n              <button type=\"submit\" class=\"btn btn-success\"  \n              [disabled]=\"!isAuthenticated()\"\n              (click)=\"delete(row)\">Delete</button>\n          </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Show\">\n          <ng-template ngx-datatable-cell-template let-row=\"row\" let-rowIndex=\"rowIndex\" let-value=\"value\">\n              <button type=\"submit\" class=\"btn btn-success\"  (click)=\"show(row.id)\">Show</button>\n          </ng-template>\n      </ngx-datatable-column>\n  \n  </ngx-datatable>\n</div>"

/***/ }),

/***/ "./src/app/webpages-module/web-ngxd-table/web-ngxd-table.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/webpages-module/web-ngxd-table/web-ngxd-table.component.ts ***!
  \****************************************************************************/
/*! exports provided: WebNgxdTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebNgxdTableComponent", function() { return WebNgxdTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web-page.service */ "./src/app/webpages-module/services/web-page.service.ts");
/* harmony import */ var rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/timer */ "./node_modules/rxjs-compat/_esm5/observable/timer.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_module_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth-module/auth.service */ "./src/app/auth-module/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebNgxdTableComponent = /** @class */ (function () {
    function WebNgxdTableComponent(webPageService, router, authService) {
        this.webPageService = webPageService;
        this.router = router;
        this.authService = authService;
        this.reorderable = true;
        this.summaryRow = false;
        this.limit = 4;
        this.summaryPosition = 'bottom';
        this.columnMode = 'force'; //  could be:  standard , flex,force
        this.rowHeight = 'auto';
        this.webPageId = null;
    }
    WebNgxdTableComponent.prototype.ngOnInit = function () {
        this.loadingIndicator = true;
        this.getWebPages();
    };
    WebNgxdTableComponent.prototype.getWebPages = function () {
        var _this = this;
        var source = Object(rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000);
        this.webPageService.getWebPages().subscribe(function (webPages) {
            _this.rows = webPages;
            // Wait to see the loading indicator
            var subscribe = source.subscribe(function (val) { return _this.loadingIndicator = false; });
        });
    };
    WebNgxdTableComponent.prototype.getRowClass = function (row) {
        return {
            'row-color': row.official
        };
    };
    WebNgxdTableComponent.prototype.delete = function (webPage) {
        var _this = this;
        this.webPageService.deleteWebPage(webPage).subscribe(function (webPage) {
            _this.webPage = webPage;
            _this.getWebPages();
        });
    };
    WebNgxdTableComponent.prototype.show = function (id) {
        this.router.navigate(['/webpage/', id], { queryParams: { capitalize: 'yes' } });
    };
    WebNgxdTableComponent.prototype.isAuthenticated = function () {
        return this.authService.isAuthenticated();
    };
    WebNgxdTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-web-ngxd-table',
            template: __webpack_require__(/*! ./web-ngxd-table.component.html */ "./src/app/webpages-module/web-ngxd-table/web-ngxd-table.component.html"),
            styles: [__webpack_require__(/*! ./web-ngxd-table.component.css */ "./src/app/webpages-module/web-ngxd-table/web-ngxd-table.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_web_page_service__WEBPACK_IMPORTED_MODULE_1__["WebPageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _auth_module_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], WebNgxdTableComponent);
    return WebNgxdTableComponent;
}());



/***/ }),

/***/ "./src/app/webpages-module/web-page-card/web-page-card.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/webpages-module/web-page-card/web-page-card.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/webpages-module/web-page-card/web-page-card.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/webpages-module/web-page-card/web-page-card.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 18rem;\">\n    <!-- <img class=\"card-img-top\" src=\"/assets/images/card.png\" alt=\"Card image cap\"> -->\n    <div class=\"card-body\">\n      <h5 appChangeBackground [defaultColor]=\"'yellow'\" [highlightColor]=\"'grey'\" class=\"card-title\">\n        <ng-content select=\".heading\"></ng-content>\n      </h5>\n      <h3 appChangeBackground #heading>{{subTitle}}</h3>\n      <p class=\"card-text\">\n        <ng-content select=\".body\"></ng-content>\n      </p>\n      <p><ng-content *appShowThis=true></ng-content></p>\n      <p>\n      <ng-container>Push the buttons!</ng-container>\n      </p>\n      <ul class=\"nav nav-pills\">\n          <li class=\"nav-item\" >\n              <a class=\"nav-link\" [class.active]=\"myContent == 'first'\" (click)=\"myContent='first'\" \n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Popover on top\"\n              placement=\"top\">One</a>\n          </li>\n          <li class=\"nav-item\" >\n              <a class=\"nav-link\" [class.active]=\"myContent == 'second'\" (click)=\"myContent='second'\" \n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              placement=\"right\">Two</a>\n          </li>\n          <li class=\"nav-item\" >\n              <a class=\"nav-link\" [class.active]=\"myContent == 'third'\" (click)=\"myContent='third'\" >Three</a>\n          </li>          \n      </ul>\n      <div [ngSwitch]=\"myContent\">\n          <div *ngSwitchCase=\"'first'\">First Button Pressed</div>\n          <div *ngSwitchCase=\"'second'\">Second Button Pressed</div>\n          <div *ngSwitchCase=\"'third'\">Third Button Pressed</div>\n          <div *ngSwitchCaseDefault>In this case it never happens</div>\n      </div> \n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <div class=\"mb-2\">\n            <progressbar [value]=\"55\"></progressbar>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"mb-2\">\n            <progressbar [value]=\"22\" type=\"warning\" [striped]=\"true\">22%</progressbar>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"mb-2\">\n            <progressbar max=\"200\" [value]=\"166\" type=\"danger\" [striped]=\"true\" [animate]=\"true\"><i>166 / 200</i></progressbar>\n          </div>\n        </div>\n      </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/webpages-module/web-page-card/web-page-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/webpages-module/web-page-card/web-page-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: WebPageCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPageCardComponent", function() { return WebPageCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebPageCardComponent = /** @class */ (function () {
    function WebPageCardComponent() {
        this.myContent = 'first';
        // console.log('WebPageCard constructor is called');
    }
    WebPageCardComponent.prototype.ngOnChanges = function (changes) {
        // console.log('WebPageCard ngOnChanges() is called');
        // console.log(changes);
    };
    WebPageCardComponent.prototype.ngOnInit = function () {
        console.log('WebPageCard ngOnInit() is called');
    };
    //It is called very often
    // ngDoCheck(){
    //   console.log('WebPageCard ngDoCheck() is called');
    // }
    WebPageCardComponent.prototype.ngAfterContentInit = function () {
        //  console.log('WebPageCard  ngAfterContentInit()is called');
        //  console.log('Contentchild: ' + this.contText.nativeElement.textContent);
    };
    // ngAfterContentChecked(){
    //   console.log('WebPageCard  ngAfterContentChecked()is called');
    // }
    // You can acces the element only after ViewInit
    WebPageCardComponent.prototype.ngAfterViewInit = function () {
        // console.log('WebPageCard ngAfterViewInit() is called');
        // console.log('Viewchild: ' + this.header.nativeElement.textContent);
    };
    // ngAfterViewChecked(){
    //   console.log('WebPageCard ngAfterViewChecked() is called');
    // }
    WebPageCardComponent.prototype.ngOnDestroy = function () {
        // console.log('WebPageCard ngOnDestroy is called');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('heading'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WebPageCardComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('contentHeading'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WebPageCardComponent.prototype, "contText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('sub-title'),
        __metadata("design:type", String)
    ], WebPageCardComponent.prototype, "subTitle", void 0);
    WebPageCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-web-page-card',
            template: __webpack_require__(/*! ./web-page-card.component.html */ "./src/app/webpages-module/web-page-card/web-page-card.component.html"),
            styles: [__webpack_require__(/*! ./web-page-card.component.css */ "./src/app/webpages-module/web-page-card/web-page-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebPageCardComponent);
    return WebPageCardComponent;
}());



/***/ }),

/***/ "./src/app/webpages-module/web-page-form/web-page-form.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/webpages-module/web-page-form/web-page-form.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n  \r\nh1 {\r\n  color:#a94442;\r\n}"

/***/ }),

/***/ "./src/app/webpages-module/web-page-form/web-page-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/webpages-module/web-page-form/web-page-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>{{siteTitle | uppercase}}</h1>\n    <h3>{{subTitle}}</h3>\n    <!-- We do not need give in parameter in onSubmit, this is only for logging -->\n    <form #webPageForm=\"ngForm\" (ngSubmit)=\"onSubmit(webPageForm)\" >\n      \n\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input  type=\"text\" class=\"form-control\" id=\"name\" \n                required\n                minlength=\"3\"\n                [(ngModel)]=\"model.name\" name=\"name\"\n                #name=\"ngModel\"\n                >    \n        <div *ngIf=\"!name.valid && name.touched\" class=\"alert alert-danger\">\n             <div *ngIf=\"name.errors.required\">Name is required</div> \n             <div *ngIf=\"name.errors.minlength\">Name is minimum {{name.errors.minlength.requiredLength }} character length</div> \n        </div> \n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <label class=\"input-group-text\" for=\"pagetype\">Page type</label>\n          </div>\n\n          <select class=\"custom-select form-control\" id=\"pagetype\"\n            required\n            [(ngModel)]=\"model.pagetype\" name=\"pagetype\"\n            #pagetype=\"ngModel\"\n            >\n            <option *ngFor=\"let pageType of pageTypes\" [value]=\"pageType.id\">{{pageType.name}}</option>\n           </select>\n\n          <div *ngIf=\"!pagetype.valid && pagetype.touched\"\n           class=\"alert alert-danger\">\n               Page type  is required\n         </div> \n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"about\">About</label>\n        <input type=\"text\" class=\"form-control\" id=\"about\"\n        [(ngModel)]=\"model.about\" name=\"about\"\n        #abouttmp (keyup.enter)=\"onKeyUpAbout(abouttmp)\"\n        required\n        >\n        <div *ngIf=\"!abouttmp.valid && abouttmp.touched\"\n          class=\"alert alert-danger\">\n          About  is required\n        </div> \n      </div>\n      <div class=\"form-group\">\n        <label for=\"url\">URL</label>\n        <input (keyup.enter)=\"onKeyUp($event)\" type=\"text\" class=\"form-control\" id=\"url\"\n        [(ngModel)]=\"model.url\" name=\"url\" \n        #url=\"ngModel\"\n        required>\n\n        <div *ngIf=\"!url.valid && url.touched\"\n        class=\"alert alert-danger\">\n          URL  is required\n        </div> \n      </div>\n\n      <div class=\"form-group\">\n        <!-- <div class=\"checkbox\"> \n            <input type=\"checkbox\"  id=\"official\"\n            [(ngModel)]=\"model.official\" name=\"official\" \n            #officialCheckBox> Official page\n        </div> -->\n\n        <div class=\"form-check\"> \n          <label class=\"form-check-label\">\n            <input type=\"checkbox\"  id=\"official\"\n            [(ngModel)]=\"model.official\" name=\"official\" \n            #officialCheckBox> \n          \n          Official page\n          </label>\n        </div>\n        \n      </div>\n\n\n      <div class=\"form-group\">\n        <label for=\"date\">Date</label>\n        <input type=\"date\" class=\"form-control\" id=\"date\"\n        [(ngModel)]=\"model.date\" name=\"date\" \n        #date=\"ngModel\"\n        required>\n\n        <div *ngIf=\"!date.valid && date.touched\"\n            class=\"alert alert-danger\">\n            Date  is required\n        </div> \n      </div>\n\n      <button [style.borderColor]=\"isNew ? 'red' : 'yellow' \" type=\"button\" class=\"btn\" (click)=\"openModal(template)\"\n      [disabled]=\"!webPageForm.form.valid\" \n      [ngClass]=\"{\n        'btn-primary': isNew,\n        'btn-success': !isNew\n      }\"\n      >Submit</button>\n      <br>\n      <pre class=\"card card-block card-header\">{{message}}</pre>\n      <ng-template #template>\n        <div class=\"modal-body text-center\">\n          <p>Do you want to confirm?</p>\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm(webPageForm)\" >Yes</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\n        </div>\n      </ng-template>\n      <!-- {{webPageForm.value |json}} -->\n    </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/webpages-module/web-page-form/web-page-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/webpages-module/web-page-form/web-page-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: WebPageFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPageFormComponent", function() { return WebPageFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web-page.service */ "./src/app/webpages-module/services/web-page.service.ts");
/* harmony import */ var _services_page_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/page-type.service */ "./src/app/webpages-module/services/page-type.service.ts");
/* harmony import */ var _model_web_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../model/web-page */ "./src/app/model/web-page.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebPageFormComponent = /** @class */ (function () {
    function WebPageFormComponent(webPageService, pageTypeService, modalService) {
        this.webPageService = webPageService;
        this.pageTypeService = pageTypeService;
        this.modalService = modalService;
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.siteTitle = 'Insert a new site';
        this.isNew = false;
        this.model = new _model_web_page__WEBPACK_IMPORTED_MODULE_3__["WebPage"](null, null, null, null, null, false, null);
    }
    WebPageFormComponent.prototype.ngOnChanges = function () {
        //console.log ('ViewChild : officialCheckBox: +' this.officialCheckbox);
        var _this = this;
        if (this.webPageId !== null) { // We are in the modify state
            this.webPageService.getWebPageById(this.webPageId).subscribe(function (model) { return _this.model = model; });
            this.siteTitle = 'Modify the site attributes';
            this.isNew = false;
        }
        else {
            this.isNew = true;
        }
    };
    WebPageFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTypeService.getPageTypes().subscribe(function (pageTypes) { return _this.pageTypes = pageTypes; });
    };
    WebPageFormComponent.prototype.onSubmit = function (f) {
        var _this = this;
        // We do not need the NgForm parameter right now, because we acces tha parameteres with two-way binding.
        // It is only for demonstrate here at logging
        // console.log ('#webpageform:');
        // console.log(f );
        // console.log(f.form);
        // console.log(f.form.value );
        console.log(f);
        if (this.model.id === null) { // new web page
            this.webPageService.newWebPage(this.model).subscribe(function (model) {
                _this.model = model;
                _this.myEvent.emit({ id: _this.model.id, name: _this.model.name, isNew: true });
                _this.model = new _model_web_page__WEBPACK_IMPORTED_MODULE_3__["WebPage"](null, null, null, null, null, false, null);
            });
        }
        else {
            // update service
            this.webPageService.updateWebPage(this.model).subscribe(function (model) {
                // console.log(model);
                _this.model = model;
                _this.myEvent.emit({ id: _this.model.id, name: _this.model.name, isNew: false });
                _this.model = new _model_web_page__WEBPACK_IMPORTED_MODULE_3__["WebPage"](null, null, null, null, null, false, null);
            });
        }
        this.siteTitle = 'Insert a new site';
    };
    WebPageFormComponent.prototype.onKeyUp = function ($event) {
        console.log($event.target.value);
    };
    WebPageFormComponent.prototype.onKeyUpAbout = function (about) {
        console.log(about.value);
    };
    WebPageFormComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    WebPageFormComponent.prototype.confirm = function (f) {
        this.message = 'Confirmed!';
        this.modalRef.hide();
        this.onSubmit(f);
    };
    WebPageFormComponent.prototype.decline = function () {
        this.message = 'Declined!';
        this.modalRef.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('sub-title'),
        __metadata("design:type", String)
    ], WebPageFormComponent.prototype, "subTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('webPageId'),
        __metadata("design:type", Number)
    ], WebPageFormComponent.prototype, "webPageId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('myevent'),
        __metadata("design:type", Object)
    ], WebPageFormComponent.prototype, "myEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('officialCheckBox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WebPageFormComponent.prototype, "officialCheckbox", void 0);
    WebPageFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-web-page-form',
            template: __webpack_require__(/*! ./web-page-form.component.html */ "./src/app/webpages-module/web-page-form/web-page-form.component.html"),
            styles: [__webpack_require__(/*! ./web-page-form.component.css */ "./src/app/webpages-module/web-page-form/web-page-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_web_page_service__WEBPACK_IMPORTED_MODULE_1__["WebPageService"], _services_page_type_service__WEBPACK_IMPORTED_MODULE_2__["PageTypeService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], WebPageFormComponent);
    return WebPageFormComponent;
}());



/***/ }),

/***/ "./src/app/webpages-module/web-page-reactive/web-page-reactive.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/webpages-module/web-page-reactive/web-page-reactive.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/webpages-module/web-page-reactive/web-page-reactive.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/webpages-module/web-page-reactive/web-page-reactive.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>{{siteTitle | uppercase}}</h1>\n    <form [formGroup]=\"webPageForm\" (ngSubmit)=\"onSubmit()\" >\n        <div *ngIf=\"webPageForm.errors\" class=\"alert alert-danger\">\n            Form error : \"aaa\" is not a nice name, sorry.\n        </div> \n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input  type=\"text\" class=\"form-control\" id=\"name\" \n                  formControlName=\"name\">\n              <div *ngIf=\"name.invalid && name.touched\" class=\"alert alert-danger\">\n              <div *ngIf=\"name.errors.required\">Name is required</div> \n              <div *ngIf=\"name.errors.minlength\">Name is minimum {{name.errors.minlength.requiredLength }} character length</div>\n              <div *ngIf=\"name.errors.cannotContainSpace\">Name can't contain space</div> \n              <div *ngIf=\"name.errors.appNameExists\">Name already exists</div> \n\n          </div>    \n        </div>\n        <div class=\"form-group\">\n          <label for=\"about\">About</label>\n          <input type=\"text\" class=\"form-control\" id=\"about\"\n          formControlName=\"about\">\n          <!-- Acces control via get()  -->\n          <div *ngIf=\"webPageForm.get('about').invalid  && about.touched\"\n                class=\"alert alert-danger\">\n              About field is required\n          </div>       \n        </div>\n\n\n      <div class=\"form-group\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <label class=\"input-group-text\" for=\"pagetype\">Page type</label>\n          </div>\n          <select class=\"custom-select form-control\" id=\"pagetype\"\n            formControlName=\"pagetype\">\n            <option *ngFor=\"let pageType of pageTypes\" [value]=\"pageType.id\">{{pageType.name}}</option>\n           </select>\n           <div *ngIf=\"pagetype.invalid && pagetype.touched\"\n                class=\"alert alert-danger\">\n               Page Type is required\n            </div> \n        </div>\n      </div>\n\n\n      <div class=\"form-group\">\n        <label for=\"url\">URL</label>\n        <input type=\"text\" class=\"form-control\" id=\"url\"\n        formControlName=\"url\">\n        <div *ngIf=\"url.invalid && url.touched\"\n              class=\"alert alert-danger\">\n              URL is required\n        </div> \n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"checkbox\"> \n            <input type=\"checkbox\"  id=\"official\"\n            formControlName=\"official\" > Official page\n        </div>\n        \n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"date\">Date</label>\n        <input type=\"date\" class=\"form-control\" id=\"date\"\n        formControlName=\"date\">\n        <div *ngIf=\"date.invalid && date.touched\" class=\"alert alert-danger\">\n          <div *ngIf=\"date.errors.required\">Date is required</div> \n        </div> \n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary\" \n      [disabled]=\"webPageForm.invalid\" \n      >Submit</button>\n      <!-- {{webPageForm.value |json}} -->\n    </form>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/webpages-module/web-page-reactive/web-page-reactive.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/webpages-module/web-page-reactive/web-page-reactive.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WebPageReactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPageReactiveComponent", function() { return WebPageReactiveComponent; });
/* harmony import */ var _shared_module_validators_name_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared-module/validators/name.validators */ "./src/app/shared-module/validators/name.validators.ts");
/* harmony import */ var _shared_module_validators_asyncname_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared-module/validators/asyncname.validators */ "./src/app/shared-module/validators/asyncname.validators.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/web-page.service */ "./src/app/webpages-module/services/web-page.service.ts");
/* harmony import */ var _services_page_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/page-type.service */ "./src/app/webpages-module/services/page-type.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WebPageReactiveComponent = /** @class */ (function () {
    function WebPageReactiveComponent(webPageService, pageTypeService, asyncNameValidators, router, fb) {
        this.webPageService = webPageService;
        this.pageTypeService = pageTypeService;
        this.asyncNameValidators = asyncNameValidators;
        this.router = router;
        this.siteTitle = 'Insert a new site (Reactive Form)';
        this.isChangesSaved = false;
        this.webPageForm = fb.group({
            name: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                    _shared_module_validators_name_validators__WEBPACK_IMPORTED_MODULE_0__["NameValidators"].cannotContainSpace],
                this.asyncNameValidators.AsyncNameValidator()],
            about: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pagetype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            official: [false],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]
        });
    }
    WebPageReactiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTypeService.getPageTypes().subscribe(function (pageTypes) { return _this.pageTypes = pageTypes; });
        // We can check tha status changes
        // this.webPageForm.statusChanges.subscribe(
        //   (status) => {
        //     console.log('status');
        //     console.log(status)}
        // );
    };
    WebPageReactiveComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.name.value === 'aaa') {
            this.webPageForm.setErrors({
                invalidForm: true,
            });
        }
        else {
            this.webPageService.newWebPage(this.webPageForm.value).subscribe(function (model) {
                // this.webPageForm.reset();
                // this.webPageForm.controls['official'].setValue(false);
                // navigate to the list
                _this.isChangesSaved = true;
                _this.router.navigate(['/webpages']);
            });
        }
    };
    WebPageReactiveComponent.prototype.canDeactivate = function () {
        if ((this.name.value !== '' || this.about.value !== '' || this.pagetype.value !== '') && !this.isChangesSaved) {
            return confirm('Do you want to discard the changes?');
        }
        else {
            return true;
        }
    };
    Object.defineProperty(WebPageReactiveComponent.prototype, "name", {
        get: function () {
            return this.webPageForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebPageReactiveComponent.prototype, "pagetype", {
        get: function () {
            return this.webPageForm.get('pagetype');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebPageReactiveComponent.prototype, "about", {
        get: function () {
            return this.webPageForm.get('about');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebPageReactiveComponent.prototype, "url", {
        get: function () {
            return this.webPageForm.get('url');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebPageReactiveComponent.prototype, "date", {
        get: function () {
            return this.webPageForm.get('date');
        },
        enumerable: true,
        configurable: true
    });
    WebPageReactiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-web-page-reactive',
            template: __webpack_require__(/*! ./web-page-reactive.component.html */ "./src/app/webpages-module/web-page-reactive/web-page-reactive.component.html"),
            styles: [__webpack_require__(/*! ./web-page-reactive.component.css */ "./src/app/webpages-module/web-page-reactive/web-page-reactive.component.css")]
        }),
        __metadata("design:paramtypes", [_services_web_page_service__WEBPACK_IMPORTED_MODULE_4__["WebPageService"],
            _services_page_type_service__WEBPACK_IMPORTED_MODULE_5__["PageTypeService"],
            _shared_module_validators_asyncname_validators__WEBPACK_IMPORTED_MODULE_1__["AsyncNameValidators"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], WebPageReactiveComponent);
    return WebPageReactiveComponent;
}());



/***/ }),

/***/ "./src/app/webpages-module/web-page-show/web-page-resolver.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/webpages-module/web-page-show/web-page-resolver.service.ts ***!
  \****************************************************************************/
/*! exports provided: WebPageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPageResolver", function() { return WebPageResolver; });
/* harmony import */ var _services_web_page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/web-page.service */ "./src/app/webpages-module/services/web-page.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebPageResolver = /** @class */ (function () {
    function WebPageResolver(webPageService) {
        this.webPageService = webPageService;
    }
    WebPageResolver.prototype.resolve = function (route, state) {
        return this.webPageService.getWebPageById(+route.params['id']);
    };
    WebPageResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_web_page_service__WEBPACK_IMPORTED_MODULE_0__["WebPageService"]])
    ], WebPageResolver);
    return WebPageResolver;
}());



/***/ }),

/***/ "./src/app/webpages-module/web-page-show/web-page-show.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/webpages-module/web-page-show/web-page-show.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-calendar-alt{\r\n    color: blue;\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n.fa-smile{\r\n    color: red;\r\n    height: 20px;\r\n}"

/***/ }),

/***/ "./src/app/webpages-module/web-page-show/web-page-show.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/webpages-module/web-page-show/web-page-show.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1 class=\"display-4\"><span class=\"fab fa-angular\">WebPage</span></h1>\n        <p class=\"lead\">This is a simple webpage unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n        <hr class=\"my-4\">\n        <div>\n            <tabset>\n              <tab heading=\"First step\" id=\"tab1\">Click on Back button to navigate to the previous item!</tab>\n              <tab heading=\"Second step\">Click on Next button to navigate to the next item!</tab>\n              <tab heading=\"Last step\">If you got en error, than go back to the menu.</tab>\n            </tabset>\n        </div>\n        <hr>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"isCollapsed = !isCollapsed\"\n            [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\">Show the records\n        </button>\n        <hr>\n        <div id=\"collapseBasic\" [collapse]=\"isCollapsed\" class=\"card card-block card-header\">\n            <div class=\"well well-lg\">\n\n                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n                    <label for=\"name\"><span class=\"fas fa-smile\"></span> Id: </label> {{webPage.id}} <br>\n                    <label for=\"name\"><span class=\"fas fa-registered\"></span> Name: </label> {{webPage.name}}<br>\n                    <label for=\"name\"><span class=\"fas fa-quote-left\"></span> About: </label> {{webPage.about}}<br>\n                    <label for=\"name\"><span class=\"fas fa-pen\"></span> Page Type: </label> {{webPage.pagetype | pageTypePipe | async}}<br>\n                    <label for=\"name\"><span class=\"icon-home\"></span> URL: </label> {{webPage.url}}<br>\n                    <label for=\"name\"><span class=\"icon-pacman\"></span> Official: </label> {{webPage.official}}<br>\n                    <label for=\"name\"><span class=\"fas fa-calendar-alt\"></span> Date: </label> {{webPage.date}}<br>\n\n            </div>\n        </div>\n\n     \n        \n        <a class=\"btn btn-primary btn-lg\" type=\"submit\" role=\"button\" (click)=\"back(webPage.id)\">Back</a>\n        <a class=\"btn btn-primary btn-lg\" type=\"submit\" role=\"button\" (click)=\"next(webPage.id)\">Next</a>\n        <hr>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Confirm test</button>\n        <br><br>\n        <pre class=\"card card-block card-header\">{{message}}</pre>\n        <ng-template #template>\n        <div class=\"modal-body text-center\">\n            <p>Do you want to confirm?</p>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Yes</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\n        </div>\n        </ng-template>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/webpages-module/web-page-show/web-page-show.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/webpages-module/web-page-show/web-page-show.component.ts ***!
  \**************************************************************************/
/*! exports provided: WebPageShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPageShowComponent", function() { return WebPageShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web-page.service */ "./src/app/webpages-module/services/web-page.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebPageShowComponent = /** @class */ (function () {
    function WebPageShowComponent(webPageService, route, router, modalService) {
        this.webPageService = webPageService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.isCollapsed = false;
        this.capitalize = 'no';
    }
    WebPageShowComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe((params: Params) => {
        //   this.sid = params['id'];
        //   console.log('route.params.subscribe: '+this.sid);
        //   this.getWebPage();
        var _this = this;
        // });
        this.route.data
            .subscribe(function (data) {
            _this.webPage = data['webpage'];
        });
        this.route.queryParams.subscribe(function (params) {
            _this.capitalize = params['capitalize'];
            console.log('route.queryParams.subscribe: ' + _this.capitalize);
        });
    };
    WebPageShowComponent.prototype.getWebPage = function () {
        var _this = this;
        if (this.sid !== null) {
            this.webPageService.getWebPageById(this.sid).subscribe(function (webPage) {
                _this.webPage = webPage;
                if (_this.capitalize === 'yes') {
                    _this.webPage.name = _this.webPage.name.toUpperCase();
                }
                else {
                    _this.webPage.name = _this.webPage.name.toLowerCase();
                }
            });
        }
    };
    WebPageShowComponent.prototype.next = function (id) {
        id = id + 1;
        console.log('id:' + id);
        this.router.navigate(['/webpage/', id], { queryParams: { capitalize: 'yes' } });
    };
    WebPageShowComponent.prototype.back = function (id) {
        id = id - 1;
        console.log('id:' + id);
        this.router.navigate(['/webpage/', id], { queryParams: { capitalize: 'no' } });
    };
    WebPageShowComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    WebPageShowComponent.prototype.confirm = function () {
        this.message = 'Confirmed!';
        this.modalRef.hide();
    };
    WebPageShowComponent.prototype.decline = function () {
        this.message = 'Declined!';
        this.modalRef.hide();
    };
    WebPageShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-web-page-show',
            template: __webpack_require__(/*! ./web-page-show.component.html */ "./src/app/webpages-module/web-page-show/web-page-show.component.html"),
            styles: [__webpack_require__(/*! ./web-page-show.component.css */ "./src/app/webpages-module/web-page-show/web-page-show.component.css")]
        }),
        __metadata("design:paramtypes", [_services_web_page_service__WEBPACK_IMPORTED_MODULE_1__["WebPageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], WebPageShowComponent);
    return WebPageShowComponent;
}());



/***/ }),

/***/ "./src/app/webpages-module/web-pages/web-pages.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/webpages-module/web-pages/web-pages.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/webpages-module/web-pages/web-pages.component.html":
/*!********************************************************************!*\
  !*** ./src/app/webpages-module/web-pages/web-pages.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-4\">\n        <app-web-page-form [sub-title] =\"subTitle\" [webPageId] = \"webPageId\" \n        (myevent)=\"onTriggeredEvent($event)\">\n      </app-web-page-form>\n    </div>\n\n    <div class=\"col-md-4\">\n      <app-web-page-card [sub-title] =\"subTitle\">\n        <div class=\"heading\"  #contentHeading>My Card Title</div>\n        <div class=\"body\"> \n          {{title}}\n        </div>\n        You can see it if the custom appShowThis directive is set to true.\n      </app-web-page-card>\n    </div>\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-success\"  (click)=\"onMove()\">Move</button>\n      <button class=\"btn btn-primary\" (click)=\"onSqueeze()\">Squeeze</button>\n      <div \n        style=\"width: 200px; height: 200px\"\n        [@divState]=\"state\"\n        (@divState.start)=\"animationStarted($event)\"\n        (@divState.done)=\"animationEnded($event)\"\n      >\n        \n      </div>\n      <br>\n      <div\n        style=\"width: 100px; height: 100px\"\n        [@wildState]=\"wildState\">\n      </div>\n \n     \n    </div>\n</div>\n\n\n<h1>{{title | customPipe:18 }}</h1>\n<div class=\"row\">\n    <div class=\"col-md-10\">\n      <h3>{{newPageInserted}}</h3>\n    </div>\n    <div class=\"col-md-2\">\n      <div *ngIf=\"webPages.length < 5; then notEnough else moreThan4 \"></div> \n      <ng-template #moreThan4> There are {{webPages.length }} web pages</ng-template>\n      <ng-template #notEnough> Insert new web pages</ng-template>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <table class=\"table\">\n            <thead>\n              <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Id</th>\n                <th scope=\"col\">Name</th>\n                <th scope=\"col\">About</th>\n                <th scope=\"col\">Url</th>\n                <th scope=\"col\">Type</th>\n                <th scope=\"col\">Date</th>\n                <th scope=\"col\">Official</th>\n                <ng-template [ngIf]=\"isAuthenticated()\">\n                  <th scope=\"col\">Delete</th>\n                  <th scope=\"col\">Edit</th>\n                </ng-template>\n                <th scope=\"col\">Show</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr \n              [@list1]\n              *ngFor=\"let webPage of webPages;index as i\">\n                <th scope=\"row\">{{i}}</th>\n                <td>{{webPage.id}}</td>\n                <td>{{webPage.name}}</td>\n                <td>{{webPage.about}}</td>\n                <td><a href=\"{{webPage.url}}\" target=\"_blank\" \n                  rel=\"noopener noreferrer\">{{webPage.url}}</a></td>\n                <td>{{webPage.pagetype | pageTypePipe | async}}</td> \n                <td>{{webPage.date}}</td>\n                <td> <input type=\"checkbox\" [checked]=\"webPage.official\" disabled></td>\n                <ng-template [ngIf]=\"isAuthenticated()\">\n                  <td><button type=\"submit\" class=\"btn btn-success\"  (click)=\"delete(webPage)\">Delete</button></td>\n                  <td><button type=\"submit\" class=\"btn btn-success\"  (click)=\"select(webPage.id)\">Edit</button></td>\n                </ng-template>\n                <td><button type=\"submit\" class=\"btn btn-success\"  (click)=\"show(webPage.id)\">Show</button></td>\n              </tr>\n            </tbody>\n          </table>\n\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/webpages-module/web-pages/web-pages.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/webpages-module/web-pages/web-pages.component.ts ***!
  \******************************************************************/
/*! exports provided: WebPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPagesComponent", function() { return WebPagesComponent; });
/* harmony import */ var _services_web_page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/web-page.service */ "./src/app/webpages-module/services/web-page.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_module_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth-module/auth.service */ "./src/app/auth-module/auth.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebPagesComponent = /** @class */ (function () {
    function WebPagesComponent(webPageService, router, authService) {
        this.webPageService = webPageService;
        this.router = router;
        this.authService = authService;
        this.state = 'normal';
        this.wildState = 'normal';
        this.title = 'My Favorite Sites goes here and I like to write a lot of words, but maybe it is not a good idea';
        this.subTitle = 'See the list bellow and complete it!';
        this.newPageInserted = null;
        this.webPages = [];
        this.webPageId = null;
    }
    WebPagesComponent.prototype.ngOnInit = function () {
        this.getWebPages();
    };
    WebPagesComponent.prototype.onMove = function () {
        this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
        this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
    };
    WebPagesComponent.prototype.onSqueeze = function () {
        this.wildState = 'shrunken';
    };
    WebPagesComponent.prototype.getWebPages = function () {
        var _this = this;
        this.webPageService.getWebPages().subscribe(function (webPages) {
            _this.webPages = webPages;
        });
    };
    WebPagesComponent.prototype.delete = function (webPage) {
        var _this = this;
        this.webPageService.deleteWebPage(webPage).subscribe(function (webPage) {
            _this.webPage = webPage;
            _this.getWebPages();
        });
    };
    WebPagesComponent.prototype.select = function (id) {
        this.webPageId = id;
        // this.router.navigate(['/webpages/'+id]);
    };
    WebPagesComponent.prototype.show = function (id) {
        this.router.navigate(['/webpage/', id], { queryParams: { capitalize: 'yes' } });
    };
    WebPagesComponent.prototype.onTriggeredEvent = function ($event) {
        if ($event.isNew) {
            this.newPageInserted = 'New Web Page was added, ID: ' + $event.id + ' Name: ' + $event.name;
        }
        else {
            this.newPageInserted = 'Web Page was updated, ID: ' + $event.id + ' Name: ' + $event.name;
        }
        this.getWebPages(); // re-read the table from the server
    };
    WebPagesComponent.prototype.isAuthenticated = function () {
        return this.authService.isAuthenticated();
    };
    WebPagesComponent.prototype.animationStarted = function (event) {
        // console.log(event);
    };
    WebPagesComponent.prototype.animationEnded = function (event) {
        //console.log(event);
    };
    WebPagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-web-pages',
            template: __webpack_require__(/*! ./web-pages.component.html */ "./src/app/webpages-module/web-pages/web-pages.component.html"),
            styles: [__webpack_require__(/*! ./web-pages.component.css */ "./src/app/webpages-module/web-pages/web-pages.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('divState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        'background-color': 'red',
                        transform: 'translateX(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        'background-color': 'blue',
                        transform: 'translateX(100px)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('normal => highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('highlighted => normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(800))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('wildState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        'background-color': 'blue',
                        transform: 'translateX(0) scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        'background-color': 'green',
                        transform: 'translateX(100px) scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('shrunken', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        'background-color': 'green',
                        transform: 'translateX(0) scale(0.2)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('normal => highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(300)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('highlighted => normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(400)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('shrunken <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            'background-color': 'orange'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            borderRadius: '50px'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(700)
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('list1', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 1,
                        transform: 'translateX(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            opacity: 0,
                            transform: 'translateX(-100px)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(300)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            transform: 'translateX(100px)',
                            opacity: 0
                        }))
                    ])
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_services_web_page_service__WEBPACK_IMPORTED_MODULE_0__["WebPageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_module_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], WebPagesComponent);
    return WebPagesComponent;
}());



/***/ }),

/***/ "./src/app/webpages-module/webpages-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/webpages-module/webpages-routing.module.ts ***!
  \************************************************************/
/*! exports provided: WebPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPagesRoutingModule", function() { return WebPagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _web_pages_web_pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-pages/web-pages.component */ "./src/app/webpages-module/web-pages/web-pages.component.ts");
/* harmony import */ var _auth_module_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-module/auth-guard.service */ "./src/app/auth-module/auth-guard.service.ts");
/* harmony import */ var _web_page_reactive_web_page_reactive_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-page-reactive/web-page-reactive.component */ "./src/app/webpages-module/web-page-reactive/web-page-reactive.component.ts");
/* harmony import */ var _core_module_services_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core-module/services/can-deactivate-guard.service */ "./src/app/core-module/services/can-deactivate-guard.service.ts");
/* harmony import */ var _web_page_show_web_page_show_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web-page-show/web-page-show.component */ "./src/app/webpages-module/web-page-show/web-page-show.component.ts");
/* harmony import */ var _web_page_show_web_page_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web-page-show/web-page-resolver.service */ "./src/app/webpages-module/web-page-show/web-page-resolver.service.ts");
/* harmony import */ var _web_ngxd_table_web_ngxd_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web-ngxd-table/web-ngxd-table.component */ "./src/app/webpages-module/web-ngxd-table/web-ngxd-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var webPagesRoutes = [
    { path: 'webpages', component: _web_pages_web_pages_component__WEBPACK_IMPORTED_MODULE_2__["WebPagesComponent"] },
    { path: 'webngxdtable', component: _web_ngxd_table_web_ngxd_table_component__WEBPACK_IMPORTED_MODULE_8__["WebNgxdTableComponent"] },
    { path: 'webpagereactive', canActivate: [_auth_module_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        component: _web_page_reactive_web_page_reactive_component__WEBPACK_IMPORTED_MODULE_4__["WebPageReactiveComponent"],
        canDeactivate: [_core_module_services_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_5__["CanDeactivateGuard"]] },
    { path: 'webpage/:id', component: _web_page_show_web_page_show_component__WEBPACK_IMPORTED_MODULE_6__["WebPageShowComponent"], resolve: { webpage: _web_page_show_web_page_resolver_service__WEBPACK_IMPORTED_MODULE_7__["WebPageResolver"] } },
];
var WebPagesRoutingModule = /** @class */ (function () {
    function WebPagesRoutingModule() {
    }
    WebPagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(webPagesRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WebPagesRoutingModule);
    return WebPagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/webpages-module/webpages.module.ts":
/*!****************************************************!*\
  !*** ./src/app/webpages-module/webpages.module.ts ***!
  \****************************************************/
/*! exports provided: WebPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPagesModule", function() { return WebPagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web_pages_web_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-pages/web-pages.component */ "./src/app/webpages-module/web-pages/web-pages.component.ts");
/* harmony import */ var _web_page_form_web_page_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-page-form/web-page-form.component */ "./src/app/webpages-module/web-page-form/web-page-form.component.ts");
/* harmony import */ var _web_page_card_web_page_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-page-card/web-page-card.component */ "./src/app/webpages-module/web-page-card/web-page-card.component.ts");
/* harmony import */ var _web_page_reactive_web_page_reactive_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-page-reactive/web-page-reactive.component */ "./src/app/webpages-module/web-page-reactive/web-page-reactive.component.ts");
/* harmony import */ var _web_page_show_web_page_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web-page-show/web-page-show.component */ "./src/app/webpages-module/web-page-show/web-page-show.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared-module/shared.module */ "./src/app/shared-module/shared.module.ts");
/* harmony import */ var _web_page_show_web_page_resolver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web-page-show/web-page-resolver.service */ "./src/app/webpages-module/web-page-show/web-page-resolver.service.ts");
/* harmony import */ var _webpages_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./webpages-routing.module */ "./src/app/webpages-module/webpages-routing.module.ts");
/* harmony import */ var _services_web_page_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/web-page.service */ "./src/app/webpages-module/services/web-page.service.ts");
/* harmony import */ var _services_page_type_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/page-type.service */ "./src/app/webpages-module/services/page-type.service.ts");
/* harmony import */ var _web_ngxd_table_web_ngxd_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./web-ngxd-table/web-ngxd-table.component */ "./src/app/webpages-module/web-ngxd-table/web-ngxd-table.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var WebPagesModule = /** @class */ (function () {
    function WebPagesModule() {
    }
    WebPagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _web_pages_web_pages_component__WEBPACK_IMPORTED_MODULE_1__["WebPagesComponent"],
                _web_page_form_web_page_form_component__WEBPACK_IMPORTED_MODULE_2__["WebPageFormComponent"],
                _web_page_card_web_page_card_component__WEBPACK_IMPORTED_MODULE_3__["WebPageCardComponent"],
                _web_page_reactive_web_page_reactive_component__WEBPACK_IMPORTED_MODULE_4__["WebPageReactiveComponent"],
                _web_page_show_web_page_show_component__WEBPACK_IMPORTED_MODULE_5__["WebPageShowComponent"],
                _web_ngxd_table_web_ngxd_table_component__WEBPACK_IMPORTED_MODULE_13__["WebNgxdTableComponent"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _webpages_routing_module__WEBPACK_IMPORTED_MODULE_10__["WebPagesRoutingModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__["NgxDatatableModule"],
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__["PopoverModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_18__["TabsModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_20__["CollapseModule"].forRoot(),
            ],
            providers: [_web_page_show_web_page_resolver_service__WEBPACK_IMPORTED_MODULE_9__["WebPageResolver"], _services_web_page_service__WEBPACK_IMPORTED_MODULE_11__["WebPageService"], _services_page_type_service__WEBPACK_IMPORTED_MODULE_12__["PageTypeService"]
            ],
        })
    ], WebPagesModule);
    return WebPagesModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    SERVER_URL: 'http://localhost:8000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\A1\isdckftcom\isdcproject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map