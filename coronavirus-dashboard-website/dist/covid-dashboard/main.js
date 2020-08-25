(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./feature/dashboard/dashboard.module */ "./src/app/feature/dashboard/dashboard.module.ts")).then(m => m.DashboardModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");





class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'covid-dashboard';
    }
    menuClicked(e, menu) {
        console.log(e);
        console.log(menu);
        this.router.navigateByUrl(menu);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 3, consts: [[2, "height", "100%"], [2, "display", "block", "background-color", "#0763a8", "padding", "5px"], [2, "margin-left", "2px", "margin-right", "2px", "display", "inline"], ["mat-button", "", 3, "matMenuTriggerFor", "click"], ["yPosition", "above"], ["aboveMenu", "matMenu"], ["yPosition", "below"], ["belowMenu", "matMenu"], ["xPosition", "before"], ["beforeMenu", "matMenu"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener($event) { return ctx.menuClicked($event, "dashboard"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-menu", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener($event) { return ctx.menuClicked($event, "countries"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Countries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-menu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_13_listener($event) { return ctx.menuClicked($event, "trends"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Trends/Insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-menu", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%]\r\n{\r\n    font-family: 'Segoe UI Light';\r\n    background-color: #fafafa;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksNkJBQTZCO0lBQzdCLHlCQUF5Qjs7QUFFN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIipcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSBMaWdodCc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_routings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routings */ "./src/app/app.routings.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_service_log_manager_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/service/log-manager.service */ "./src/app/core/service/log-manager.service.ts");
/* harmony import */ var _core_app_data_log_app_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/app-data/log.app-data.service */ "./src/app/core/app-data/log.app-data.service.ts");
/* harmony import */ var _core_service_configuration_manager_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/service/configuration-manager.service */ "./src/app/core/service/configuration-manager.service.ts");
/* harmony import */ var _core_app_data_config_app_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/app-data/config.app-data.service */ "./src/app/core/app-data/config.app-data.service.ts");
/* harmony import */ var _feature_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./feature/dashboard/dashboard.module */ "./src/app/feature/dashboard/dashboard.module.ts");
/* harmony import */ var _feature_countries_countries_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./feature/countries/countries.module */ "./src/app/feature/countries/countries.module.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");















//3rd party




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _core_service_log_manager_service__WEBPACK_IMPORTED_MODULE_9__["BaseLogAppDataService"],
            useClass: _core_app_data_log_app_data_service__WEBPACK_IMPORTED_MODULE_10__["LogAppDataService"],
        },
        {
            provide: _core_service_configuration_manager_service__WEBPACK_IMPORTED_MODULE_11__["BaseConfigAppDataService"],
            useClass: _core_app_data_config_app_data_service__WEBPACK_IMPORTED_MODULE_12__["ConfigAppDataService"],
        },
        _core_service_configuration_manager_service__WEBPACK_IMPORTED_MODULE_11__["ConfigurationManagerService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _feature_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_13__["DashboardModule"],
            _feature_countries_countries_module__WEBPACK_IMPORTED_MODULE_14__["CountriesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routings__WEBPACK_IMPORTED_MODULE_6__["appRoutes"], {
                enableTracing: false,
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"]
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _feature_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_13__["DashboardModule"],
        _feature_countries_countries_module__WEBPACK_IMPORTED_MODULE_14__["CountriesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _feature_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_13__["DashboardModule"],
                    _feature_countries_countries_module__WEBPACK_IMPORTED_MODULE_14__["CountriesModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routings__WEBPACK_IMPORTED_MODULE_6__["appRoutes"], {
                        enableTracing: false,
                        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"]
                    }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"]
                ],
                providers: [
                    {
                        provide: _core_service_log_manager_service__WEBPACK_IMPORTED_MODULE_9__["BaseLogAppDataService"],
                        useClass: _core_app_data_log_app_data_service__WEBPACK_IMPORTED_MODULE_10__["LogAppDataService"],
                    },
                    {
                        provide: _core_service_configuration_manager_service__WEBPACK_IMPORTED_MODULE_11__["BaseConfigAppDataService"],
                        useClass: _core_app_data_config_app_data_service__WEBPACK_IMPORTED_MODULE_12__["ConfigAppDataService"],
                    },
                    _core_service_configuration_manager_service__WEBPACK_IMPORTED_MODULE_11__["ConfigurationManagerService"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routings.ts":
/*!*********************************!*\
  !*** ./src/app/app.routings.ts ***!
  \*********************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
const appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./feature/dashboard/dashboard.module */ "./src/app/feature/dashboard/dashboard.module.ts")).then(m => m.DashboardModule)
    },
    {
        path: 'countries',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./feature/countries/countries.module */ "./src/app/feature/countries/countries.module.ts")).then(m => m.CountriesModule)
    },
];


/***/ }),

/***/ "./src/app/core/app-data/app-data.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/app-data/app-data.module.ts ***!
  \**************************************************/
/*! exports provided: AppDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDataModule", function() { return AppDataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dashboard_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.app-data.service */ "./src/app/core/app-data/dashboard.app-data.service.ts");
/* harmony import */ var _log_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log.app-data.service */ "./src/app/core/app-data/log.app-data.service.ts");




class AppDataModule {
}
AppDataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppDataModule });
AppDataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppDataModule_Factory(t) { return new (t || AppDataModule)(); }, providers: [
        _dashboard_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DashboardAppDataService"],
        _log_app_data_service__WEBPACK_IMPORTED_MODULE_2__["LogAppDataService"],
    ] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppDataModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    _dashboard_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DashboardAppDataService"],
                    _log_app_data_service__WEBPACK_IMPORTED_MODULE_2__["LogAppDataService"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/app-data/app-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/app-data/app-data.service.ts ***!
  \***************************************************/
/*! exports provided: AppDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDataService", function() { return AppDataService; });
class AppDataService {
    constructor(configService) {
        this.configService = configService;
    }
    getWebApiHost() {
        let url;
        try {
            url = this.configService.load().webApiUrl;
            console.log('returning web api url ' + url);
            return url;
        }
        catch (e) {
            console.log(e);
        }
    }
}


/***/ }),

/***/ "./src/app/core/app-data/config.app-data.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/app-data/config.app-data.service.ts ***!
  \**********************************************************/
/*! exports provided: ConfigAppDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigAppDataService", function() { return ConfigAppDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-data.service */ "./src/app/core/app-data/app-data.service.ts");
/* harmony import */ var _service_configuration_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/configuration-manager.service */ "./src/app/core/service/configuration-manager.service.ts");




/*
 Use this service to
*/
class ConfigAppDataService extends _app_data_service__WEBPACK_IMPORTED_MODULE_1__["AppDataService"] {
    constructor(configService) {
        super(configService);
        this.configService = configService;
    }
    GetConfig(key) {
        throw new Error("Method not implemented.");
    }
    SaveConfig(key, value) {
        throw new Error("Method not implemented.");
    }
}
ConfigAppDataService.ɵfac = function ConfigAppDataService_Factory(t) { return new (t || ConfigAppDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_configuration_manager_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationManagerService"])); };
ConfigAppDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigAppDataService, factory: ConfigAppDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigAppDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_configuration_manager_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/app-data/dashboard.app-data.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/app-data/dashboard.app-data.service.ts ***!
  \*************************************************************/
/*! exports provided: DashboardAppDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAppDataService", function() { return DashboardAppDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-data.service */ "./src/app/core/app-data/app-data.service.ts");
/* harmony import */ var _service_configuration_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/configuration-manager.service */ "./src/app/core/service/configuration-manager.service.ts");






class DashboardAppDataService extends _app_data_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"] {
    constructor(_http, configService) {
        super(configService);
        this._http = _http;
        this.configService = configService;
    }
    // getRawTreeData(): Observable<any> {
    //   return this._http.get<string[]>(this.getWebApiHost() + 'alertmessage/');
    // }
    // function that calls a web api with arguments being pased
    getGlobalCases() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this._http.get(this.getWebApiHost() + 'jhucsse', { headers });
    }
    getAllAsOfYesterday() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this._http.get(this.getWebApiHost() + 'all?yesterday', { headers });
    }
    getGlobalHistoricalData() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this._http.get(this.getWebApiHost() + 'historical/all?lastdays=230', { headers });
    }
    getAllCurrentCountryData() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this._http.get(this.getWebApiHost() + 'continents?yesterday=true&sort', { headers });
    }
    getDataOfPastSevenDays() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this._http.get(this.getWebApiHost() + 'historical/all?lastdays=7', { headers });
    }
}
DashboardAppDataService.ɵfac = function DashboardAppDataService_Factory(t) { return new (t || DashboardAppDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_configuration_manager_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationManagerService"])); };
DashboardAppDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardAppDataService, factory: DashboardAppDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardAppDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _service_configuration_manager_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/app-data/log.app-data.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/app-data/log.app-data.service.ts ***!
  \*******************************************************/
/*! exports provided: LogAppDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogAppDataService", function() { return LogAppDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-data.service */ "./src/app/core/app-data/app-data.service.ts");
/* harmony import */ var _service_configuration_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/configuration-manager.service */ "./src/app/core/service/configuration-manager.service.ts");




class LogAppDataService extends _app_data_service__WEBPACK_IMPORTED_MODULE_1__["AppDataService"] {
    constructor(configService) {
        super(configService);
        this.configService = configService;
    }
    Log(message) {
        console.log(message);
    }
    LogError(error) {
        console.log(error.message);
    }
}
LogAppDataService.ɵfac = function LogAppDataService_Factory(t) { return new (t || LogAppDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_configuration_manager_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationManagerService"])); };
LogAppDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LogAppDataService, factory: LogAppDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogAppDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_configuration_manager_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_data_app_data_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-data/app-data.module */ "./src/app/core/app-data/app-data.module.ts");
/* harmony import */ var _service_core_service_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/core-service.module */ "./src/app/core/service/core-service.module.ts");
/* harmony import */ var _spinner_spinner_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinner/spinner.module */ "./src/app/core/spinner/spinner.module.ts");
/* harmony import */ var _notification_notification_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification/notification.module */ "./src/app/core/notification/notification.module.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/core/spinner/spinner.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/core/notification/notification.component.ts");









// acts as a 'trojan horse' for all of the other modules in src/app/core
class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [], imports: [[
            _app_data_app_data_module__WEBPACK_IMPORTED_MODULE_1__["AppDataModule"],
            _service_core_service_module__WEBPACK_IMPORTED_MODULE_2__["CoreServiceModule"].forRoot(),
            _spinner_spinner_module__WEBPACK_IMPORTED_MODULE_3__["SpinnerModule"],
            _notification_notification_module__WEBPACK_IMPORTED_MODULE_4__["NotificationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_app_data_app_data_module__WEBPACK_IMPORTED_MODULE_1__["AppDataModule"], _service_core_service_module__WEBPACK_IMPORTED_MODULE_2__["CoreServiceModule"], _spinner_spinner_module__WEBPACK_IMPORTED_MODULE_3__["SpinnerModule"],
        _notification_notification_module__WEBPACK_IMPORTED_MODULE_4__["NotificationModule"]], exports: [_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"],
        _notification_notification_component__WEBPACK_IMPORTED_MODULE_6__["NotificationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _app_data_app_data_module__WEBPACK_IMPORTED_MODULE_1__["AppDataModule"],
                    _service_core_service_module__WEBPACK_IMPORTED_MODULE_2__["CoreServiceModule"].forRoot(),
                    _spinner_spinner_module__WEBPACK_IMPORTED_MODULE_3__["SpinnerModule"],
                    _notification_notification_module__WEBPACK_IMPORTED_MODULE_4__["NotificationModule"]
                ],
                exports: [
                    _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"],
                    _notification_notification_component__WEBPACK_IMPORTED_MODULE_6__["NotificationComponent"]
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/notification/notification.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/notification/notification.component.ts ***!
  \*************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.service */ "./src/app/core/notification/notification.service.ts");






class NotificationComponent {
    constructor(notificationService, snackBar) {
        this.notificationService = notificationService;
        this.snackBar = snackBar;
        this.durationInSeconds = 5;
    }
    ngOnInit() {
        this.notificationService.notificationObject.subscribe(data => {
            this.openSnackBar(data);
        });
    }
    openSnackBar(notificationObject) {
        if (notificationObject) {
            const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
            config.duration = this.durationInSeconds * 1000;
            switch (notificationObject.action) {
                case _notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationActions"].ERROR: {
                    config.panelClass = 'NotificationError';
                    break;
                }
                case _notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationActions"].WARNING: {
                    config.panelClass = 'NotificationWarning';
                    break;
                }
                default: {
                    config.panelClass = 'NotificatioInfo';
                    break;
                }
            }
            this.snackBar.open(notificationObject.message, undefined, config);
        }
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["div-notification"]], decls: 0, vars: 0, template: function NotificationComponent_Template(rf, ctx) { }, styles: [".NotificationError[_ngcontent-%COMP%] {\r\n  background: blue;\r\n}\r\n\r\n.NotificationWarning[_ngcontent-%COMP%] {\r\n  background: darkorange;\r\n}\r\n\r\n.NotificatioInfo[_ngcontent-%COMP%] {\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Ob3RpZmljYXRpb25FcnJvciB7XHJcbiAgYmFja2dyb3VuZDogYmx1ZTtcclxufVxyXG5cclxuLk5vdGlmaWNhdGlvbldhcm5pbmcge1xyXG4gIGJhY2tncm91bmQ6IGRhcmtvcmFuZ2U7XHJcbn1cclxuXHJcbi5Ob3RpZmljYXRpb0luZm8ge1xyXG4gIFxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'div-notification',
                template: '',
                styleUrls: ['./notification.component.css']
            }]
    }], function () { return [{ type: _notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/notification/notification.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/notification/notification.module.ts ***!
  \**********************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.component */ "./src/app/core/notification/notification.component.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.service */ "./src/app/core/notification/notification.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");






class NotificationModule {
}
NotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NotificationModule });
NotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NotificationModule_Factory(t) { return new (t || NotificationModule)(); }, providers: [_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotificationModule, { declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"]], exports: [_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"]],
                exports: [_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"]],
                declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"]],
                providers: [_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/notification/notification.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/notification/notification.service.ts ***!
  \***********************************************************/
/*! exports provided: NotificationObject, NotificationActions, NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationObject", function() { return NotificationObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationActions", function() { return NotificationActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class NotificationObject {
}
var NotificationActions;
(function (NotificationActions) {
    NotificationActions[NotificationActions["INFORMATION"] = 0] = "INFORMATION";
    NotificationActions[NotificationActions["WARNING"] = 1] = "WARNING";
    NotificationActions[NotificationActions["ERROR"] = 2] = "ERROR";
})(NotificationActions || (NotificationActions = {}));
class NotificationService {
    constructor() {
        this._notficationObject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.notificationObject = this._notficationObject.asObservable();
    }
    showNotification(message, action) {
        let notification = {
            message: message,
            action: action,
        };
        this._notficationObject.next(notification);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/service/configuration-manager.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/service/configuration-manager.service.ts ***!
  \***************************************************************/
/*! exports provided: BaseConfigAppDataService, ConfigurationManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseConfigAppDataService", function() { return BaseConfigAppDataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationManagerService", function() { return ConfigurationManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class BaseConfigAppDataService {
    GetConfig(key) { throw new Error("Method not implemented."); }
    ;
    SaveConfig(key, value) { throw new Error("Method not implemented."); }
    ;
}
/* [GT] This service is a singleton. The config file will be loaded only once and will be available to all components
 using this service once initialized. This service will load the contents of the .json file to an object in memory
 which will be accessible in this service using the settingsObj property. Consumers of this service can just
 use configService.load()["configKey"] to retrieve a config value.*/
class ConfigurationManagerService {
    constructor(_http) {
        this._http = _http;
    }
    load() {
        try {
            // remove if statement to load settings.json for every server call.
            if (!this.settingsObj) {
                this.settings = this.loadTextFileAjaxSync('./settings.json', 'application/json');
                this.settingsObj = JSON.parse(this.settings);
            }
            return this.settingsObj;
        }
        catch (e) {
            console.log(e);
        }
    }
    loadTextFileAjaxSync(filePath, mimeType) {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", filePath, false);
        if (mimeType != null) {
            if (xmlhttp.overrideMimeType) {
                xmlhttp.overrideMimeType(mimeType);
            }
        }
        xmlhttp.send();
        if (xmlhttp.status == 200) {
            return xmlhttp.responseText;
        }
        else {
            return null;
        }
    }
}
ConfigurationManagerService.ɵfac = function ConfigurationManagerService_Factory(t) { return new (t || ConfigurationManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ConfigurationManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigurationManagerService, factory: ConfigurationManagerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/service/core-service.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/service/core-service.module.ts ***!
  \*****************************************************/
/*! exports provided: CoreServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreServiceModule", function() { return CoreServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _configuration_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration-manager.service */ "./src/app/core/service/configuration-manager.service.ts");
/* harmony import */ var _log_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-manager.service */ "./src/app/core/service/log-manager.service.ts");
/* harmony import */ var _error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-handling.service */ "./src/app/core/service/error-handling.service.ts");






class CoreServiceModule {
    static forRoot() {
        return {
            ngModule: CoreServiceModule,
            providers: [
                _configuration_manager_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationManagerService"],
                _log_manager_service__WEBPACK_IMPORTED_MODULE_3__["LogManagerService"],
                _error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]
            ]
        };
    }
}
CoreServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreServiceModule });
CoreServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreServiceModule_Factory(t) { return new (t || CoreServiceModule)(); }, providers: [
        _configuration_manager_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationManagerService"],
        _log_manager_service__WEBPACK_IMPORTED_MODULE_3__["LogManagerService"],
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"] }
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreServiceModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: [
                    _configuration_manager_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationManagerService"],
                    _log_manager_service__WEBPACK_IMPORTED_MODULE_3__["LogManagerService"],
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"] }
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/service/error-handling.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/service/error-handling.service.ts ***!
  \********************************************************/
/*! exports provided: ErrorHandlingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingService", function() { return ErrorHandlingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ErrorHandlingService {
    constructor() {
    }
    handleError(error) {
        console.log(error);
    }
}
ErrorHandlingService.ɵfac = function ErrorHandlingService_Factory(t) { return new (t || ErrorHandlingService)(); };
ErrorHandlingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlingService, factory: ErrorHandlingService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/service/log-manager.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/service/log-manager.service.ts ***!
  \*****************************************************/
/*! exports provided: BaseLogAppDataService, LogManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLogAppDataService", function() { return BaseLogAppDataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogManagerService", function() { return LogManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BaseLogAppDataService {
    Log(message) { throw new Error("Method not implemented."); }
    ;
    LogError(error) { throw new Error("Method not implemented."); }
    ;
}
class LogManagerService {
    constructor(logAppDataService) {
        this.logAppDataService = logAppDataService;
    }
    Log(message) {
        this.logAppDataService.Log(message);
    }
    LogError(error) {
        this.logAppDataService.LogError(error);
    }
}
LogManagerService.ɵfac = function LogManagerService_Factory(t) { return new (t || LogManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BaseLogAppDataService)); };
LogManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LogManagerService, factory: LogManagerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: BaseLogAppDataService }]; }, null); })();


/***/ }),

/***/ "./src/app/core/spinner/spinner.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/spinner/spinner.component.ts ***!
  \***************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");





function SpinnerComponent_mat_progress_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 2);
} }
function SpinnerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} }
class SpinnerComponent {
    constructor(spinnerService) {
        this.spinnerService = spinnerService;
        this.visible = false;
    }
    ngOnInit() {
        this.spinnerStateChanged = this.spinnerService.spinnerState.subscribe((state) => {
            if (this.visible && state.show) {
                return;
            }
            this.visible = state.show;
        });
    }
    ngOnDestroy() {
        this.spinnerStateChanged.unsubscribe();
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"])); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["div-spinner"]], decls: 2, vars: 2, consts: [["class", "Spinner", "color", "primary", "mode", "indeterminate", 4, "ngIf"], ["class", "Overlay", 4, "ngIf"], ["color", "primary", "mode", "indeterminate", 1, "Spinner"], [1, "Overlay"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_mat_progress_spinner_0_Template, 1, 0, "mat-progress-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpinnerComponent_div_1_Template, 1, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinner"]], styles: [".Spinner[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 46%;\r\n  top: 46%;\r\n  height: 20px;\r\n  width: 20px;\r\n  z-index: 1000;\r\n}\r\n\r\n.Overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: 900;\r\n  top: 0;\r\n  left: 0;\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\r\n  background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlNwaW5uZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA0NiU7XHJcbiAgdG9wOiA0NiU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5PdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'div-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.css']
            }]
    }], function () { return [{ type: _spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/spinner/spinner.module.ts":
/*!************************************************!*\
  !*** ./src/app/core/spinner/spinner.module.ts ***!
  \************************************************/
/*! exports provided: SpinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerModule", function() { return SpinnerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.component */ "./src/app/core/spinner/spinner.component.ts");
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");






class SpinnerModule {
}
SpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SpinnerModule });
SpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SpinnerModule_Factory(t) { return new (t || SpinnerModule)(); }, providers: [_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SpinnerModule, { declarations: [_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]], exports: [_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SpinnerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]],
                exports: [_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]],
                declarations: [_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]],
                providers: [_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/spinner/spinner.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/spinner/spinner.service.ts ***!
  \*************************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class SpinnerService {
    constructor(prior) {
        this._spinnerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.spinnerState = this._spinnerSubject.asObservable();
        if (prior) {
            return prior;
        }
        console.log('created spinner service');
    }
    show() {
        console.log('showing spinner');
        this._spinnerSubject.next({ show: true });
    }
    hide() {
        console.log('hiding spinner');
        var that = this;
        setTimeout(function () { that._spinnerSubject.next({ show: false }); }, 500);
    }
}
SpinnerService.ɵfac = function SpinnerService_Factory(t) { return new (t || SpinnerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SpinnerService, 12)); };
SpinnerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpinnerService, factory: SpinnerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: SpinnerService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/store/store.ts":
/*!*************************************!*\
  !*** ./src/app/core/store/store.ts ***!
  \*************************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

class Store {
    constructor(initialState) {
        this._state$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](initialState);
        this.state$ = this._state$.asObservable();
    }
    get state() {
        return this._state$.getValue();
    }
    setState(nextState) {
        this._state$.next(nextState);
    }
}


/***/ }),

/***/ "./src/app/feature/countries/countries.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/feature/countries/countries.component.ts ***!
  \**********************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CountriesComponent {
    constructor() {
    }
}
CountriesComponent.ɵfac = function CountriesComponent_Factory(t) { return new (t || CountriesComponent)(); };
CountriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountriesComponent, selectors: [["app-countries"]], decls: 4, vars: 0, consts: [[2, "height", "100%", "display", "block"]], template: function CountriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " hello ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-size: 14px;\r\n  color: #333;\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  margin: 8px 0;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 0 16px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  margin: 0 16px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 82px auto 32px;\r\n  padding: 0 16px;\r\n  max-width: 960px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nsvg.material-icons[_ngcontent-%COMP%] {\r\n  height: 24px;\r\n  width: auto;\r\n}\r\n\r\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: 8px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  fill: #888;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  margin-top: 16px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  border: 1px solid #eee;\r\n  background-color: #fafafa;\r\n  height: 40px;\r\n  width: 200px;\r\n  margin: 0 8px 16px;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: all 0.2s ease-in-out;\r\n  line-height: 24px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: 0;\r\n}\r\n\r\n.card.card-small[_ngcontent-%COMP%] {\r\n  height: 16px;\r\n  width: 168px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n  cursor: pointer;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  fill: rgb(105, 103, 103);\r\n}\r\n\r\n.card.highlight-card[_ngcontent-%COMP%] {\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n  border: none;\r\n  width: auto;\r\n  min-width: 30%;\r\n  position: relative;\r\n}\r\n\r\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  margin-left: 60px;\r\n}\r\n\r\nsvg#rocket[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  position: absolute;\r\n  left: -10px;\r\n  top: -24px;\r\n}\r\n\r\nsvg#rocket-smoke[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 95px);\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 180px;\r\n  z-index: -10;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n  color: #1976d2;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #125699;\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 80%;\r\n  max-width: 600px;\r\n  border-radius: 6px;\r\n  padding-top: 45px;\r\n  margin-top: 8px;\r\n  overflow: hidden;\r\n  background-color: rgb(15, 15, 16);\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%]::before {\r\n  content: \"\\2022 \\2022 \\2022\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 4px;\r\n  background: rgb(58, 58, 58);\r\n  color: #c2c3c4;\r\n  width: 100%;\r\n  font-size: 2rem;\r\n  line-height: 0;\r\n  padding: 14px 0;\r\n  text-indent: 4px;\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\r\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\r\n  color: white;\r\n  padding: 0 1rem 1rem;\r\n  margin: 0;\r\n}\r\n\r\n.circle-link[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  width: 40px;\r\n  border-radius: 40px;\r\n  margin: 8px;\r\n  background-color: white;\r\n  border: 1px solid #eeeeee;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 1s ease-out;\r\n}\r\n\r\n.circle-link[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-0.25rem);\r\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  display: flex;\r\n  align-items: center;\r\n  line-height: 20px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%] {\r\n  color: #24292e;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  padding: 3px 10px;\r\n  border: 1px solid rgba(27,31,35,.2);\r\n  border-radius: 3px;\r\n  background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\r\n  margin-left: 4px;\r\n  font-weight: 600;\r\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%]:hover {\r\n  background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\r\n  border-color: rgba(27,31,35,.35);\r\n  background-position: -.5em;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n  height: 16px;\r\n  width: 16px;\r\n  margin-right: 4px;\r\n}\r\n\r\nsvg#clouds[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: -160px;\r\n  left: -230px;\r\n  z-index: -10;\r\n  width: 1920px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 767px) {\r\n\r\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n    height: 16px;\r\n    margin: 8px 0;\r\n  }\r\n\r\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin-left: 72px;\r\n  }\r\n\r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n    right: 120px;\r\n    transform: rotate(-5deg);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 575px) {\r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n    display: none;\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n*[_ngcontent-%COMP%]\r\n{\r\n    font-family: 'Segoe UI Light';\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9jb3VudHJpZXMvY291bnRyaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwSkFBMEo7RUFDMUosZUFBZTtFQUNmLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFFQTs7Ozs7O0VBTUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0VBQW9FO0VBQ3BFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHdFQUF3RTtFQUN4RSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrSUFBa0k7QUFDcEk7O0FBRUE7RUFDRSw4REFBOEQ7RUFDOUQsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFHQSxzQkFBc0I7O0FBQ3RCOztFQUVFOztJQUVFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFDRjs7QUFDQTs7SUFFSSw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL2NvdW50cmllcy9jb3VudHJpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRvb2xiYXIgaW1nIHtcclxuICBtYXJnaW46IDAgMTZweDtcclxufVxyXG5cclxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogODJweCBhdXRvIDMycHg7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIG1heC13aWR0aDogOTYwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zdmcubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgZmlsbDogIzg4ODtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCA4cHggMTZweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLXNtYWxsIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2OHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcclxufVxyXG5cclxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1pbi13aWR0aDogMzAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICBtYXJnaW4tbGVmdDogNjBweDtcclxufVxyXG5cclxuc3ZnI3JvY2tldCB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG4gIHRvcDogLTI0cHg7XHJcbn1cclxuXHJcbnN2ZyNyb2NrZXQtc21va2Uge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDk1cHgpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDE4MHB4O1xyXG4gIHotaW5kZXg6IC0xMDtcclxufVxyXG5cclxuYSxcclxuYTp2aXNpdGVkLFxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzE5NzZkMjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTI1Njk5O1xyXG59XHJcblxyXG4udGVybWluYWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcclxufVxyXG5cclxuLnRlcm1pbmFsOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDU4LCA1OCwgNTgpO1xyXG4gIGNvbG9yOiAjYzJjM2M0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgdGV4dC1pbmRlbnQ6IDRweDtcclxufVxyXG5cclxuLnRlcm1pbmFsIHByZSB7XHJcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNpcmNsZS1saW5rIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBtYXJnaW46IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gIHRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2lyY2xlLWxpbms6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5mb290ZXIgYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2Uge1xyXG4gIGNvbG9yOiAjMjQyOTJlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbnN2ZyNjbG91ZHMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IC0xNjBweDtcclxuICBsZWZ0OiAtMjMwcHg7XHJcbiAgei1pbmRleDogLTEwO1xyXG4gIHdpZHRoOiAxOTIwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcclxuICAudGVybWluYWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzJweDtcclxuICB9XHJcblxyXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuKlxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJIExpZ2h0JztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-countries',
                templateUrl: './countries.component.html',
                styleUrls: ['./countries.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/feature/countries/countries.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/feature/countries/countries.module.ts ***!
  \*******************************************************/
/*! exports provided: CountriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesModule", function() { return CountriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _countries_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countries.routing.module */ "./src/app/feature/countries/countries.routing.module.ts");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countries.service */ "./src/app/feature/countries/countries.service.ts");
/* harmony import */ var _countries_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./countries.component */ "./src/app/feature/countries/countries.component.ts");
/* harmony import */ var src_app_core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var src_app_core_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/spinner/spinner.module */ "./src/app/core/spinner/spinner.module.ts");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _country_picker_country_picker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./country-picker/country-picker.component */ "./src/app/feature/countries/country-picker/country-picker.component.ts");








// 3rd party


// angular








class CountriesModule {
}
CountriesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CountriesModule });
CountriesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CountriesModule_Factory(t) { return new (t || CountriesModule)(); }, providers: [
        _countries_service__WEBPACK_IMPORTED_MODULE_4__["Countries"],
        src_app_core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _countries_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
            src_app_core_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_7__["SpinnerModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__["NgApexchartsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CountriesModule, { declarations: [_countries_component__WEBPACK_IMPORTED_MODULE_5__["CountriesComponent"], _country_picker_country_picker_component__WEBPACK_IMPORTED_MODULE_15__["CountryPickerComponent"], 
        // container component
        _countries_component__WEBPACK_IMPORTED_MODULE_5__["CountriesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _countries_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
        src_app_core_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_7__["SpinnerModule"],
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__["NgApexchartsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"]], exports: [_countries_component__WEBPACK_IMPORTED_MODULE_5__["CountriesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountriesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _countries_routing_module__WEBPACK_IMPORTED_MODULE_3__["routedComponents"],
                    // container component
                    _countries_component__WEBPACK_IMPORTED_MODULE_5__["CountriesComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _countries_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                    src_app_core_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_7__["SpinnerModule"],
                    _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__["NgApexchartsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"]
                ],
                exports: [
                    _countries_component__WEBPACK_IMPORTED_MODULE_5__["CountriesComponent"]
                ],
                providers: [
                    _countries_service__WEBPACK_IMPORTED_MODULE_4__["Countries"],
                    src_app_core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/feature/countries/countries.routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/feature/countries/countries.routing.module.ts ***!
  \***************************************************************/
/*! exports provided: routes, DashboardRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _countries_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countries.component */ "./src/app/feature/countries/countries.component.ts");
/* harmony import */ var _country_picker_country_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country-picker/country-picker.component */ "./src/app/feature/countries/country-picker/country-picker.component.ts");






// import { HeatmapCardComponent } from './dashboard-heatmap-card/dashboard-heatmap-card';
// import { MapCardComponent } from './dashboard-map-card/dashboard-map-card';
// import { YesterdayCardComponent } from './dashboard-yesterday-card/dashboard-yesterday-card';
// import { ChartCardComponent } from './dashboard-chart-card/dashboard-chart-card';
const routes = [
    {
        path: '',
        component: _countries_component__WEBPACK_IMPORTED_MODULE_2__["CountriesComponent"],
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routedComponents = [
    _countries_component__WEBPACK_IMPORTED_MODULE_2__["CountriesComponent"], _country_picker_country_picker_component__WEBPACK_IMPORTED_MODULE_3__["CountryPickerComponent"]
];


/***/ }),

/***/ "./src/app/feature/countries/countries.service.ts":
/*!********************************************************!*\
  !*** ./src/app/feature/countries/countries.service.ts ***!
  \********************************************************/
/*! exports provided: CountriesState, Countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesState", function() { return CountriesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countries", function() { return Countries; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/store/store */ "./src/app/core/store/store.ts");
/* harmony import */ var _core_app_data_dashboard_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/app-data/dashboard.app-data.service */ "./src/app/core/app-data/dashboard.app-data.service.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");

// Core Services




class CountriesState {
    constructor() {
        this.selectedCountry = '';
    }
}
class Countries extends _core_store_store__WEBPACK_IMPORTED_MODULE_1__["Store"] {
    constructor(appDataService, spinnerService) {
        super(new CountriesState());
        this.appDataService = appDataService;
        this.spinnerService = spinnerService;
    }
}
Countries.ɵfac = function Countries_Factory(t) { return new (t || Countries)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_app_data_dashboard_app_data_service__WEBPACK_IMPORTED_MODULE_2__["DashboardAppDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"])); };
Countries.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Countries, factory: Countries.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Countries, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_app_data_dashboard_app_data_service__WEBPACK_IMPORTED_MODULE_2__["DashboardAppDataService"] }, { type: _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feature/countries/country-picker/country-picker.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/feature/countries/country-picker/country-picker.component.ts ***!
  \******************************************************************************/
/*! exports provided: CountryPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryPickerComponent", function() { return CountryPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CountryPickerComponent {
    constructor() { }
    ngOnInit() {
    }
}
CountryPickerComponent.ɵfac = function CountryPickerComponent_Factory(t) { return new (t || CountryPickerComponent)(); };
CountryPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryPickerComponent, selectors: [["app-country-picker"]], decls: 2, vars: 0, template: function CountryPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "country-picker works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvY291bnRyaWVzL2NvdW50cnktcGlja2VyL2NvdW50cnktcGlja2VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-country-picker',
                templateUrl: './country-picker.component.html',
                styleUrls: ['./country-picker.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/feature/dashboard/dashboard-global-bubblechart-card/dashboard-global-bubblechart-card.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard-global-bubblechart-card/dashboard-global-bubblechart-card.ts ***!
  \**********************************************************************************************************/
/*! exports provided: GlobalBubbleChartCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalBubbleChartCardComponent", function() { return GlobalBubbleChartCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/feature/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");







const _c0 = ["chart"];
function GlobalBubbleChartCardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "apx-chart", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r0.chartOptions.series)("chart", ctx_r0.chartOptions.chart)("xaxis", ctx_r0.chartOptions.xaxis)("fill", ctx_r0.chartOptions.fill)("dataLabels", ctx_r0.chartOptions.dataLabels)("title", ctx_r0.chartOptions.title)("yaxis", ctx_r0.chartOptions.yaxis);
} }
class GlobalBubbleChartCardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    ngOnInit() {
        this.dashboardService.getAllCurrentCountryData();
    }
    ngAfterViewInit() {
        const that = this;
        this.dashboardService.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(state => state.allCurrentCountryData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(data => data != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(response => {
            that.data = response;
            that.renderBubbleChart();
        });
    }
    // https://apexcharts.com/angular-chart-demos/bubble-charts/simple/
    renderBubbleChart() {
        this.chartOptions = {
            series: [
            // {
            //   name: 'Bubble1',
            //   data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            //     min: 10,
            //     max: 60
            //   })
            // },
            // push later
            ],
            chart: {
                height: 370,
                type: 'bubble',
                zoom: {
                    enabled: true,
                    autoScaleYaxis: true,
                },
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: 0.8
            },
            title: {
                text: 'Active Cases'
            },
            xaxis: {
                tickAmount: 5,
                type: 'datetime'
            },
            yaxis: {
                tickAmount: 2,
                max: 7500000
            }
        };
        this.data.forEach(obj => {
            // console.log(obj);
            this.chartOptions.series.push({
                name: obj.continent,
                data: this.generateData(obj)
            });
        });
    }
    generateData(obj) {
        const series = [];
        // let x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        // let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        // let z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
        const x = obj.updated;
        const y = obj.cases;
        const z = obj.active;
        console.log([x, y, z]);
        series.push([x, y, z]);
        return series;
    }
    // generateData(baseval, count, yrange) {
    //   let i = 0;
    //   let series = [];
    //   while (i < count) {
    //     let x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    //     let y =
    //       Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    //     let z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
    //     series.push([x, y, z]);
    //     baseval += 86400000;
    //     i++;
    //   }
    //   return series;
    // }
    ngOnDestroy() {
    }
}
GlobalBubbleChartCardComponent.ɵfac = function GlobalBubbleChartCardComponent_Factory(t) { return new (t || GlobalBubbleChartCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"])); };
GlobalBubbleChartCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalBubbleChartCardComponent, selectors: [["app-global-bubblechart-card"]], viewQuery: function GlobalBubbleChartCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 10, vars: 1, consts: [["title", "Shows all confirmed cases and all active cases.", 1, "card-container", 2, "margin-left", "2px", "margin-right", "5px", "width", "20%", "display", "inline-block", "float", "right"], ["mat-card-avatar", "", 1, "card-header-image"], [4, "ngIf"], ["id", "chart"], [3, "series", "chart", "xaxis", "fill", "dataLabels", "title", "yaxis"]], template: function GlobalBubbleChartCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Continental View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GlobalBubbleChartCardComponent_div_9_Template, 3, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chartOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["ChartComponent"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  background: white;\r\n}\r\n\r\n.card-header-image[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n}\r\n\r\nmat-card-header.mat-card-header[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.mat-card-title[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n.mat-card-header[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\r\n  margin: 5px 40px;\r\n}\r\n\r\n.card-header-image[_ngcontent-%COMP%]\r\n{\r\n  background-image: url('transparent-continent.png');\r\n  background-size: cover;\r\n}\r\n\r\n.card-icon[_ngcontent-%COMP%] {\r\n  height: 64px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]\r\n{\r\n  background-color: #ffffff;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\r\n  box-shadow: 0 2px 1px -1px rgba(0,0,0,1), \r\n              0 1px 1px 0 rgba(0,0,0,1), \r\n              0 1px 3px 0 rgba(0,0,0,1);\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9kYXNoYm9hcmQvZGFzaGJvYXJkLWdsb2JhbC1idWJibGVjaGFydC1jYXJkL2Rhc2hib2FyZC1nbG9iYWwtYnViYmxlY2hhcnQtY2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFJQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsa0RBQXFFO0VBQ3JFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7O3VDQUVxQztBQUN2Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvZGFzaGJvYXJkL2Rhc2hib2FyZC1nbG9iYWwtYnViYmxlY2hhcnQtY2FyZC9kYXNoYm9hcmQtZ2xvYmFsLWJ1YmJsZWNoYXJ0LWNhcmQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWhlYWRlci5tYXQtY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuLm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlciAuY2FyZC1pbmZvIHtcclxuICBtYXJnaW46IDVweCA0MHB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItaW1hZ2Vcclxue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3RyYW5zcGFyZW50LWNvbnRpbmVudC5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY2FyZC1pY29uIHtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLDEpLCBcclxuICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKDAsMCwwLDEpLCBcclxuICAgICAgICAgICAgICAwIDFweCAzcHggMCByZ2JhKDAsMCwwLDEpO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalBubbleChartCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-global-bubblechart-card',
                templateUrl: './dashboard-global-bubblechart-card.html',
                styleUrls: ['./dashboard-global-bubblechart-card.css'],
            }]
    }], function () { return [{ type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }]; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart']
        }] }); })();


/***/ }),

/***/ "./src/app/feature/dashboard/dashboard-global-case-ratio-card/dashboard-global-case-ratio-card.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard-global-case-ratio-card/dashboard-global-case-ratio-card.ts ***!
  \********************************************************************************************************/
/*! exports provided: GlobalCaseRatioCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalCaseRatioCardComponent", function() { return GlobalCaseRatioCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/feature/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");







const _c0 = ["chart"];
function GlobalCaseRatioCardComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Coronavirus Case Ratio of Global Data Since Day One");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Visual Representation of All Historical Cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "apx-chart", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r0.chartOptions.series)("chart", ctx_r0.chartOptions.chart)("labels", ctx_r0.chartOptions.labels)("responsive", ctx_r0.chartOptions.responsive)("legend", ctx_r0.chartOptions.legend);
} }
class GlobalCaseRatioCardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const that = this;
        this.dashboardService.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(state => state.allAsOfYesterday), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(data => data != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(response => {
            that.yesterdayData = response;
            // https://apexcharts.com/angular-chart-demos/pie-charts/
            this.chartOptions = {
                series: [that.yesterdayData.active, that.yesterdayData.recovered, that.yesterdayData.deaths],
                chart: {
                    width: 360,
                    type: 'donut'
                },
                labels: ['Active', 'Recovered', 'Died'],
                colors: ['#00e396', '#ff4560', '#39539E'],
                legend: {
                    show: true,
                    labels: {
                        useSeriesColors: true
                    }
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 180
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }
                ]
            };
        });
    }
    ngOnDestroy() {
    }
}
GlobalCaseRatioCardComponent.ɵfac = function GlobalCaseRatioCardComponent_Factory(t) { return new (t || GlobalCaseRatioCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"])); };
GlobalCaseRatioCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalCaseRatioCardComponent, selectors: [["app-global-case-ratio-card"]], viewQuery: function GlobalCaseRatioCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 2, vars: 1, consts: [[1, "card-container", 2, "margin", "5px 5px 5px 5px"], ["class", "card-header", "style", " height: 370px;", 4, "ngIf"], [1, "card-header", 2, "height", "370px"], ["mat-card-avatar", "", 1, "card-header-image"], [2, "margin-top", "10px"], ["id", "chart"], [3, "series", "chart", "labels", "responsive", "legend"]], template: function GlobalCaseRatioCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GlobalCaseRatioCardComponent_mat_card_1_Template, 12, 5, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.yesterdayData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["ChartComponent"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  background: white;\r\n}\r\n\r\n.card-header-image[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n}\r\n\r\nmat-card-header.mat-card-header[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.mat-card-title[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n.mat-card-header[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\r\n  margin: 5px 40px;\r\n}\r\n\r\n.card-header-image[_ngcontent-%COMP%]\r\n{\r\n  background-image: url('transparent-piechart.png');\r\n  background-size: cover;\r\n}\r\n\r\n.card-icon[_ngcontent-%COMP%] {\r\n  height: 64px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]\r\n{\r\n  background-color: #ffffff;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\r\n  box-shadow: 0 2px 1px -1px rgba(0,0,0,1), \r\n              0 1px 1px 0 rgba(0,0,0,1), \r\n              0 1px 3px 0 rgba(0,0,0,1);\r\n}\r\n\r\nmat-grid-tile[_ngcontent-%COMP%] {\r\n  background: rgb(137, 212, 236);\r\n  margin: 10px 10px;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n#chart[_ngcontent-%COMP%] {\r\n  max-width: 380px;\r\n  margin: 35px auto;\r\n  padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9kYXNoYm9hcmQvZGFzaGJvYXJkLWdsb2JhbC1jYXNlLXJhdGlvLWNhcmQvZGFzaGJvYXJkLWdsb2JhbC1jYXNlLXJhdGlvLWNhcmQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGlEQUFvRTtFQUNwRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFOzt1Q0FFcUM7QUFDdkM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL2Rhc2hib2FyZC9kYXNoYm9hcmQtZ2xvYmFsLWNhc2UtcmF0aW8tY2FyZC9kYXNoYm9hcmQtZ2xvYmFsLWNhc2UtcmF0aW8tY2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxubWF0LWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlciAuY2FyZC1pbmZvIHtcclxuICBtYXJnaW46IDVweCA0MHB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItaW1hZ2Vcclxue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3RyYW5zcGFyZW50LXBpZWNoYXJ0LnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWljb24ge1xyXG4gIGhlaWdodDogNjRweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMSksIFxyXG4gICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMSksIFxyXG4gICAgICAgICAgICAgIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsMSk7XHJcbn1cclxuXHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYigxMzcsIDIxMiwgMjM2KTtcclxuICBtYXJnaW46IDEwcHggMTBweDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4jY2hhcnQge1xyXG4gIG1heC13aWR0aDogMzgwcHg7XHJcbiAgbWFyZ2luOiAzNXB4IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalCaseRatioCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-global-case-ratio-card',
                templateUrl: './dashboard-global-case-ratio-card.html',
                styleUrls: ['./dashboard-global-case-ratio-card.css'],
            }]
    }], function () { return [{ type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }]; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart']
        }] }); })();


/***/ }),

/***/ "./src/app/feature/dashboard/dashboard-global-map-card/dashboard-global-map-card.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard-global-map-card/dashboard-global-map-card.ts ***!
  \******************************************************************************************/
/*! exports provided: GlobalMapCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalMapCardComponent", function() { return GlobalMapCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/feature/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");






const _c0 = ["gmap"];
class GlobalMapCardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.zoom = 3;
        // PH lat: "12.879721", longitude: "121.774017"
        // this.center = { lat: 12.879721, lng: 121.774017 };
        this.center = { lat: 12.879721, lng: 121.774017 };
        this.options = {
            zoomControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: true,
            mapTypeId: 'terrain',
            mapTypeControl: false,
            streetViewControl: false,
            keyboardShortcuts: false,
            fullscreenControl: false
        };
    }
    ;
    ngOnInit() {
    }
    ngAfterViewInit() {
        const that = this;
        this.dashboardService.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(state => state.globalData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(data => data != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(response => {
            that.data = response;
            that.updatedAt = that.data.find(item => item.country === 'Philippines').updatedAt;
            that.drawPolygons();
        });
        // dynamic centering:
        // navigator.geolocation.getCurrentPosition(position => { this.center = { lat: position.coords.latitude, lng: position.coords.longitude} });
    }
    drawPolygons() {
        const map = this.gmap.googleMap;
        // {country: "Philippines", county: null, updatedAt: "2020-08-12 04:27:29", stats: {…}, coordinates: {…}, …}
        this.data.forEach(item => {
            const c = new google.maps.LatLng(parseFloat(item.coordinates.latitude), parseFloat(item.coordinates.longitude));
            const cityCircle = new google.maps.Circle({
                strokeColor: '#e00d0d',
                strokeOpacity: 0.6,
                strokeWeight: 50 * (item.stats.confirmed / 100000),
                fillColor: '#e00d0d',
                fillOpacity: 0.35,
                center: c,
                map,
                radius: item.stats.confirmed / 10000
            });
        });
    }
    ngOnDestroy() {
    }
}
GlobalMapCardComponent.ɵfac = function GlobalMapCardComponent_Factory(t) { return new (t || GlobalMapCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"])); };
GlobalMapCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalMapCardComponent, selectors: [["app-global-map-card"]], viewQuery: function GlobalMapCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gmap = _t.first);
    } }, decls: 13, vars: 4, consts: [[1, "card-container", 2, "margin", "5px 5px 5px 5px"], ["title", "Radius is relative to every 100K cases. Source: Johns Hopkins University.", 1, "card-map", 2, "height", "100%"], ["mat-card-avatar", "", 1, "card-map-header-image"], [2, "height", "100%"], ["height", "540px", "width", "100%", 3, "zoom", "center", "options"], ["gmap", ""]], template: function GlobalMapCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Interactive View of Global Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "google-map", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Snapshot as of ", ctx.updatedAt, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", ctx.zoom)("center", ctx.center)("options", ctx.options);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMap"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  background: white;\r\n}\r\n\r\n.card-header-image[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n}\r\n\r\nmat-card-header.mat-card-header[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.mat-card-title[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n.mat-card-header[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\r\n  margin: 5px 40px;\r\n}\r\n\r\n.card-header-image[_ngcontent-%COMP%]\r\n{\r\n  background-image: url('transparent-chart.png');\r\n  background-size: cover;\r\n}\r\n\r\n.card-map-header-image[_ngcontent-%COMP%]\r\n{\r\n  background-image: url('transparent-earth.png');\r\n  background-size: cover;\r\n}\r\n\r\n.card-map[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.card-icon[_ngcontent-%COMP%] {\r\n  height: 64px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]\r\n{\r\n  background-color: #ffffff;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\r\n  box-shadow: 0 2px 2px -1px rgba(0,0,0,1), \r\n              0 1px 1px 0 rgba(0,0,0,1), \r\n              0 1px 3px 0 rgba(0,0,0,1);\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9kYXNoYm9hcmQvZGFzaGJvYXJkLWdsb2JhbC1tYXAtY2FyZC9kYXNoYm9hcmQtZ2xvYmFsLW1hcC1jYXJkLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSw4Q0FBaUU7RUFDakUsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLDhDQUFpRTtFQUNqRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTs7dUNBRXFDO0FBQ3ZDOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9kYXNoYm9hcmQvZGFzaGJvYXJkLWdsb2JhbC1tYXAtY2FyZC9kYXNoYm9hcmQtZ2xvYmFsLW1hcC1jYXJkLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVyIC5jYXJkLWluZm8ge1xyXG4gIG1hcmdpbjogNXB4IDQwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci1pbWFnZVxyXG57XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvdHJhbnNwYXJlbnQtY2hhcnQucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNhcmQtbWFwLWhlYWRlci1pbWFnZVxyXG57XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvdHJhbnNwYXJlbnQtZWFydGgucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNhcmQtbWFwXHJcbntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWljb24ge1xyXG4gIGhlaWdodDogNjRweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IC0xcHggcmdiYSgwLDAsMCwxKSwgXHJcbiAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwxKSwgXHJcbiAgICAgICAgICAgICAgMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwxKTtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalMapCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-global-map-card',
                templateUrl: './dashboard-global-map-card.html',
                styleUrls: ['./dashboard-global-map-card.css'],
            }]
    }], function () { return [{ type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }]; }, { gmap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gmap']
        }] }); })();


/***/ }),

/***/ "./src/app/feature/dashboard/dashboard-global-sevendays-card/dashboard-global-sevendays-card.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard-global-sevendays-card/dashboard-global-sevendays-card.ts ***!
  \******************************************************************************************************/
/*! exports provided: GlobalSevenDayCasesCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSevenDayCasesCardComponent", function() { return GlobalSevenDayCasesCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/feature/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");







const _c0 = ["chart"];
function GlobalSevenDayCasesCardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "apx-chart", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r0.chartOptions.series)("chart", ctx_r0.chartOptions.chart)("dataLabels", ctx_r0.chartOptions.dataLabels)("plotOptions", ctx_r0.chartOptions.plotOptions)("xaxis", ctx_r0.chartOptions.xaxis)("stroke", ctx_r0.chartOptions.stroke)("fill", ctx_r0.chartOptions.fill)("yaxis", ctx_r0.chartOptions.yaxis)("title", ctx_r0.chartOptions.title)("tooltip", ctx_r0.chartOptions.tooltip)("legend", ctx_r0.chartOptions.legend);
} }
class GlobalSevenDayCasesCardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    ngOnInit() {
        this.dashboardService.getDataOfPastSevenDays();
    }
    ngAfterViewInit() {
        const that = this;
        this.dashboardService.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(state => state.sevenDayData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(data => data != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(response => {
            that.data = response;
            that.renderStackedColumnChart();
        });
    }
    // https://apexcharts.com/angular-chart-demos/bubble-charts/simple/
    renderStackedColumnChart() {
        this.chartOptions = {
            series: [
                {
                    name: 'Confirmed',
                    data: [44, 55, 41, 37, 22, 43, 21]
                },
                {
                    name: 'Recovered',
                    data: [12, 17, 11, 9, 15, 11, 20]
                },
                {
                    name: 'Active',
                    data: [53, 32, 33, 52, 13, 43, 32]
                },
                {
                    name: 'Deaths',
                    data: [9, 7, 5, 8, 6, 9, 4]
                }
            ],
            chart: {
                type: 'bar',
                height: 350,
                stacked: true
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            title: {
                text: 'Case Breakdown'
            },
            xaxis: {
                categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                labels: {
                    formatter(val) {
                        return val + 'K';
                    }
                }
            },
            yaxis: {
                title: {
                    text: undefined
                }
            },
            tooltip: {
                y: {
                    formatter(val) {
                        return val + 'K';
                    }
                }
            },
            fill: {
                opacity: 1
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40
            }
        };
    }
    ngOnDestroy() {
    }
}
GlobalSevenDayCasesCardComponent.ɵfac = function GlobalSevenDayCasesCardComponent_Factory(t) { return new (t || GlobalSevenDayCasesCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"])); };
GlobalSevenDayCasesCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalSevenDayCasesCardComponent, selectors: [["app-global-sevendays-card"]], viewQuery: function GlobalSevenDayCasesCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 10, vars: 1, consts: [[1, "card-container", 2, "margin", "5px 5px 5px 5px"], ["mat-card-avatar", "", 1, "card-header-image"], [4, "ngIf"], ["id", "chart"], [3, "series", "chart", "dataLabels", "plotOptions", "xaxis", "stroke", "fill", "yaxis", "title", "tooltip", "legend"]], template: function GlobalSevenDayCasesCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "7-Day Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GlobalSevenDayCasesCardComponent_div_9_Template, 3, 11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chartOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["ChartComponent"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  background: white;\r\n}\r\n\r\n.card-header-image[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n}\r\n\r\nmat-card-header.mat-card-header[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.mat-card-title[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n.mat-card-header[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\r\n  margin: 5px 40px;\r\n}\r\n\r\n.card-header-image[_ngcontent-%COMP%]\r\n{\r\n  background-image: url('transparent-bars.png');\r\n  background-size: cover;\r\n}\r\n\r\n.card-icon[_ngcontent-%COMP%] {\r\n  height: 64px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]\r\n{\r\n  background-color: #ffffff;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\r\n  box-shadow: 0 2px 1px -1px rgba(0,0,0,1), \r\n              0 1px 1px 0 rgba(0,0,0,1), \r\n              0 1px 3px 0 rgba(0,0,0,1);\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9kYXNoYm9hcmQvZGFzaGJvYXJkLWdsb2JhbC1zZXZlbmRheXMtY2FyZC9kYXNoYm9hcmQtZ2xvYmFsLXNldmVuZGF5cy1jYXJkLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUlBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSw2Q0FBZ0U7RUFDaEUsc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTs7dUNBRXFDO0FBQ3ZDOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9kYXNoYm9hcmQvZGFzaGJvYXJkLWdsb2JhbC1zZXZlbmRheXMtY2FyZC9kYXNoYm9hcmQtZ2xvYmFsLXNldmVuZGF5cy1jYXJkLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5cclxuXHJcbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXIgLmNhcmQtaW5mbyB7XHJcbiAgbWFyZ2luOiA1cHggNDBweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyLWltYWdlXHJcbntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy90cmFuc3BhcmVudC1iYXJzLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1pY29uIHtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLDEpLCBcclxuICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKDAsMCwwLDEpLCBcclxuICAgICAgICAgICAgICAwIDFweCAzcHggMCByZ2JhKDAsMCwwLDEpO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalSevenDayCasesCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-global-sevendays-card',
                templateUrl: './dashboard-global-sevendays-card.html',
                styleUrls: ['./dashboard-global-sevendays-card.css'],
            }]
    }], function () { return [{ type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }]; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart']
        }] }); })();


/***/ }),

/***/ "./src/app/feature/dashboard/dashboard-global-summary-card/dashboard-global-summary-card.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard-global-summary-card/dashboard-global-summary-card.ts ***!
  \**************************************************************************************************/
/*! exports provided: GlobalSummaryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSummaryCardComponent", function() { return GlobalSummaryCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/feature/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");







function GlobalSummaryCardComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Global Data By The Numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Updated Every 15 minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-grid-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Total Cases:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Active:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Recoveries:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Deaths:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.yesterdayData.cases.toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.yesterdayData.active.toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.yesterdayData.recovered.toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.yesterdayData.deaths.toLocaleString(), "");
} }
class GlobalSummaryCardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    ngOnInit() {
        this.dashboardService.getAllAsOfYesterday();
    }
    ngAfterViewInit() {
        const that = this;
        this.dashboardService.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(state => state.allAsOfYesterday), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(data => data != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(response => {
            that.yesterdayData = response;
            console.log(this.yesterdayData);
            setInterval(() => { that.dashboardService.getAllAsOfYesterday(); }, 15 * 60 * 1000);
        });
    }
    ngOnDestroy() {
    }
}
GlobalSummaryCardComponent.ɵfac = function GlobalSummaryCardComponent_Factory(t) { return new (t || GlobalSummaryCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"])); };
GlobalSummaryCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalSummaryCardComponent, selectors: [["app-global-summary-card"]], decls: 2, vars: 1, consts: [[1, "card-container", 2, "margin", "5px 5px 5px 5px"], ["class", "card-header", "title", "Updated every 15 minutes by JHUCSSE.", 4, "ngIf"], ["title", "Updated every 15 minutes by JHUCSSE.", 1, "card-header"], ["mat-card-avatar", "", 1, "card-header-image"], [2, "margin-top", "10px"], ["cols", "2", "rowHeight", "1:1"], [1, "huge"]], template: function GlobalSummaryCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GlobalSummaryCardComponent_mat_card_1_Template, 39, 4, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.yesterdayData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  background: white;\r\n}\r\n\r\n.card-header-image[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n}\r\n\r\nmat-card-header.mat-card-header[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.mat-card-title[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n.mat-card-header[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\r\n  margin: 5px 40px;\r\n}\r\n\r\n.card-header-image[_ngcontent-%COMP%]\r\n{\r\n  background-image: url('transparent-human.png');\r\n  background-size: cover;\r\n}\r\n\r\n.card-icon[_ngcontent-%COMP%] {\r\n  height: 64px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.huge[_ngcontent-%COMP%]\r\n{\r\n  font-size: 36px;\r\n  font-weight: bold;\r\n}\r\n\r\n.medium[_ngcontent-%COMP%]\r\n{\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n\r\n}\r\n\r\n.normal[_ngcontent-%COMP%]\r\n{\r\n  font-size: 12px;;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\r\n  box-shadow: 0 2px 1px -1px rgba(0,0,0,1), \r\n              0 1px 1px 0 rgba(0,0,0,1), \r\n              0 1px 3px 0 rgba(0,0,0,1);\r\n}\r\n\r\nmat-grid-tile[_ngcontent-%COMP%] {\r\n  background:#58afe8;\r\n  margin: 10px 10px;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]\r\n{\r\n  background-color: #ffffff;\r\n}\r\n\r\n.mat-figure[_ngcontent-%COMP%]\r\n{\r\n  margin: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9kYXNoYm9hcmQvZGFzaGJvYXJkLWdsb2JhbC1zdW1tYXJ5LWNhcmQvZGFzaGJvYXJkLWdsb2JhbC1zdW1tYXJ5LWNhcmQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBSUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLDhDQUFpRTtFQUNqRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGlCQUFpQjs7QUFFbkI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFOzt1Q0FFcUM7QUFDdkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL2Rhc2hib2FyZC9kYXNoYm9hcmQtZ2xvYmFsLXN1bW1hcnktY2FyZC9kYXNoYm9hcmQtZ2xvYmFsLXN1bW1hcnktY2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxubWF0LWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuXHJcblxyXG4ubWF0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVyIC5jYXJkLWluZm8ge1xyXG4gIG1hcmdpbjogNXB4IDQwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci1pbWFnZVxyXG57XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvdHJhbnNwYXJlbnQtaHVtYW4ucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNhcmQtaWNvbiB7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaHVnZVxyXG57XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubWVkaXVtXHJcbntcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcblxyXG4ubm9ybWFsXHJcbntcclxuICBmb250LXNpemU6IDEycHg7O1xyXG59XHJcblxyXG4ubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMSksIFxyXG4gICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMSksIFxyXG4gICAgICAgICAgICAgIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsMSk7XHJcbn1cclxuXHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gIGJhY2tncm91bmQ6IzU4YWZlODtcclxuICBtYXJnaW46IDEwcHggMTBweDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5tYXQtZmlndXJlXHJcbntcclxuICBtYXJnaW46IDVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalSummaryCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-global-summary-card',
                templateUrl: './dashboard-global-summary-card.html',
                styleUrls: ['./dashboard-global-summary-card.css'],
            }]
    }], function () { return [{ type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feature/dashboard/dashboard-global-tabular-card/dashboard-global-tabular-card.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard-global-tabular-card/dashboard-global-tabular-card.ts ***!
  \**************************************************************************************************/
/*! exports provided: GlobalTabularCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalTabularCardComponent", function() { return GlobalTabularCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/feature/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");


// material









function GlobalTabularCardComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Area ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GlobalTabularCardComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", item_r10.country, "", item_r10.province == null ? "" : ", " + item_r10.province, "", item_r10.county == null ? "" : ", " + item_r10.county, "");
} }
function GlobalTabularCardComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirmed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GlobalTabularCardComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.stats.confirmed, " ");
} }
function GlobalTabularCardComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Recovered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GlobalTabularCardComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.stats.recovered, " ");
} }
function GlobalTabularCardComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Deaths ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GlobalTabularCardComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.stats.deaths, " ");
} }
function GlobalTabularCardComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
} }
function GlobalTabularCardComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
const _c0 = function () { return [10]; };
class GlobalTabularCardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.displayedColumns = ['country', 'confirmed', 'recovered', 'deaths'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.data);
    }
    ngOnInit() {
        this.dashboardService.getGlobalData();
    }
    ngAfterViewInit() {
        const that = this;
        this.dashboardService.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(state => state.globalData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(data => data != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(response => {
            that.data = response;
            that.refreshDataSource();
        });
    }
    refreshDataSource() {
        console.log(this.data[0]);
        var ph = this.data.find(item => item.country === 'Philippines');
        console.log(ph);
        this.updatedAt = ph.updatedAt;
        this.dataSource.data = this.data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = (item, property) => {
            switch (property) {
                case 'confirmed': return item.stats.confirmed;
                case 'recovered': return item.stats.recovered;
                case 'deaths': return item.stats.deaths;
                default: return item[property];
            }
        };
        const matSort = { id: 'confirmed' };
        this.sort.direction = 'asc';
        this.sort.sort(matSort);
    }
    ngOnDestroy() {
    }
}
GlobalTabularCardComponent.ɵfac = function GlobalTabularCardComponent_Factory(t) { return new (t || GlobalTabularCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"])); };
GlobalTabularCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalTabularCardComponent, selectors: [["app-global-tabular-card"]], viewQuery: function GlobalTabularCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 27, vars: 6, consts: [[1, "card-container", 2, "margin", "5px 5px 5px 5px"], [1, "card-header"], ["mat-card-avatar", "", 1, "card-header-image"], ["mat-table", "", "matSort", "", "matSortActive", "confirmed", "matSortDisableClear", "", 3, "dataSource"], ["matColumnDef", "country"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "confirmed"], ["matColumnDef", "recovered"], ["matColumnDef", "deaths"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function GlobalTabularCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tabular View of Global Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GlobalTabularCardComponent_th_13_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GlobalTabularCardComponent_td_14_Template, 2, 3, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GlobalTabularCardComponent_th_16_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GlobalTabularCardComponent_td_17_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GlobalTabularCardComponent_th_19_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GlobalTabularCardComponent_td_20_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, GlobalTabularCardComponent_th_22_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GlobalTabularCardComponent_td_23_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GlobalTabularCardComponent_tr_24_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, GlobalTabularCardComponent_tr_25_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Snapshot as of ", ctx.updatedAt, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  background: white;\r\n}\r\n\r\n.card-header-image[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n}\r\n\r\nmat-card-header.mat-card-header[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.mat-card-title[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n.mat-card-header[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\r\n  margin: 5px 40px;\r\n}\r\n\r\n.card-header-image[_ngcontent-%COMP%]\r\n{\r\n  background-image: url('transparent-chart.png');\r\n  background-size: cover;\r\n}\r\n\r\n.card-map-header-image[_ngcontent-%COMP%]\r\n{\r\n  background-image: url('transparent-earth.png');\r\n  background-size: cover;\r\n}\r\n\r\n.card-icon[_ngcontent-%COMP%] {\r\n  height: 64px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]\r\n{\r\n  background-color: #ffffff;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\r\n  box-shadow: 0 2px 1px -1px rgba(0,0,0,1), \r\n              0 1px 1px 0 rgba(0,0,0,1), \r\n              0 1px 3px 0 rgba(0,0,0,1);\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9kYXNoYm9hcmQvZGFzaGJvYXJkLWdsb2JhbC10YWJ1bGFyLWNhcmQvZGFzaGJvYXJkLWdsb2JhbC10YWJ1bGFyLWNhcmQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBSUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLDhDQUFpRTtFQUNqRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsOENBQWlFO0VBQ2pFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7O3VDQUVxQztBQUN2Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvZGFzaGJvYXJkL2Rhc2hib2FyZC1nbG9iYWwtdGFidWxhci1jYXJkL2Rhc2hib2FyZC1nbG9iYWwtdGFidWxhci1jYXJkLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5cclxuXHJcbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXIgLmNhcmQtaW5mbyB7XHJcbiAgbWFyZ2luOiA1cHggNDBweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyLWltYWdlXHJcbntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy90cmFuc3BhcmVudC1jaGFydC5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY2FyZC1tYXAtaGVhZGVyLWltYWdlXHJcbntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy90cmFuc3BhcmVudC1lYXJ0aC5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY2FyZC1pY29uIHtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLDEpLCBcclxuICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKDAsMCwwLDEpLCBcclxuICAgICAgICAgICAgICAwIDFweCAzcHggMCByZ2JhKDAsMCwwLDEpO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalTabularCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-global-tabular-card',
                templateUrl: './dashboard-global-tabular-card.html',
                styleUrls: ['./dashboard-global-tabular-card.css'],
            }]
    }], function () { return [{ type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "./src/app/feature/dashboard/dashboard-global-timeseries-card/dashboard-global-timeseries-card.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard-global-timeseries-card/dashboard-global-timeseries-card.ts ***!
  \********************************************************************************************************/
/*! exports provided: GlobalTimeseriesCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalTimeseriesCardComponent", function() { return GlobalTimeseriesCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/feature/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");






class GlobalTimeseriesCardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    ngOnInit() {
        // https://corona.lmao.ninja/v2/historical/all
        // https://corona.lmao.ninja/v2/historical/all?lastdays=230
        // this.dashboardService.getGlobalHistoricalData();
    }
    ngAfterViewInit() {
        const that = this;
        this.dashboardService.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(state => state.globalHistoricalData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(data => data != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(response => {
            console.log(response);
            this.data = response;
            this.renderChart();
        });
        this.dashboardService.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(state => state.allAsOfYesterday), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(data => data != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(response => {
            this.latest = response.updated;
            this.dashboardService.getGlobalHistoricalData();
        });
    }
    // https://apexcharts.com/angular-chart-demos/line-charts/zoomable-timeseries/
    renderChart() {
        let day = this.latest;
        const dayInMilliseconds = 86400000;
        const confirmed = [];
        const recovered = [];
        const deaths = [];
        Object.keys(this.data.cases).reverse().forEach(key => {
            if (!this.updatedAt) {
                this.updatedAt = new Date(key).toString();
            }
            day = day - dayInMilliseconds; // + 1 day
            try {
                // tslint:disable-next-line: radix
                const count = parseInt(this.data.cases[key]);
                confirmed.push([day, count]);
            }
            catch (err) {
                console.log(err);
                day = day + dayInMilliseconds;
            }
            // console.log(dates);
        });
        day = this.latest;
        Object.keys(this.data.recovered).reverse().forEach(key => {
            if (!this.updatedAt) {
                this.updatedAt = new Date(key).toString();
            }
            day = day - dayInMilliseconds; // + 1 day
            try {
                // tslint:disable-next-line: radix
                const count = parseInt(this.data.recovered[key]);
                recovered.push([day, count]);
            }
            catch (err) {
                console.log(err);
                day = day + dayInMilliseconds;
            }
            // console.log(dates);
        });
        day = this.latest;
        Object.keys(this.data.deaths).reverse().forEach(key => {
            if (!this.updatedAt) {
                this.updatedAt = new Date(key).toString();
            }
            day = day - dayInMilliseconds; // + 1 day
            try {
                // tslint:disable-next-line: radix
                const count = parseInt(this.data.deaths[key]);
                deaths.push([day, count]);
            }
            catch (err) {
                console.log(err);
                day = day + dayInMilliseconds;
            }
            // console.log(dates);
        });
        this.series = [
            {
                name: 'All Confirmed Cases',
                data: confirmed
            },
            {
                name: 'Recoveries',
                data: recovered
            },
            {
                name: 'Deaths',
                data: deaths
            }
        ];
        this.chart = {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        };
        this.dataLabels = {
            enabled: false
        };
        this.markers = {
            size: 0
        };
        this.title = {
            text: 'Coronavirus Cases',
            align: 'left'
        };
        this.fill = {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
            }
        };
        this.yaxis = {
            labels: {
                formatter(val) {
                    return (val).toFixed(0);
                }
            },
            title: {
                text: 'Count'
            }
        };
        this.xaxis = {
            type: 'datetime'
        };
        this.tooltip = {
            shared: false,
            y: {
                formatter(val) {
                    return (val).toFixed(0);
                }
            }
        };
    }
    // uses a  trial version of CanvasJS, not ideal...
    renderTrial() {
        // https://canvasjs.com/angular-charts/
        // const dataPoints = [];
        // const y = 0;
        // console.log('cases:');
        // console.log(this.data.cases);
        // if (Object.keys(this.data.cases).length) {
        //   Object.keys(this.data.cases).forEach(key => {
        //     // console.log('\n' + key + ': ' + this.data.cases[key]);
        //     dataPoints.push({ x: new Date(key), y: this.data.cases[key] });
        //   });
        // }
        // const chart = new CanvasJS.Chart('chartContainer', {
        //   zoomEnabled: true,
        //   animationEnabled: true,
        //   exportEnabled: true,
        //   theme: 'light2',
        //   title: {
        //     text: ''
        //   },
        //   axisX: {
        //     valueFormatString: 'DD MMM',
        //     crosshair: {
        //       enabled: true,
        //       snapToDataPoint: true
        //     }
        //   },
        //   subtitles: [{
        //     text: ''
        //   }],
        //   data: [
        //   {
        //     type: 'line',
        //     dataPoints
        //   }]
        // });
        // chart.render();
    }
    ngOnDestroy() {
    }
}
GlobalTimeseriesCardComponent.ɵfac = function GlobalTimeseriesCardComponent_Factory(t) { return new (t || GlobalTimeseriesCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"])); };
GlobalTimeseriesCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalTimeseriesCardComponent, selectors: [["app-global-timeseries-card"]], decls: 11, vars: 11, consts: [["title", "The time series can be zoomed and inspected at a smaller range of dates. This graph is meant to show that the rate of change in CoViD-19 cases.", 1, "card-container", 2, "margin-left", "5px", "margin-right", "2px", "width", "50%", "display", "inline-block", "float", "left"], ["mat-card-avatar", "", 1, "card-header-image"], [3, "series", "chart", "dataLabels", "markers", "title", "fill", "yaxis", "xaxis", "tooltip", "autoUpdateSeries"]], template: function GlobalTimeseriesCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Interactive Time Series of Global Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "apx-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Snapshot as of ", ctx.updatedAt, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.series)("chart", ctx.chart)("dataLabels", ctx.dataLabels)("markers", ctx.markers)("title", ctx.title)("fill", ctx.fill)("yaxis", ctx.yaxis)("xaxis", ctx.xaxis)("tooltip", ctx.tooltip)("autoUpdateSeries", true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  background: white;\r\n}\r\n\r\n.card-header-image[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n}\r\n\r\nmat-card-header.mat-card-header[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.mat-card-title[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n.mat-card-header[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\r\n  margin: 5px 40px;\r\n}\r\n\r\n.card-header-image[_ngcontent-%COMP%]\r\n{\r\n  background-image: url('transparent-slope.png');\r\n  background-size: cover;\r\n}\r\n\r\n.card-icon[_ngcontent-%COMP%] {\r\n  height: 64px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]\r\n{\r\n  background-color: #ffffff;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\r\n  box-shadow: 0 2px 1px -1px rgba(0,0,0,1), \r\n              0 1px 1px 0 rgba(0,0,0,1), \r\n              0 1px 3px 0 rgba(0,0,0,1);\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9kYXNoYm9hcmQvZGFzaGJvYXJkLWdsb2JhbC10aW1lc2VyaWVzLWNhcmQvZGFzaGJvYXJkLWdsb2JhbC10aW1lc2VyaWVzLWNhcmQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLDhDQUFpRTtFQUNqRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFOzt1Q0FFcUM7QUFDdkM7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL2Rhc2hib2FyZC9kYXNoYm9hcmQtZ2xvYmFsLXRpbWVzZXJpZXMtY2FyZC9kYXNoYm9hcmQtZ2xvYmFsLXRpbWVzZXJpZXMtY2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxubWF0LWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlciAuY2FyZC1pbmZvIHtcclxuICBtYXJnaW46IDVweCA0MHB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItaW1hZ2Vcclxue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3RyYW5zcGFyZW50LXNsb3BlLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWljb24ge1xyXG4gIGhlaWdodDogNjRweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMSksIFxyXG4gICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMSksIFxyXG4gICAgICAgICAgICAgIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsMSk7XHJcbn1cclxuXHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalTimeseriesCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-global-timeseries-card',
                templateUrl: './dashboard-global-timeseries-card.html',
                styleUrls: ['./dashboard-global-timeseries-card.css'],
            }]
    }], function () { return [{ type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feature/dashboard/dashboard-global-todaycases-card/dashboard-global-todaycases-card.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard-global-todaycases-card/dashboard-global-todaycases-card.ts ***!
  \********************************************************************************************************/
/*! exports provided: GlobalTodayCasesCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalTodayCasesCardComponent", function() { return GlobalTodayCasesCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/feature/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");







const _c0 = ["chart"];
function GlobalTodayCasesCardComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Today's Cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Shows the percentage of today's recoveries and today's deaths for every new case.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "apx-chart", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r0.chartOptions.series)("chart", ctx_r0.chartOptions.chart)("plotOptions", ctx_r0.chartOptions.plotOptions)("labels", ctx_r0.chartOptions.labels)("legend", ctx_r0.chartOptions.legend)("colors", ctx_r0.chartOptions.colors)("responsive", ctx_r0.chartOptions.responsive)("title", ctx_r0.chartOptions.title);
} }
class GlobalTodayCasesCardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const that = this;
        this.dashboardService.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(state => state.allAsOfYesterday), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(data => data != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(response => {
            that.data = response;
            // https://apexcharts.com/angular-chart-demos/radialbar-charts/custom-angle-circle/
            /*
            todayCases: 26114
            todayDeaths: 994
            todayRecovered: 18475
            */
            const total = that.data.todayCases;
            this.chartOptions = {
                title: {
                    // tslint:disable-next-line: max-line-length
                    text: `Today's New Cases: ` + that.data.todayCases,
                    align: 'center'
                },
                // tslint:disable-next-line: max-line-length
                series: [parseFloat((that.data.todayRecovered / total * 100).toFixed(2)), parseFloat((that.data.todayDeaths / total * 100).toFixed(2))],
                chart: {
                    height: 320,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: '30%',
                            background: 'transparent',
                            image: undefined
                        },
                        dataLabels: {
                            name: {
                                show: true
                            },
                            value: {
                                show: true
                            }
                        }
                    }
                },
                colors: ['#00e396', '#feb019', '#39539E'],
                labels: ['Recoveries (' + this.data.todayRecovered + ')', 'Deaths (' + this.data.todayDeaths + ')'],
                legend: {
                    show: true,
                    floating: true,
                    fontSize: '12px',
                    position: 'left',
                    offsetX: -20,
                    offsetY: 70,
                    labels: {
                        useSeriesColors: true
                    },
                    formatter(seriesName, opts) {
                        return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex] + '%';
                    },
                    itemMargin: {
                        horizontal: 3
                    }
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            legend: {
                                show: false
                            }
                        }
                    }
                ]
            };
            // this.chartOptions = {
            //   series: [],
            //   chart: {
            //     width: 360,
            //     type: 'pie'
            //   },
            //   labels: ['Active', 'Recovered', 'Died'],
            //   responsive: [
            //     {
            //       breakpoint: 480,
            //       options: {
            //         chart: {
            //           width: 300
            //         },
            //         legend: {
            //           position: 'bottom'
            //         }
            //       }
            //     }
            //   ]
            // };
        });
    }
    ngOnDestroy() {
    }
}
GlobalTodayCasesCardComponent.ɵfac = function GlobalTodayCasesCardComponent_Factory(t) { return new (t || GlobalTodayCasesCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"])); };
GlobalTodayCasesCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalTodayCasesCardComponent, selectors: [["app-global-todaycases-card"]], viewQuery: function GlobalTodayCasesCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 2, vars: 1, consts: [[1, "card-container", 2, "margin-left", "1px", "margin-right", "1px", "width", "29%", "display", "inline-block"], ["style", " height: 425px;", "title", "A recovery ratio of greater than 100% is what we need to reduce the number of active cases.", 4, "ngIf"], ["title", "A recovery ratio of greater than 100% is what we need to reduce the number of active cases.", 2, "height", "425px"], ["mat-card-avatar", "", 1, "card-header-image"], [2, "margin-top", "10px"], ["id", "chart"], [3, "series", "chart", "plotOptions", "labels", "legend", "colors", "responsive", "title"]], template: function GlobalTodayCasesCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GlobalTodayCasesCardComponent_mat_card_1_Template, 12, 8, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["ChartComponent"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  background: white;\r\n}\r\n\r\n.card-header-image[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n}\r\n\r\nmat-card-header.mat-card-header[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.mat-card-title[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n.mat-card-header[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\r\n  margin: 5px 40px;\r\n}\r\n\r\n.card-header-image[_ngcontent-%COMP%]\r\n{\r\n  background-image: url('transparent-sunset.png');\r\n  background-size: cover;\r\n}\r\n\r\n.card-icon[_ngcontent-%COMP%] {\r\n  height: 64px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]\r\n{\r\n  background-color: #ffffff;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\r\n  box-shadow: 0 2px 1px -1px rgba(0,0,0,1), \r\n              0 1px 1px 0 rgba(0,0,0,1), \r\n              0 1px 3px 0 rgba(0,0,0,1);\r\n}\r\n\r\nmat-grid-tile[_ngcontent-%COMP%] {\r\n  background: rgb(137, 212, 236);\r\n  margin: 10px 10px;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n#chart[_ngcontent-%COMP%] {\r\n  max-width: 380px;\r\n  margin: 35px auto;\r\n  padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9kYXNoYm9hcmQvZGFzaGJvYXJkLWdsb2JhbC10b2RheWNhc2VzLWNhcmQvZGFzaGJvYXJkLWdsb2JhbC10b2RheWNhc2VzLWNhcmQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLCtDQUFrRTtFQUNsRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFOzt1Q0FFcUM7QUFDdkM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL2Rhc2hib2FyZC9kYXNoYm9hcmQtZ2xvYmFsLXRvZGF5Y2FzZXMtY2FyZC9kYXNoYm9hcmQtZ2xvYmFsLXRvZGF5Y2FzZXMtY2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxubWF0LWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlciAuY2FyZC1pbmZvIHtcclxuICBtYXJnaW46IDVweCA0MHB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItaW1hZ2Vcclxue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3RyYW5zcGFyZW50LXN1bnNldC5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY2FyZC1pY29uIHtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLDEpLCBcclxuICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKDAsMCwwLDEpLCBcclxuICAgICAgICAgICAgICAwIDFweCAzcHggMCByZ2JhKDAsMCwwLDEpO1xyXG59XHJcblxyXG5tYXQtZ3JpZC10aWxlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTM3LCAyMTIsIDIzNik7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuI2NoYXJ0IHtcclxuICBtYXgtd2lkdGg6IDM4MHB4O1xyXG4gIG1hcmdpbjogMzVweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalTodayCasesCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-global-todaycases-card',
                templateUrl: './dashboard-global-todaycases-card.html',
                styleUrls: ['./dashboard-global-todaycases-card.css'],
            }]
    }], function () { return [{ type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }]; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart']
        }] }); })();


/***/ }),

/***/ "./src/app/feature/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dashboard_global_tabular_card_dashboard_global_tabular_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-global-tabular-card/dashboard-global-tabular-card */ "./src/app/feature/dashboard/dashboard-global-tabular-card/dashboard-global-tabular-card.ts");
/* harmony import */ var _dashboard_global_case_ratio_card_dashboard_global_case_ratio_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-global-case-ratio-card/dashboard-global-case-ratio-card */ "./src/app/feature/dashboard/dashboard-global-case-ratio-card/dashboard-global-case-ratio-card.ts");
/* harmony import */ var _dashboard_global_map_card_dashboard_global_map_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-global-map-card/dashboard-global-map-card */ "./src/app/feature/dashboard/dashboard-global-map-card/dashboard-global-map-card.ts");
/* harmony import */ var _dashboard_global_timeseries_card_dashboard_global_timeseries_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-global-timeseries-card/dashboard-global-timeseries-card */ "./src/app/feature/dashboard/dashboard-global-timeseries-card/dashboard-global-timeseries-card.ts");
/* harmony import */ var _dashboard_global_todaycases_card_dashboard_global_todaycases_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-global-todaycases-card/dashboard-global-todaycases-card */ "./src/app/feature/dashboard/dashboard-global-todaycases-card/dashboard-global-todaycases-card.ts");
/* harmony import */ var _dashboard_global_bubblechart_card_dashboard_global_bubblechart_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-global-bubblechart-card/dashboard-global-bubblechart-card */ "./src/app/feature/dashboard/dashboard-global-bubblechart-card/dashboard-global-bubblechart-card.ts");
/* harmony import */ var _dashboard_global_summary_card_dashboard_global_summary_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-global-summary-card/dashboard-global-summary-card */ "./src/app/feature/dashboard/dashboard-global-summary-card/dashboard-global-summary-card.ts");
/* harmony import */ var _dashboard_global_sevendays_card_dashboard_global_sevendays_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-global-sevendays-card/dashboard-global-sevendays-card */ "./src/app/feature/dashboard/dashboard-global-sevendays-card/dashboard-global-sevendays-card.ts");
/* harmony import */ var _core_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/spinner/spinner.component */ "./src/app/core/spinner/spinner.component.ts");











class DashboardComponent {
    constructor() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 15, vars: 0, consts: [[1, "container", 2, "height", "100%", "display", "block"], [2, "display", "inline-block", "width", "15%", "min-width", "15%", "float", "left"], [2, "display", "inline-block", "max-width", "64.8%", "width", "65%", "max-height", "80%"], [2, "display", "inline-block", "min-width", "20%", "float", "right"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-global-tabular-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-global-case-ratio-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-global-map-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-global-timeseries-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-global-todaycases-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-global-bubblechart-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-global-summary-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-global-sevendays-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div-spinner");
    } }, directives: [_dashboard_global_tabular_card_dashboard_global_tabular_card__WEBPACK_IMPORTED_MODULE_1__["GlobalTabularCardComponent"], _dashboard_global_case_ratio_card_dashboard_global_case_ratio_card__WEBPACK_IMPORTED_MODULE_2__["GlobalCaseRatioCardComponent"], _dashboard_global_map_card_dashboard_global_map_card__WEBPACK_IMPORTED_MODULE_3__["GlobalMapCardComponent"], _dashboard_global_timeseries_card_dashboard_global_timeseries_card__WEBPACK_IMPORTED_MODULE_4__["GlobalTimeseriesCardComponent"], _dashboard_global_todaycases_card_dashboard_global_todaycases_card__WEBPACK_IMPORTED_MODULE_5__["GlobalTodayCasesCardComponent"], _dashboard_global_bubblechart_card_dashboard_global_bubblechart_card__WEBPACK_IMPORTED_MODULE_6__["GlobalBubbleChartCardComponent"], _dashboard_global_summary_card_dashboard_global_summary_card__WEBPACK_IMPORTED_MODULE_7__["GlobalSummaryCardComponent"], _dashboard_global_sevendays_card_dashboard_global_sevendays_card__WEBPACK_IMPORTED_MODULE_8__["GlobalSevenDayCasesCardComponent"], _core_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"]], styles: ["[_nghost-%COMP%] {\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-size: 14px;\r\n  color: #333;\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  margin: 8px 0;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 0 16px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  margin: 0 16px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 82px auto 32px;\r\n  padding: 0 16px;\r\n  max-width: 960px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nsvg.material-icons[_ngcontent-%COMP%] {\r\n  height: 24px;\r\n  width: auto;\r\n}\r\n\r\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: 8px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  fill: #888;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  margin-top: 16px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  border: 1px solid #eee;\r\n  background-color: #fafafa;\r\n  height: 40px;\r\n  width: 200px;\r\n  margin: 0 8px 16px;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: all 0.2s ease-in-out;\r\n  line-height: 24px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: 0;\r\n}\r\n\r\n.card.card-small[_ngcontent-%COMP%] {\r\n  height: 16px;\r\n  width: 168px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n  cursor: pointer;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  fill: rgb(105, 103, 103);\r\n}\r\n\r\n.card.highlight-card[_ngcontent-%COMP%] {\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n  border: none;\r\n  width: auto;\r\n  min-width: 30%;\r\n  position: relative;\r\n}\r\n\r\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  margin-left: 60px;\r\n}\r\n\r\nsvg#rocket[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  position: absolute;\r\n  left: -10px;\r\n  top: -24px;\r\n}\r\n\r\nsvg#rocket-smoke[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 95px);\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 180px;\r\n  z-index: -10;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n  color: #1976d2;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #125699;\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 80%;\r\n  max-width: 600px;\r\n  border-radius: 6px;\r\n  padding-top: 45px;\r\n  margin-top: 8px;\r\n  overflow: hidden;\r\n  background-color: rgb(15, 15, 16);\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%]::before {\r\n  content: \"\\2022 \\2022 \\2022\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 4px;\r\n  background: rgb(58, 58, 58);\r\n  color: #c2c3c4;\r\n  width: 100%;\r\n  font-size: 2rem;\r\n  line-height: 0;\r\n  padding: 14px 0;\r\n  text-indent: 4px;\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\r\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\r\n  color: white;\r\n  padding: 0 1rem 1rem;\r\n  margin: 0;\r\n}\r\n\r\n.circle-link[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  width: 40px;\r\n  border-radius: 40px;\r\n  margin: 8px;\r\n  background-color: white;\r\n  border: 1px solid #eeeeee;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 1s ease-out;\r\n}\r\n\r\n.circle-link[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-0.25rem);\r\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  display: flex;\r\n  align-items: center;\r\n  line-height: 20px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%] {\r\n  color: #24292e;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  padding: 3px 10px;\r\n  border: 1px solid rgba(27,31,35,.2);\r\n  border-radius: 3px;\r\n  background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\r\n  margin-left: 4px;\r\n  font-weight: 600;\r\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%]:hover {\r\n  background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\r\n  border-color: rgba(27,31,35,.35);\r\n  background-position: -.5em;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n  height: 16px;\r\n  width: 16px;\r\n  margin-right: 4px;\r\n}\r\n\r\nsvg#clouds[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: -160px;\r\n  left: -230px;\r\n  z-index: -10;\r\n  width: 1920px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 767px) {\r\n\r\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n    height: 16px;\r\n    margin: 8px 0;\r\n  }\r\n\r\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin-left: 72px;\r\n  }\r\n\r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n    right: 120px;\r\n    transform: rotate(-5deg);\r\n  }\r\n}\r\n\r\n.container[_ngcontent-%COMP%]:not(#card-container)\r\n{\r\n  background-color: #ebeff2\r\n}\r\n\r\n@media screen and (max-width: 575px) {\r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n    display: none;\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n*[_ngcontent-%COMP%]\r\n{\r\n    font-family: 'Segoe UI Light';\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwSkFBMEo7RUFDMUosZUFBZTtFQUNmLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFFQTs7Ozs7O0VBTUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0VBQW9FO0VBQ3BFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHdFQUF3RTtFQUN4RSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrSUFBa0k7QUFDcEk7O0FBRUE7RUFDRSw4REFBOEQ7RUFDOUQsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFHQSxzQkFBc0I7O0FBQ3RCOztFQUVFOztJQUVFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7O0VBRUU7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtBQUNGOztBQUNBOztJQUVJLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udG9vbGJhciBpbWcge1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjdHdpdHRlci1sb2dvIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAwIDE2cHg7XHJcbn1cclxuXHJcbi50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiA4MnB4IGF1dG8gMzJweDtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgbWF4LXdpZHRoOiA5NjBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnN2Zy5tYXRlcmlhbC1pY29ucyB7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5zdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICBmaWxsOiAjODg4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luOiAwIDhweCAxNnB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQtc21hbGwge1xyXG4gIGhlaWdodDogMTZweDtcclxuICB3aWR0aDogMTY4cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgZmlsbDogcmdiKDEwNSwgMTAzLCAxMDMpO1xyXG59XHJcblxyXG4uY2FyZC5oaWdobGlnaHQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWluLXdpZHRoOiAzMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG59XHJcblxyXG5zdmcjcm9ja2V0IHtcclxuICB3aWR0aDogODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTEwcHg7XHJcbiAgdG9wOiAtMjRweDtcclxufVxyXG5cclxuc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTgwcHg7XHJcbiAgei1pbmRleDogLTEwO1xyXG59XHJcblxyXG5hLFxyXG5hOnZpc2l0ZWQsXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTk3NmQyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxMjU2OTk7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTYpO1xyXG59XHJcblxyXG4udGVybWluYWw6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XHJcbiAgY29sb3I6ICNjMmMzYzQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDE0cHggMDtcclxuICB0ZXh0LWluZGVudDogNHB4O1xyXG59XHJcblxyXG4udGVybWluYWwgcHJlIHtcclxuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMCAxcmVtIDFyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2lyY2xlLWxpbmsge1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5jaXJjbGUtbGluazpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmZvb3RlciBhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5naXRodWItc3Rhci1iYWRnZSB7XHJcbiAgY29sb3I6ICMyNDI5MmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiAzcHggMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XHJcbn1cclxuXHJcbi5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2YwZjNmNiwjZTZlYmYxIDkwJSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LC4zNSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLS41ZW07XHJcbn1cclxuXHJcbi5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGhlaWdodDogMTZweDtcclxuICB3aWR0aDogMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5cclxuc3ZnI2Nsb3VkcyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogLTE2MHB4O1xyXG4gIGxlZnQ6IC0yMzBweDtcclxuICB6LWluZGV4OiAtMTA7XHJcbiAgd2lkdGg6IDE5MjBweDtcclxufVxyXG5cclxuXHJcbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxyXG4gIC50ZXJtaW5hbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICByaWdodDogMTIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyOm5vdCgjY2FyZC1jb250YWluZXIpXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlZmYyXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuKlxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJIExpZ2h0JztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/feature/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.routing.module */ "./src/app/feature/dashboard/dashboard.routing.module.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/feature/dashboard/dashboard.service.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/feature/dashboard/dashboard.component.ts");
/* harmony import */ var src_app_core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var src_app_core_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/spinner/spinner.module */ "./src/app/core/spinner/spinner.module.ts");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _dashboard_global_tabular_card_dashboard_global_tabular_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard-global-tabular-card/dashboard-global-tabular-card */ "./src/app/feature/dashboard/dashboard-global-tabular-card/dashboard-global-tabular-card.ts");
/* harmony import */ var _dashboard_global_map_card_dashboard_global_map_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard-global-map-card/dashboard-global-map-card */ "./src/app/feature/dashboard/dashboard-global-map-card/dashboard-global-map-card.ts");
/* harmony import */ var _dashboard_global_summary_card_dashboard_global_summary_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard-global-summary-card/dashboard-global-summary-card */ "./src/app/feature/dashboard/dashboard-global-summary-card/dashboard-global-summary-card.ts");
/* harmony import */ var _dashboard_global_case_ratio_card_dashboard_global_case_ratio_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard-global-case-ratio-card/dashboard-global-case-ratio-card */ "./src/app/feature/dashboard/dashboard-global-case-ratio-card/dashboard-global-case-ratio-card.ts");
/* harmony import */ var _dashboard_global_timeseries_card_dashboard_global_timeseries_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard-global-timeseries-card/dashboard-global-timeseries-card */ "./src/app/feature/dashboard/dashboard-global-timeseries-card/dashboard-global-timeseries-card.ts");
/* harmony import */ var _dashboard_global_bubblechart_card_dashboard_global_bubblechart_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard-global-bubblechart-card/dashboard-global-bubblechart-card */ "./src/app/feature/dashboard/dashboard-global-bubblechart-card/dashboard-global-bubblechart-card.ts");
/* harmony import */ var _dashboard_global_todaycases_card_dashboard_global_todaycases_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard-global-todaycases-card/dashboard-global-todaycases-card */ "./src/app/feature/dashboard/dashboard-global-todaycases-card/dashboard-global-todaycases-card.ts");
/* harmony import */ var _dashboard_global_sevendays_card_dashboard_global_sevendays_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard-global-sevendays-card/dashboard-global-sevendays-card */ "./src/app/feature/dashboard/dashboard-global-sevendays-card/dashboard-global-sevendays-card.ts");








// 3rd party


// angular















class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, providers: [
        _dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"],
        src_app_core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
            src_app_core_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_7__["SpinnerModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__["NgApexchartsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _dashboard_global_tabular_card_dashboard_global_tabular_card__WEBPACK_IMPORTED_MODULE_15__["GlobalTabularCardComponent"], _dashboard_global_map_card_dashboard_global_map_card__WEBPACK_IMPORTED_MODULE_16__["GlobalMapCardComponent"], _dashboard_global_summary_card_dashboard_global_summary_card__WEBPACK_IMPORTED_MODULE_17__["GlobalSummaryCardComponent"], _dashboard_global_case_ratio_card_dashboard_global_case_ratio_card__WEBPACK_IMPORTED_MODULE_18__["GlobalCaseRatioCardComponent"], _dashboard_global_timeseries_card_dashboard_global_timeseries_card__WEBPACK_IMPORTED_MODULE_19__["GlobalTimeseriesCardComponent"], _dashboard_global_bubblechart_card_dashboard_global_bubblechart_card__WEBPACK_IMPORTED_MODULE_20__["GlobalBubbleChartCardComponent"], _dashboard_global_todaycases_card_dashboard_global_todaycases_card__WEBPACK_IMPORTED_MODULE_21__["GlobalTodayCasesCardComponent"], _dashboard_global_sevendays_card_dashboard_global_sevendays_card__WEBPACK_IMPORTED_MODULE_22__["GlobalSevenDayCasesCardComponent"], _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
        src_app_core_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_7__["SpinnerModule"],
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__["NgApexchartsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"]], exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["routedComponents"],
                    _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                    src_app_core_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_7__["SpinnerModule"],
                    _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__["NgApexchartsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"]
                ],
                exports: [
                    _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
                ],
                providers: [
                    _dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"],
                    src_app_core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/feature/dashboard/dashboard.routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard.routing.module.ts ***!
  \***************************************************************/
/*! exports provided: routes, DashboardRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/feature/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_global_timeseries_card_dashboard_global_timeseries_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-global-timeseries-card/dashboard-global-timeseries-card */ "./src/app/feature/dashboard/dashboard-global-timeseries-card/dashboard-global-timeseries-card.ts");
/* harmony import */ var _dashboard_global_tabular_card_dashboard_global_tabular_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-global-tabular-card/dashboard-global-tabular-card */ "./src/app/feature/dashboard/dashboard-global-tabular-card/dashboard-global-tabular-card.ts");
/* harmony import */ var _dashboard_global_summary_card_dashboard_global_summary_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-global-summary-card/dashboard-global-summary-card */ "./src/app/feature/dashboard/dashboard-global-summary-card/dashboard-global-summary-card.ts");
/* harmony import */ var _dashboard_global_case_ratio_card_dashboard_global_case_ratio_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-global-case-ratio-card/dashboard-global-case-ratio-card */ "./src/app/feature/dashboard/dashboard-global-case-ratio-card/dashboard-global-case-ratio-card.ts");
/* harmony import */ var _dashboard_global_map_card_dashboard_global_map_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-global-map-card/dashboard-global-map-card */ "./src/app/feature/dashboard/dashboard-global-map-card/dashboard-global-map-card.ts");
/* harmony import */ var _dashboard_global_bubblechart_card_dashboard_global_bubblechart_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-global-bubblechart-card/dashboard-global-bubblechart-card */ "./src/app/feature/dashboard/dashboard-global-bubblechart-card/dashboard-global-bubblechart-card.ts");
/* harmony import */ var _dashboard_global_todaycases_card_dashboard_global_todaycases_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-global-todaycases-card/dashboard-global-todaycases-card */ "./src/app/feature/dashboard/dashboard-global-todaycases-card/dashboard-global-todaycases-card.ts");
/* harmony import */ var _dashboard_global_sevendays_card_dashboard_global_sevendays_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-global-sevendays-card/dashboard-global-sevendays-card */ "./src/app/feature/dashboard/dashboard-global-sevendays-card/dashboard-global-sevendays-card.ts");













const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routedComponents = [
    // tslint:disable-next-line: max-line-length
    _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _dashboard_global_tabular_card_dashboard_global_tabular_card__WEBPACK_IMPORTED_MODULE_4__["GlobalTabularCardComponent"], _dashboard_global_map_card_dashboard_global_map_card__WEBPACK_IMPORTED_MODULE_7__["GlobalMapCardComponent"], _dashboard_global_summary_card_dashboard_global_summary_card__WEBPACK_IMPORTED_MODULE_5__["GlobalSummaryCardComponent"], _dashboard_global_case_ratio_card_dashboard_global_case_ratio_card__WEBPACK_IMPORTED_MODULE_6__["GlobalCaseRatioCardComponent"], _dashboard_global_timeseries_card_dashboard_global_timeseries_card__WEBPACK_IMPORTED_MODULE_3__["GlobalTimeseriesCardComponent"], _dashboard_global_bubblechart_card_dashboard_global_bubblechart_card__WEBPACK_IMPORTED_MODULE_8__["GlobalBubbleChartCardComponent"], _dashboard_global_todaycases_card_dashboard_global_todaycases_card__WEBPACK_IMPORTED_MODULE_9__["GlobalTodayCasesCardComponent"], _dashboard_global_sevendays_card_dashboard_global_sevendays_card__WEBPACK_IMPORTED_MODULE_10__["GlobalSevenDayCasesCardComponent"]
];


/***/ }),

/***/ "./src/app/feature/dashboard/dashboard.service.ts":
/*!********************************************************!*\
  !*** ./src/app/feature/dashboard/dashboard.service.ts ***!
  \********************************************************/
/*! exports provided: DashboardState, DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardState", function() { return DashboardState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/store/store */ "./src/app/core/store/store.ts");
/* harmony import */ var _core_app_data_dashboard_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/app-data/dashboard.app-data.service */ "./src/app/core/app-data/dashboard.app-data.service.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");

// Core Services




class DashboardState {
    constructor() {
        this.selectedCountry = '';
    }
}
class DashboardService extends _core_store_store__WEBPACK_IMPORTED_MODULE_1__["Store"] {
    constructor(appDataService, spinnerService) {
        super(new DashboardState());
        this.appDataService = appDataService;
        this.spinnerService = spinnerService;
    }
    getGlobalData() {
        this.spinnerService.show();
        this.appDataService.getGlobalCases().subscribe(data => {
            this.setState(Object.assign(Object.assign({}, this.state), { globalData: data }));
            this.spinnerService.hide();
        });
    }
    getGlobalHistoricalData() {
        this.spinnerService.show();
        this.appDataService.getGlobalHistoricalData().subscribe(data => {
            this.setState(Object.assign(Object.assign({}, this.state), { globalHistoricalData: data }));
            this.spinnerService.hide();
        });
    }
    // global summary without breakdown
    getAllAsOfYesterday() {
        this.spinnerService.show();
        this.appDataService.getAllAsOfYesterday().subscribe(data => {
            this.setState(Object.assign(Object.assign({}, this.state), { allAsOfYesterday: data }));
            this.spinnerService.hide();
        });
    }
    // country level breakdown
    getAllCurrentCountryData() {
        this.spinnerService.show();
        this.appDataService.getAllCurrentCountryData().subscribe(data => {
            this.setState(Object.assign(Object.assign({}, this.state), { allCurrentCountryData: data }));
            this.spinnerService.hide();
        });
    }
    getDataOfPastSevenDays() {
        this.spinnerService.show();
        this.appDataService.getDataOfPastSevenDays().subscribe(data => {
            this.setState(Object.assign(Object.assign({}, this.state), { sevenDayData: data }));
            this.spinnerService.hide();
        });
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_app_data_dashboard_app_data_service__WEBPACK_IMPORTED_MODULE_2__["DashboardAppDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_app_data_dashboard_app_data_service__WEBPACK_IMPORTED_MODULE_2__["DashboardAppDataService"] }, { type: _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"] }]; }, null); })();


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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vziex\source\repos\covid-dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map