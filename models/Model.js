export default class Model {
	constructor(props = {}, options = {}) {
		this.props = props;
		this.options = options;


		if(typeof this.initialize === "function")
			this.initialize(props, options);
	}

	get (key) {
		return key && this.props.hasOwnProperty(key) ? this.props[key] : '';
	}

	set (key, value) {
		this.props[key] = value;
	}
}