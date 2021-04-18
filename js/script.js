//User interface logic
function submit() {

    if (userName != null && emailAddress != null && message != null) {
        alert(validateInput());
    } else {
        alert("Kindly provide all details");
    }
    location.reload();
}

//Back-end logic
var validateInput = function () {
    let regex = /aeiou/g;
    let message = document.querySelector("#message").value;
    let userName = document.querySelector("#name").value;
    if (userName >= 3 && message.match(regex)) {
        validateEmail();
    } else {
        return Error;
    }

}

var validateEmail = function () {
    let emailAddress = document.querySelector("#email").value;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
    if (emailAddress.match(validRegex)) {
        return emailAddress;
    } else {
        return false;
    }
}


$(document).ready(function () {
    $(".whatWeDo").addClass("whatWe");
    $("div.design").click(function () {
        $("img#design").toggle();
        $("p.design-text").toggle();
    });

    $("div.development").click(function () {
        $("img#development").toggle();
        $("p.development-text").toggle();
    });

    $("div.product").click(function () {
        $("img#product").toggle();
        $("p.product-text").toggle();
    });


    $(".image").mouseover(function () {
        $(".image").addClass("imageOpacity");
    });

    $(".image").mouseout(function () {
        $(".image").removeClass();
    });

    $("div.projectOne").mouseover(function () {
        $("p.project1").addClass(".project1");
        $(".project1").show();
    });

    $("div.projectOne").mouseout(function () {
        $("p.project1").addClass(".project1");
        $(".project1").hide();
    });

    $("div.projectTwo").mouseover(function () {
        $("p.project2").addClass(".project2");
        $(".project2").show();
    });

    $("div.projectTwo").mouseout(function () {
        $("p.project2").addClass(".project2");
        $(".project2").hide();
    });

    $("div.projectThree").mouseover(function () {
        $("p.project3").addClass(".project3");
        $(".project3").show();
    });

    $("div.projectThree").mouseout(function () {
        $("p.project3").addClass(".project3");
        $(".project3").hide();
    });

});