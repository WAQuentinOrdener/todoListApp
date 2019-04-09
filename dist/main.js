(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "./src/app/task-detail/task-detail.component.ts");





var routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'tasks', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_3__["TasksComponent"] },
    { path: 'task-detail/:id', component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__["TaskDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks.service */ "./src/app/tasks.service.ts");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "./src/app/task-detail/task-detail.component.ts");
/* harmony import */ var _tasks_task_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks/task/task.component */ "./src/app/tasks/task/task.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__["TasksComponent"], _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_8__["TaskDetailComponent"], _tasks_task_task_component__WEBPACK_IMPORTED_MODULE_9__["TaskComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]],
            providers: [_tasks_service__WEBPACK_IMPORTED_MODULE_7__["TasksService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model/Tasks.ts":
/*!********************************!*\
  !*** ./src/app/model/Tasks.ts ***!
  \********************************/
/*! exports provided: Task, tasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tasks", function() { return tasks; });
var Task = /** @class */ (function () {
    function Task(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.state = false;
    }
    return Task;
}());

var tasks = [
    {
        id: 0,
        title: 'Task 1',
        description: 'Task description',
        state: false
    },
    {
        id: 1,
        title: 'Task 2',
        description: 'Task description',
        state: true
    },
    {
        id: 2,
        title: 'Task 3',
        description: 'Task description',
        state: false
    },
    {
        id: 3,
        title: 'Task 4',
        description: 'Task description',
        state: true
    },
    {
        id: 4,
        title: 'Task 5',
        description: 'Task description',
        state: false
    }
];


/***/ }),

/***/ "./src/app/task-detail/task-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/task-detail/task-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stZGV0YWlsL3Rhc2stZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/task-detail/task-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/task-detail/task-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-3\">\r\n  <a [routerLink]=\"['/tasks']\">Back</a>\r\n  <div class=\"card card-block mt-3\">\r\n    <div class=\"card-title p-2\">{{ task.title }}</div>\r\n    <div class=\"card-body\">{{ task.description }}</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/task-detail/task-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/task-detail/task-detail.component.ts ***!
  \******************************************************/
/*! exports provided: TaskDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return TaskDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks.service */ "./src/app/tasks.service.ts");




var TaskDetailComponent = /** @class */ (function () {
    function TaskDetailComponent(route, taskService) {
        this.route = route;
        this.taskService = taskService;
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        this.getTask();
    };
    TaskDetailComponent.prototype.getTask = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.taskService.getTask(id).subscribe(function (task) { return (_this.task = task); });
    };
    TaskDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-detail',
            template: __webpack_require__(/*! ./task-detail.component.html */ "./src/app/task-detail/task-detail.component.html"),
            styles: [__webpack_require__(/*! ./task-detail.component.css */ "./src/app/task-detail/task-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"]])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());



/***/ }),

/***/ "./src/app/tasks.service.ts":
/*!**********************************!*\
  !*** ./src/app/tasks.service.ts ***!
  \**********************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _model_Tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/Tasks */ "./src/app/model/Tasks.ts");





var TasksService = /** @class */ (function () {
    function TasksService(httpClient) {
        this.httpClient = httpClient;
    }
    /* getAllTasks(): Observable<object> {
      return this.httpClient.get('api/tasks');
    } */
    TasksService.prototype.getAllTasks = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            observer.next(_model_Tasks__WEBPACK_IMPORTED_MODULE_4__["tasks"]);
        });
    };
    TasksService.prototype.getTask = function (id) {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            observer.next(_model_Tasks__WEBPACK_IMPORTED_MODULE_4__["tasks"].find(function (task) { return task.id === id; }));
        });
    };
    TasksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TasksService);
    return TasksService;
}());



/***/ }),

/***/ "./src/app/tasks/task/task.component.css":
/*!***********************************************!*\
  !*** ./src/app/tasks/task/task.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2svdGFzay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tasks/task/task.component.html":
/*!************************************************!*\
  !*** ./src/app/tasks/task/task.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-block flex-grow-1 mb-3\">\n  <div class=\"d-flex\">\n    <div [ngSwitch]=\"task.state\" class=\"d-flex flex-grow-1\">\n      <div *ngSwitchCase=\"true\">\n        <s>\n          <h4 class=\"card-title px-2\">\n            <a routerLink=\"/task-detail/{{ task.id }}\">{{ task.title }}</a>\n          </h4>\n        </s>\n      </div>\n      <div *ngSwitchCase=\"false\">\n        <h4 class=\"card-title px-2\">\n          <a routerLink=\"/task-detail/{{ task.id }}\">{{ task.title }}</a>\n        </h4>\n      </div>\n    </div>\n\n    <button\n      class=\"btn\"\n      [class.btn-success]=\"!task.state\"\n      [class.btn-danger]=\"task.state\"\n      (click)=\"checkTask($event)\"\n    >\n      {{ task.state ? 'Done' : 'Todo' }}\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tasks/task/task.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tasks/task/task.component.ts ***!
  \**********************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/Tasks */ "./src/app/model/Tasks.ts");



var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
        this.sortTasks = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TaskComponent.prototype.checkTask = function ($event) {
        this.task.state = !this.task.state;
        this.sortTasks.emit($event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_Tasks__WEBPACK_IMPORTED_MODULE_2__["Task"])
    ], TaskComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskComponent.prototype, "sortTasks", void 0);
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/tasks/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/tasks/task/task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.component.css":
/*!*******************************************!*\
  !*** ./src/app/tasks/tasks.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/tasks/tasks.component.html":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Todo list</h3>\n  <div class=\"row\" *ngFor=\"let task of tasks\">\n    <app-task [task]=\"task\" (sortTasks)=\"sortTasks(tasks)\" class=\"d-flex flex-grow-1\"></app-task>\n  </div>\n  <hr />\n  <button (click)=\"openForm = !openForm\" class=\"btn btn-primary\">Add new Task</button>\n  <form\n    *ngIf=\"openForm\"\n    [formGroup]=\"addTaskForm\"\n    class=\"form-group d-flex flex-column align-items-center\"\n    (ngSubmit)=\"saveNewTask()\"\n  >\n    <label class=\"col-12 col-sm-6 px-0\">\n      Title :\n      <input class=\"form-control\" type=\"text\" required formControlName=\"title\" />\n    </label>\n    <label class=\"col-12 col-sm-6 px-0\">\n      Description :\n      <input class=\"form-control\" type=\"text\" formControlName=\"description\" />\n    </label>\n    <button\n      type=\"submit\"\n      class=\"btn btn-primary col-12 col-sm-6 mt-2\"\n      [disabled]=\"!addTaskForm.valid\"\n    >\n      Submit\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Tasks */ "./src/app/model/Tasks.ts");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks.service */ "./src/app/tasks.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var TasksComponent = /** @class */ (function () {
    function TasksComponent(tasksService) {
        this.tasksService = tasksService;
        this.tasks = [];
        this.openForm = false;
        this.addTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tasksService
            .getAllTasks()
            .subscribe(function (tasks) { return (_this.tasks = _this.sortTasks(tasks)); });
    };
    // Sorting task by state (Done to bottom)
    TasksComponent.prototype.sortTasks = function (tasks) {
        return tasks.sort(function (x, y) {
            return x.state === y.state ? 0 : x.state ? 1 : -1;
        });
    };
    // Add new Task based on the form the close the form
    TasksComponent.prototype.saveNewTask = function () {
        var newTask = new _model_Tasks__WEBPACK_IMPORTED_MODULE_2__["Task"](this.tasks.length + 1, this.addTaskForm.get('title').value, this.addTaskForm.get('description').value);
        // Insert newly created task to first index of array
        this.tasks.splice(0, 0, newTask);
        this.openForm = false;
    };
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/tasks/tasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"]])
    ], TasksComponent);
    return TasksComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Quentin ORDENER\Documents\dev\meanTodoListApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map