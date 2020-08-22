

var pagename = "Cullen's Portflio"
var index = ""

















function InitCSS(){
    function addcss(url){
        $('head').append('<link rel="stylesheet" href="'+ url +'">');
    }

    // <!-- Font Awesome -->
    addcss("res/plugins/fontawesome-free/css/all.min.css");
    // <!-- Ionicons -->
    addcss("https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css");
    // <!-- Tempusdominus Bbootstrap 4 -->
    addcss("res/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css");
    // <!-- iCheck -->
    addcss("res/plugins/icheck-bootstrap/icheck-bootstrap.min.css");
    // <!-- JQVMap -->
    addcss("res/plugins/jqvmap/jqvmap.min.css");
    // <!-- Theme style -->
    addcss("res/dist/css/adminlte.min.css");
    // <!-- overlayScrollbars -->
    addcss("res/plugins/overlayScrollbars/css/OverlayScrollbars.min.css");
    //     <!-- Daterange picker -->
    addcss("res/plugins/daterangepicker/daterangepicker.css");
    //     <!-- summernote -->
    addcss("res/plugins/summernote/summernote-bs4.css");
    //     <!-- Google Font: Source Sans Pro -->
    addcss("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700");

}

function InitJS(){
    function addjs(url){
        $('body').append('<script src="'+ url +'"></script>');
    }
        // <!-- jQuery UI 1.11.4 -->
        addjs("res/plugins/jquery-ui/jquery-ui.min.js")
        //  <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
        $('body').append('<script>$.widget.bridge("uibutton", $.ui.button)</script>');
        //  <!-- Bootstrap 4 -->
        addjs("res/plugins/bootstrap/js/bootstrap.bundle.min.js")
        // <!-- ChartJS -->
        addjs("res/plugins/chart.js/Chart.min.js")
        //  <!-- Sparkline -->
        addjs("res/plugins/sparklines/sparkline.js")
        //  <!-- JQVMap -->
        addjs("res/plugins/jqvmap/jquery.vmap.min.js")
        addjs("res/plugins/jqvmap/maps/jquery.vmap.usa.js")
        //  <!-- jQuery Knob Chart -->
        addjs("res/plugins/jquery-knob/jquery.knob.min.js")
        //  <!-- daterangepicker -->
        addjs("res/plugins/moment/moment.min.js")
        addjs("res/plugins/daterangepicker/daterangepicker.js")
        //  <!-- Tempusdominus Bootstrap 4 -->
        addjs("res/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js")
        //  <!-- Summernote -->
        addjs("res/plugins/summernote/summernote-bs4.min.js")
        //  <!-- overlayScrollbars -->
        addjs("res/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js")
        //  <!-- AdminLTE App -->
        addjs("res/dist/js/adminlte.js")
        //  <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
        addjs("res/dist/js/pages/dashboard.js")
}


 function InitFrame(){
    $.ajax({
        type: "GET",
        url:'frame.html',
        data: "check",
        success: function(response){
           var data = $('<div/>').html(response).contents();
           data.find("#main-content").append($("#main-body").contents());
           data.find("#pagename").text(pagename);
           data.find(".breadcrumb-item.active").text(pagename);
           data.find('#'+ index).addClass("active");
            $("body").prepend(data);
        }});


    return;
}

InitCSS();
InitFrame();

$(document).ready(function(){ 
    $.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-f.herokuapp.com/' + options.url;
        }
    });
    InitJS();
});