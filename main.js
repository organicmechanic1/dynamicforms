$(document).ready(function(){
	$.getJSON('http://json-data.herokuapp.com/forms', function(formData){
		

		var formHTML = ''

		formData.forEach(function(field){
			if(field.type === 'select'){
				formHTML += `<select type="${field.type}" placeholder="${field.label}" id="${field.id}" ?>`}
					if {formHTML += `placeholder=`}









			} else {
			formHTML += `<i class="fa ${field.icon}" /><input type="${field.type}" placholder="${field.label}" id="${field.id}" />`}
		})

		$("#app").html(formHTML)

















	})
})