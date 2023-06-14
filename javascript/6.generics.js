"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskType = void 0;
// GENERICS
var TaskType;
(function (TaskType) {
    TaskType["feature"] = "feature";
    TaskType["bug"] = "bug";
})(TaskType || (exports.TaskType = TaskType = {}));
const whatever = { name: 'Single Sign On', type: TaskType.feature };
whatever.type = TaskType.bug;
const feature = { name: 'Single Sign On', type: TaskType.feature };
feature.type = TaskType.bug; // Type 'TaskType.bug' is not assignable to type 'TaskType.feature'.
const invalid = { name: 'Single Sign On', type: TaskType.bug }; // Type 'TaskType.bug' is not assignable to type 'TaskType.feature'
