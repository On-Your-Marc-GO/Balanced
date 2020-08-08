$('#body-row .collapse').collapse('hide'),
    $('#collapse-icon').addClass('fa-angle-double-left'),
    $('[data-toggle=sidebar-colapse]').click(function () {
        SidebarCollapse();
    });
const SeparatorTitle = $('.sidebar-separator-title');
function SidebarCollapse() {
    $('.menu-collapsed').toggleClass('d-none'),
        $('.sidebar-submenu').toggleClass('d-none'),
        $('.submenu-icon').toggleClass('d-none'),
        $('#sidebar-container').toggleClass(
            'sidebar-expanded sidebar-collapsed'
        ),
        SeparatorTitle.hasClass('d-flex')
            ? SeparatorTitle.removeClass('d-flex')
            : SeparatorTitle.addClass('d-flex'),
        $('#collapse-icon').toggleClass(
            'fa-angle-double-left fa-angle-double-right'
        );
}
