let app = new Vue({
	el: '#app',
	data: {
		rawHTML: '12345',
	},
	methods: {
		changeText: function() {
            this.rawHTML='<span style="color: red">Текст должен быть красным.</span>';
        }
    }
});