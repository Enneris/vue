let app = new Vue({
	el: '#app',
	data: {
		items: [5, -9, 18, 3, -6],
	},
    methods: {
        filt:function(){
            this.items=this.items.filter(function(elem){
                if(elem>=0&&elem<=10){
                    return true;
                }else{
                    return false;
                }
            })
        }
    }
});