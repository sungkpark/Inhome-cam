/**
 * App version: 1.0.0
 * SDK version: 2.6.0
<<<<<<< HEAD
 * CLI version: 1.7.4
 *
 * Generated: Tue, 06 Oct 2020 19:21:26 GMT
=======
 * CLI version: 1.7.5
 *
 * Generated: Wed, 28 Oct 2020 02:06:12 GMT
>>>>>>> Lighning_app
 */

var APP_com_metrological_app_myawesomeapp = (function () {
	'use strict';

	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value)
			&& !isSpecial(value)
	};

	function isNonNullObject(value) {
		return !!value && typeof value === 'object'
	}

	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);

		return stringValue === '[object RegExp]'
			|| stringValue === '[object Date]'
			|| isReactElement(value)
	}

	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE
	}

	function emptyTarget(val) {
		return Array.isArray(val) ? [] : {}
	}

	function cloneUnlessOtherwiseSpecified(value, options) {
		return (options.clone !== false && options.isMergeableObject(value))
			? deepmerge(emptyTarget(value), value, options)
			: value
	}

	function defaultArrayMerge(target, source, options) {
		return target.concat(source).map(function(element) {
			return cloneUnlessOtherwiseSpecified(element, options)
		})
	}

	function getMergeFunction(key, options) {
		if (!options.customMerge) {
			return deepmerge
		}
		var customMerge = options.customMerge(key);
		return typeof customMerge === 'function' ? customMerge : deepmerge
	}

	function getEnumerableOwnPropertySymbols(target) {
		return Object.getOwnPropertySymbols
			? Object.getOwnPropertySymbols(target).filter(function(symbol) {
				return target.propertyIsEnumerable(symbol)
			})
			: []
	}

	function getKeys(target) {
		return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
	}

	function propertyIsOnObject(object, property) {
		try {
			return property in object
		} catch(_) {
			return false
		}
	}

	// Protects from prototype poisoning and unexpected merging up the prototype chain.
	function propertyIsUnsafe(target, key) {
		return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
			&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
				&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
	}

	function mergeObject(target, source, options) {
		var destination = {};
		if (options.isMergeableObject(target)) {
			getKeys(target).forEach(function(key) {
				destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
			});
		}
		getKeys(source).forEach(function(key) {
			if (propertyIsUnsafe(target, key)) {
				return
			}

			if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
				destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
			} else {
				destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
			}
		});
		return destination
	}

	function deepmerge(target, source, options) {
		options = options || {};
		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
		options.isMergeableObject = options.isMergeableObject || isMergeableObject;
		// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
		// implementations can use it. The caller may not replace it.
		options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

		var sourceIsArray = Array.isArray(source);
		var targetIsArray = Array.isArray(target);
		var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

		if (!sourceAndTargetTypesMatch) {
			return cloneUnlessOtherwiseSpecified(source, options)
		} else if (sourceIsArray) {
			return options.arrayMerge(target, source, options)
		} else {
			return mergeObject(target, source, options)
		}
	}

	deepmerge.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) {
			throw new Error('first argument should be an array')
		}

		return array.reduce(function(prev, next) {
			return deepmerge(prev, next, options)
		}, {})
	};

	var deepmerge_1 = deepmerge;

	var cjs = deepmerge_1;

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	var Lightning = window.lng;

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	const settings = {};
	const subscribers = {};

	const initSettings = (appSettings, platformSettings) => {
	  settings['app'] = appSettings;
	  settings['platform'] = platformSettings;
	  settings['user'] = {};
	};

	const publish = (key, value) => {
	  subscribers[key] && subscribers[key].forEach(subscriber => subscriber(value));
	};

	const dotGrab = (obj = {}, key) => {
	  const keys = key.split('.');
	  for (let i = 0; i < keys.length; i++) {
	    obj = obj[keys[i]] = obj[keys[i]] !== undefined ? obj[keys[i]] : {};
	  }
	  return typeof obj === 'object' ? (Object.keys(obj).length ? obj : undefined) : obj
	};

	var Settings = {
	  get(type, key, fallback = undefined) {
	    const val = dotGrab(settings[type], key);
	    return val !== undefined ? val : fallback
	  },
	  has(type, key) {
	    return !!this.get(type, key)
	  },
	  set(key, value) {
	    settings['user'][key] = value;
	    publish(key, value);
	  },
	  subscribe(key, callback) {
	    subscribers[key] = subscribers[key] || [];
	    subscribers[key].push(callback);
	  },
	  unsubscribe(key, callback) {
	    if (callback) {
	      const index = subscribers[key] && subscribers[key].findIndex(cb => cb === callback);
	      index > -1 && subscribers[key].splice(index, 1);
	    } else {
	      if (key in subscribers) {
	        subscribers[key] = [];
	      }
	    }
	  },
	  clearSubscribers() {
	    for (const key of Object.getOwnPropertyNames(subscribers)) {
	      delete subscribers[key];
	    }
	  },
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	const prepLog = (type, args) => {
	  const colors = {
	    Info: 'green',
	    Debug: 'gray',
	    Warn: 'orange',
	    Error: 'red',
	  };

	  args = Array.from(args);
	  return [
	    '%c' + (args.length > 1 && typeof args[0] === 'string' ? args.shift() : type),
	    'background-color: ' + colors[type] + '; color: white; padding: 2px 4px; border-radius: 2px',
	    args,
	  ]
	};

	var Log = {
	  info() {
	    Settings.get('platform', 'log') && console.log.apply(console, prepLog('Info', arguments));
	  },
	  debug() {
	    Settings.get('platform', 'log') && console.debug.apply(console, prepLog('Debug', arguments));
	  },
	  error() {
	    Settings.get('platform', 'log') && console.error.apply(console, prepLog('Error', arguments));
	  },
	  warn() {
	    Settings.get('platform', 'log') && console.warn.apply(console, prepLog('Warn', arguments));
	  },
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */
	class Locale {
	  constructor() {
	    this.__enabled = false;
	  }

	  /**
	   * Loads translation object from external json file.
	   *
	   * @param {String} path Path to resource.
	   * @return {Promise}
	   */
	  async load(path) {
	    if (!this.__enabled) {
	      return
	    }

	    await fetch(path)
	      .then(resp => resp.json())
	      .then(resp => {
	        this.loadFromObject(resp);
	      });
	  }

	  /**
	   * Sets language used by module.
	   *
	   * @param {String} lang
	   */
	  setLanguage(lang) {
	    this.__enabled = true;
	    this.language = lang;
	  }

	  /**
	   * Returns reference to translation object for current language.
	   *
	   * @return {Object}
	   */
	  get tr() {
	    return this.__trObj[this.language]
	  }

	  /**
	   * Loads translation object from existing object (binds existing object).
	   *
	   * @param {Object} trObj
	   */
	  loadFromObject(trObj) {
	    const fallbackLanguage = 'en';
	    if (Object.keys(trObj).indexOf(this.language) === -1) {
	      Log.warn('No translations found for: ' + this.language);
	      if (Object.keys(trObj).indexOf(fallbackLanguage) > -1) {
	        Log.warn('Using fallback language: ' + fallbackLanguage);
	        this.language = fallbackLanguage;
	      } else {
	        const error = 'No translations found for fallback language: ' + fallbackLanguage;
	        Log.error(error);
	        throw Error(error)
	      }
	    }

	    this.__trObj = trObj;
	    for (const lang of Object.values(this.__trObj)) {
	      for (const str of Object.keys(lang)) {
	        lang[str] = new LocalizedString(lang[str]);
	      }
	    }
	  }
	}

	/**
	 * Extended string class used for localization.
	 */
	class LocalizedString extends String {
	  /**
	   * Returns formatted LocalizedString.
	   * Replaces each placeholder value (e.g. {0}, {1}) with corresponding argument.
	   *
	   * E.g.:
	   * > new LocalizedString('{0} and {1} and {0}').format('A', 'B');
	   * A and B and A
	   *
	   * @param  {...any} args List of arguments for placeholders.
	   */
	  format(...args) {
	    const sub = args.reduce((string, arg, index) => string.split(`{${index}}`).join(arg), this);
	    return new LocalizedString(sub)
	  }
	}

	var Locale$1 = new Locale();

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	let sendMetric = (type, event, params) => {
	  Log.info('Sending metric', type, event, params);
	};

	const initMetrics = config => {
	  sendMetric = config.sendMetric;
	};

	// available metric per category
	const metrics = {
	  app: ['launch', 'loaded', 'ready', 'close'],
	  page: ['view', 'leave'],
	  user: ['click', 'input'],
	  media: [
	    'abort',
	    'canplay',
	    'ended',
	    'pause',
	    'play',
	    'suspend',
	    'volumechange',
	    'waiting',
	    'seeking',
	    'seeked',
	  ],
	};

	// error metric function (added to each category)
	const errorMetric = (type, message, code, visible, params = {}) => {
	  params = { params, ...{ message, code, visible } };
	  sendMetric(type, 'error', params);
	};

	const Metric = (type, events, options = {}) => {
	  return events.reduce(
	    (obj, event) => {
	      obj[event] = (name, params = {}) => {
	        params = { ...options, ...(name ? { name } : {}), ...params };
	        sendMetric(type, event, params);
	      };
	      return obj
	    },
	    {
	      error(message, code, params) {
	        errorMetric(type, message, code, params);
	      },
	      event(name, params) {
	        sendMetric(type, name, params);
	      },
	    }
	  )
	};

	const Metrics = types => {
	  return Object.keys(types).reduce(
	    (obj, type) => {
	      // media metric works a bit different!
	      // it's a function that accepts a url and returns an object with the available metrics
	      // url is automatically passed as a param in every metric
	      type === 'media'
	        ? (obj[type] = url => Metric(type, types[type], { url }))
	        : (obj[type] = Metric(type, types[type]));
	      return obj
	    },
	    { error: errorMetric, event: sendMetric }
	  )
	};

	var Metrics$1 = Metrics(metrics);

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	class VersionLabel extends Lightning.Component {
	  static _template() {
	    return {
	      rect: true,
	      color: 0xbb0078ac,
	      h: 40,
	      w: 100,
	      x: w => w - 50,
	      y: h => h - 50,
	      mount: 1,
	      Text: {
	        w: w => w,
	        h: h => h,
	        y: 5,
	        x: 20,
	        text: {
	          fontSize: 22,
	          lineHeight: 26,
	        },
	      },
	    }
	  }

	  _firstActive() {
	    this.tag('Text').text = `APP - v${this.version}\nSDK - v${this.sdkVersion}`;
	    this.tag('Text').loadTexture();
	    this.w = this.tag('Text').renderWidth + 40;
	    this.h = this.tag('Text').renderHeight + 5;
	  }
	}

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */
	class FpsIndicator extends Lightning.Component {
	  static _template() {
	    return {
	      rect: true,
	      color: 0xffffffff,
	      texture: Lightning.Tools.getRoundRect(80, 80, 40),
	      h: 80,
	      w: 80,
	      x: 100,
	      y: 100,
	      mount: 1,
	      Background: {
	        x: 3,
	        y: 3,
	        texture: Lightning.Tools.getRoundRect(72, 72, 36),
	        color: 0xff008000,
	      },
	      Counter: {
	        w: w => w,
	        h: h => h,
	        y: 10,
	        text: {
	          fontSize: 32,
	          textAlign: 'center',
	        },
	      },
	      Text: {
	        w: w => w,
	        h: h => h,
	        y: 48,
	        text: {
	          fontSize: 15,
	          textAlign: 'center',
	          text: 'FPS',
	        },
	      },
	    }
	  }

	  _setup() {
	    this.config = {
	      ...{
	        log: false,
	        interval: 500,
	        threshold: 1,
	      },
	      ...Settings.get('platform', 'showFps'),
	    };

	    this.fps = 0;
	    this.lastFps = this.fps - this.config.threshold;

	    const fpsCalculator = () => {
	      this.fps = ~~(1 / this.stage.dt);
	    };
	    this.stage.on('frameStart', fpsCalculator);
	    this.stage.off('framestart', fpsCalculator);
	    this.interval = setInterval(this.showFps.bind(this), this.config.interval);
	  }

	  _firstActive() {
	    this.showFps();
	  }

	  _detach() {
	    clearInterval(this.interval);
	  }

	  showFps() {
	    if (Math.abs(this.lastFps - this.fps) <= this.config.threshold) return
	    this.lastFps = this.fps;
	    // green
	    let bgColor = 0xff008000;
	    // orange
	    if (this.fps <= 40 && this.fps > 20) bgColor = 0xffffa500;
	    // red
	    else if (this.fps <= 20) bgColor = 0xffff0000;

	    this.tag('Background').setSmooth('color', bgColor);
	    this.tag('Counter').text = `${this.fps}`;

	    this.config.log && Log.info('FPS', this.fps);
	  }
	}

	var version = "2.6.0";

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	let AppInstance;

	const defaultOptions = {
	  stage: { w: 1920, h: 1080, clearColor: 0x00000000, canvas2d: false },
	  debug: false,
	  defaultFontFace: 'RobotoRegular',
	  keys: {
	    8: 'Back',
	    13: 'Enter',
	    27: 'Menu',
	    37: 'Left',
	    38: 'Up',
	    39: 'Right',
	    40: 'Down',
	    174: 'ChannelDown',
	    175: 'ChannelUp',
	    178: 'Stop',
	    250: 'PlayPause',
	    191: 'Search', // Use "/" for keyboard
	    409: 'Search',
	  },
	};

	if (window.innerHeight === 720) {
	  defaultOptions.stage['w'] = 1280;
	  defaultOptions.stage['h'] = 720;
	  defaultOptions.stage['precision'] = 0.6666666667;
	}

	function Application(App, appData, platformSettings) {
	  return class Application extends Lightning.Application {
	    constructor(options) {
	      const config = cjs(defaultOptions, options);
	      super(config);
	      this.config = config;
	    }

	    static _template() {
	      return {
	        w: 1920,
	        h: 1080,
	        rect: true,
	        color: 0x00000000,
	      }
	    }

	    _setup() {
	      Promise.all([
	        this.loadFonts((App.config && App.config.fonts) || (App.getFonts && App.getFonts()) || []),
	        Locale$1.load((App.config && App.config.locale) || (App.getLocale && App.getLocale())),
	      ])
	        .then(() => {
	          Metrics$1.app.loaded();

	          AppInstance = this.stage.c({
	            ref: 'App',
	            type: App,
	            forceZIndexContext: !!platformSettings.showVersion || !!platformSettings.showFps,
	          });

	          this.childList.a(AppInstance);

	          Log.info('App version', this.config.version);
	          Log.info('SDK version', version);

	          if (platformSettings.showVersion) {
	            this.childList.a({
	              ref: 'VersionLabel',
	              type: VersionLabel,
	              version: this.config.version,
	              sdkVersion: version,
	            });
	          }

	          if (platformSettings.showFps) {
	            this.childList.a({
	              ref: 'FpsCounter',
	              type: FpsIndicator,
	            });
	          }

	          super._setup();
	        })
	        .catch(console.error);
	    }

	    _handleBack() {
	      this.closeApp();
	    }

	    _handleExit() {
	      this.closeApp();
	    }

	    closeApp() {
	      Log.info('Closing App');

	      Settings.clearSubscribers();

	      if (platformSettings.onClose && typeof platformSettings.onClose === 'function') {
	        platformSettings.onClose();
	      } else {
	        this.close();
	      }
	    }

	    close() {
	      Log.info('Closing App');
	      this.childList.remove(this.tag('App'));

	      // force texture garbage collect
	      this.stage.gc();
	      this.destroy();
	    }

	    loadFonts(fonts) {
	      return new Promise((resolve, reject) => {
	        fonts
	          .map(({ family, url, descriptors }) => () => {
	            const fontFace = new FontFace(family, 'url(' + url + ')', descriptors || {});
	            document.fonts.add(fontFace);
	            return fontFace.load()
	          })
	          .reduce((promise, method) => {
	            return promise.then(() => method())
	          }, Promise.resolve(null))
	          .then(resolve)
	          .catch(reject);
	      })
	    }

	    set focus(v) {
	      this._focussed = v;
	      this._refocus();
	    }

	    _getFocused() {
	      return this._focussed || this.tag('App')
	    }
	  }
	}

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	let basePath;
	let proxyUrl;

	const initUtils = config => {
	  basePath = ensureUrlWithProtocol(makeFullStaticPath(window.location.pathname, config.path || '/'));

	  if (config.proxyUrl) {
	    proxyUrl = ensureUrlWithProtocol(config.proxyUrl);
	  }
	};

	const ensureUrlWithProtocol = url => {
	  if (/^\/\//.test(url)) {
	    return window.location.protocol + url
	  }
	  if (!/^(?:https?:)/i.test(url)) {
	    return window.location.origin + url
	  }
	  return url
	};

	const makeFullStaticPath = (pathname = '/', path) => {
	  // ensure path has traling slash
	  path = path.charAt(path.length - 1) !== '/' ? path + '/' : path;

	  // if path is URL, we assume it's already the full static path, so we just return it
	  if (/^(?:https?:)?(?:\/\/)/.test(path)) {
	    return path
	  }

	  if (path.charAt(0) === '/') {
	    return path
	  } else {
	    // cleanup the pathname (i.e. remove possible index.html)
	    pathname = cleanUpPathName(pathname);

	    // remove possible leading dot from path
	    path = path.charAt(0) === '.' ? path.substr(1) : path;
	    // ensure path has leading slash
	    path = path.charAt(0) !== '/' ? '/' + path : path;
	    return pathname + path
	  }
	};

	const cleanUpPathName = pathname => {
	  if (pathname.slice(-1) === '/') return pathname.slice(0, -1)
	  const parts = pathname.split('/');
	  if (parts[parts.length - 1].indexOf('.') > -1) parts.pop();
	  return parts.join('/')
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	class ScaledImageTexture extends Lightning.textures.ImageTexture {
	  constructor(stage) {
	    super(stage);
	    this._scalingOptions = undefined;
	  }

	  set options(options) {
	    this.resizeMode = this._scalingOptions = options;
	  }

	  _getLookupId() {
	    return `${this._src}-${this._scalingOptions.type}-${this._scalingOptions.w}-${this._scalingOptions.h}`
	  }

	  getNonDefaults() {
	    const obj = super.getNonDefaults();
	    if (this._src) {
	      obj.src = this._src;
	    }
	    return obj
	  }
	}

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	const formatLocale = locale => {
	  if (locale && locale.length === 2) {
	    return `${locale.toLowerCase()}-${locale.toUpperCase()}`
	  } else {
	    return locale
	  }
	};

	const getLocale = defaultValue => {
	  if ('language' in navigator) {
	    const locale = formatLocale(navigator.language);
	    return Promise.resolve(locale)
	  } else {
	    return Promise.resolve(defaultValue)
	  }
	};

	const getLanguage = defaultValue => {
	  if ('language' in navigator) {
	    const language = formatLocale(navigator.language).slice(0, 2);
	    return Promise.resolve(language)
	  } else {
	    return Promise.resolve(defaultValue)
	  }
	};

	const getCountryCode = defaultValue => {
	  if ('language' in navigator) {
	    const countryCode = formatLocale(navigator.language).slice(3, 5);
	    return Promise.resolve(countryCode)
	  } else {
	    return Promise.resolve(defaultValue)
	  }
	};

	const hasOrAskForGeoLocationPermission = () => {
	  return new Promise(resolve => {
	    // force to prompt for location permission
	    if (Settings.get('platform', 'forceBrowserGeolocation') === true) resolve(true);
	    if ('permissions' in navigator && typeof navigator.permissions.query === 'function') {
	      navigator.permissions.query({ name: 'geolocation' }).then(status => {
	        resolve(status.state === 'granted' || status.status === 'granted');
	      });
	    } else {
	      resolve(false);
	    }
	  })
	};

	const getLatLon = defaultValue => {
	  return new Promise(resolve => {
	    hasOrAskForGeoLocationPermission().then(granted => {
	      if (granted === true) {
	        if ('geolocation' in navigator) {
	          navigator.geolocation.getCurrentPosition(
	            // success
	            result =>
	              result && result.coords && resolve([result.coords.latitude, result.coords.longitude]),
	            // error
	            () => resolve(defaultValue),
	            // options
	            {
	              enableHighAccuracy: true,
	              timeout: 5000,
	              maximumAge: 0,
	            }
	          );
	        } else {
	          return queryForLatLon().then(result => resolve(result || defaultValue))
	        }
	      } else {
	        return queryForLatLon().then(result => resolve(result || defaultValue))
	      }
	    });
	  })
	};

	const queryForLatLon = () => {
	  return new Promise(resolve => {
	    fetch('https://geolocation-db.com/json/')
	      .then(response => response.json())
	      .then(({ latitude, longitude }) =>
	        latitude && longitude ? resolve([latitude, longitude]) : resolve(false)
	      )
	      .catch(() => resolve(false));
	  })
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	const defaultProfile = {
	  ageRating: 'adult',
	  city: 'New York',
	  zipCode: '27505',
	  countryCode: () => getCountryCode('US'),
	  ip: '127.0.0.1',
	  household: 'b2244e9d4c04826ccd5a7b2c2a50e7d4',
	  language: () => getLanguage('en'),
	  latlon: () => getLatLon([40.7128, 74.006]),
	  locale: () => getLocale('en-US'),
	  mac: '00:00:00:00:00:00',
	  operator: 'Metrological',
	  platform: 'Metrological',
	  packages: [],
	  uid: 'ee6723b8-7ab3-462c-8d93-dbf61227998e',
	  stbType: 'Metrological',
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	let getInfo = key => {
	  const profile = { ...defaultProfile, ...Settings.get('platform', 'profile') };
	  return Promise.resolve(typeof profile[key] === 'function' ? profile[key]() : profile[key])
	};

	let setInfo = (key, params) => {
	  if (key in defaultProfile) defaultProfile[key] = params;
	};

	const initProfile = config => {
	  getInfo = config.getInfo;
	  setInfo = config.setInfo;
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	const events = [
	  'timeupdate',
	  'error',
	  'ended',
	  'loadeddata',
	  'canplay',
	  'play',
	  'playing',
	  'pause',
	  'loadstart',
	  'seeking',
	  'seeked',
	  'encrypted',
	];

	let mediaUrl = url => url;

	const initMediaPlayer = config => {
	  if (config.mediaUrl) {
	    mediaUrl = config.mediaUrl;
	  }
	};

	class Mediaplayer extends Lightning.Component {
	  _construct() {
	    this._skipRenderToTexture = false;
	    this._metrics = null;
	    this._textureMode = Settings.get('platform', 'textureMode') || false;
	    Log.info('Texture mode: ' + this._textureMode);
	  }

	  static _template() {
	    return {
	      Video: {
	        VideoWrap: {
	          VideoTexture: {
	            visible: false,
	            pivot: 0.5,
	            texture: { type: Lightning.textures.StaticTexture, options: {} },
	          },
	        },
	      },
	    }
	  }

	  set skipRenderToTexture(v) {
	    this._skipRenderToTexture = v;
	  }

	  get textureMode() {
	    return this._textureMode
	  }

	  get videoView() {
	    return this.tag('Video')
	  }

	  _init() {
	    //re-use videotag if already there
	    const videoEls = document.getElementsByTagName('video');
	    if (videoEls && videoEls.length > 0) this.videoEl = videoEls[0];
	    else {
	      this.videoEl = document.createElement('video');
	      this.videoEl.setAttribute('id', 'video-player');
	      this.videoEl.style.position = 'absolute';
	      this.videoEl.style.zIndex = '1';
	      this.videoEl.style.display = 'none';
	      this.videoEl.setAttribute('width', '100%');
	      this.videoEl.setAttribute('height', '100%');

	      this.videoEl.style.visibility = this.textureMode ? 'hidden' : 'visible';
	      document.body.appendChild(this.videoEl);
	    }
	    if (this.textureMode && !this._skipRenderToTexture) {
	      this._createVideoTexture();
	    }

	    this.eventHandlers = [];
	  }

	  _registerListeners() {
	    events.forEach(event => {
	      const handler = e => {
	        if (this._metrics && this._metrics[event] && typeof this._metrics[event] === 'function') {
	          this._metrics[event]({ currentTime: this.videoEl.currentTime });
	        }
	        this.fire(event, { videoElement: this.videoEl, event: e });
	      };
	      this.eventHandlers.push(handler);
	      this.videoEl.addEventListener(event, handler);
	    });
	  }

	  _deregisterListeners() {
	    Log.info('Deregistering event listeners MediaPlayer');
	    events.forEach((event, index) => {
	      this.videoEl.removeEventListener(event, this.eventHandlers[index]);
	    });
	    this.eventHandlers = [];
	  }

	  _attach() {
	    this._registerListeners();
	  }

	  _detach() {
	    this._deregisterListeners();
	    this.close();
	  }

	  _createVideoTexture() {
	    const stage = this.stage;

	    const gl = stage.gl;
	    const glTexture = gl.createTexture();
	    gl.bindTexture(gl.TEXTURE_2D, glTexture);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

	    this.videoTexture.options = { source: glTexture, w: this.videoEl.width, h: this.videoEl.height };
	  }

	  _startUpdatingVideoTexture() {
	    if (this.textureMode && !this._skipRenderToTexture) {
	      const stage = this.stage;
	      if (!this._updateVideoTexture) {
	        this._updateVideoTexture = () => {
	          if (this.videoTexture.options.source && this.videoEl.videoWidth && this.active) {
	            const gl = stage.gl;

	            const currentTime = new Date().getTime();

	            // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
	            // We'll fallback to fixed 30fps in this case.
	            const frameCount = this.videoEl.webkitDecodedFrameCount;

	            const mustUpdate = frameCount
	              ? this._lastFrame !== frameCount
	              : this._lastTime < currentTime - 30;

	            if (mustUpdate) {
	              this._lastTime = currentTime;
	              this._lastFrame = frameCount;
	              try {
	                gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
	                gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
	                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.videoEl);
	                this._lastFrame = this.videoEl.webkitDecodedFrameCount;
	                this.videoTextureView.visible = true;

	                this.videoTexture.options.w = this.videoEl.videoWidth;
	                this.videoTexture.options.h = this.videoEl.videoHeight;
	                const expectedAspectRatio = this.videoTextureView.w / this.videoTextureView.h;
	                const realAspectRatio = this.videoEl.videoWidth / this.videoEl.videoHeight;
	                if (expectedAspectRatio > realAspectRatio) {
	                  this.videoTextureView.scaleX = realAspectRatio / expectedAspectRatio;
	                  this.videoTextureView.scaleY = 1;
	                } else {
	                  this.videoTextureView.scaleY = expectedAspectRatio / realAspectRatio;
	                  this.videoTextureView.scaleX = 1;
	                }
	              } catch (e) {
	                Log.error('texImage2d video', e);
	                this._stopUpdatingVideoTexture();
	                this.videoTextureView.visible = false;
	              }
	              this.videoTexture.source.forceRenderUpdate();
	            }
	          }
	        };
	      }
	      if (!this._updatingVideoTexture) {
	        stage.on('frameStart', this._updateVideoTexture);
	        this._updatingVideoTexture = true;
	      }
	    }
	  }

	  _stopUpdatingVideoTexture() {
	    if (this.textureMode) {
	      const stage = this.stage;
	      stage.removeListener('frameStart', this._updateVideoTexture);
	      this._updatingVideoTexture = false;
	      this.videoTextureView.visible = false;

	      if (this.videoTexture.options.source) {
	        const gl = stage.gl;
	        gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
	        gl.clearColor(0, 0, 0, 1);
	        gl.clear(gl.COLOR_BUFFER_BIT);
	      }
	    }
	  }

	  updateSettings(settings = {}) {
	    // The Component that 'consumes' the media player.
	    this._consumer = settings.consumer;

	    if (this._consumer && this._consumer.getMediaplayerSettings) {
	      // Allow consumer to add settings.
	      settings = Object.assign(settings, this._consumer.getMediaplayerSettings());
	    }

	    if (!Lightning.Utils.equalValues(this._stream, settings.stream)) {
	      if (settings.stream && settings.stream.keySystem) {
	        navigator
	          .requestMediaKeySystemAccess(
	            settings.stream.keySystem.id,
	            settings.stream.keySystem.config
	          )
	          .then(keySystemAccess => {
	            return keySystemAccess.createMediaKeys()
	          })
	          .then(createdMediaKeys => {
	            return this.videoEl.setMediaKeys(createdMediaKeys)
	          })
	          .then(() => {
	            if (settings.stream && settings.stream.src) this.open(settings.stream.src);
	          })
	          .catch(() => {
	            console.error('Failed to set up MediaKeys');
	          });
	      } else if (settings.stream && settings.stream.src) {
	        // This is here to be backwards compatible, will be removed
	        // in future sdk release
	        if (Settings.get('app', 'hls')) {
	          if (!window.Hls) {
	            window.Hls = class Hls {
	              static isSupported() {
	                console.warn('hls-light not included');
	                return false
	              }
	            };
	          }
	          if (window.Hls.isSupported()) {
	            if (!this._hls) this._hls = new window.Hls({ liveDurationInfinity: true });
	            this._hls.loadSource(settings.stream.src);
	            this._hls.attachMedia(this.videoEl);
	            this.videoEl.style.display = 'block';
	          }
	        } else {
	          this.open(settings.stream.src);
	        }
	      } else {
	        this.close();
	      }
	      this._stream = settings.stream;
	    }

	    this._setHide(settings.hide);
	    this._setVideoArea(settings.videoPos);
	  }

	  _setHide(hide) {
	    if (this.textureMode) {
	      this.tag('Video').setSmooth('alpha', hide ? 0 : 1);
	    } else {
	      this.videoEl.style.visibility = hide ? 'hidden' : 'visible';
	    }
	  }

	  open(url, settings = { hide: false, videoPosition: null }) {
	    // prep the media url to play depending on platform (mediaPlayerplugin)
	    url = mediaUrl(url);
	    this._metrics = Metrics$1.media(url);
	    Log.info('Playing stream', url);
	    if (this.application.noVideo) {
	      Log.info('noVideo option set, so ignoring: ' + url);
	      return
	    }
	    // close the video when opening same url as current (effectively reloading)
	    if (this.videoEl.getAttribute('src') === url) {
	      this.close();
	    }
	    this.videoEl.setAttribute('src', url);

	    // force hide, then force show (in next tick!)
	    // (fixes comcast playback rollover issue)
	    this.videoEl.style.visibility = 'hidden';
	    this.videoEl.style.display = 'none';

	    setTimeout(() => {
	      this.videoEl.style.display = 'block';
	      this.videoEl.style.visibility = 'visible';
	    });

	    this._setHide(settings.hide);
	    this._setVideoArea(settings.videoPosition || [0, 0, 1920, 1080]);
	  }

	  close() {
	    // We need to pause first in order to stop sound.
	    this.videoEl.pause();
	    this.videoEl.removeAttribute('src');

	    // force load to reset everything without errors
	    this.videoEl.load();

	    this._clearSrc();

	    this.videoEl.style.display = 'none';
	  }

	  playPause() {
	    if (this.isPlaying()) {
	      this.doPause();
	    } else {
	      this.doPlay();
	    }
	  }

	  get muted() {
	    return this.videoEl.muted
	  }

	  set muted(v) {
	    this.videoEl.muted = v;
	  }

	  get loop() {
	    return this.videoEl.loop
	  }

	  set loop(v) {
	    this.videoEl.loop = v;
	  }

	  isPlaying() {
	    return this._getState() === 'Playing'
	  }

	  doPlay() {
	    this.videoEl.play();
	  }

	  doPause() {
	    this.videoEl.pause();
	  }

	  reload() {
	    var url = this.videoEl.getAttribute('src');
	    this.close();
	    this.videoEl.src = url;
	  }

	  getPosition() {
	    return Promise.resolve(this.videoEl.currentTime)
	  }

	  setPosition(pos) {
	    this.videoEl.currentTime = pos;
	  }

	  getDuration() {
	    return Promise.resolve(this.videoEl.duration)
	  }

	  seek(time, absolute = false) {
	    if (absolute) {
	      this.videoEl.currentTime = time;
	    } else {
	      this.videoEl.currentTime += time;
	    }
	  }

	  get videoTextureView() {
	    return this.tag('Video').tag('VideoTexture')
	  }

	  get videoTexture() {
	    return this.videoTextureView.texture
	  }

	  _setVideoArea(videoPos) {
	    if (Lightning.Utils.equalValues(this._videoPos, videoPos)) {
	      return
	    }

	    this._videoPos = videoPos;

	    if (this.textureMode) {
	      this.videoTextureView.patch({
	        smooth: {
	          x: videoPos[0],
	          y: videoPos[1],
	          w: videoPos[2] - videoPos[0],
	          h: videoPos[3] - videoPos[1],
	        },
	      });
	    } else {
	      const precision = this.stage.getRenderPrecision();
	      this.videoEl.style.left = Math.round(videoPos[0] * precision) + 'px';
	      this.videoEl.style.top = Math.round(videoPos[1] * precision) + 'px';
	      this.videoEl.style.width = Math.round((videoPos[2] - videoPos[0]) * precision) + 'px';
	      this.videoEl.style.height = Math.round((videoPos[3] - videoPos[1]) * precision) + 'px';
	    }
	  }

	  _fireConsumer(event, args) {
	    if (this._consumer) {
	      this._consumer.fire(event, args);
	    }
	  }

	  _equalInitData(buf1, buf2) {
	    if (!buf1 || !buf2) return false
	    if (buf1.byteLength != buf2.byteLength) return false
	    const dv1 = new Int8Array(buf1);
	    const dv2 = new Int8Array(buf2);
	    for (let i = 0; i != buf1.byteLength; i++) if (dv1[i] != dv2[i]) return false
	    return true
	  }

	  error(args) {
	    this._fireConsumer('$mediaplayerError', args);
	    this._setState('');
	    return ''
	  }

	  loadeddata(args) {
	    this._fireConsumer('$mediaplayerLoadedData', args);
	  }

	  play(args) {
	    this._fireConsumer('$mediaplayerPlay', args);
	  }

	  playing(args) {
	    this._fireConsumer('$mediaplayerPlaying', args);
	    this._setState('Playing');
	  }

	  canplay(args) {
	    this.videoEl.play();
	    this._fireConsumer('$mediaplayerStart', args);
	  }

	  loadstart(args) {
	    this._fireConsumer('$mediaplayerLoad', args);
	  }

	  seeked() {
	    this._fireConsumer('$mediaplayerSeeked', {
	      currentTime: this.videoEl.currentTime,
	      duration: this.videoEl.duration || 1,
	    });
	  }

	  seeking() {
	    this._fireConsumer('$mediaplayerSeeking', {
	      currentTime: this.videoEl.currentTime,
	      duration: this.videoEl.duration || 1,
	    });
	  }

	  durationchange(args) {
	    this._fireConsumer('$mediaplayerDurationChange', args);
	  }

	  encrypted(args) {
	    const video = args.videoElement;
	    const event = args.event;
	    // FIXME: Double encrypted events need to be properly filtered by Gstreamer
	    if (video.mediaKeys && !this._equalInitData(this._previousInitData, event.initData)) {
	      this._previousInitData = event.initData;
	      this._fireConsumer('$mediaplayerEncrypted', args);
	    }
	  }

	  static _states() {
	    return [
	      class Playing extends this {
	        $enter() {
	          this._startUpdatingVideoTexture();
	        }
	        $exit() {
	          this._stopUpdatingVideoTexture();
	        }
	        timeupdate() {
	          this._fireConsumer('$mediaplayerProgress', {
	            currentTime: this.videoEl.currentTime,
	            duration: this.videoEl.duration || 1,
	          });
	        }
	        ended(args) {
	          this._fireConsumer('$mediaplayerEnded', args);
	          this._setState('');
	        }
	        pause(args) {
	          this._fireConsumer('$mediaplayerPause', args);
	          this._setState('Playing.Paused');
	        }
	        _clearSrc() {
	          this._fireConsumer('$mediaplayerStop', {});
	          this._setState('');
	        }
	        static _states() {
	          return [class Paused extends this {}]
	        }
	      },
	    ]
	  }
	}

	class localCookie{constructor(e){return e=e||{},this.forceCookies=e.forceCookies||!1,!0===this._checkIfLocalStorageWorks()&&!0!==e.forceCookies?{getItem:this._getItemLocalStorage,setItem:this._setItemLocalStorage,removeItem:this._removeItemLocalStorage,clear:this._clearLocalStorage}:{getItem:this._getItemCookie,setItem:this._setItemCookie,removeItem:this._removeItemCookie,clear:this._clearCookies}}_checkIfLocalStorageWorks(){if("undefined"==typeof localStorage)return !1;try{return localStorage.setItem("feature_test","yes"),"yes"===localStorage.getItem("feature_test")&&(localStorage.removeItem("feature_test"),!0)}catch(e){return !1}}_getItemLocalStorage(e){return window.localStorage.getItem(e)}_setItemLocalStorage(e,t){return window.localStorage.setItem(e,t)}_removeItemLocalStorage(e){return window.localStorage.removeItem(e)}_clearLocalStorage(){return window.localStorage.clear()}_getItemCookie(e){var t=document.cookie.match(RegExp("(?:^|;\\s*)"+function(e){return e.replace(/([.*+?\^${}()|\[\]\/\\])/g,"\\$1")}(e)+"=([^;]*)"));return t&&""===t[1]&&(t[1]=null),t?t[1]:null}_setItemCookie(e,t){document.cookie=`${e}=${t}`;}_removeItemCookie(e){document.cookie=`${e}=;Max-Age=-99999999;`;}_clearCookies(){document.cookie.split(";").forEach(e=>{document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires=Max-Age=-99999999");});}}

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	let namespace;
	let lc;

	const initStorage = () => {
	  namespace = Settings.get('platform', 'appId');
	  // todo: pass options (for example to force the use of cookies)
	  lc = new localCookie();
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	const isFunction = v => {
	  return typeof v === 'function'
	};

	const isObject = v => {
	  return typeof v === 'object' && v !== null
	};

	const isBoolean = v => {
	  return typeof v === 'boolean'
	};

	const isPage = v => {
	  if (v instanceof Lightning.Element || isLightningComponent(v)) {
	    return true
	  }
	  return false
	};

	const isLightningComponent = type => {
	  return type.prototype && 'isComponent' in type.prototype
	};

	const isArray = v => {
	  return Array.isArray(v)
	};

	const ucfirst = v => {
	  return `${v.charAt(0).toUpperCase()}${v.slice(1)}`
	};

	const isString = v => {
	  return typeof v === 'string'
	};

	const isPromise = (method, args) => {
	  let result;
	  if (isFunction(method)) {
	    try {
	      result = method.apply(null);
	    } catch (e) {
	      result = e;
	    }
	  } else {
	    result = method;
	  }
	  return isObject(result) && isFunction(result.then)
	};

	const getConfigMap = () => {
	  const routerSettings = Settings.get('platform', 'router');
	  const isObj = isObject(routerSettings);
	  return [
	    'backtrack',
	    'gcOnUnload',
	    'destroyOnHistoryBack',
	    'lazyCreate',
	    'lazyDestroy',
	    'reuseInstance',
	    'autoRestoreRemote',
	    'numberNavigation',
	    'updateHash',
	  ].reduce((config, key) => {
	    config.set(key, isObj ? routerSettings[key] : Settings.get('platform', key));
	    return config
	  }, new Map())
	};

	const incorrectParams = (cb, route) => {
	  const isIncorrect = /^\w*?\s?\(\s?\{.*?\}\s?\)/i;
	  if (isIncorrect.test(cb.toString())) {
	    console.warn(
	      [
	        `DEPRECATION: The data-provider for route: ${route} is not correct.`,
	        '"page" is no longer a property of the params object but is now the first function parameter: ',
	        'https://github.com/rdkcentral/Lightning-SDK/blob/feature/router/docs/plugins/router/dataproviding.md#data-providing',
	        "It's supported for now but will be removed in a future release.",
	      ].join('\n')
	    );
	    return true
	  }
	  return false
	};

	const getQueryStringParams = hash => {
	  const getQuery = /([?&].*)/;
	  const matches = getQuery.exec(hash);
	  const params = {};

	  if (matches && matches.length) {
	    const urlParams = new URLSearchParams(matches[1]);
	    for (const [key, value] of urlParams.entries()) {
	      params[key] = value;
	    }
	    return params
	  }
	  return false
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	const fade = (i, o) => {
	  return new Promise(resolve => {
	    i.patch({
	      alpha: 0,
	      visible: true,
	      smooth: {
	        alpha: [1, { duration: 0.5, delay: 0.1 }],
	      },
	    });
	    // resolve on y finish
	    i.transition('alpha').on('finish', () => {
	      if (o) {
	        o.visible = false;
	      }
	      resolve();
	    });
	  })
	};

	const crossFade = (i, o) => {
	  return new Promise(resolve => {
	    i.patch({
	      alpha: 0,
	      visible: true,
	      smooth: {
	        alpha: [1, { duration: 0.5, delay: 0.1 }],
	      },
	    });
	    if (o) {
	      o.patch({
	        smooth: {
	          alpha: [0, { duration: 0.5, delay: 0.3 }],
	        },
	      });
	    }
	    // resolve on y finish
	    i.transition('alpha').on('finish', () => {
	      resolve();
	    });
	  })
	};

	const moveOnAxes = (axis, direction, i, o) => {
	  const bounds = axis === 'x' ? 1920 : 1080;
	  return new Promise(resolve => {
	    i.patch({
	      [`${axis}`]: direction ? bounds * -1 : bounds,
	      visible: true,
	      smooth: {
	        [`${axis}`]: [0, { duration: 0.4, delay: 0.2 }],
	      },
	    });
	    // out is optional
	    if (o) {
	      o.patch({
	        [`${axis}`]: 0,
	        smooth: {
	          [`${axis}`]: [direction ? bounds : bounds * -1, { duration: 0.4, delay: 0.2 }],
	        },
	      });
	    }
	    // resolve on y finish
	    i.transition(axis).on('finish', () => {
	      resolve();
	    });
	  })
	};

	const up = (i, o) => {
	  return moveOnAxes('y', 0, i, o)
	};

	const down = (i, o) => {
	  return moveOnAxes('y', 1, i, o)
	};

	const left = (i, o) => {
	  return moveOnAxes('x', 0, i, o)
	};

	const right = (i, o) => {
	  return moveOnAxes('x', 1, i, o)
	};

	var Transitions = {
	  fade,
	  crossFade,
	  up,
	  down,
	  left,
	  right,
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	class RoutedApp extends Lightning.Component {
	  static _template() {
	    return {
	      Pages: {
	        forceZIndexContext: true,
	      },
	      /**
	       * This is a default Loading page that will be made visible
	       * during data-provider on() you CAN override in child-class
	       */
	      Loading: {
	        rect: true,
	        w: 1920,
	        h: 1080,
	        color: 0xff000000,
	        visible: false,
	        zIndex: 99,
	        Label: {
	          mount: 0.5,
	          x: 960,
	          y: 540,
	          text: {
	            text: 'Loading..',
	          },
	        },
	      },
	    }
	  }

	  static _states() {
	    return [
	      class Loading extends this {
	        $enter() {
	          this.tag('Loading').visible = true;
	        }

	        $exit() {
	          this.tag('Loading').visible = false;
	        }
	      },
	      class Widgets extends this {
	        $enter(args, widget) {
	          // store widget reference
	          this._widget = widget;

	          // since it's possible that this behaviour
	          // is non-remote driven we force a recalculation
	          // of the focuspath
	          this._refocus();
	        }

	        _getFocused() {
	          // we delegate focus to selected widget
	          // so it can consume remotecontrol presses
	          return this._widget
	        }

	        // if we want to widget to widget focus delegation
	        reload(widget) {
	          this._widget = widget;
	          this._refocus();
	        }

	        _handleKey() {
	          restore();
	        }
	      },
	    ]
	  }

	  /**
	   * Return location where pages need to be stored
	   */
	  get pages() {
	    return this.tag('Pages')
	  }

	  /**
	   * Tell router where widgets are stored
	   */
	  get widgets() {
	    return this.tag('Widgets')
	  }

	  /**
	   * we MUST register _handleBack method so the Router
	   * can override it
	   * @private
	   */
	  _handleBack() {}

	  /**
	   * we MUST register _captureKey for dev quick-navigation
	   * (via keyboard 1-9)
	   */
	  _captureKey() {}

	  /**
	   * We MUST return Router.activePage() so the new Page
	   * can listen to the remote-control.
	   */
	  _getFocused() {
	    return getActivePage()
	  }
	}

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	let getHash = () => {
	  return document.location.hash
	};

	let setHash = url => {
	  document.location.hash = url;
	};

	const initRouter = config => {
	  if (config.getHash) {
	    getHash = config.getHash;
	  }
	  if (config.setHash) {
	    setHash = config.setHash;
	  }
	};

	/*
	rouThor ==[x]
	 */

	// instance of Lightning.Application
	let application;

	//instance of Lightning.Component
	let app;

	let stage;
	let widgetsHost;
	let pagesHost;

	const pages = new Map();
	const providers = new Map();
	const modifiers = new Map();
	const widgetsPerRoute = new Map();

	let register = new Map();
	let routerConfig;

	// widget that has focus
	let activeWidget;
	let rootHash;
	let bootRequest;
	let history = [];
	let initialised = false;
	let activeRoute;
	let activeHash;
	let updateHash = true;
	let forcedHash;

	// page that has focus
	let activePage;
	const hasRegex = /\{\/(.*?)\/([igm]{0,3})\}/g;

	/**
	 * Setup Page router
	 * @param config - route config object
	 * @param instance - instance of the app
	 */
	const startRouter = (config, instance) => {
	  // backwards compatible
	  let { appInstance, routes, provider = () => {}, widgets = () => {} } = config;

	  if (instance && isPage(instance)) {
	    app = instance;
	  }

	  if (!app) {
	    app = appInstance || AppInstance;
	  }

	  application = app.application;
	  pagesHost = application.childList;
	  stage = app.stage;
	  routerConfig = getConfigMap();

	  // test if required to host pages in a different child
	  if (app.pages) {
	    pagesHost = app.pages.childList;
	  }

	  // test if app uses widgets
	  if (app.widgets && app.widgets.children) {
	    widgetsHost = app.widgets.childList;
	  }

	  // register step back handler
	  app._handleBack = step.bind(null, -1);

	  // register step back handler
	  app._captureKey = capture.bind(null);

	  if (isArray(routes)) {
	    setupRoutes(config);
	    start();
	  } else if (isFunction(routes)) {
	    // register route data bindings
	    provider();
	    // register routes
	    routes();
	    // register widgets
	    widgets();
	  }
	};

	const setupRoutes = routesConfig => {
	  let bootPage = routesConfig.bootComponent;

	  if (!initialised) {
	    rootHash = routesConfig.root;
	    if (isFunction(routesConfig.boot)) {
	      boot(routesConfig.boot);
	    }
	    if (bootPage && isPage(bootPage)) {
	      route('@boot-page', routesConfig.bootComponent);
	    }
	    if (isBoolean(routesConfig.updateHash)) {
	      updateHash = routesConfig.updateHash;
	    }
	    initialised = true;
	  }

	  routesConfig.routes.forEach(r => {
	    route(r.path, r.component || r.hook, r.options);
	    if (r.widgets) {
	      widget(r.path, r.widgets);
	    }

	    if (isFunction(r.on)) {
	      on(r.path, r.on, r.cache || 0);
	    }
	    if (isFunction(r.before)) {
	      before(r.path, r.before, r.cache || 0);
	    }
	    if (isFunction(r.after)) {
	      after(r.path, r.after, r.cache || 0);
	    }
	  });
	};

	/**
	 * create a new route
	 * @param route - {string}
	 * @param type - {(Lightning.Component|Function()*)}
	 * @param modifiers - {Object{}} - preventStorage | clearHistory | storeLast
	 */
	const route = (route, type, config) => {
	  route = route.replace(/\/+$/, '');
	  // if the route is defined we try to push
	  // the new type on to the stack
	  if (pages.has(route)) {
	    let stack = pages.get(route);
	    if (!isArray(stack)) {
	      stack = [stack];
	    }

	    // iterate stack and look if there is page instance
	    // attached to the route
	    const hasPage = stack.filter(o => isPage(o));
	    if (hasPage.length) {
	      // only allow multiple functions for route
	      if (isFunction(type) && !isPage(type)) {
	        stack.push(type);
	      } else {
	        console.warn(`Page for route('${route}') already exists`);
	      }
	    } else {
	      if (isFunction(type)) {
	        stack.push(type);
	      } else {
	        if (!routerConfig.get('lazyCreate')) {
	          type = isLightningComponent(type) ? create(type) : type;
	          pagesHost.a(type);
	        }
	        stack.push(type);
	      }
	    }
	    pages.set(route, stack);
	  } else {
	    if (isPage(type)) {
	      // if flag lazy eq false we (test) and create
	      // correct component and add it to the childList
	      if (!routerConfig.get('lazyCreate')) {
	        type = isLightningComponent(type) ? create(type) : type;
	        pagesHost.a(type);
	      }
	    }

	    // if lazy we just store the constructor or function
	    pages.set(route, [type]);

	    // store router modifiers
	    if (config) {
	      modifiers.set(route, config);
	    }
	  }
	};

	/**
	 * create a route and define it as root.
	 * Upon boot we will automatically point browser hash
	 * to the defined route
	 * @param route - {string}
	 * @param type - {(Lightning.Component|Function()*)}
	 */
	const root = (url, type, config) => {
	  rootHash = url.replace(/\/+$/, '');
	  route(url, type, config);
	};

	/**
	 * Define the widgets that need to become visible per route
	 * @param url
	 * @param widgets
	 */
	const widget = (url, widgets = []) => {
	  if (!widgetsPerRoute.has(url)) {
	    if (!isArray(widgets)) {
	      widgets = [widgets];
	    }
	    widgetsPerRoute.set(url, widgets);
	  } else {
	    console.warn(`Widgets already exist for ${url}`);
	  }
	};

	const create = type => {
	  const page = stage.c({ type, visible: false });
	  // if the app has widgets we make them available
	  // as an object on the app instance
	  if (widgetsHost) {
	    page.widgets = getWidgetReferences();
	  }

	  return page
	};

	/**
	 * The actual loading of the component
	 * @param {String} route - the route blueprint, used for data provider look up
	 * @param {String} hash - current hash we're routing to
	 * */
	const load = async ({ route, hash }) => {
	  const type = getPageByRoute(route);
	  let routesShareInstance = false;
	  let provide = false;
	  let page = null;
	  let isCreated = false;

	  // if page is instanceof Component
	  if (!isLightningComponent(type)) {
	    page = type;
	    // if we have have a data route for current page
	    if (providers.has(route)) {
	      // if page is expired or new hash is different
	      // from previous hash when page was loaded
	      // effectively means: page could be loaded
	      // with new url parameters
	      if (isPageExpired(type) || type[Symbol.for('hash')] !== hash) {
	        provide = true;
	      }
	    }

	    let currentRoute = activePage && activePage[Symbol.for('route')];

	    // if the new route is equal to the current route it means that both
	    // route share the Component instance and stack location / since this case
	    // is conflicting with the way before() and after() loading works we flag it,
	    // and check platform settings in we want to re-use instance
	    if (route === currentRoute) {
	      routesShareInstance = true;
	    }
	  } else {
	    page = create(type);
	    pagesHost.a(page);

	    // update stack
	    const location = getPageStackLocation(route);
	    if (!isNaN(location)) {
	      let stack = pages.get(route);
	      stack[location] = page;
	      pages.set(route, stack);
	    }

	    // test if need to request data provider
	    if (providers.has(route)) {
	      provide = true;
	    }

	    isCreated = true;
	  }

	  // we store hash and route as properties on the page instance
	  // that way we can easily calculate new behaviour on page reload
	  page[Symbol.for('hash')] = hash;
	  page[Symbol.for('route')] = route;

	  // if routes share instance we only update
	  // update the page data if needed
	  if (routesShareInstance) {
	    if (provide) {
	      try {
	        await updatePageData({ page, route, hash });
	        emit(page, ['dataProvided', 'changed']);
	      } catch (e) {
	        // show error page with route / hash
	        // and optional error code
	        handleError(e);
	      }
	    } else {
	      providePageData({ page, route, hash, provide: false });
	      emit(page, 'changed');
	    }
	  } else {
	    if (provide) {
	      const { type: loadType } = providers.get(route);
	      const properties = {
	        page,
	        old: activePage,
	        route,
	        hash,
	      };
	      try {
	        if (triggers[loadType]) {
	          await triggers[loadType](properties);
	          emit(page, ['dataProvided', isCreated ? 'mounted' : 'changed']);
	        } else {
	          throw new Error(`${loadType} is not supported`)
	        }
	      } catch (e) {
	        handleError(page, e);
	      }
	    } else {
	      const p = activePage;
	      const r = p && p[Symbol.for('route')];

	      providePageData({ page, route, hash, provide: false });
	      doTransition(page, activePage).then(() => {
	        // manage cpu/gpu memory
	        if (p) {
	          cleanUp(p, r);
	        }

	        emit(page, isCreated ? 'mounted' : 'changed');

	        // force focus calculation
	        app._refocus();
	      });
	    }
	  }

	  // store reference to active page, probably better to store the
	  // route in the future
	  activePage = page;
	  activeRoute = route;
	  activeHash = hash;

	  if (widgetsPerRoute.size && widgetsHost) {
	    updateWidgets(page);
	  }

	  Log.info('[route]:', route);
	  Log.info('[hash]:', hash);

	  return page
	};

	const triggerAfter = ({ page, old, route, hash }) => {
	  return doTransition(page, old).then(() => {
	    // if the current and previous route (blueprint) are equal
	    // we're loading the same page again but provide it with new data
	    // in that case we don't clean-up the old page (since we're re-using)
	    if (old) {
	      cleanUp(old, old[Symbol.for('route')]);
	    }

	    // update provided page data
	    return updatePageData({ page, route, hash })
	  })
	};

	const triggerBefore = ({ page, old, route, hash }) => {
	  return updatePageData({ page, route, hash })
	    .then(() => {
	      return doTransition(page, old)
	    })
	    .then(() => {
	      if (old) {
	        cleanUp(old, old[Symbol.for('route')]);
	      }
	    })
	};

	const triggerOn = ({ page, old, route, hash }) => {
	  const previousState = app.state || '';
	  app._setState('Loading');

	  if (old) {
	    cleanUp(old, old[Symbol.for('route')]);
	  }

	  return updatePageData({ page, route, hash })
	    .then(() => {
	      // @todo: fix zIndex for transition
	      return doTransition(page)
	    })
	    .then(() => {
	      // @todo: make state configurable
	      if (previousState === 'Widgets') {
	        app._setState('Widgets', [activeWidget]);
	      } else {
	        app._setState('');
	      }
	    })
	};

	const emit = (page, events = [], params = {}) => {
	  if (!isArray(events)) {
	    events = [events];
	  }
	  events.forEach(e => {
	    const event = `_on${ucfirst(e)}`;
	    if (isFunction(page[event])) {
	      page[event](params);
	    }
	  });
	};

	const handleError = (page, error = 'error unkown') => {
	  // force expire
	  page[Symbol.for('expires')] = Date.now();

	  if (pages.has('!')) {
	    load({ route: '!', hash: page[Symbol.for('hash')] }).then(errorPage => {
	      errorPage.error = { page, error };

	      // on() loading type will force the app to go
	      // in a loading state so on error we need to
	      // go back to root state
	      if (app.state === 'Loading') {
	        app._setState('');
	      }

	      // make sure we delegate focus to the error page
	      if (activePage !== errorPage) {
	        activePage = errorPage;
	        app._refocus();
	      }
	    });
	  } else {
	    Log.error(page, error);
	  }
	};

	const triggers = {
	  on: triggerOn,
	  after: triggerAfter,
	  before: triggerBefore,
	};

	const boot = cb => {
	  bootRequest = cb;
	};

	const providePageData = ({ page, route, hash }) => {
	  const urlValues = getValuesFromHash(hash, route);
	  const pageData = new Map([...urlValues, ...register]);
	  const params = {};

	  // make dynamic url data available to the page
	  // as instance properties
	  for (let [name, value] of pageData) {
	    page[name] = value;
	    params[name] = value;
	  }

	  // check navigation register for persistent data
	  if (register.size) {
	    const obj = {};
	    for (let [k, v] of register) {
	      obj[k] = v;
	    }
	    page.persist = obj;
	  }

	  // make url data and persist data available
	  // via params property
	  page.params = params;

	  emit(page, ['urlParams'], params);

	  return params
	};

	const updatePageData = ({ page, route, hash, provide = true }) => {
	  const { cb, expires } = providers.get(route);
	  const params = providePageData({ page, route, hash });

	  if (!provide) {
	    return Promise.resolve()
	  }
	  /**
	   * In the first version of the Router, a reference to the page is made
	   * available to the callback function as property of {params}.
	   * Since this is error prone (named url parts are also being spread inside this object)
	   * we made the page reference the first parameter and url values the second.
	   * -
	   * We keep it backwards compatible for now but a warning is showed in the console.
	   */
	  if (incorrectParams(cb, route)) {
	    // keep page as params property backwards compatible for now
	    return cb({ page, ...params }).then(() => {
	      page[Symbol.for('expires')] = Date.now() + expires;
	    })
	  } else {
	    return cb(page, { ...params }).then(() => {
	      page[Symbol.for('expires')] = Date.now() + expires;
	    })
	  }
	};

	/**
	 * execute transition between new / old page and
	 * toggle the defined widgets
	 * @todo: platform override default transition
	 * @param pageIn
	 * @param pageOut
	 */
	const doTransition = (pageIn, pageOut = null) => {
	  const transition = pageIn.pageTransition || pageIn.easing;
	  const hasCustomTransitions = !!(pageIn.smoothIn || pageIn.smoothInOut || transition);
	  const transitionsDisabled = routerConfig.get('disableTransitions');

	  // default behaviour is a visibility toggle
	  if (!hasCustomTransitions || transitionsDisabled) {
	    pageIn.visible = true;
	    if (pageOut) {
	      pageOut.visible = false;
	    }
	    return Promise.resolve()
	  }

	  if (transition) {
	    let type;
	    try {
	      type = transition.call(pageIn, pageIn, pageOut);
	    } catch (e) {
	      type = 'crossFade';
	    }

	    if (isPromise(type)) {
	      return type
	    }

	    if (isString(type)) {
	      const fn = Transitions[type];
	      if (fn) {
	        return fn(pageIn, pageOut)
	      }
	    }

	    // keep backwards compatible for now
	    if (pageIn.smoothIn) {
	      // provide a smooth function that resolves itself
	      // on transition finish
	      const smooth = (p, v, args = {}) => {
	        return new Promise(resolve => {
	          pageIn.visible = true;
	          pageIn.setSmooth(p, v, args);
	          pageIn.transition(p).on('finish', () => {
	            resolve();
	          });
	        })
	      };
	      return pageIn.smoothIn({ pageIn, smooth })
	    }
	  }

	  return Transitions.crossFade(pageIn, pageOut)
	};

	/**
	 * update the visibility of the available widgets
	 * for the current page / route
	 * @param page
	 */
	const updateWidgets = page => {
	  const route = page[Symbol.for('route')];

	  // force lowercase lookup
	  const configured = (widgetsPerRoute.get(route) || []).map(ref => ref.toLowerCase());

	  widgetsHost.forEach(widget => {
	    widget.visible = configured.indexOf(widget.ref.toLowerCase()) !== -1;
	    if (widget.visible) {
	      emit(widget, ['activated'], page);
	    }
	  });

	  if (app.state === 'Widgets' && !activeWidget.visible) {
	    app._setState('');
	  }
	};

	const cleanUp = (page, route) => {
	  let doCleanup = false;
	  const lazyDestroy = routerConfig.get('lazyDestroy');
	  const destroyOnBack = routerConfig.get('destroyOnHistoryBack');
	  const keepAlive = read('keepAlive');
	  const isFromHistory = read('@router:backtrack');

	  if (isFromHistory && (destroyOnBack || lazyDestroy)) {
	    doCleanup = true;
	  } else if (lazyDestroy && !keepAlive) {
	    doCleanup = true;
	  }

	  if (doCleanup) {
	    // in lazy create mode we store constructor
	    // and remove the actual page from host
	    const stack = pages.get(route);
	    const location = getPageStackLocation(route);

	    // grab original class constructor if statemachine routed
	    // else store constructor
	    stack[location] = page._routedType || page.constructor;
	    pages.set(route, stack);

	    // actual remove of page from memory
	    pagesHost.remove(page);

	    // force texture gc() if configured
	    // so we can cleanup textures in the same tick
	    if (routerConfig.get('gcOnUnload')) {
	      stage.gc();
	    }
	  }
	};

	/**
	 * Test if page passed cache-time
	 * @param page
	 * @returns {boolean}
	 */
	const isPageExpired = page => {
	  if (!page[Symbol.for('expires')]) {
	    return false
	  }

	  const expires = page[Symbol.for('expires')];
	  const now = Date.now();

	  return now >= expires
	};

	const getPageByRoute = route => {
	  return getPageFromStack(route).item
	};

	/**
	 * Returns the current location of a page constructor or
	 * page instance for a route
	 * @param route
	 */
	const getPageStackLocation = route => {
	  return getPageFromStack(route).index
	};

	const getPageFromStack = route => {
	  if (!pages.has(route)) {
	    return false
	  }

	  let index = -1;
	  let item = null;
	  let stack = pages.get(route);
	  if (!Array.isArray(stack)) {
	    stack = [stack];
	  }

	  for (let i = 0, j = stack.length; i < j; i++) {
	    if (isPage(stack[i])) {
	      index = i;
	      item = stack[i];
	      break
	    }
	  }

	  return { index, item }
	};

	/**
	 * Simple route length calculation
	 * @param route {string}
	 * @returns {number} - floor
	 */
	const getFloor = route => {
	  return stripRegex(route).split('/').length
	};

	/**
	 * Test if a route is part regular expressed
	 * and replace it for a simple character
	 * @param route
	 * @returns {*}
	 */
	const stripRegex = (route, char = 'R') => {
	  // if route is part regular expressed we replace
	  // the regular expression for a character to
	  // simplify floor calculation and backtracking
	  if (hasRegex.test(route)) {
	    route = route.replace(hasRegex, char);
	  }
	  return route
	};

	/**
	 * return all stored routes that live on the same floor
	 * @param floor
	 * @returns {Array}
	 */
	const getRoutesByFloor = floor => {
	  const matches = [];
	  // simple filter of level candidates
	  for (let [route] of pages.entries()) {
	    if (getFloor(route) === floor) {
	      matches.push(route);
	    }
	  }
	  return matches
	};

	/**
	 * return a matching route by provided hash
	 * hash: home/browse/12 will match:
	 * route: home/browse/:categoryId
	 * @param hash {string}
	 * @returns {string|boolean} - route
	 */
	const getRouteByHash = hash => {
	  const getUrlParts = /(\/?:?[@\w%\s-]+)/g;
	  // grab possible candidates from stored routes
	  const candidates = getRoutesByFloor(getFloor(hash));
	  // break hash down in chunks
	  const hashParts = hash.match(getUrlParts) || [];
	  // test if the part of the hash has a replace
	  // regex lookup id
	  const hasLookupId = /\/:\w+?@@([0-9]+?)@@/;
	  const isNamedGroup = /^\/:/;

	  // we skip wildcard routes
	  const skipRoutes = ['!', '*', '$'];

	  // to simplify the route matching and prevent look around
	  // in our getUrlParts regex we get the regex part from
	  // route candidate and store them so that we can reference
	  // them when we perform the actual regex against hash
	  let regexStore = [];

	  let matches = candidates.filter(route => {
	    let isMatching = true;

	    if (skipRoutes.indexOf(route) !== -1) {
	      return false
	    }

	    // replace regex in route with lookup id => @@{storeId}@@
	    if (hasRegex.test(route)) {
	      const regMatches = route.match(hasRegex);
	      if (regMatches && regMatches.length) {
	        route = regMatches.reduce((fullRoute, regex) => {
	          const lookupId = regexStore.length;
	          fullRoute = fullRoute.replace(regex, `@@${lookupId}@@`);
	          regexStore.push(regex.substring(1, regex.length - 1));
	          return fullRoute
	        }, route);
	      }
	    }

	    const routeParts = route.match(getUrlParts) || [];

	    for (let i = 0, j = routeParts.length; i < j; i++) {
	      const routePart = routeParts[i];
	      const hashPart = hashParts[i];

	      // Since we support catch-all and regex driven name groups
	      // we first test for regex lookup id and see if the regex
	      // matches the value from the hash
	      if (hasLookupId.test(routePart)) {
	        const routeMatches = hasLookupId.exec(routePart);
	        const storeId = routeMatches[1];
	        const routeRegex = regexStore[storeId];

	        // split regex and modifiers so we can use both
	        // to create a new RegExp
	        // eslint-disable-next-line
	        const regMatches = /\/([^\/]+)\/([igm]{0,3})/.exec(routeRegex);

	        if (regMatches && regMatches.length) {
	          const expression = regMatches[1];
	          const modifiers = regMatches[2];

	          const regex = new RegExp(`^/${expression}$`, modifiers);

	          if (!regex.test(hashPart)) {
	            isMatching = false;
	          }
	        }
	      } else if (isNamedGroup.test(routePart)) {
	        // we kindly skip namedGroups because this is dynamic
	        // we only need to the static and regex drive parts
	        continue
	      } else if (hashPart && routePart.toLowerCase() !== hashPart.toLowerCase()) {
	        isMatching = false;
	      }
	    }
	    return isMatching
	  });

	  if (matches.length) {
	    // we give prio to static routes over dynamic
	    matches = matches.sort(a => {
	      return isNamedGroup.test(a) ? -1 : 1
	    });
	    return matches[0]
	  }

	  return false
	};

	/**
	 * Extract dynamic values from location hash and return a namedgroup
	 * of key (from route) value (from hash) pairs
	 * @param hash {string} - the actual location hash
	 * @param route {string} - the route as defined in route
	 */
	const getValuesFromHash = (hash, route) => {
	  // replace the regex definition from the route because
	  // we already did the matching part
	  route = stripRegex(route, '');

	  const getUrlParts = /(\/?:?[\w%\s-]+)/g;
	  const hashParts = hash.match(getUrlParts) || [];
	  const routeParts = route.match(getUrlParts) || [];
	  const getNamedGroup = /^\/:([\w-]+)\/?/;

	  return routeParts.reduce((storage, value, index) => {
	    const match = getNamedGroup.exec(value);
	    if (match && match.length) {
	      storage.set(match[1], decodeURIComponent(hashParts[index].replace(/^\//, '')));
	    }
	    return storage
	  }, new Map())
	};

	const handleHashChange = override => {
	  const hash = override || getHash();
	  const route = getRouteByHash(hash);

	  if (route) {
	    // would be strange if this fails but we do check
	    if (pages.has(route)) {
	      let stored = pages.get(route);
	      if (!isArray(stored)) {
	        stored = [stored];
	      }
	      let n = stored.length;
	      while (n--) {
	        const type = stored[n];
	        if (isPage(type)) {
	          load({ route, hash }).then(() => {
	            app._refocus();
	          });
	        } else {
	          const urlParams = getValuesFromHash(hash, route);
	          const params = {};
	          for (const key of urlParams.keys()) {
	            params[key] = urlParams.get(key);
	          }
	          // invoke
	          type.call(null, app, { ...params });
	        }
	      }
	    }
	  } else {
	    if (pages.has('*')) {
	      load({ route: '*', hash }).then(() => {
	        app._refocus();
	      });
	    }
	  }
	};

	const getMod = (hash, key) => {
	  const config = modifiers.get(getRouteByHash(hash));
	  if (isObject(config)) {
	    return config[key]
	  }
	};

	const hashmod = (hash, key) => {
	  return routemod(getRouteByHash(hash), key)
	};

	const routemod = (route, key) => {
	  if (modifiers.has(route)) {
	    const config = modifiers.get(route);
	    if (config[key] && config[key] === true) {
	      return true
	    }
	  }
	  return false
	};

	const read = flag => {
	  if (register.has(flag)) {
	    return register.get(flag)
	  }
	  return false
	};

	const createRegister = flags => {
	  const reg = new Map();
	  Object.keys(flags).forEach(key => {
	    reg.set(key, flags[key]);
	  });
	  return reg
	};

	const navigate = (url, args, store = true) => {
	  register.clear();

	  let hash = getHash();
	  if (!mustUpdateHash() && forcedHash) {
	    hash = forcedHash;
	  }

	  const storeHash = getMod(hash, 'store');
	  let configPrevent = hashmod(hash, 'preventStorage');
	  let configStore = true;

	  if ((isBoolean(storeHash) && storeHash === false) || configPrevent) {
	    configStore = false;
	  }

	  if (isObject(args)) {
	    register = createRegister(args);
	    if (isBoolean(store) && !store) {
	      store = false;
	    }
	  } else if (isBoolean(args) && !args) {
	    // if explicit set to false we don't want
	    // to store the route
	    store = false;
	  }

	  if (hash && store && configStore) {
	    const toStore = hash.replace(/^\//, '');
	    const location = history.indexOf(toStore);
	    // store hash if it's not a part of history or flag for
	    // storage of same hash is true
	    if (location === -1 || routerConfig.get('storeSameHash')) {
	      history.push(toStore);
	    } else {
	      // if we visit the same route we want to sync history
	      history.push(history.splice(location, 1)[0]);
	    }
	  }

	  // clean up history if modifier is set
	  if (hashmod(url, 'clearHistory')) {
	    history.length = 0;
	  }

	  if (hash.replace(/^#/, '') !== url) {
	    if (!mustUpdateHash()) {
	      forcedHash = url;
	      handleHashChange(url);
	    } else {
	      setHash(url);
	    }
	  } else if (read('reload')) {
	    handleHashChange(hash);
	  }
	};

	/**
	 * Directional step in history
	 * @param direction
	 */
	const step = (direction = 0) => {
	  if (!direction) {
	    return false
	  }

	  // is we still have routes in our history
	  // we splice the last of and navigate to that route
	  if (history.length) {
	    // for now we only support history back
	    const route = history.splice(history.length - 1, 1);
	    return navigate(route[0], { backtrack: true }, false)
	  } else if (routerConfig.get('backtrack')) {
	    const hashLastPart = /(\/:?[\w%\s-]+)$/;
	    let hash = stripRegex(getHash());
	    let floor = getFloor(hash);

	    // test if we got deeplinked
	    if (floor > 1) {
	      while (floor--) {
	        // strip of last part
	        hash = hash.replace(hashLastPart, '');
	        // if we have a configured route
	        // we navigate to it
	        if (getRouteByHash(hash)) {
	          return navigate(hash, { '@router:backtrack': true }, false)
	        }
	      }
	    }
	  }

	  if (isFunction(app._handleAppClose)) {
	    return app._handleAppClose()
	  }

	  return false
	};

	const capture = ({ key }) => {
	  if (!routerConfig.get('numberNavigation')) {
	    return false
	  }
	  key = parseInt(key);
	  if (!isNaN(key)) {
	    let match;
	    let idx = 1;
	    for (let route of pages.keys()) {
	      if (idx === key) {
	        match = route;
	        break
	      } else {
	        idx++;
	      }
	    }
	    if (match) {
	      navigate(match);
	    }
	  }
	  return false
	};

	// start translating url
	const start = () => {
	  const bootKey = '@boot-page';
	  const hasBootPage = pages.has('@boot-page');
	  const hash = getHash();
	  const params = getQueryStringParams(hash);

	  // if we refreshed the boot-page we don't want to
	  // redirect to this page so we force rootHash load
	  const isDirectLoad = hash.indexOf(bootKey) !== -1;
	  const ready = () => {
	    if (hasBootPage) {
	      navigate('@boot-page', {
	        resume: isDirectLoad ? rootHash : hash || rootHash,
	        reload: true,
	      });
	    } else if (!hash && rootHash) {
	      if (isString(rootHash)) {
	        navigate(rootHash);
	      } else if (isFunction(rootHash)) {
	        rootHash().then(url => {
	          navigate(url);
	        });
	      }
	    } else {
	      handleHashChange();
	    }
	  };
	  if (isFunction(bootRequest)) {
	    bootRequest(params).then(() => {
	      ready();
	    });
	  } else {
	    ready();
	  }
	};

	/**
	 * Data binding to a route will invoke a loading screen
	 * @param {String} route - the route
	 * @param {Function} cb - must return a promise
	 * @param {Number} expires - seconds after first time active that data expires
	 * @param {String} type - page loading type
	 */
	const on = (route, cb, expires = 0, type = 'on') => {
	  if (providers.has(route)) {
	    console.warn(`provider for ${route} already exists`);
	  } else {
	    providers.set(route, {
	      cb,
	      expires: expires * 1000,
	      type,
	    });
	  }
	};

	/**
	 * Request data binding for a route before
	 * the page loads (active page will stay visible)
	 * @param route
	 * @param cb
	 * @param expires
	 */
	const before = (route, cb, expires = 0) => {
	  on(route, cb, expires, 'before');
	};

	/**
	 * Request data binding for a route after the page has
	 * been loaded
	 * @param route
	 * @param cb
	 * @param expires
	 */
	const after = (route, cb, expires = 0) => {
	  on(route, cb, expires, 'after');
	};

	const getWidgetReferences = () => {
	  return widgetsHost.get().reduce((storage, widget) => {
	    const key = widget.ref.toLowerCase();
	    storage[key] = widget;
	    return storage
	  }, {})
	};

	const getWidgetByName = name => {
	  name = ucfirst(name);
	  return widgetsHost.getByRef(name) || false
	};

	/**
	 * delegate app focus to a on-screen widget
	 * @param name - {string}
	 */
	const focusWidget = name => {
	  const widget = getWidgetByName(name);
	  if (name) {
	    // store reference
	    activeWidget = widget;
	    // somewhat experimental
	    if (app.state === 'Widgets') {
	      app.reload(activeWidget);
	    } else {
	      app._setState('Widgets', [activeWidget]);
	    }
	  }
	};

	const handleRemote = (type, name) => {
	  if (type === 'widget') {
	    focusWidget(name);
	  } else if (type === 'page') {
	    restoreFocus();
	  }
	};

	/**
	 * Resume Router's page loading process after
	 * the BootComponent became visible;
	 */
	const resume = () => {
	  if (register.has('resume')) {
	    const hash = register.get('resume').replace(/^#+/, '');
	    if (getRouteByHash(hash) && hash) {
	      navigate(hash, false);
	    } else if (rootHash) {
	      navigate(rootHash, false);
	    }
	  }
	};

	const restore = () => {
	  if (routerConfig.get('autoRestoreRemote')) {
	    handleRemote('page');
	  }
	};

	const hash = () => {
	  return getHash()
	};

	const mustUpdateHash = () => {
	  // we need support to either turn change hash off
	  // per platform or per app
	  const updateConfig = routerConfig.get('updateHash');
	  return !((isBoolean(updateConfig) && !updateConfig) || (isBoolean(updateHash) && !updateHash))
	};

	const restoreFocus = () => {
	  activeWidget = null;
	  app._setState('');
	};

	const getActivePage = () => {
	  if (activePage && activePage.attached) {
	    return activePage
	  } else {
	    return app
	  }
	};

	const getActiveRoute = () => {
	  return activeRoute
	};

	const getActiveHash = () => {
	  return activeHash
	};

	const getActiveWidget = () => {
	  return activeWidget
	};

	// listen to url changes
	window.addEventListener('hashchange', () => {
	  handleHashChange();
	});

	// export API
	var Router = {
	  startRouter,
	  navigate,
	  root,
	  resume,
	  route,
	  on,
	  before,
	  after,
	  boot,
	  step,
	  restoreFocus,
	  focusPage: restoreFocus,
	  focusWidget,
	  handleRemote,
	  start,
	  add: setupRoutes,
	  widget,
	  hash,
	  getActivePage,
	  getActiveWidget,
	  getActiveRoute,
	  getActiveHash,
	  App: RoutedApp,
	  restore,
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	const defaultChannels = [
	  {
	    number: 1,
	    name: 'Metro News 1',
	    description: 'New York Cable News Channel',
	    entitled: true,
	    program: {
	      title: 'The Morning Show',
	      description: "New York's best morning show",
	      startTime: new Date(new Date() - 60 * 5 * 1000).toUTCString(), // started 5 minutes ago
	      duration: 60 * 30, // 30 minutes
	      ageRating: 0,
	    },
	  },
	  {
	    number: 2,
	    name: 'MTV',
	    description: 'Music Television',
	    entitled: true,
	    program: {
	      title: 'Beavis and Butthead',
	      description: 'American adult animated sitcom created by Mike Judge',
	      startTime: new Date(new Date() - 60 * 20 * 1000).toUTCString(), // started 20 minutes ago
	      duration: 60 * 45, // 45 minutes
	      ageRating: 18,
	    },
	  },
	  {
	    number: 3,
	    name: 'NBC',
	    description: 'NBC TV Network',
	    entitled: false,
	    program: {
	      title: 'The Tonight Show Starring Jimmy Fallon',
	      description: 'Late-night talk show hosted by Jimmy Fallon on NBC',
	      startTime: new Date(new Date() - 60 * 10 * 1000).toUTCString(), // started 10 minutes ago
	      duration: 60 * 60, // 1 hour
	      ageRating: 10,
	    },
	  },
	];

	const channels = () => Settings.get('platform', 'tv', defaultChannels);

	const randomChannel = () => channels()[~~(channels.length * Math.random())];

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	let currentChannel;
	const callbacks = {};

	const emit$1 = (event, ...args) => {
	  callbacks[event] &&
	    callbacks[event].forEach(cb => {
	      cb.apply(null, args);
	    });
	};

	// local mock methods
	let methods = {
	  getChannel() {
	    if (!currentChannel) currentChannel = randomChannel();
	    return new Promise((resolve, reject) => {
	      if (currentChannel) {
	        const channel = { ...currentChannel };
	        delete channel.program;
	        resolve(channel);
	      } else {
	        reject('No channel found');
	      }
	    })
	  },
	  getProgram() {
	    if (!currentChannel) currentChannel = randomChannel();
	    return new Promise((resolve, reject) => {
	      currentChannel.program ? resolve(currentChannel.program) : reject('No program found');
	    })
	  },
	  setChannel(number) {
	    return new Promise((resolve, reject) => {
	      if (number) {
	        const newChannel = channels().find(c => c.number === number);
	        if (newChannel) {
	          currentChannel = newChannel;
	          const channel = { ...currentChannel };
	          delete channel.program;
	          emit$1('channelChange', channel);
	          resolve(channel);
	        } else {
	          reject('Channel not found');
	        }
	      } else {
	        reject('No channel number supplied');
	      }
	    })
	  },
	};

	const initTV = config => {
	  methods = {};
	  if (config.getChannel && typeof config.getChannel === 'function') {
	    methods.getChannel = config.getChannel;
	  }
	  if (config.getProgram && typeof config.getProgram === 'function') {
	    methods.getProgram = config.getProgram;
	  }
	  if (config.setChannel && typeof config.setChannel === 'function') {
	    methods.setChannel = config.setChannel;
	  }
	  if (config.emit && typeof config.emit === 'function') {
	    config.emit(emit$1);
	  }
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	let ApplicationInstance;

	var Launch = (App, appSettings, platformSettings, appData) => {
	  initSettings(appSettings, platformSettings);

	  initUtils(platformSettings);
	  initStorage();

	  // Initialize plugins
	  if (platformSettings.plugins) {
	    platformSettings.plugins.profile && initProfile(platformSettings.plugins.profile);
	    platformSettings.plugins.metrics && initMetrics(platformSettings.plugins.metrics);
	    platformSettings.plugins.mediaPlayer && initMediaPlayer(platformSettings.plugins.mediaPlayer);
	    platformSettings.plugins.router && initRouter(platformSettings.plugins.router);
	    platformSettings.plugins.tv && initTV(platformSettings.plugins.tv);
	  }

	  const app = Application(App, appData, platformSettings);
	  ApplicationInstance = new app(appSettings);
	  return ApplicationInstance
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	class PinInput extends Lightning.Component {
	  static _template() {
	    return {
	      w: 120,
	      h: 150,
	      rect: true,
	      color: 0xff949393,
	      alpha: 0.5,
	      shader: { type: Lightning.shaders.RoundedRectangle, radius: 10 },
	      Nr: {
	        w: w => w,
	        y: 24,
	        text: {
	          text: '',
	          textColor: 0xff333333,
	          fontSize: 80,
	          textAlign: 'center',
	          verticalAlign: 'middle',
	        },
	      },
	    }
	  }

	  set index(v) {
	    this.x = v * (120 + 24);
	  }

	  set nr(v) {
	    this._timeout && clearTimeout(this._timeout);

	    if (v) {
	      this.setSmooth('alpha', 1);
	    } else {
	      this.setSmooth('alpha', 0.5);
	    }

	    this.tag('Nr').patch({
	      text: {
	        text: (v && v.toString()) || '',
	        fontSize: v === '*' ? 120 : 80,
	      },
	    });

	    if (v && v !== '*') {
	      this._timeout = setTimeout(() => {
	        this._timeout = null;
	        this.nr = '*';
	      }, 750);
	    }
	  }
	}

	class PinDialog extends Lightning.Component {
	  static _template() {
	    return {
	      w: w => w,
	      h: h => h,
	      rect: true,
	      color: 0xdd000000,
	      alpha: 0.000001,
	      Dialog: {
	        w: 648,
	        h: 320,
	        y: h => (h - 320) / 2,
	        x: w => (w - 648) / 2,
	        rect: true,
	        color: 0xdd333333,
	        shader: { type: Lightning.shaders.RoundedRectangle, radius: 10 },
	        Info: {
	          y: 24,
	          x: 48,
	          text: { text: 'Please enter your PIN', fontSize: 32 },
	        },
	        Msg: {
	          y: 260,
	          x: 48,
	          text: { text: '', fontSize: 28, textColor: 0xffffffff },
	        },
	        Code: {
	          x: 48,
	          y: 96,
	        },
	      },
	    }
	  }

	  _init() {
	    const children = [];
	    for (let i = 0; i < 4; i++) {
	      children.push({
	        type: PinInput,
	        index: i,
	      });
	    }

	    this.tag('Code').children = children;
	  }

	  get pin() {
	    if (!this._pin) this._pin = '';
	    return this._pin
	  }

	  set pin(v) {
	    if (v.length <= 4) {
	      const maskedPin = new Array(Math.max(v.length - 1, 0)).fill('*', 0, v.length - 1);
	      v.length && maskedPin.push(v.length > this._pin.length ? v.slice(-1) : '*');
	      for (let i = 0; i < 4; i++) {
	        this.tag('Code').children[i].nr = maskedPin[i] || '';
	      }
	      this._pin = v;
	    }
	  }

	  get msg() {
	    if (!this._msg) this._msg = '';
	    return this._msg
	  }

	  set msg(v) {
	    this._timeout && clearTimeout(this._timeout);

	    this._msg = v;
	    if (this._msg) {
	      this.tag('Msg').text = this._msg;
	      this.tag('Info').setSmooth('alpha', 0.5);
	      this.tag('Code').setSmooth('alpha', 0.5);
	    } else {
	      this.tag('Msg').text = '';
	      this.tag('Info').setSmooth('alpha', 1);
	      this.tag('Code').setSmooth('alpha', 1);
	    }
	    this._timeout = setTimeout(() => {
	      this.msg = '';
	    }, 2000);
	  }

	  _firstActive() {
	    this.setSmooth('alpha', 1);
	  }

	  _handleKey(event) {
	    if (this.msg) {
	      this.msg = false;
	    } else {
	      const val = parseInt(event.key);
	      if (val > -1) {
	        this.pin += val;
	      }
	    }
	  }

	  _handleBack() {
	    if (this.msg) {
	      this.msg = false;
	    } else {
	      if (this.pin.length) {
	        this.pin = this.pin.slice(0, this.pin.length - 1);
	      } else {
	        Pin.hide();
	        this.resolve(false);
	      }
	    }
	  }

	  _handleEnter() {
	    if (this.msg) {
	      this.msg = false;
	    } else {
	      Pin.submit(this.pin)
	        .then(val => {
	          this.msg = 'Unlocking ...';
	          setTimeout(() => {
	            Pin.hide();
	          }, 1000);
	          this.resolve(val);
	        })
	        .catch(e => {
	          this.msg = e;
	          this.reject(e);
	        });
	    }
	  }
	}

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 RDK Management
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
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
	 */

	// only used during local development
	let unlocked = false;

	let submit = pin => {
	  return new Promise((resolve, reject) => {
	    if (pin.toString() === Settings.get('platform', 'pin', '0000').toString()) {
	      unlocked = true;
	      resolve(unlocked);
	    } else {
	      reject('Incorrect pin');
	    }
	  })
	};

	let check = () => {
	  return new Promise(resolve => {
	    resolve(unlocked);
	  })
	};

	let pinDialog = null;

	// Public API
	var Pin = {
	  show() {
	    return new Promise((resolve, reject) => {
	      pinDialog = ApplicationInstance.stage.c({
	        ref: 'PinDialog',
	        type: PinDialog,
	        resolve,
	        reject,
	      });
	      ApplicationInstance.childList.a(pinDialog);
	      ApplicationInstance.focus = pinDialog;
	    })
	  },
	  hide() {
	    ApplicationInstance.focus = null;
	    ApplicationInstance.children = ApplicationInstance.children.map(
	      child => child !== pinDialog && child
	    );
	    pinDialog = null;
	  },
	  submit(pin) {
	    return new Promise((resolve, reject) => {
	      try {
	        submit(pin)
	          .then(resolve)
	          .catch(reject);
	      } catch (e) {
	        reject(e);
	      }
	    })
	  },
	  unlocked() {
	    return new Promise((resolve, reject) => {
	      try {
	        check()
	          .then(resolve)
	          .catch(reject);
	      } catch (e) {
	        reject(e);
	      }
	    })
	  },
	  locked() {
	    return new Promise((resolve, reject) => {
	      try {
	        check()
	          .then(unlocked => resolve(!!!unlocked))
	          .catch(reject);
	      } catch (e) {
	        reject(e);
	      }
	    })
	  },
	};

	class Home extends Lightning.Component {
	  static _template () {
	    return {
	      Background: {
	        x: 0, y: 0, w: 1920, h: 1080, mount: 0, rect: true, colorUl: 0xFF636EFB, colorUr: 0xFF00FF00, colorBr: 0xFF1C27bC, colorBl: 0xFF00FF00
	      },
	      Label: {
	        x: 960,
	        y: 540,
	        mount: 0.5,
	        text: {
	          text: 'KPN POC: In-Home Smart Camera System'
	        }
	      },
	      HomeSign: {
	        x: 960,
	        y: 490,
	        mount: 0.5,
	        text: {
	          text: 'Homepage'
	        }
	      },
	      Details: {
	        x: 960,
	        y: 590,
	        mount: 0.5,
	        alpha: 0.5,
	        text: {
	          fontSize: 27,
	          textColor: 0xaa000000,
	          text: 'Press up to go to live streams\nPress down to view recordings'
	        }
	      }
	    }
	  }

	  _handleLeft () {
	    Router.navigate('live_camera');
	  }

	  _handleRight () {
	    Router.navigate('doorbell');
	  }

	  _handleDown () {
	    Router.navigate('recordings');
	  }

	  _handleUp () {
	    Router.navigate('grid');
	  }

	  pageTransition () {
	    return 'fadeIn'
	  }
	}

	class Live_Camera extends Lightning.Component {
	  static _template() {
	    return {
	      MediaPlayer: {
	        type: Mediaplayer
	      },
	      Background: {
	        x: 0, y: 0, w: 1920, h: 1080, mount: 0, rect: true, colorUl: 0xFF636EFB, colorUr: 0xFF00FF00, colorBr: 0xFF1C27bC, colorBl: 0xFF00FF00
	      },
	      Label: {
	        x: 960,
	        y: 590,
	        mount: 0.5,
	        text: {
	          text: 'Live Camera stream'
	        }
	      },
	      Explanation: {
	        x: 960,
	        y: 630,
	        mount: 0.5,
	        alpha: 0.5,
	        text: {
	          fontSize: 27,
	          textAlign: 'center',
	          textColor: 0xaa000000,
	          lineHeight: 35,
	          text: 'Press right to go back home'
	        }
	      }
	    }
	  }

	  get authentication() {
	    return this.fireAncestors('$getAuthentication')
	  }

	  _init() {
	    this.tag('MediaPlayer').updateSettings({ consumer: this });
	    this._setState('Playing');
	  }

	  _handleEnter() {
	    const camData = this.authentication.getCamera();
	    this.tag('MediaPlayer').open(camData.vpn_url + '/live/files/medium/index.m3u8');
	  }

	  $mediaplayerPlay() {
	    this.tag('Background').setSmooth('alpha', 0);
	  }

	  $mediaplayerStop() {
	    this.tag('Background').setSmooth('alpha', 1);
	  }

	  _handleRight() {
	    this.tag('MediaPlayer').close();
	    Router.navigate('home');
	  }
	}

<<<<<<< HEAD
	// import wrappy from "wrappy"
	// var request = require('request');

	class Recordings extends Lightning.Component {
=======
	const proxyUrl$1 = "https://cors-anywhere.herokuapp.com/";
	let imageURL = '';
	class Recordings extends Lightning.Component {

>>>>>>> Lighning_app
	  static _template() {
	    return {
	      Background: {
	        x: 0, y: 0, w: 1920, h: 1080, mount: 0, rect: true, colorUl: 0xFF636EFB, colorUr: 0xFF00FF00, colorBr: 0xFF1C27bC, colorBl: 0xFF00FF00
	      },
	      Image: {
	        mount: 0,
	        x: 300,
	        y: 180,
	        scale: 1,
	        src: imageURL,
	        alpha: 1
	      },
	      Label: {
	        x: 960,
	        y: 50,
	        mount: 0.5,
	        text: {
	          text: 'Live Snapshot',
	          textColor: 0xaa000000
	        }
	      },
	      Explanation: {
	        x: 960,
	        y: 100,
	        mount: 0.5,
	        alpha: 0.5,
	        text: {
	          fontSize: 27,
	          textAlign: 'center',
	          lineHeight: 35,
	          text: 'press enter for a picture.\npress up to go back home.',
	          textColor: 0xaa000000
	        }
	      }
	    }
	  }

<<<<<<< HEAD
	  _init() {
	    this.tag('MediaPlayer').updateSettings({ consumer: this });
	    const videoUrl = 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4';
	    this._cleanBG = this.tag('Background').animation({
	      duration: -1,
	      repeat: -1,
	      actions: [
	        { p: 'alpha', v: 0 }
	      ]
	    });
	    this._cleanBG.start();
	    this.tag('MediaPlayer').open(videoUrl);
	  }

	  _handleEnter() {
	    // this.tag('MediaPlayer').playPause()
	    const Http = new XMLHttpRequest();

	    function get_camera(callback) {

	      // let postParams = {
	      //     "grant_type": "password",
	      //     "client_id": clientID,
	      //     "client_secret": clientSecret,
	      //     "username": username,
	      //     "password": password,
	      //     "scope": scope
	      // }

	      let authOptions = {
	        url: "https://api.netatmo.com/oauth2/token",
	        // headers: {
	        //   'Authorization': 'Basic ' + (new Buffer(clientID + ':' + clientSecret).toString('base64'))
	        // },
	        form: {
	          username: 'sung.park@kpn.com',
	          password: 'Puckpiper123!',
	          grant_type: 'password',
	          scope: "read_camera access_camera read_presence access_presence"
	        },
	        json: true
	      };

	      request.post(authOptions, function (error, response, body) {
	        if (!error && response.statusCode === 200) {
	          let token = body.access_token; //.split("|")[0];
	          // console.log(token);

	          let getHomeDataUri = "https://api.netatmo.com/api/gethomedata";

	          var options = {
	            url: getHomeDataUri,
	            headers: {
	              'Authorization': 'Bearer ' + token
	            },
	            json: true
	          };

	          get_live_shot(options);
	        } else {
	          console.log(response);
	        }
	      });
	      // setTimeout(get_camera, 6000);
	    }

	    function get_live_shot(options, callback) {
	      request.get(options, function (error, response, body) {
	        // console.log(body.body.homes[0].events[0]);
	        // console.log(body.body.homes[0].cameras[0].vpn_url);
	        // vpn_url: https://prodvpn-eu-5.netatmo.net/restricted/10.255.76.162/0ccb1f0ed87632c75b6a50b4cb8ba8f9/MTYwMDM2NTYwMDp5tTZo4W_zZWxogoPVxMH2xs3FFQ,,
	        let camera = body.body.homes[0].cameras[0];
	        if (camera.is_local == true) {
	          console.log(camera.vpn_url + "/live/snapshot_720.jpg");
	        } else {
	          console.log("Your camera is on a different network. Sorry, reconnect to the same network.");
	        }
	      });
	    }

	    get_camera();

	    // ============================================================================================================================

=======
	  get authentication () {
	    return this.fireAncestors('$getAuthentication')
	  }

	  _handleEnter() {
	    console.log("Image will load in a second...");

	    const camData = this.authentication.getCamera();
	    // console.log(camData)

	    let myHeaders = new Headers();
	    myHeaders.append('X-Requested-With', 'XMLHttpRequest');
	    myHeaders.append('Content-Type', 'image/jpeg');
	    const myInit = {
	      method: 'GET',
	      headers: myHeaders,
	      mode: 'cors',
	      // cache: 'default'
	    };

	    fetch(proxyUrl$1 + camData.vpn_url + '/live/snapshot_720.jpg?t=' + new Date().getTime(), myInit)
	      .then(response => response)
	      .then(contents => {
	        console.log(contents);
	        this.tag("Image").patch({
	          src: contents.url
	        });
	      })
	      .then(console.log("Image is loaded."))
	      .catch(console.error());
>>>>>>> Lighning_app
	  }

	  _handleUp() {
	    Router.navigate('home');
	  }
	}

<<<<<<< HEAD
	  // https://github.com/rdkcentral/Lightning-SDK/blob/feature/router/docs/plugins/router.md#page-transitions
	  pageTransition() {
	    return 'up'
=======
	let video_url = "";
	class Grid extends Lightning.Component {
	    static _template() {
	        return {
	            MediaPlayer: {
	                type: Mediaplayer
	            },
	            Background: {
	                x: 0, y: 0, w: 1920, h: 1080, mount: 0, rect: true, colorUl: 0xFF636EFB, colorUr: 0xFF00FF00, colorBr: 0xFF1C27bC, colorBl: 0xFF00FF00
	            },
	            Label: {
	                x: 960,
	                y: 590,
	                mount: 0.5,
	                text: {
	                    text: 'Latest event clip'
	                }
	            },
	            Explanation: {
	                x: 960,
	                y: 630,
	                mount: 0.5,
	                alpha: 0.5,
	                text: {
	                    fontSize: 27,
	                    textAlign: 'center',
	                    textColor: 0xaa000000,
	                    lineHeight: 35,
	                    text: 'Press down to go back home'
	                }
	            }
	        }
	    }

	    get authentication() {
	        return this.fireAncestors('$getAuthentication')
	    }

	    _init() {
	        this.tag('MediaPlayer').updateSettings({ consumer: this });
	        this._setState('Playing');
	    }

	    getCurrentEventsInfo() {
	        let currentEvent = this.authentication.getEvents()[0];
	        video_url = this.authentication.getCamera().vpn_url + '/vod/' + currentEvent.video_id + '/index.m3u8';
	        console.log('Event video url: ', video_url);
	    }

	    $mediaplayerPlay() {
	        this.tag('Background').setSmooth('alpha', 0);
	    }

	    $mediaplayerStop() {
	        this.tag('Background').setSmooth('alpha', 1);
	    }

	    _handleUp() {
	        this.getCurrentEventsInfo();
	        this.tag('MediaPlayer').open(video_url);
	    }

	    _handleEnter() {
	        this.tag('MediaPlayer').playPause();
	    }

	    _handleDown() {
	        this.tag('MediaPlayer').close();
	        Router.navigate('home');
	    }
	}

	let stream_url = 'https://stream-eu1-bravo.dropcam.com/nexus_aac/851d9bea5db44dfc8ac7c4e144ba11bf/playlist.m3u8?public=QzorHunzFn';

	class Doorbell extends Lightning.Component {
	  static _template() {
	    return {
	      MediaPlayer: {
	        type: Mediaplayer
	      },
	      Background: {
	        x: 0, y: 0, w: 1920, h: 1080, mount: 0, rect: true, colorUl: 0xFF636EFB, colorUr: 0xFF00FF00, colorBr: 0xFF1C27bC, colorBl: 0xFF00FF00
	      },
	      Label: {
	        x: 960,
	        y: 590,
	        mount: 0.5,
	        text: {
	          text: 'Google Nest Hello Doorbell'
	        }
	      },
	      Explanation: {
	        x: 960,
	        y: 630,
	        mount: 0.5,
	        alpha: 0.5,
	        text: {
	          fontSize: 27,
	          textAlign: 'center',
	          textColor: 0xaa000000,
	          lineHeight: 35,
	          text: 'Press left to go back home'
	        }
	      }
	    }
	  }

	  get authentication() {
	    return this.fireAncestors('$getAuthentication')
	  }

	  _init() {
	    this.tag('MediaPlayer').updateSettings({ consumer: this });
	    this._setState('Playing');
	  }

	  _handleEnter() {
	    this.tag('MediaPlayer').open(stream_url);
	  }

	  $mediaplayerPlay() {
	    this.tag('Background').setSmooth('alpha', 0);
	  }

	  $mediaplayerStop() {
	    this.tag('Background').setSmooth('alpha', 1);
	  }

	  _handleLeft() {
	    this.tag('MediaPlayer').close();
	    Router.navigate('home');
>>>>>>> Lighning_app
	  }
	}

	var routes = {
	  root: 'home',
	  routes: [
	    { path: 'home',
	      component: Home
	    },
	    { path: 'live_camera',
	      component: Live_Camera
	    },
	    { path: 'recordings',
	      component: Recordings
	    },
	    { path: 'grid',
	      component: Grid
	    },
	    {
	      path: 'doorbell',
	      component: Doorbell
	    }
	  ]
	};

	let clientID = "5f9634604da74101b2221e28";
	let clientSecret = "4AkrUD5FZHtu69Fni4m8A4MWGLDnkl0zlcrbNAUduVmT";
	let username = "sung.park@kpn.com";
	let password = "Puckpiper123!";

	class Authentication {

		constructor(app) {
			this._app = app;
			this.camera = null;
			this.events = [];
			this.access_token = null;
	    	this.doAuth();
		}

		doAuth(feeditems) {
			const scope = this;
			let xhrData = new FormData();
			xhrData.append('username', username);
			xhrData.append('password', password);
			xhrData.append('grant_type', 'password');
			xhrData.append('scope', 'read_camera access_camera read_presence access_presence');

			fetch('https://api.netatmo.com/oauth2/token', { method: 'POST', headers: { 'Authorization': 'Basic ' + (window.btoa(clientID + ':' + clientSecret)) }, body: xhrData })
				.then(data => data.json())
				.then((data) => {
					scope.access_token = data.access_token;
					fetch('https://api.netatmo.com/api/gethomedata', { method: 'POST', headers: { 'Authorization': 'Bearer ' + data.access_token }, body: xhrData })
					.then(data => data.json())
					.then((data) => {
						scope.camera = data.body.homes[0].cameras[0];
						console.log('CAM: ', scope.camera);
						for (let i = 0; i < 9; i++) {
							scope.events.push(data.body.homes[0].events[i]);
						}
						// fetch('https://api.netatmo.com/api/addwebhook?url=https%3A%2F%2Fz52okqoon1.execute-api.us-east-1.amazonaws.com%2Fdefault%2FmotionDetect', { method: 'POST', headers: { 'Authorization': 'Bearer ' + scope.access_token }, body: xhrData })
						// .then(data => data.json())
						// .then((data) => {
						// 	console.log(data);
						// })
					});
				});
		}

		getCamera() {
			return this.camera;
		}

		getEvents() {
			return this.events;
		}
	}

	const ws = new WebSocket("wss://uy0itxiqb1.execute-api.us-east-1.amazonaws.com/Test");

	var scope = null;

	ws.onopen = function(e) {
	  // alert("[OPEN] Connection established");
	};

	ws.onmessage = function(event) {
	  // alert(`[MESSAGE] Data received from server: ${event.data}`);
	  var msg = JSON.parse(event.data);
	  let notification = msg.push_type;

	  if(msg.push_type == 'NACamera-movement' || msg.push_type == 'NACamera-person')
	    notification = msg.message;

	  var notify = function (tag) {
	    scope.tag("NotificationElement")
	      .patch({ 
	        smooth:{ y: [-200, { duration: 2, delay: 1, timingFunction: 'ease-out' } ]}
	      });
	  };

	  scope.tag("NotificationElement")
	    .patch({ 
	      smooth:{ 
	        y: [
	          20, 
	          { 
	            duration: 2, 
	            delay: 0, 
	            timingFunction: 'ease-out' 
	          } 
	        ]
	      }, 
	      text: {
	        text: "New Notification: " + notification
	      }
	    });
	  
	  window.setTimeout(notify, 4000);
	  console.log(msg);
	};

	ws.onclose = function(event) {
	  if (event.wasClean) {
	    alert(`[CLOSE] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
	  } else {
	    alert('[CLOSE] Connection died');
	  }
	};

	ws.onerror = function(error) {
	  alert(`[ERROR] ${error.message}`);
	};

	class App extends Router.App {
	  _setup () {
	    Router.startRouter(routes);
	  }

	  static _template () {
	    return {
	      ...super._template(),
	      NotificationElement: {
	        x: 100,
	        y: -100,
	        text: {
	          text: ""
	        }
	      }
	    }
	  }

	  _construct () {
	    this._Authentication = new Authentication(this);
	    scope = this;
		}

		$getAuthentication () {
			return this._Authentication
		}
	}

	function index() {
	  return Launch(App, ...arguments)
	}

	return index;

}());
//# sourceMappingURL=appBundle.js.map
