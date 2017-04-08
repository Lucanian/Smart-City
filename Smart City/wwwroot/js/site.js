// Write your Javascript code.

(function () {

var $sideBarAndWrapper = $("#SideBar,#BaraSus");
var $icon = $("#SidebarToggle i.fa");


$("#SidebarToggle").click(function () {
    $sideBarAndWrapper.toggleClass("hide-sidebar");

    if ($sideBarAndWrapper.hasClass("hide-sidebar")) {
        $icon.removeClass("fa-angle-left");
        $icon.addClass("fa-angle-right");
    }

    else {
        $icon.addClass("fa-angle-left");
        $icon.removeClass("fa-angle-right");
    }


});

})();