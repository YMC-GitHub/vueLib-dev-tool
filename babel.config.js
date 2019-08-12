module.exports = function (api) {
	api.cache(true);
	const presets = [
	  [
		'@babel/preset-env',
		{
		  modules: false,
		  debug: false,
		  include: [],
		  exclude: [],
		  useBuiltIns: false,
		  forceAllTransforms: false,
		  ignoreBrowserslistConfig: false,
		  shippedProposals: false
		}
	  ]
	];
	const plugins = [
	  ['@babel/plugin-transform-runtime', {
		absoluteRuntime: false,
		corejs: false,
		helpers: true,
		regenerator: true,
		useESModules: false
	  }
	  ]
	];
  
	return {
	  presets,
	  plugins
	};
};