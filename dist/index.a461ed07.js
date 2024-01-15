// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5q7iH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "64e81e37a461ed07";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"eCcd0":[function(require,module,exports) {
var _three = require("three");
var _gltfloader = require("three/examples/jsm/loaders/GLTFLoader");
var _objloader = require("three/examples/jsm/loaders/OBJLoader");
var _mtlloader = require("three/examples/jsm/loaders/MTLLoader");
var _orbitControlsJs = require("three/examples/jsm/controls/OrbitControls.js");
// Setup
const scene = new _three.Scene();
const renderer = new _three.WebGLRenderer({
    canvas: document.querySelector("#bg")
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// set background as clear color
scene.background = new _three.Color("darkGrey");
const camera = new _three.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 4, 7); // Adjust the position to a higher point
camera.lookAt(scene.position);
// Setup lights
const ambientLight = new _three.AmbientLight("white", 1);
scene.add(ambientLight);
const directionalLight = new _three.DirectionalLight(0xFFFFFF, 10);
directionalLight.position.set(0, 1, 10);
scene.add(directionalLight);
const directionalLight2 = new _three.DirectionalLight(0xFFFFFF, 10);
directionalLight2.position.set(0, 1, -10);
scene.add(directionalLight2);
renderer.render(scene, camera);
// // Load the car model
const loader = new (0, _gltfloader.GLTFLoader)();
let carModel;
// loader.load('./assets/carRB.glb', (gltf) => {
//   carModel = gltf.scene;
//   scene.add(carModel);
//   carModel.traverse(function (child) {
//    if (child.isMesh) {
//       child.castShadow = true;
//       child.material.metalness = 1;
//       child.material.roughness = 0.2;
//    }});
//   // Adjust the car position, scale, or rotation if needed
//   carModel.position.set(-2.5, 0.5, -5);
//   carModel.scale.set(0.02, 0.02, 0.02);
//   carModel.rotation.set(0, 219, 0);
// });
const loader2 = new (0, _gltfloader.GLTFLoader)();
let carModel2;
loader2.load("./assets/garage.glb", (gltf)=>{
    carModel2 = gltf.scene;
    scene.add(carModel2);
    const mixer = new _three.AnimationMixer(carModel2);
    // Assuming there is only one animation clip, you can access it like this
    const animationClip = gltf.animations[0];
    // Create an AnimationAction
    const action = mixer.clipAction(animationClip);
    // Play the animation
    action.play();
    // Store the mixer and action for later updates
    carModel2.mixer = mixer;
    carModel2.animationAction = action;
    carModel2.traverse(function(child) {
        if (child.isMesh) {
            child.castShadow = true;
            child.material.roughness = 0.5;
        }
    });
    // Adjust the car position, scale, or rotation if needed
    carModel2.position.set(0, 0, -10);
    carModel2.scale.set(0.1, 0.1, 0.1);
    carModel2.rotation.set(0, 282, 0);
});
//Load obj file
// const loader1 = new OBJLoader()
// const mtlLoader = new MTLLoader();
// let carModel1;
// const onProgress = function ( xhr ) {
//   if ( xhr.lengthComputable ) {
//     const percentComplete = xhr.loaded / xhr.total * 100;
//     console.log( percentComplete.toFixed( 2 ) + '% downloaded' );
//   }
// };
// mtlLoader.load('./assets/Formula_1_mesh.mtl', (materials) => {
//   materials.preload();
//   materials.side = THREE.DoubleSide;
//   console.log(materials);
//   new OBJLoader().setMaterials(materials).setPath('./assets/').load('Formula_1_mesh.obj', (obj) => {
//     carModel1 = obj;
//     // Adjust the car position, scale, or rotation if needed
//     carModel1.position.set(-3, 0.5, -5);
//     carModel1.scale.set(0.01, 0.01, 0.01);
//     carModel1.rotation.set(0, 180, 0);
//     scene.add(carModel1);
//   },onProgress);
// });
// Scroll Animation
function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    camera.position.z = t * -1;
    camera.position.x = t * -2;
    camera.rotation.y = t * -2;
}
document.body.onscroll = moveCamera;
moveCamera();
// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    // if (carModel) {
    //   // Rotate the car model
    //   carModel.rotation.y += 0.005;
    // }
    // if (carModel2) {
    //   // Rotate the car model
    //   carModel2.rotation.y += -0.005;
    // }
    if (carModel2 && carModel2.mixer) carModel2.mixer.update(0.016); // Pass the time delta
    renderer.render(scene, camera);
}
animate();

},{"three":"ktPTu","three/examples/jsm/loaders/GLTFLoader":"dVRsF","three/examples/jsm/loaders/OBJLoader":"htIhD","three/examples/jsm/loaders/MTLLoader":"im57q","three/examples/jsm/controls/OrbitControls.js":"7mqRv"}],"htIhD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OBJLoader", ()=>OBJLoader);
var _three = require("three");
// o object_name | g group_name
const _object_pattern = /^[og]\s*(.+)?/;
// mtllib file_reference
const _material_library_pattern = /^mtllib /;
// usemtl material_name
const _material_use_pattern = /^usemtl /;
// usemap map_name
const _map_use_pattern = /^usemap /;
const _face_vertex_data_separator_pattern = /\s+/;
const _vA = new (0, _three.Vector3)();
const _vB = new (0, _three.Vector3)();
const _vC = new (0, _three.Vector3)();
const _ab = new (0, _three.Vector3)();
const _cb = new (0, _three.Vector3)();
const _color = new (0, _three.Color)();
function ParserState() {
    const state = {
        objects: [],
        object: {},
        vertices: [],
        normals: [],
        colors: [],
        uvs: [],
        materials: {},
        materialLibraries: [],
        startObject: function(name, fromDeclaration) {
            // If the current object (initial from reset) is not from a g/o declaration in the parsed
            // file. We need to use it for the first parsed g/o to keep things in sync.
            if (this.object && this.object.fromDeclaration === false) {
                this.object.name = name;
                this.object.fromDeclaration = fromDeclaration !== false;
                return;
            }
            const previousMaterial = this.object && typeof this.object.currentMaterial === "function" ? this.object.currentMaterial() : undefined;
            if (this.object && typeof this.object._finalize === "function") this.object._finalize(true);
            this.object = {
                name: name || "",
                fromDeclaration: fromDeclaration !== false,
                geometry: {
                    vertices: [],
                    normals: [],
                    colors: [],
                    uvs: [],
                    hasUVIndices: false
                },
                materials: [],
                smooth: true,
                startMaterial: function(name, libraries) {
                    const previous = this._finalize(false);
                    // New usemtl declaration overwrites an inherited material, except if faces were declared
                    // after the material, then it must be preserved for proper MultiMaterial continuation.
                    if (previous && (previous.inherited || previous.groupCount <= 0)) this.materials.splice(previous.index, 1);
                    const material = {
                        index: this.materials.length,
                        name: name || "",
                        mtllib: Array.isArray(libraries) && libraries.length > 0 ? libraries[libraries.length - 1] : "",
                        smooth: previous !== undefined ? previous.smooth : this.smooth,
                        groupStart: previous !== undefined ? previous.groupEnd : 0,
                        groupEnd: -1,
                        groupCount: -1,
                        inherited: false,
                        clone: function(index) {
                            const cloned = {
                                index: typeof index === "number" ? index : this.index,
                                name: this.name,
                                mtllib: this.mtllib,
                                smooth: this.smooth,
                                groupStart: 0,
                                groupEnd: -1,
                                groupCount: -1,
                                inherited: false
                            };
                            cloned.clone = this.clone.bind(cloned);
                            return cloned;
                        }
                    };
                    this.materials.push(material);
                    return material;
                },
                currentMaterial: function() {
                    if (this.materials.length > 0) return this.materials[this.materials.length - 1];
                    return undefined;
                },
                _finalize: function(end) {
                    const lastMultiMaterial = this.currentMaterial();
                    if (lastMultiMaterial && lastMultiMaterial.groupEnd === -1) {
                        lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
                        lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
                        lastMultiMaterial.inherited = false;
                    }
                    // Ignore objects tail materials if no face declarations followed them before a new o/g started.
                    if (end && this.materials.length > 1) {
                        for(let mi = this.materials.length - 1; mi >= 0; mi--)if (this.materials[mi].groupCount <= 0) this.materials.splice(mi, 1);
                    }
                    // Guarantee at least one empty material, this makes the creation later more straight forward.
                    if (end && this.materials.length === 0) this.materials.push({
                        name: "",
                        smooth: this.smooth
                    });
                    return lastMultiMaterial;
                }
            };
            // Inherit previous objects material.
            // Spec tells us that a declared material must be set to all objects until a new material is declared.
            // If a usemtl declaration is encountered while this new object is being parsed, it will
            // overwrite the inherited material. Exception being that there was already face declarations
            // to the inherited material, then it will be preserved for proper MultiMaterial continuation.
            if (previousMaterial && previousMaterial.name && typeof previousMaterial.clone === "function") {
                const declared = previousMaterial.clone(0);
                declared.inherited = true;
                this.object.materials.push(declared);
            }
            this.objects.push(this.object);
        },
        finalize: function() {
            if (this.object && typeof this.object._finalize === "function") this.object._finalize(true);
        },
        parseVertexIndex: function(value, len) {
            const index = parseInt(value, 10);
            return (index >= 0 ? index - 1 : index + len / 3) * 3;
        },
        parseNormalIndex: function(value, len) {
            const index = parseInt(value, 10);
            return (index >= 0 ? index - 1 : index + len / 3) * 3;
        },
        parseUVIndex: function(value, len) {
            const index = parseInt(value, 10);
            return (index >= 0 ? index - 1 : index + len / 2) * 2;
        },
        addVertex: function(a, b, c) {
            const src = this.vertices;
            const dst = this.object.geometry.vertices;
            dst.push(src[a + 0], src[a + 1], src[a + 2]);
            dst.push(src[b + 0], src[b + 1], src[b + 2]);
            dst.push(src[c + 0], src[c + 1], src[c + 2]);
        },
        addVertexPoint: function(a) {
            const src = this.vertices;
            const dst = this.object.geometry.vertices;
            dst.push(src[a + 0], src[a + 1], src[a + 2]);
        },
        addVertexLine: function(a) {
            const src = this.vertices;
            const dst = this.object.geometry.vertices;
            dst.push(src[a + 0], src[a + 1], src[a + 2]);
        },
        addNormal: function(a, b, c) {
            const src = this.normals;
            const dst = this.object.geometry.normals;
            dst.push(src[a + 0], src[a + 1], src[a + 2]);
            dst.push(src[b + 0], src[b + 1], src[b + 2]);
            dst.push(src[c + 0], src[c + 1], src[c + 2]);
        },
        addFaceNormal: function(a, b, c) {
            const src = this.vertices;
            const dst = this.object.geometry.normals;
            _vA.fromArray(src, a);
            _vB.fromArray(src, b);
            _vC.fromArray(src, c);
            _cb.subVectors(_vC, _vB);
            _ab.subVectors(_vA, _vB);
            _cb.cross(_ab);
            _cb.normalize();
            dst.push(_cb.x, _cb.y, _cb.z);
            dst.push(_cb.x, _cb.y, _cb.z);
            dst.push(_cb.x, _cb.y, _cb.z);
        },
        addColor: function(a, b, c) {
            const src = this.colors;
            const dst = this.object.geometry.colors;
            if (src[a] !== undefined) dst.push(src[a + 0], src[a + 1], src[a + 2]);
            if (src[b] !== undefined) dst.push(src[b + 0], src[b + 1], src[b + 2]);
            if (src[c] !== undefined) dst.push(src[c + 0], src[c + 1], src[c + 2]);
        },
        addUV: function(a, b, c) {
            const src = this.uvs;
            const dst = this.object.geometry.uvs;
            dst.push(src[a + 0], src[a + 1]);
            dst.push(src[b + 0], src[b + 1]);
            dst.push(src[c + 0], src[c + 1]);
        },
        addDefaultUV: function() {
            const dst = this.object.geometry.uvs;
            dst.push(0, 0);
            dst.push(0, 0);
            dst.push(0, 0);
        },
        addUVLine: function(a) {
            const src = this.uvs;
            const dst = this.object.geometry.uvs;
            dst.push(src[a + 0], src[a + 1]);
        },
        addFace: function(a, b, c, ua, ub, uc, na, nb, nc) {
            const vLen = this.vertices.length;
            let ia = this.parseVertexIndex(a, vLen);
            let ib = this.parseVertexIndex(b, vLen);
            let ic = this.parseVertexIndex(c, vLen);
            this.addVertex(ia, ib, ic);
            this.addColor(ia, ib, ic);
            // normals
            if (na !== undefined && na !== "") {
                const nLen = this.normals.length;
                ia = this.parseNormalIndex(na, nLen);
                ib = this.parseNormalIndex(nb, nLen);
                ic = this.parseNormalIndex(nc, nLen);
                this.addNormal(ia, ib, ic);
            } else this.addFaceNormal(ia, ib, ic);
            // uvs
            if (ua !== undefined && ua !== "") {
                const uvLen = this.uvs.length;
                ia = this.parseUVIndex(ua, uvLen);
                ib = this.parseUVIndex(ub, uvLen);
                ic = this.parseUVIndex(uc, uvLen);
                this.addUV(ia, ib, ic);
                this.object.geometry.hasUVIndices = true;
            } else // add placeholder values (for inconsistent face definitions)
            this.addDefaultUV();
        },
        addPointGeometry: function(vertices) {
            this.object.geometry.type = "Points";
            const vLen = this.vertices.length;
            for(let vi = 0, l = vertices.length; vi < l; vi++){
                const index = this.parseVertexIndex(vertices[vi], vLen);
                this.addVertexPoint(index);
                this.addColor(index);
            }
        },
        addLineGeometry: function(vertices, uvs) {
            this.object.geometry.type = "Line";
            const vLen = this.vertices.length;
            const uvLen = this.uvs.length;
            for(let vi = 0, l = vertices.length; vi < l; vi++)this.addVertexLine(this.parseVertexIndex(vertices[vi], vLen));
            for(let uvi = 0, l = uvs.length; uvi < l; uvi++)this.addUVLine(this.parseUVIndex(uvs[uvi], uvLen));
        }
    };
    state.startObject("", false);
    return state;
}
//
class OBJLoader extends (0, _three.Loader) {
    constructor(manager){
        super(manager);
        this.materials = null;
    }
    load(url, onLoad, onProgress, onError) {
        const scope = this;
        const loader = new (0, _three.FileLoader)(this.manager);
        loader.setPath(this.path);
        loader.setRequestHeader(this.requestHeader);
        loader.setWithCredentials(this.withCredentials);
        loader.load(url, function(text) {
            try {
                onLoad(scope.parse(text));
            } catch (e) {
                if (onError) onError(e);
                else console.error(e);
                scope.manager.itemError(url);
            }
        }, onProgress, onError);
    }
    setMaterials(materials) {
        this.materials = materials;
        return this;
    }
    parse(text) {
        const state = new ParserState();
        if (text.indexOf("\r\n") !== -1) // This is faster than String.split with regex that splits on both
        text = text.replace(/\r\n/g, "\n");
        if (text.indexOf("\\\n") !== -1) // join lines separated by a line continuation character (\)
        text = text.replace(/\\\n/g, "");
        const lines = text.split("\n");
        let result = [];
        for(let i = 0, l = lines.length; i < l; i++){
            const line = lines[i].trimStart();
            if (line.length === 0) continue;
            const lineFirstChar = line.charAt(0);
            // @todo invoke passed in handler if any
            if (lineFirstChar === "#") continue; // skip comments
            if (lineFirstChar === "v") {
                const data = line.split(_face_vertex_data_separator_pattern);
                switch(data[0]){
                    case "v":
                        state.vertices.push(parseFloat(data[1]), parseFloat(data[2]), parseFloat(data[3]));
                        if (data.length >= 7) {
                            _color.setRGB(parseFloat(data[4]), parseFloat(data[5]), parseFloat(data[6])).convertSRGBToLinear();
                            state.colors.push(_color.r, _color.g, _color.b);
                        } else // if no colors are defined, add placeholders so color and vertex indices match
                        state.colors.push(undefined, undefined, undefined);
                        break;
                    case "vn":
                        state.normals.push(parseFloat(data[1]), parseFloat(data[2]), parseFloat(data[3]));
                        break;
                    case "vt":
                        state.uvs.push(parseFloat(data[1]), parseFloat(data[2]));
                        break;
                }
            } else if (lineFirstChar === "f") {
                const lineData = line.slice(1).trim();
                const vertexData = lineData.split(_face_vertex_data_separator_pattern);
                const faceVertices = [];
                // Parse the face vertex data into an easy to work with format
                for(let j = 0, jl = vertexData.length; j < jl; j++){
                    const vertex = vertexData[j];
                    if (vertex.length > 0) {
                        const vertexParts = vertex.split("/");
                        faceVertices.push(vertexParts);
                    }
                }
                // Draw an edge between the first vertex and all subsequent vertices to form an n-gon
                const v1 = faceVertices[0];
                for(let j = 1, jl = faceVertices.length - 1; j < jl; j++){
                    const v2 = faceVertices[j];
                    const v3 = faceVertices[j + 1];
                    state.addFace(v1[0], v2[0], v3[0], v1[1], v2[1], v3[1], v1[2], v2[2], v3[2]);
                }
            } else if (lineFirstChar === "l") {
                const lineParts = line.substring(1).trim().split(" ");
                let lineVertices = [];
                const lineUVs = [];
                if (line.indexOf("/") === -1) lineVertices = lineParts;
                else for(let li = 0, llen = lineParts.length; li < llen; li++){
                    const parts = lineParts[li].split("/");
                    if (parts[0] !== "") lineVertices.push(parts[0]);
                    if (parts[1] !== "") lineUVs.push(parts[1]);
                }
                state.addLineGeometry(lineVertices, lineUVs);
            } else if (lineFirstChar === "p") {
                const lineData = line.slice(1).trim();
                const pointData = lineData.split(" ");
                state.addPointGeometry(pointData);
            } else if ((result = _object_pattern.exec(line)) !== null) {
                // o object_name
                // or
                // g group_name
                // WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
                // let name = result[ 0 ].slice( 1 ).trim();
                const name = (" " + result[0].slice(1).trim()).slice(1);
                state.startObject(name);
            } else if (_material_use_pattern.test(line)) // material
            state.object.startMaterial(line.substring(7).trim(), state.materialLibraries);
            else if (_material_library_pattern.test(line)) // mtl file
            state.materialLibraries.push(line.substring(7).trim());
            else if (_map_use_pattern.test(line)) // the line is parsed but ignored since the loader assumes textures are defined MTL files
            // (according to https://www.okino.com/conv/imp_wave.htm, 'usemap' is the old-style Wavefront texture reference method)
            console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
            else if (lineFirstChar === "s") {
                result = line.split(" ");
                // smooth shading
                // @todo Handle files that have varying smooth values for a set of faces inside one geometry,
                // but does not define a usemtl for each face set.
                // This should be detected and a dummy material created (later MultiMaterial and geometry groups).
                // This requires some care to not create extra material on each smooth value for "normal" obj files.
                // where explicit usemtl defines geometry groups.
                // Example asset: examples/models/obj/cerberus/Cerberus.obj
                /*
					 * http://paulbourke.net/dataformats/obj/
					 *
					 * From chapter "Grouping" Syntax explanation "s group_number":
					 * "group_number is the smoothing group number. To turn off smoothing groups, use a value of 0 or off.
					 * Polygonal elements use group numbers to put elements in different smoothing groups. For free-form
					 * surfaces, smoothing groups are either turned on or off; there is no difference between values greater
					 * than 0."
					 */ if (result.length > 1) {
                    const value = result[1].trim().toLowerCase();
                    state.object.smooth = value !== "0" && value !== "off";
                } else // ZBrush can produce "s" lines #11707
                state.object.smooth = true;
                const material = state.object.currentMaterial();
                if (material) material.smooth = state.object.smooth;
            } else {
                // Handle null terminated files without exception
                if (line === "\x00") continue;
                console.warn('THREE.OBJLoader: Unexpected line: "' + line + '"');
            }
        }
        state.finalize();
        const container = new (0, _three.Group)();
        container.materialLibraries = [].concat(state.materialLibraries);
        const hasPrimitives = !(state.objects.length === 1 && state.objects[0].geometry.vertices.length === 0);
        if (hasPrimitives === true) for(let i = 0, l = state.objects.length; i < l; i++){
            const object = state.objects[i];
            const geometry = object.geometry;
            const materials = object.materials;
            const isLine = geometry.type === "Line";
            const isPoints = geometry.type === "Points";
            let hasVertexColors = false;
            // Skip o/g line declarations that did not follow with any faces
            if (geometry.vertices.length === 0) continue;
            const buffergeometry = new (0, _three.BufferGeometry)();
            buffergeometry.setAttribute("position", new (0, _three.Float32BufferAttribute)(geometry.vertices, 3));
            if (geometry.normals.length > 0) buffergeometry.setAttribute("normal", new (0, _three.Float32BufferAttribute)(geometry.normals, 3));
            if (geometry.colors.length > 0) {
                hasVertexColors = true;
                buffergeometry.setAttribute("color", new (0, _three.Float32BufferAttribute)(geometry.colors, 3));
            }
            if (geometry.hasUVIndices === true) buffergeometry.setAttribute("uv", new (0, _three.Float32BufferAttribute)(geometry.uvs, 2));
            // Create materials
            const createdMaterials = [];
            for(let mi = 0, miLen = materials.length; mi < miLen; mi++){
                const sourceMaterial = materials[mi];
                const materialHash = sourceMaterial.name + "_" + sourceMaterial.smooth + "_" + hasVertexColors;
                let material = state.materials[materialHash];
                if (this.materials !== null) {
                    material = this.materials.create(sourceMaterial.name);
                    // mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
                    if (isLine && material && !(material instanceof (0, _three.LineBasicMaterial))) {
                        const materialLine = new (0, _three.LineBasicMaterial)();
                        (0, _three.Material).prototype.copy.call(materialLine, material);
                        materialLine.color.copy(material.color);
                        material = materialLine;
                    } else if (isPoints && material && !(material instanceof (0, _three.PointsMaterial))) {
                        const materialPoints = new (0, _three.PointsMaterial)({
                            size: 10,
                            sizeAttenuation: false
                        });
                        (0, _three.Material).prototype.copy.call(materialPoints, material);
                        materialPoints.color.copy(material.color);
                        materialPoints.map = material.map;
                        material = materialPoints;
                    }
                }
                if (material === undefined) {
                    if (isLine) material = new (0, _three.LineBasicMaterial)();
                    else if (isPoints) material = new (0, _three.PointsMaterial)({
                        size: 1,
                        sizeAttenuation: false
                    });
                    else material = new (0, _three.MeshPhongMaterial)();
                    material.name = sourceMaterial.name;
                    material.flatShading = sourceMaterial.smooth ? false : true;
                    material.vertexColors = hasVertexColors;
                    state.materials[materialHash] = material;
                }
                createdMaterials.push(material);
            }
            // Create mesh
            let mesh;
            if (createdMaterials.length > 1) {
                for(let mi = 0, miLen = materials.length; mi < miLen; mi++){
                    const sourceMaterial = materials[mi];
                    buffergeometry.addGroup(sourceMaterial.groupStart, sourceMaterial.groupCount, mi);
                }
                if (isLine) mesh = new (0, _three.LineSegments)(buffergeometry, createdMaterials);
                else if (isPoints) mesh = new (0, _three.Points)(buffergeometry, createdMaterials);
                else mesh = new (0, _three.Mesh)(buffergeometry, createdMaterials);
            } else {
                if (isLine) mesh = new (0, _three.LineSegments)(buffergeometry, createdMaterials[0]);
                else if (isPoints) mesh = new (0, _three.Points)(buffergeometry, createdMaterials[0]);
                else mesh = new (0, _three.Mesh)(buffergeometry, createdMaterials[0]);
            }
            mesh.name = object.name;
            container.add(mesh);
        }
        else // if there is only the default parser state object with no geometry data, interpret data as point cloud
        if (state.vertices.length > 0) {
            const material = new (0, _three.PointsMaterial)({
                size: 1,
                sizeAttenuation: false
            });
            const buffergeometry = new (0, _three.BufferGeometry)();
            buffergeometry.setAttribute("position", new (0, _three.Float32BufferAttribute)(state.vertices, 3));
            if (state.colors.length > 0 && state.colors[0] !== undefined) {
                buffergeometry.setAttribute("color", new (0, _three.Float32BufferAttribute)(state.colors, 3));
                material.vertexColors = true;
            }
            const points = new (0, _three.Points)(buffergeometry, material);
            container.add(points);
        }
        return container;
    }
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"3eUf8"}],"im57q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MTLLoader", ()=>MTLLoader);
var _three = require("three");
/**
 * Loads a Wavefront .mtl file specifying materials
 */ class MTLLoader extends (0, _three.Loader) {
    constructor(manager){
        super(manager);
    }
    /**
	 * Loads and parses a MTL asset from a URL.
	 *
	 * @param {String} url - URL to the MTL file.
	 * @param {Function} [onLoad] - Callback invoked with the loaded object.
	 * @param {Function} [onProgress] - Callback for download progress.
	 * @param {Function} [onError] - Callback for download errors.
	 *
	 * @see setPath setResourcePath
	 *
	 * @note In order for relative texture references to resolve correctly
	 * you must call setResourcePath() explicitly prior to load.
	 */ load(url, onLoad, onProgress, onError) {
        const scope = this;
        const path = this.path === "" ? (0, _three.LoaderUtils).extractUrlBase(url) : this.path;
        const loader = new (0, _three.FileLoader)(this.manager);
        loader.setPath(this.path);
        loader.setRequestHeader(this.requestHeader);
        loader.setWithCredentials(this.withCredentials);
        loader.load(url, function(text) {
            try {
                onLoad(scope.parse(text, path));
            } catch (e) {
                if (onError) onError(e);
                else console.error(e);
                scope.manager.itemError(url);
            }
        }, onProgress, onError);
    }
    setMaterialOptions(value) {
        this.materialOptions = value;
        return this;
    }
    /**
	 * Parses a MTL file.
	 *
	 * @param {String} text - Content of MTL file
	 * @return {MaterialCreator}
	 *
	 * @see setPath setResourcePath
	 *
	 * @note In order for relative texture references to resolve correctly
	 * you must call setResourcePath() explicitly prior to parse.
	 */ parse(text, path) {
        const lines = text.split("\n");
        let info = {};
        const delimiter_pattern = /\s+/;
        const materialsInfo = {};
        for(let i = 0; i < lines.length; i++){
            let line = lines[i];
            line = line.trim();
            if (line.length === 0 || line.charAt(0) === "#") continue;
            const pos = line.indexOf(" ");
            let key = pos >= 0 ? line.substring(0, pos) : line;
            key = key.toLowerCase();
            let value = pos >= 0 ? line.substring(pos + 1) : "";
            value = value.trim();
            if (key === "newmtl") {
                // New material
                info = {
                    name: value
                };
                materialsInfo[value] = info;
            } else if (key === "ka" || key === "kd" || key === "ks" || key === "ke") {
                const ss = value.split(delimiter_pattern, 3);
                info[key] = [
                    parseFloat(ss[0]),
                    parseFloat(ss[1]),
                    parseFloat(ss[2])
                ];
            } else info[key] = value;
        }
        const materialCreator = new MaterialCreator(this.resourcePath || path, this.materialOptions);
        materialCreator.setCrossOrigin(this.crossOrigin);
        materialCreator.setManager(this.manager);
        materialCreator.setMaterials(materialsInfo);
        return materialCreator;
    }
}
/**
 * Create a new MTLLoader.MaterialCreator
 * @param baseUrl - Url relative to which textures are loaded
 * @param options - Set of options on how to construct the materials
 *                  side: Which side to apply the material
 *                        FrontSide (default), THREE.BackSide, THREE.DoubleSide
 *                  wrap: What type of wrapping to apply for textures
 *                        RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
 *                  normalizeRGB: RGBs need to be normalized to 0-1 from 0-255
 *                                Default: false, assumed to be already normalized
 *                  ignoreZeroRGBs: Ignore values of RGBs (Ka,Kd,Ks) that are all 0's
 *                                  Default: false
 * @constructor
 */ class MaterialCreator {
    constructor(baseUrl = "", options = {}){
        this.baseUrl = baseUrl;
        this.options = options;
        this.materialsInfo = {};
        this.materials = {};
        this.materialsArray = [];
        this.nameLookup = {};
        this.crossOrigin = "anonymous";
        this.side = this.options.side !== undefined ? this.options.side : (0, _three.FrontSide);
        this.wrap = this.options.wrap !== undefined ? this.options.wrap : (0, _three.RepeatWrapping);
    }
    setCrossOrigin(value) {
        this.crossOrigin = value;
        return this;
    }
    setManager(value) {
        this.manager = value;
    }
    setMaterials(materialsInfo) {
        this.materialsInfo = this.convert(materialsInfo);
        this.materials = {};
        this.materialsArray = [];
        this.nameLookup = {};
    }
    convert(materialsInfo) {
        if (!this.options) return materialsInfo;
        const converted = {};
        for(const mn in materialsInfo){
            // Convert materials info into normalized form based on options
            const mat = materialsInfo[mn];
            const covmat = {};
            converted[mn] = covmat;
            for(const prop in mat){
                let save = true;
                let value = mat[prop];
                const lprop = prop.toLowerCase();
                switch(lprop){
                    case "kd":
                    case "ka":
                    case "ks":
                        // Diffuse color (color under white light) using RGB values
                        if (this.options && this.options.normalizeRGB) value = [
                            value[0] / 255,
                            value[1] / 255,
                            value[2] / 255
                        ];
                        if (this.options && this.options.ignoreZeroRGBs) {
                            if (value[0] === 0 && value[1] === 0 && value[2] === 0) // ignore
                            save = false;
                        }
                        break;
                    default:
                        break;
                }
                if (save) covmat[lprop] = value;
            }
        }
        return converted;
    }
    preload() {
        for(const mn in this.materialsInfo)this.create(mn);
    }
    getIndex(materialName) {
        return this.nameLookup[materialName];
    }
    getAsArray() {
        let index = 0;
        for(const mn in this.materialsInfo){
            this.materialsArray[index] = this.create(mn);
            this.nameLookup[mn] = index;
            index++;
        }
        return this.materialsArray;
    }
    create(materialName) {
        if (this.materials[materialName] === undefined) this.createMaterial_(materialName);
        return this.materials[materialName];
    }
    createMaterial_(materialName) {
        // Create material
        const scope = this;
        const mat = this.materialsInfo[materialName];
        const params = {
            name: materialName,
            side: this.side
        };
        function resolveURL(baseUrl, url) {
            if (typeof url !== "string" || url === "") return "";
            // Absolute URL
            if (/^https?:\/\//i.test(url)) return url;
            return baseUrl + url;
        }
        function setMapForType(mapType, value) {
            if (params[mapType]) return; // Keep the first encountered texture
            const texParams = scope.getTextureParams(value, params);
            const map = scope.loadTexture(resolveURL(scope.baseUrl, texParams.url));
            map.repeat.copy(texParams.scale);
            map.offset.copy(texParams.offset);
            map.wrapS = scope.wrap;
            map.wrapT = scope.wrap;
            if (mapType === "map" || mapType === "emissiveMap") map.colorSpace = (0, _three.SRGBColorSpace);
            params[mapType] = map;
        }
        for(const prop in mat){
            const value = mat[prop];
            let n;
            if (value === "") continue;
            switch(prop.toLowerCase()){
                // Ns is material specular exponent
                case "kd":
                    // Diffuse color (color under white light) using RGB values
                    params.color = new (0, _three.Color)().fromArray(value).convertSRGBToLinear();
                    break;
                case "ks":
                    // Specular color (color when light is reflected from shiny surface) using RGB values
                    params.specular = new (0, _three.Color)().fromArray(value).convertSRGBToLinear();
                    break;
                case "ke":
                    // Emissive using RGB values
                    params.emissive = new (0, _three.Color)().fromArray(value).convertSRGBToLinear();
                    break;
                case "map_kd":
                    // Diffuse texture map
                    setMapForType("map", value);
                    break;
                case "map_ks":
                    // Specular map
                    setMapForType("specularMap", value);
                    break;
                case "map_ke":
                    // Emissive map
                    setMapForType("emissiveMap", value);
                    break;
                case "norm":
                    setMapForType("normalMap", value);
                    break;
                case "map_bump":
                case "bump":
                    // Bump texture map
                    setMapForType("bumpMap", value);
                    break;
                case "map_d":
                    // Alpha map
                    setMapForType("alphaMap", value);
                    params.transparent = true;
                    break;
                case "ns":
                    // The specular exponent (defines the focus of the specular highlight)
                    // A high exponent results in a tight, concentrated highlight. Ns values normally range from 0 to 1000.
                    params.shininess = parseFloat(value);
                    break;
                case "d":
                    n = parseFloat(value);
                    if (n < 1) {
                        params.opacity = n;
                        params.transparent = true;
                    }
                    break;
                case "tr":
                    n = parseFloat(value);
                    if (this.options && this.options.invertTrProperty) n = 1 - n;
                    if (n > 0) {
                        params.opacity = 1 - n;
                        params.transparent = true;
                    }
                    break;
                default:
                    break;
            }
        }
        this.materials[materialName] = new (0, _three.MeshPhongMaterial)(params);
        return this.materials[materialName];
    }
    getTextureParams(value, matParams) {
        const texParams = {
            scale: new (0, _three.Vector2)(1, 1),
            offset: new (0, _three.Vector2)(0, 0)
        };
        const items = value.split(/\s+/);
        let pos;
        pos = items.indexOf("-bm");
        if (pos >= 0) {
            matParams.bumpScale = parseFloat(items[pos + 1]);
            items.splice(pos, 2);
        }
        pos = items.indexOf("-s");
        if (pos >= 0) {
            texParams.scale.set(parseFloat(items[pos + 1]), parseFloat(items[pos + 2]));
            items.splice(pos, 4); // we expect 3 parameters here!
        }
        pos = items.indexOf("-o");
        if (pos >= 0) {
            texParams.offset.set(parseFloat(items[pos + 1]), parseFloat(items[pos + 2]));
            items.splice(pos, 4); // we expect 3 parameters here!
        }
        texParams.url = items.join(" ").trim();
        return texParams;
    }
    loadTexture(url, mapping, onLoad, onProgress, onError) {
        const manager = this.manager !== undefined ? this.manager : (0, _three.DefaultLoadingManager);
        let loader = manager.getHandler(url);
        if (loader === null) loader = new (0, _three.TextureLoader)(manager);
        if (loader.setCrossOrigin) loader.setCrossOrigin(this.crossOrigin);
        const texture = loader.load(url, onLoad, onProgress, onError);
        if (mapping !== undefined) texture.mapping = mapping;
        return texture;
    }
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"3eUf8"}]},["5q7iH","eCcd0"], "eCcd0", "parcelRequire94c2")

//# sourceMappingURL=index.a461ed07.js.map
