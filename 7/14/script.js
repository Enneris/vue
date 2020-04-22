let app = new Vue({
	el: '#app',
	data: {
		age: 25,
        show:true,
	},
    methods:{
        hide: function(){
            this.show=false;
        }
    }
});