$('#body-row .collapse').collapse('hide');

// Collapse/Expand icon
$('#collapse-icon').addClass('fa-angle-double-left');

//Collapse click
// eslint-disable-next-line prefer-arrow-callback
$('[data-toggle=sidebar-colapse]').click(function () {
    SidebarCollapse();
});

const SeparatorTitle = $('.sidebar-separator-title');

function SidebarCollapse() {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');

    if (SeparatorTitle.hasClass('d-flex')) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }

    $('#collapse-icon').toggleClass(
        'fa-angle-double-left fa-angle-double-right'
    );
}
