let app = new Vue({
	el: '#app',
	data: {
        str:'2020.04.22',
	},
    filters:{
        formatDate: function(str){
            return (str.split('.').reverse().join('.'));
        }
    }
});