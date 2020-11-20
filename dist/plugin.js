var capacitorPlugin = (function (exports, core) {
    'use strict';

    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    class TreadsGpsWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'TreadsGps',
                platforms: ['web'],
            });
        }
        echo(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('ECHO', options);
                return options;
            });
        }
        checkStatus() {
            return __awaiter(this, void 0, void 0, function* () {
                return { dataSaver: 'false', ignoreBatteryOptimization: 'false' };
            });
        }
        keepWebviewAwake() {
            return __awaiter(this, void 0, void 0, function* () {
                return { success: false };
            });
        }
        requestIgnoreBatteryOptimization() {
            return __awaiter(this, void 0, void 0, function* () {
                return { success: false };
            });
        }
        requestIgnoreDataSaver() {
            return __awaiter(this, void 0, void 0, function* () {
                return { success: false };
            });
        }
    }
    const TreadsGps = new TreadsGpsWeb();
    core.registerWebPlugin(TreadsGps);

    exports.TreadsGps = TreadsGps;
    exports.TreadsGpsWeb = TreadsGpsWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
