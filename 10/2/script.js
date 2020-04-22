let app = new Vue({
	el: '#app',
	data: {
		message:'',
        items:[],
	},
    methods:{
        list: function(){
            let elems=this.message.split(' ');
            for(let i of elems){
                this.items.push(i);
            }
        }
    }
});