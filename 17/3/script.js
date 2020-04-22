let app = new Vue({
	el: '#app',
	data: {
		text: 'abcde',
	},
	methods: {
		changeText: function() {
            this.text = 'fghjk';
            console.log(this.text);
        }
    }
});