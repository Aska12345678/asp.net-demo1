$(document).ready(function () {
    $("#menubar li").hover(function () {
        $(this).find('ul:first').css({ visibility: "visible", display: "none" }).show(300);
    }, function () {
        $(this).find('ul:first').css({ visibility: "hidden" });
    });
    /*
    $("#menubar").find("a").each(function () {
        $(this).click(function () {
            resetMenu();
            /*
            if (this.id == "menu_home") {
                $(this).css({ "background": "#e74c3c url('Content/images/ic_home.png') no-repeat center" });
            }
            else if (this.parentElement.parentElement.parentElement.firstChild.tagName == "A") {
                $(this.parentElement.parentElement.parentElement.firstChild).css({ "background": "#e74c3c" });
                $(this).css({ "background": "#e74c3c" });
            } else
                $(this).css({ "background": "#e74c3c" });
        });
    });

    function resetMenu() {
        $("#menubar a").each(function () {
            
            if (this.className == "menu_home_active") {
                alert(this.className);
                //$(this).css({ "background": "#055699 url('Content/images/ic_home.png') no-repeat center" });
                //$(this).removeClass("menu_home_active");
                $(this).removeClass("menu_home_active");
            }
            else {/*
                $(this).css({ "background-color": "#055699" });
                $(this).addClass("menu_item");
            }
        });
    }*/
});
