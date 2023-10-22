$(function () {
    let dashboard = $('.dashboard-users');
    let map_section = $('.map_section');
    let region_section = $('.region_section');
    let industry_section = $('.industry_section');
    let age_section = $('.age_section');
    let all_nav = $('.all_nav');


    $('#all_nav').click(function () {
        // navigate_location.text("DASHBOARD")
        age_section.show();
        region_section.show();
        industry_section.show();
        dashboard.show();
        map_section.show();

    });

    $('#map_nav').click(function () {
        // navigate_location.text("DASHBOARD")
        age_section.hide();
        region_section.hide();
        industry_section.hide();
        dashboard.hide();
        map_section.show();

    });
    $('#bar_nav').click(function () {
        // navigate_location.text("CHATS")
        dashboard.hide();
        age_section.hide();
        map_section.hide();
        industry_section.hide();
        region_section.show();
    });


    $('#river_nav').click(function () {
        // navigate_location.text("MANAGE USERS")
        dashboard.hide();
        age_section.hide();
        map_section.hide();
        region_section.hide();
        industry_section.show();

    });
    $('#line_nav').click(function () {
        // navigate_location.text("PROMETHEUS MONITORING REPORTS")
        dashboard.hide();
        map_section.hide();
        industry_section.hide();
        region_section.hide();
        age_section.show();
    });


});
