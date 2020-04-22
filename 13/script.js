let app = new Vue({
	el: '#app',
	data: {
         check:true,
        value:'red',
	},
    methods:{
        changecol:function(){
            if (!this.check){
                this.value='red';
            }else{
                this.value='black';
            }
        }
    }
});