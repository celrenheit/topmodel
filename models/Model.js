export default class Model {
	constructor(props = {}, options = {}) {
		this.props = props;
		this.options = options;
		console.log('Base model constructor', props);
	}

	get (key) {
		console.log('get', key);
		return key && this.props.hasOwnProperty(key) ? this.props[key] : '';
	}

	set (key, value) {
		console.log('set', key, value);
		this.props[key] = value;
	}
}