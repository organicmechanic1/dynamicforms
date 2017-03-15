$(document).ready(function(){
	$.getJSON('http://json-data.herokuapp.com/forms', function(formData){
		

		var formHTML = ''

		formData.forEach(function(field){
			if (field.type === "text" || field.type === "email" || field.type === "tel") {
				formHTML += `<div class="field"><i class = "fa ${field.icon}" aria-hidden = "true" > </i>
				<input type "${field.type}" placeholder = "${field.label}" id = "${field.id}" name="${field.id}"/></div>`

			}

			if (field.type === "select"){
				formHTML += `<select id = "${field.id}" name="${field.id}">
					<option value=''> ${field.label}></option> `

					field.options.forEach(function(option){
						formHTML += `<option value="${option.value}">${option.label}</option>`
					})

					formHTML += `</select>`

			}

			if (field.type === "textarea"){
				formHTML += `<div class="textarea"><i class = "fa ${field.icon}" aria-hidden = "true" ></i><textarea name="${field.id}" id="${field.id}" placeholder="${field.label}"></textarea></div>`
			}

		})

		formHTML += `<div class="button"><button type="submit"> Submit Form </button></div>`

		$("#app").html(formHTML)

		$("input, textarea").on ('focus', function(){
			$(this).parents('div').addClass('focused')
		}).on("blur", function(){
			$(this).parents('div').removeClass('focused')
		})
	})
})

