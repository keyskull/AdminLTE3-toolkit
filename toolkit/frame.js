

function Frame(){ 
    var pagename = "Cullen's Portflio";
    var index = "";
    var initiated = false;
    function InitCSS(){
        function addcss(url){
            $('head').append('<link rel="stylesheet" href="'+ url +'">');
        }
    
        // <!-- Font Awesome -->
        addcss("plugins/fontawesome-free/css/all.min.css");
        // <!-- Ionicons -->
        addcss("https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css");
        // <!-- Tempusdominus Bbootstrap 4 -->
        addcss("plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css");
        // <!-- iCheck -->
        addcss("plugins/icheck-bootstrap/icheck-bootstrap.min.css");
        // <!-- JQVMap -->
        addcss("plugins/jqvmap/jqvmap.min.css");
        // <!-- Theme style -->
        addcss("dist/css/adminlte.min.css");
        // <!-- overlayScrollbars -->
        addcss("plugins/overlayScrollbars/css/OverlayScrollbars.min.css");
        //     <!-- Daterange picker -->
        addcss("plugins/daterangepicker/daterangepicker.css");
        //     <!-- summernote -->
        addcss("plugins/summernote/summernote-bs4.css");
        //     <!-- Google Font: Source Sans Pro -->
        addcss("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700");
    
    }
    InitCSS();

    function InitJS(){
        function addjs(url){
            $('body').append('<script src="'+ url +'"></script>');
        }
            // <!-- jQuery UI 1.11.4 -->
            addjs("plugins/jquery-ui/jquery-ui.min.js")
            //  <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
            $('body').append('<script>$.widget.bridge("uibutton", $.ui.button)</script>');
            //  <!-- Bootstrap 4 -->
            addjs("plugins/bootstrap/js/bootstrap.bundle.min.js")
            // <!-- ChartJS -->
            addjs("plugins/chart.js/Chart.min.js")
            //  <!-- Sparkline -->
            addjs("plugins/sparklines/sparkline.js")
            //  <!-- JQVMap -->
            addjs("plugins/jqvmap/jquery.vmap.min.js")
            addjs("plugins/jqvmap/maps/jquery.vmap.usa.js")
            //  <!-- jQuery Knob Chart -->
            addjs("plugins/jquery-knob/jquery.knob.min.js")
            //  <!-- daterangepicker -->
            addjs("plugins/moment/moment.min.js")
            addjs("plugins/daterangepicker/daterangepicker.js")
            //  <!-- Tempusdominus Bootstrap 4 -->
            addjs("plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js")
            //  <!-- Summernote -->
            addjs("plugins/summernote/summernote-bs4.min.js")
            //  <!-- overlayScrollbars -->
            addjs("plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js")
            //  <!-- AdminLTE App -->
            addjs("dist/js/adminlte.js")
            //  <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
            addjs("dist/js/pages/dashboard.js")
    }

    function InitMainContentIndex(callback){
        var mainContent = $('<div/>').html("<section class='content'><div class='container-fluid'><div class='row' id='main-content-row'></div></div></div>").contents();
        mainContent.find("#main-content-row").append($("#main-content-copy").contents());
        // mainContentIndex.append("");
        callback(mainContent);
        return;
    }


    //Subfunctions
    return {
        addSidebar:function(){
        
        },
        addContent:function(){

        },
        clearContent:function(){

        },
        setIndexName:function(name){
            index = name
            if(initiated){
                data.find('#'+ index).addClass("active");
            }
        },
        setPageName:function(name){
            pagename = name
            if(initiated){
                $("#pagename").text(name)
                $(".breadcrumb-item.active").text(name)
            }
        },
        init:function (){
            $(document).ready(function(){ 
                InitMainContentIndex(function(mainContent){
                    //CORS anywhere function
                    $.ajaxPrefilter(function(options) {
                        if (options.crossDomain && jQuery.support.cors) {
                            options.url = 'https://cors-f.herokuapp.com/' + options.url;
                        }
                    });

                    $.ajax({
                        type: "GET",
                        url:'toolkit/frame.html',
                        data: "check",
                        success: function(response){
                            var data = $('<div/>').html(response).contents();
                            data.find("#main-content").append(mainContent);
                            data.find("#pagename").text(pagename);
                            data.find(".breadcrumb-item.active").text(pagename);
                            data.find('#'+ index).addClass("active");
                            $("body").prepend(data);
                        }});
                    initiated = true;
                });
            InitJS();
            });

            return;
        }
    }
}

