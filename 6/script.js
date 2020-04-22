let app = new Vue({
	el: '#app',
	data: {
		items: [5, -9, 18, 3, -6],
	},
    methods: {
        sq: function(index){
            let result=this.items.splice(index,1);
            result=result*result;
            this.items.splice(index,0,result);
        }
    }
});