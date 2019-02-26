//==============================表单验证=====================================
$(document).ready(function() {
    $("#close").click(function() {
    	if($(".msg").text()=='提交成功，我们将尽快与您联系!'){
    		location.reload();
    	}else{
    		$(".hide").hide();

    	}
    });
})

function submita() {
	var name = document.getElementById("name");
	if(name.value == "") {
		$(".hide").show();
		$(".msg").html("请输入您的姓名!");

		return
	}
	var sex = document.getElementById("sex");
	var sexIndex = sex.selectedIndex;
	if(sexIndex == 0) {
		$(".hide").show();
		$(".msg").html("请选择您的性别!");
		return
	}

	var age = document.getElementById("age");
	if(age.value == "") {
		$(".hide").show();
		$(".msg").html("请输入您的年龄!");
		return
	} else if(!/^([0-9]|[0-9]{2}|100)$/.test(age.value)) {
		$(".hide").show();
		$(".msg").html("年龄只能由两位数数字组成!");
		return
	}

	var phone = document.getElementById("phone");
	if(phone.value == "") {
		$(".hide").show();
		$(".msg").html("请输入手机号!");
		return
	} else if(!/^1\d{10}$/.test(phone.value)) {
		$(".hide").show();
		$(".msg").html("请输入正确的手机号，以便我们联系您!");
		return
	}

	var projects = document.getElementById("projects");
	var projectsIndex = projects.selectedIndex;
	if(projectsIndex == 0) {
		$(".hide").show();
		$(".msg").html("请选择您希望了解的课程!");
		return
	}
	$(".hide").show();
	$(".msg").html("提交成功，<br/>我们将尽快与您联系!");
}
