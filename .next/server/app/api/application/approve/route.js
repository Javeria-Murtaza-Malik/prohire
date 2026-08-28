"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/application/approve/route";
exports.ids = ["app/api/application/approve/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fapplication%2Fapprove%2Froute&page=%2Fapi%2Fapplication%2Fapprove%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fapplication%2Fapprove%2Froute.ts&appDir=C%3A%5CUsers%5CDADAbhai.traders%5CDownloads%5Cprohire-complete%5Cprohire%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDADAbhai.traders%5CDownloads%5Cprohire-complete%5Cprohire&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fapplication%2Fapprove%2Froute&page=%2Fapi%2Fapplication%2Fapprove%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fapplication%2Fapprove%2Froute.ts&appDir=C%3A%5CUsers%5CDADAbhai.traders%5CDownloads%5Cprohire-complete%5Cprohire%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDADAbhai.traders%5CDownloads%5Cprohire-complete%5Cprohire&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_DADAbhai_traders_Downloads_prohire_complete_prohire_app_api_application_approve_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/application/approve/route.ts */ \"(rsc)/./app/api/application/approve/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/application/approve/route\",\n        pathname: \"/api/application/approve\",\n        filename: \"route\",\n        bundlePath: \"app/api/application/approve/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\DADAbhai.traders\\\\Downloads\\\\prohire-complete\\\\prohire\\\\app\\\\api\\\\application\\\\approve\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_DADAbhai_traders_Downloads_prohire_complete_prohire_app_api_application_approve_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/application/approve/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhcHBsaWNhdGlvbiUyRmFwcHJvdmUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFwcGxpY2F0aW9uJTJGYXBwcm92ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFwcGxpY2F0aW9uJTJGYXBwcm92ZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNEQURBYmhhaS50cmFkZXJzJTVDRG93bmxvYWRzJTVDcHJvaGlyZS1jb21wbGV0ZSU1Q3Byb2hpcmUlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0RBREFiaGFpLnRyYWRlcnMlNUNEb3dubG9hZHMlNUNwcm9oaXJlLWNvbXBsZXRlJTVDcHJvaGlyZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDMkQ7QUFDeEk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9oaXJlLz83MTViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXERBREFiaGFpLnRyYWRlcnNcXFxcRG93bmxvYWRzXFxcXHByb2hpcmUtY29tcGxldGVcXFxccHJvaGlyZVxcXFxhcHBcXFxcYXBpXFxcXGFwcGxpY2F0aW9uXFxcXGFwcHJvdmVcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FwcGxpY2F0aW9uL2FwcHJvdmUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hcHBsaWNhdGlvbi9hcHByb3ZlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hcHBsaWNhdGlvbi9hcHByb3ZlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcREFEQWJoYWkudHJhZGVyc1xcXFxEb3dubG9hZHNcXFxccHJvaGlyZS1jb21wbGV0ZVxcXFxwcm9oaXJlXFxcXGFwcFxcXFxhcGlcXFxcYXBwbGljYXRpb25cXFxcYXBwcm92ZVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXBwbGljYXRpb24vYXBwcm92ZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fapplication%2Fapprove%2Froute&page=%2Fapi%2Fapplication%2Fapprove%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fapplication%2Fapprove%2Froute.ts&appDir=C%3A%5CUsers%5CDADAbhai.traders%5CDownloads%5Cprohire-complete%5Cprohire%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDADAbhai.traders%5CDownloads%5Cprohire-complete%5Cprohire&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/application/approve/route.ts":
/*!**********************************************!*\
  !*** ./app/api/application/approve/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _server_db_connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/server/db/connection */ \"(rsc)/./server/db/connection.ts\");\n/* harmony import */ var _server_db_models_Application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/server/db/models/Application */ \"(rsc)/./server/db/models/Application.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/types.js\");\n\n\n\n\n\n\nconst BodySchema = zod__WEBPACK_IMPORTED_MODULE_5__.object({\n    applicationId: zod__WEBPACK_IMPORTED_MODULE_5__.string(),\n    decision: zod__WEBPACK_IMPORTED_MODULE_5__[\"enum\"]([\n        \"approve\",\n        \"reject\"\n    ])\n});\nasync function POST(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const parsed = BodySchema.safeParse(await req.json());\n    if (!parsed.success) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Invalid request body\"\n    }, {\n        status: 400\n    });\n    await (0,_server_db_connection__WEBPACK_IMPORTED_MODULE_3__.connectToDatabase)();\n    const application = await _server_db_models_Application__WEBPACK_IMPORTED_MODULE_4__.Application.findById(parsed.data.applicationId);\n    if (!application) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Application not found.\"\n    }, {\n        status: 404\n    });\n    // This is the explicit human-in-the-loop gate: no application ever moves\n    // to \"sent\" without this endpoint being called by the candidate themselves.\n    application.status = parsed.data.decision === \"approve\" ? \"approved\" : \"rejected_by_candidate\";\n    if (parsed.data.decision === \"approve\") {\n        application.approvedAt = new Date();\n    }\n    await application.save();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        application\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FwcGxpY2F0aW9uL2FwcHJvdmUvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDWDtBQUNKO0FBQ2tCO0FBQ0U7QUFDckM7QUFFeEIsTUFBTU0sYUFBYUQsdUNBQVEsQ0FBQztJQUMxQkcsZUFBZUgsdUNBQVE7SUFDdkJLLFVBQVVMLHdDQUFNLENBQUM7UUFBQztRQUFXO0tBQVM7QUFDeEM7QUFFTyxlQUFlTyxLQUFLQyxHQUFnQjtJQUN6QyxNQUFNQyxVQUFVLE1BQU1iLDJEQUFnQkEsQ0FBQ0Msa0RBQVdBO0lBQ2xELElBQUksQ0FBQ1ksU0FBU0MsTUFBTSxPQUFPZixxREFBWUEsQ0FBQ2dCLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQWUsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFFdEYsTUFBTUMsU0FBU2IsV0FBV2MsU0FBUyxDQUFDLE1BQU1QLElBQUlHLElBQUk7SUFDbEQsSUFBSSxDQUFDRyxPQUFPRSxPQUFPLEVBQUUsT0FBT3JCLHFEQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBdUIsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFFL0YsTUFBTWYsd0VBQWlCQTtJQUV2QixNQUFNbUIsY0FBYyxNQUFNbEIsc0VBQVdBLENBQUNtQixRQUFRLENBQUNKLE9BQU9LLElBQUksQ0FBQ2hCLGFBQWE7SUFDeEUsSUFBSSxDQUFDYyxhQUFhLE9BQU90QixxREFBWUEsQ0FBQ2dCLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQXlCLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBRTlGLHlFQUF5RTtJQUN6RSw0RUFBNEU7SUFDNUVJLFlBQVlKLE1BQU0sR0FBR0MsT0FBT0ssSUFBSSxDQUFDZCxRQUFRLEtBQUssWUFBWSxhQUFhO0lBQ3ZFLElBQUlTLE9BQU9LLElBQUksQ0FBQ2QsUUFBUSxLQUFLLFdBQVc7UUFDdENZLFlBQVlHLFVBQVUsR0FBRyxJQUFJQztJQUMvQjtJQUNBLE1BQU1KLFlBQVlLLElBQUk7SUFFdEIsT0FBTzNCLHFEQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO1FBQUVNO0lBQVk7QUFDekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9oaXJlLy4vYXBwL2FwaS9hcHBsaWNhdGlvbi9hcHByb3ZlL3JvdXRlLnRzPzQwZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIkAvc2VydmVyL2RiL2Nvbm5lY3Rpb25cIjtcbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSBcIkAvc2VydmVyL2RiL21vZGVscy9BcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcblxuY29uc3QgQm9keVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgYXBwbGljYXRpb25JZDogei5zdHJpbmcoKSxcbiAgZGVjaXNpb246IHouZW51bShbXCJhcHByb3ZlXCIsIFwicmVqZWN0XCJdKVxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICBpZiAoIXNlc3Npb24/LnVzZXIpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG5cbiAgY29uc3QgcGFyc2VkID0gQm9keVNjaGVtYS5zYWZlUGFyc2UoYXdhaXQgcmVxLmpzb24oKSk7XG4gIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkludmFsaWQgcmVxdWVzdCBib2R5XCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcblxuICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gIGNvbnN0IGFwcGxpY2F0aW9uID0gYXdhaXQgQXBwbGljYXRpb24uZmluZEJ5SWQocGFyc2VkLmRhdGEuYXBwbGljYXRpb25JZCk7XG4gIGlmICghYXBwbGljYXRpb24pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkFwcGxpY2F0aW9uIG5vdCBmb3VuZC5cIiB9LCB7IHN0YXR1czogNDA0IH0pO1xuXG4gIC8vIFRoaXMgaXMgdGhlIGV4cGxpY2l0IGh1bWFuLWluLXRoZS1sb29wIGdhdGU6IG5vIGFwcGxpY2F0aW9uIGV2ZXIgbW92ZXNcbiAgLy8gdG8gXCJzZW50XCIgd2l0aG91dCB0aGlzIGVuZHBvaW50IGJlaW5nIGNhbGxlZCBieSB0aGUgY2FuZGlkYXRlIHRoZW1zZWx2ZXMuXG4gIGFwcGxpY2F0aW9uLnN0YXR1cyA9IHBhcnNlZC5kYXRhLmRlY2lzaW9uID09PSBcImFwcHJvdmVcIiA/IFwiYXBwcm92ZWRcIiA6IFwicmVqZWN0ZWRfYnlfY2FuZGlkYXRlXCI7XG4gIGlmIChwYXJzZWQuZGF0YS5kZWNpc2lvbiA9PT0gXCJhcHByb3ZlXCIpIHtcbiAgICBhcHBsaWNhdGlvbi5hcHByb3ZlZEF0ID0gbmV3IERhdGUoKTtcbiAgfVxuICBhd2FpdCBhcHBsaWNhdGlvbi5zYXZlKCk7XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgYXBwbGljYXRpb24gfSk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJBcHBsaWNhdGlvbiIsInoiLCJCb2R5U2NoZW1hIiwib2JqZWN0IiwiYXBwbGljYXRpb25JZCIsInN0cmluZyIsImRlY2lzaW9uIiwiZW51bSIsIlBPU1QiLCJyZXEiLCJzZXNzaW9uIiwidXNlciIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInBhcnNlZCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJhcHBsaWNhdGlvbiIsImZpbmRCeUlkIiwiZGF0YSIsImFwcHJvdmVkQXQiLCJEYXRlIiwic2F2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/application/approve/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _server_db_connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/server/db/connection */ \"(rsc)/./server/db/connection.ts\");\n/* harmony import */ var _server_db_models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/server/db/models/User */ \"(rsc)/./server/db/models/User.ts\");\n\n\n\n\nconst authOptions = {\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) return null;\n                await (0,_server_db_connection__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)();\n                const user = await _server_db_models_User__WEBPACK_IMPORTED_MODULE_3__.User.findOne({\n                    email: credentials.email.toLowerCase()\n                });\n                if (!user) return null;\n                const valid = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, user.passwordHash);\n                if (!valid) return null;\n                return {\n                    id: user._id.toString(),\n                    email: user.email,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDa0U7QUFDcEM7QUFDNkI7QUFDWjtBQUV4QyxNQUFNSSxjQUErQjtJQUMxQ0MsU0FBUztRQUFFQyxVQUFVO0lBQU07SUFDM0JDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFdBQVc7UUFDVFQsMkVBQW1CQSxDQUFDO1lBQ2xCVSxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQVE7Z0JBQ3ZDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsSUFBSSxDQUFDQSxhQUFhQyxTQUFTLENBQUNELGFBQWFJLFVBQVUsT0FBTztnQkFFMUQsTUFBTWIsd0VBQWlCQTtnQkFDdkIsTUFBTWUsT0FBTyxNQUFNZCx3REFBSUEsQ0FBQ2UsT0FBTyxDQUFDO29CQUFFTixPQUFPRCxZQUFZQyxLQUFLLENBQUNPLFdBQVc7Z0JBQUc7Z0JBQ3pFLElBQUksQ0FBQ0YsTUFBTSxPQUFPO2dCQUVsQixNQUFNRyxRQUFRLE1BQU1uQix1REFBYyxDQUFDVSxZQUFZSSxRQUFRLEVBQUVFLEtBQUtLLFlBQVk7Z0JBQzFFLElBQUksQ0FBQ0YsT0FBTyxPQUFPO2dCQUVuQixPQUFPO29CQUFFRyxJQUFJTixLQUFLTyxHQUFHLENBQUNDLFFBQVE7b0JBQUliLE9BQU9LLEtBQUtMLEtBQUs7b0JBQUVjLE1BQU1ULEtBQUtTLElBQUk7Z0JBQUM7WUFDdkU7UUFDRjtLQUNEO0lBQ0RDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRVosSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JZLE1BQU1OLEVBQUUsR0FBRyxLQUF5QkEsRUFBRTtnQkFDdENNLE1BQU1ILElBQUksR0FBRyxLQUEyQkEsSUFBSTtZQUM5QztZQUNBLE9BQU9HO1FBQ1Q7UUFDQSxNQUFNeEIsU0FBUSxFQUFFQSxPQUFPLEVBQUV3QixLQUFLLEVBQUU7WUFDOUIsSUFBSXhCLFFBQVFZLElBQUksRUFBRTtnQkFDZlosUUFBUVksSUFBSSxDQUFxQk0sRUFBRSxHQUFHTSxNQUFNTixFQUFFO2dCQUM5Q2xCLFFBQVFZLElBQUksQ0FBdUJTLElBQUksR0FBR0csTUFBTUgsSUFBSTtZQUN2RDtZQUNBLE9BQU9yQjtRQUNUO0lBQ0Y7SUFDQXlCLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUNyQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvaGlyZS8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCJAL3NlcnZlci9kYi9jb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkAvc2VydmVyL2RiL21vZGVscy9Vc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBzZXNzaW9uOiB7IHN0cmF0ZWd5OiBcImp3dFwiIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiBcIi9sb2dpblwiXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJjcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwudG9Mb3dlckNhc2UoKSB9KTtcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcblxuICAgICAgICBjb25zdCB2YWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkSGFzaCk7XG4gICAgICAgIGlmICghdmFsaWQpIHJldHVybiBudWxsO1xuXG4gICAgICAgIHJldHVybiB7IGlkOiB1c2VyLl9pZC50b1N0cmluZygpLCBlbWFpbDogdXNlci5lbWFpbCwgcm9sZTogdXNlci5yb2xlIH07XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSAodXNlciBhcyB7IGlkOiBzdHJpbmcgfSkuaWQ7XG4gICAgICAgIHRva2VuLnJvbGUgPSAodXNlciBhcyB7IHJvbGU6IHN0cmluZyB9KS5yb2xlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmIChzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgKHNlc3Npb24udXNlciBhcyB7IGlkPzogc3RyaW5nIH0pLmlkID0gdG9rZW4uaWQgYXMgc3RyaW5nO1xuICAgICAgICAoc2Vzc2lvbi51c2VyIGFzIHsgcm9sZT86IHN0cmluZyB9KS5yb2xlID0gdG9rZW4ucm9sZSBhcyBzdHJpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9XG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUXG59O1xuIl0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJjb25uZWN0VG9EYXRhYmFzZSIsIlVzZXIiLCJhdXRoT3B0aW9ucyIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwic2lnbkluIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kT25lIiwidG9Mb3dlckNhc2UiLCJ2YWxpZCIsImNvbXBhcmUiLCJwYXNzd29yZEhhc2giLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwicm9sZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./server/db/connection.ts":
/*!*********************************!*\
  !*** ./server/db/connection.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"MONGODB_URI is not defined. Add it to your .env.local file (see .env.example).\");\n}\nconst cache = global._mongooseCache || {\n    conn: null,\n    promise: null\n};\nglobal._mongooseCache = cache;\nasync function connectToDatabase() {\n    if (cache.conn) {\n        return cache.conn;\n    }\n    if (!cache.promise) {\n        cache.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            bufferCommands: false\n        });\n    }\n    cache.conn = await cache.promise;\n    return cache.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zZXJ2ZXIvZGIvY29ubmVjdGlvbi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0FBRTNDLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQ1I7QUFFSjtBQWlCQSxNQUFNQyxRQUF1QkMsT0FBT0MsY0FBYyxJQUFJO0lBQUVDLE1BQU07SUFBTUMsU0FBUztBQUFLO0FBQ2xGSCxPQUFPQyxjQUFjLEdBQUdGO0FBRWpCLGVBQWVLO0lBQ3BCLElBQUlMLE1BQU1HLElBQUksRUFBRTtRQUNkLE9BQU9ILE1BQU1HLElBQUk7SUFDbkI7SUFFQSxJQUFJLENBQUNILE1BQU1JLE9BQU8sRUFBRTtRQUNsQkosTUFBTUksT0FBTyxHQUFHVCx1REFBZ0IsQ0FBQ0MsYUFBYTtZQUM1Q1csZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFFQVAsTUFBTUcsSUFBSSxHQUFHLE1BQU1ILE1BQU1JLE9BQU87SUFDaEMsT0FBT0osTUFBTUcsSUFBSTtBQUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2hpcmUvLi9zZXJ2ZXIvZGIvY29ubmVjdGlvbi50cz9jZWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSBhcyBzdHJpbmc7XG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIFwiTU9OR09EQl9VUkkgaXMgbm90IGRlZmluZWQuIEFkZCBpdCB0byB5b3VyIC5lbnYubG9jYWwgZmlsZSAoc2VlIC5lbnYuZXhhbXBsZSkuXCJcbiAgKTtcbn1cblxuLyoqXG4gKiBOZXh0LmpzIGRldiBtb2RlIGhvdC1yZWxvYWRzIG1vZHVsZXMgb24gZXZlcnkgcmVxdWVzdCwgd2hpY2ggd291bGRcbiAqIG90aGVyd2lzZSBjcmVhdGUgYSBuZXcgTW9uZ29vc2UgY29ubmVjdGlvbiBlYWNoIHRpbWUuIFdlIGNhY2hlIHRoZVxuICogY29ubmVjdGlvbiBvbiB0aGUgZ2xvYmFsIG9iamVjdCB0byBhdm9pZCBjb25uZWN0aW9uIHN0b3Jtcy5cbiAqL1xuaW50ZXJmYWNlIE1vbmdvb3NlQ2FjaGUge1xuICBjb25uOiB0eXBlb2YgbW9uZ29vc2UgfCBudWxsO1xuICBwcm9taXNlOiBQcm9taXNlPHR5cGVvZiBtb25nb29zZT4gfCBudWxsO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcbiAgdmFyIF9tb25nb29zZUNhY2hlOiBNb25nb29zZUNhY2hlIHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBjYWNoZTogTW9uZ29vc2VDYWNoZSA9IGdsb2JhbC5fbW9uZ29vc2VDYWNoZSB8fCB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbmdsb2JhbC5fbW9uZ29vc2VDYWNoZSA9IGNhY2hlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKTogUHJvbWlzZTx0eXBlb2YgbW9uZ29vc2U+IHtcbiAgaWYgKGNhY2hlLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGUuY29ubjtcbiAgfVxuXG4gIGlmICghY2FjaGUucHJvbWlzZSkge1xuICAgIGNhY2hlLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCB7XG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIGNhY2hlLmNvbm4gPSBhd2FpdCBjYWNoZS5wcm9taXNlO1xuICByZXR1cm4gY2FjaGUuY29ubjtcbn1cbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGUiLCJnbG9iYWwiLCJfbW9uZ29vc2VDYWNoZSIsImNvbm4iLCJwcm9taXNlIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjb25uZWN0IiwiYnVmZmVyQ29tbWFuZHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./server/db/connection.ts\n");

/***/ }),

/***/ "(rsc)/./server/db/models/Application.ts":
/*!*****************************************!*\
  !*** ./server/db/models/Application.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Application: () => (/* binding */ Application)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ApplicationSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    candidateId: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"CandidateProfile\",\n        required: true\n    },\n    jobId: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"Job\",\n        required: true\n    },\n    status: {\n        type: String,\n        enum: [\n            \"draft\",\n            \"approved\",\n            \"rejected_by_candidate\",\n            \"sent\"\n        ],\n        default: \"draft\"\n    },\n    coverLetter: {\n        type: String,\n        required: true\n    },\n    factCheckNotes: {\n        type: [\n            String\n        ],\n        default: []\n    },\n    approvedAt: Date,\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst Application = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Application || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Application\", ApplicationSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zZXJ2ZXIvZGIvbW9kZWxzL0FwcGxpY2F0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRTtBQVlwRSxNQUFNRSxvQkFBb0IsSUFBSUQsNENBQU1BLENBQWU7SUFDakRFLGFBQWE7UUFBRUMsTUFBTUgsNENBQU1BLENBQUNJLEtBQUssQ0FBQ0MsUUFBUTtRQUFFQyxLQUFLO1FBQW9CQyxVQUFVO0lBQUs7SUFDcEZDLE9BQU87UUFBRUwsTUFBTUgsNENBQU1BLENBQUNJLEtBQUssQ0FBQ0MsUUFBUTtRQUFFQyxLQUFLO1FBQU9DLFVBQVU7SUFBSztJQUNqRUUsUUFBUTtRQUNOTixNQUFNTztRQUNOQyxNQUFNO1lBQUM7WUFBUztZQUFZO1lBQXlCO1NBQU87UUFDNURDLFNBQVM7SUFDWDtJQUNBQyxhQUFhO1FBQUVWLE1BQU1PO1FBQVFILFVBQVU7SUFBSztJQUM1Q08sZ0JBQWdCO1FBQUVYLE1BQU07WUFBQ087U0FBTztRQUFFRSxTQUFTLEVBQUU7SUFBQztJQUM5Q0csWUFBWUM7SUFDWkMsV0FBVztRQUFFZCxNQUFNYTtRQUFNSixTQUFTSSxLQUFLRSxHQUFHO0lBQUM7QUFDN0M7QUFFTyxNQUFNQyxjQUNYcEIsd0RBQWUsQ0FBQ29CLFdBQVcsSUFDM0JwQixxREFBYyxDQUFlLGVBQWVFLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2hpcmUvLi9zZXJ2ZXIvZGIvbW9kZWxzL0FwcGxpY2F0aW9uLnRzP2EwYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgTW9kZWwsIERvY3VtZW50LCBUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBcHBsaWNhdGlvbiBleHRlbmRzIERvY3VtZW50IHtcbiAgY2FuZGlkYXRlSWQ6IFR5cGVzLk9iamVjdElkO1xuICBqb2JJZDogVHlwZXMuT2JqZWN0SWQ7XG4gIHN0YXR1czogXCJkcmFmdFwiIHwgXCJhcHByb3ZlZFwiIHwgXCJyZWplY3RlZF9ieV9jYW5kaWRhdGVcIiB8IFwic2VudFwiO1xuICBjb3ZlckxldHRlcjogc3RyaW5nO1xuICBmYWN0Q2hlY2tOb3Rlczogc3RyaW5nW107IC8vIGNsYWltcyB2ZXJpZmllZCBhZ2FpbnN0IHByb2ZpbGUsIGZvciB0cmFuc3BhcmVuY3lcbiAgYXBwcm92ZWRBdD86IERhdGU7XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbn1cblxuY29uc3QgQXBwbGljYXRpb25TY2hlbWEgPSBuZXcgU2NoZW1hPElBcHBsaWNhdGlvbj4oe1xuICBjYW5kaWRhdGVJZDogeyB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogXCJDYW5kaWRhdGVQcm9maWxlXCIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGpvYklkOiB7IHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiBcIkpvYlwiLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBzdGF0dXM6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZW51bTogW1wiZHJhZnRcIiwgXCJhcHByb3ZlZFwiLCBcInJlamVjdGVkX2J5X2NhbmRpZGF0ZVwiLCBcInNlbnRcIl0sXG4gICAgZGVmYXVsdDogXCJkcmFmdFwiXG4gIH0sXG4gIGNvdmVyTGV0dGVyOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgZmFjdENoZWNrTm90ZXM6IHsgdHlwZTogW1N0cmluZ10sIGRlZmF1bHQ6IFtdIH0sXG4gIGFwcHJvdmVkQXQ6IERhdGUsXG4gIGNyZWF0ZWRBdDogeyB0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vdyB9XG59KTtcblxuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aW9uOiBNb2RlbDxJQXBwbGljYXRpb24+ID1cbiAgbW9uZ29vc2UubW9kZWxzLkFwcGxpY2F0aW9uIHx8XG4gIG1vbmdvb3NlLm1vZGVsPElBcHBsaWNhdGlvbj4oXCJBcHBsaWNhdGlvblwiLCBBcHBsaWNhdGlvblNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJBcHBsaWNhdGlvblNjaGVtYSIsImNhbmRpZGF0ZUlkIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJyZXF1aXJlZCIsImpvYklkIiwic3RhdHVzIiwiU3RyaW5nIiwiZW51bSIsImRlZmF1bHQiLCJjb3ZlckxldHRlciIsImZhY3RDaGVja05vdGVzIiwiYXBwcm92ZWRBdCIsIkRhdGUiLCJjcmVhdGVkQXQiLCJub3ciLCJBcHBsaWNhdGlvbiIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./server/db/models/Application.ts\n");

/***/ }),

/***/ "(rsc)/./server/db/models/User.ts":
/*!**********************************!*\
  !*** ./server/db/models/User.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        lowercase: true,\n        trim: true\n    },\n    passwordHash: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        enum: [\n            \"candidate\",\n            \"admin\"\n        ],\n        default: \"candidate\"\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zZXJ2ZXIvZGIvbW9kZWxzL1VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZEO0FBUzdELE1BQU1FLGFBQWEsSUFBSUQsNENBQU1BLENBQVE7SUFDbkNFLE9BQU87UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtRQUFNQyxRQUFRO1FBQU1DLFdBQVc7UUFBTUMsTUFBTTtJQUFLO0lBQ2pGQyxjQUFjO1FBQUVOLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUM3Q0ssTUFBTTtRQUFFUCxNQUFNQztRQUFRTyxNQUFNO1lBQUM7WUFBYTtTQUFRO1FBQUVDLFNBQVM7SUFBWTtJQUN6RUMsV0FBVztRQUFFVixNQUFNVztRQUFNRixTQUFTRSxLQUFLQyxHQUFHO0lBQUM7QUFDN0M7QUFFTyxNQUFNQyxPQUNYakIsd0RBQWUsQ0FBQ2lCLElBQUksSUFBSWpCLHFEQUFjLENBQVEsUUFBUUUsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2hpcmUvLi9zZXJ2ZXIvZGIvbW9kZWxzL1VzZXIudHM/NWIxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBNb2RlbCwgRG9jdW1lbnQgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlciBleHRlbmRzIERvY3VtZW50IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmRIYXNoOiBzdHJpbmc7XG4gIHJvbGU6IFwiY2FuZGlkYXRlXCIgfCBcImFkbWluXCI7XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbn1cblxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWE8SVVzZXI+KHtcbiAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlLCBsb3dlcmNhc2U6IHRydWUsIHRyaW06IHRydWUgfSxcbiAgcGFzc3dvcmRIYXNoOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgcm9sZTogeyB0eXBlOiBTdHJpbmcsIGVudW06IFtcImNhbmRpZGF0ZVwiLCBcImFkbWluXCJdLCBkZWZhdWx0OiBcImNhbmRpZGF0ZVwiIH0sXG4gIGNyZWF0ZWRBdDogeyB0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vdyB9XG59KTtcblxuZXhwb3J0IGNvbnN0IFVzZXI6IE1vZGVsPElVc2VyPiA9XG4gIG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsPElVc2VyPihcIlVzZXJcIiwgVXNlclNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJVc2VyU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJsb3dlcmNhc2UiLCJ0cmltIiwicGFzc3dvcmRIYXNoIiwicm9sZSIsImVudW0iLCJkZWZhdWx0IiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./server/db/models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/zod","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fapplication%2Fapprove%2Froute&page=%2Fapi%2Fapplication%2Fapprove%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fapplication%2Fapprove%2Froute.ts&appDir=C%3A%5CUsers%5CDADAbhai.traders%5CDownloads%5Cprohire-complete%5Cprohire%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDADAbhai.traders%5CDownloads%5Cprohire-complete%5Cprohire&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();