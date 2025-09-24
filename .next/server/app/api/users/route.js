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
exports.id = "app/api/users/route";
exports.ids = ["app/api/users/route"];
exports.modules = {

/***/ "(rsc)/./app/api/users/route.ts":
/*!********************************!*\
  !*** ./app/api/users/route.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pg */ \"pg\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pg__WEBPACK_IMPORTED_MODULE_1__]);\npg__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_1__.Pool({\n    connectionString: process.env.DATABASE_URL,\n    ssl: {\n        rejectUnauthorized: false\n    }\n});\nasync function GET() {\n    try {\n        const result = await pool.query('SELECT id, email, name, role, created_at, last_sign_in_at FROM users ORDER BY created_at DESC');\n        console.log('Fetched users:', result.rows);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            data: result.rows\n        });\n    } catch (error) {\n        console.error('Get users error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: 'Lỗi khi lấy danh sách người dùng'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const userData = await request.json();\n        const result = await pool.query('INSERT INTO users (email, name, role) VALUES ($1, $2, $3) RETURNING *', [\n            userData.email,\n            userData.name,\n            userData.role || 'student'\n        ]);\n        const newUser = result.rows[0];\n        console.log(`✅ Created user: ${newUser.name} (${newUser.email})`);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            data: newUser\n        });\n    } catch (error) {\n        console.error('Create user error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: 'Tạo người dùng thất bại'\n        }, {\n            status: 400\n        });\n    }\n}\nasync function PUT(request) {\n    try {\n        const { id, role } = await request.json();\n        if (!id || !role) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: 'ID và role là bắt buộc'\n            }, {\n                status: 400\n            });\n        }\n        const result = await pool.query('UPDATE users SET role = $1 WHERE id = $2 RETURNING *', [\n            role,\n            id\n        ]);\n        if (result.rows.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: 'Người dùng không tồn tại'\n            }, {\n                status: 404\n            });\n        }\n        console.log(`✅ Updated user ${id} role to ${role}`);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            data: result.rows[0],\n            message: 'Cập nhật quyền thành công!'\n        });\n    } catch (error) {\n        console.error('Update user error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: 'Cập nhật quyền thất bại'\n        }, {\n            status: 400\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGhhaXRcXERvd25sb2Fkc1xcSmFwYW5fUHJvX1BsdXMtbWFpblxcSmFwYW5fUHJvX1BsdXMtbWFpblxcYXBwXFxhcGlcXHVzZXJzXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgUG9vbCB9IGZyb20gJ3BnJztcblxuY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcbiAgY29ubmVjdGlvblN0cmluZzogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLFxuICBzc2w6IHsgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSB9LFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICdTRUxFQ1QgaWQsIGVtYWlsLCBuYW1lLCByb2xlLCBjcmVhdGVkX2F0LCBsYXN0X3NpZ25faW5fYXQgRlJPTSB1c2VycyBPUkRFUiBCWSBjcmVhdGVkX2F0IERFU0MnXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZygnRmV0Y2hlZCB1c2VyczonLCByZXN1bHQucm93cyk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiByZXN1bHQucm93cyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdHZXQgdXNlcnMgZXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTOG7l2kga2hpIGzhuqV5IGRhbmggc8OhY2ggbmfGsOG7nWkgZMO5bmcnIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ0lOU0VSVCBJTlRPIHVzZXJzIChlbWFpbCwgbmFtZSwgcm9sZSkgVkFMVUVTICgkMSwgJDIsICQzKSBSRVRVUk5JTkcgKicsXG4gICAgICBbdXNlckRhdGEuZW1haWwsIHVzZXJEYXRhLm5hbWUsIHVzZXJEYXRhLnJvbGUgfHwgJ3N0dWRlbnQnXVxuICAgICk7XG4gICAgY29uc3QgbmV3VXNlciA9IHJlc3VsdC5yb3dzWzBdO1xuICAgIGNvbnNvbGUubG9nKGDinIUgQ3JlYXRlZCB1c2VyOiAke25ld1VzZXIubmFtZX0gKCR7bmV3VXNlci5lbWFpbH0pYCk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiBuZXdVc2VyLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NyZWF0ZSB1c2VyIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1ThuqFvIG5nxrDhu51pIGTDuW5nIHRo4bqldCBi4bqhaScgfSxcbiAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgaWQsIHJvbGUgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIGlmICghaWQgfHwgIXJvbGUpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJRCB2w6Agcm9sZSBsw6AgYuG6r3QgYnXhu5ljJyB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAnVVBEQVRFIHVzZXJzIFNFVCByb2xlID0gJDEgV0hFUkUgaWQgPSAkMiBSRVRVUk5JTkcgKicsXG4gICAgICBbcm9sZSwgaWRdXG4gICAgKTtcbiAgICBpZiAocmVzdWx0LnJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTmfGsOG7nWkgZMO5bmcga2jDtG5nIHThu5NuIHThuqFpJyB9LFxuICAgICAgICB7IHN0YXR1czogNDA0IH1cbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGDinIUgVXBkYXRlZCB1c2VyICR7aWR9IHJvbGUgdG8gJHtyb2xlfWApO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogcmVzdWx0LnJvd3NbMF0sXG4gICAgICBtZXNzYWdlOiAnQ+G6rXAgbmjhuq10IHF1eeG7gW4gdGjDoG5oIGPDtG5nIScsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignVXBkYXRlIHVzZXIgZXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ+G6rXAgbmjhuq10IHF1eeG7gW4gdGjhuqV0IGLhuqFpJyB9LFxuICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJQb29sIiwicG9vbCIsImNvbm5lY3Rpb25TdHJpbmciLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwic3NsIiwicmVqZWN0VW5hdXRob3JpemVkIiwiR0VUIiwicmVzdWx0IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwicm93cyIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsImVycm9yIiwic3RhdHVzIiwiUE9TVCIsInJlcXVlc3QiLCJ1c2VyRGF0YSIsImVtYWlsIiwibmFtZSIsInJvbGUiLCJuZXdVc2VyIiwiUFVUIiwiaWQiLCJsZW5ndGgiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/users/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5Cthait%5CDownloads%5CJapan_Pro_Plus-main%5CJapan_Pro_Plus-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cthait%5CDownloads%5CJapan_Pro_Plus-main%5CJapan_Pro_Plus-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5Cthait%5CDownloads%5CJapan_Pro_Plus-main%5CJapan_Pro_Plus-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cthait%5CDownloads%5CJapan_Pro_Plus-main%5CJapan_Pro_Plus-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_thait_Downloads_Japan_Pro_Plus_main_Japan_Pro_Plus_main_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/users/route.ts */ \"(rsc)/./app/api/users/route.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([C_Users_thait_Downloads_Japan_Pro_Plus_main_Japan_Pro_Plus_main_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__]);\nC_Users_thait_Downloads_Japan_Pro_Plus_main_Japan_Pro_Plus_main_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/route\",\n        pathname: \"/api/users\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\thait\\\\Downloads\\\\Japan_Pro_Plus-main\\\\Japan_Pro_Plus-main\\\\app\\\\api\\\\users\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_thait_Downloads_Japan_Pro_Plus_main_Japan_Pro_Plus_main_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN0aGFpdCU1Q0Rvd25sb2FkcyU1Q0phcGFuX1Byb19QbHVzLW1haW4lNUNKYXBhbl9Qcm9fUGx1cy1tYWluJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUN0aGFpdCU1Q0Rvd25sb2FkcyU1Q0phcGFuX1Byb19QbHVzLW1haW4lNUNKYXBhbl9Qcm9fUGx1cy1tYWluJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNnRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYscUMiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcdGhhaXRcXFxcRG93bmxvYWRzXFxcXEphcGFuX1Byb19QbHVzLW1haW5cXFxcSmFwYW5fUHJvX1BsdXMtbWFpblxcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2Vycy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXJzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2Vycy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHRoYWl0XFxcXERvd25sb2Fkc1xcXFxKYXBhbl9Qcm9fUGx1cy1tYWluXFxcXEphcGFuX1Byb19QbHVzLW1haW5cXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5Cthait%5CDownloads%5CJapan_Pro_Plus-main%5CJapan_Pro_Plus-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cthait%5CDownloads%5CJapan_Pro_Plus-main%5CJapan_Pro_Plus-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = import("pg");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5Cthait%5CDownloads%5CJapan_Pro_Plus-main%5CJapan_Pro_Plus-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cthait%5CDownloads%5CJapan_Pro_Plus-main%5CJapan_Pro_Plus-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();