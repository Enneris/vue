let app = new Vue({
	el: '#app',
	data: {
		str: 'abcde.com',
		ptext: '',
	},
	methods: {
		newtext: function(value) {
			this.ptext = this.str;
		}
	}
});