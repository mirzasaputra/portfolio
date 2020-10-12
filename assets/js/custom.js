$(document).ready(function(){

    var caption1 = "Hello, my name is Mirza Dwiyan Saputra.";
    var caption2 = "Welcome to my website.";
    var i = 0;

    setInterval(function(){
        if($('#slide1').attr('class') == 'carousel-item active carousel-item-left'){
            i = 0;
            document.getElementById('caption1').innerHTML = "";
            document.getElementById('caption2').innerHTML = "";
        }

        if($('#slide2').attr('class') == 'carousel-item active carousel-item-left'){
            i = 0;
            document.getElementById('caption1').innerHTML = "";
            document.getElementById('caption2').innerHTML = "";
        }
        
        if($('#slide1').attr('class') == 'carousel-item active'){
            document.getElementById('caption1').innerHTML += caption1.charAt(i);
            
            if(i > caption1.length + 40){
                i = 0;
            } else {
                i++;
            }
        }

        if($('#slide2').attr('class') == 'carousel-item active'){
            document.getElementById('caption2').innerHTML += caption2.charAt(i);
            
            if(i > caption2.length + 100){
                i = 0;
            } else {
                i++;
            }
        }
    }, 100);

    $('#carouselExample').carousel({
        interval: 7000
    })

    $('.backToTop').hide();
    
    if($(window).scrollTop() > 60){
        $('.navbar').addClass('navbar-light');
        $('.navbar').removeClass('navbar-dark');
        $('.navbar').addClass('bg-light');
        $('.navbar').addClass('navbar-fixed');
        $('.navbar').addClass('shadow');
        $('.backToTop').show();
    } else {
        $('.navbar').addClass('navbar-dark');
        $('.navbar').removeClass('navbar-light');
        $('.navbar').removeClass('bg-light');
        $('.navbar').removeClass('navbar-fixed');
        $('.navbar').removeClass('shadow');
        $('.backToTop').hide();
    }

    if($(window).scrollTop() < $('#resumeMe').offset().top - 80){
        $('.home-btn').addClass('active');
        $('.resume-btn').removeClass('active');
    } else if ($(window).scrollTop() >= $('#resumeMe').offset().top - 80){
        $('.home-btn').removeClass('active');
        $('.resume-btn').addClass('active');
    }

    $(window).scroll(function(){
        if($(this).scrollTop() > 60){
            $('.navbar').addClass('navbar-light');
            $('.navbar').removeClass('navbar-dark');
            $('.navbar').addClass('bg-light');
            $('.navbar').addClass('navbar-fixed');
            $('.navbar').addClass('shadow');
            $('.backToTop').show();
        } else {
            $('.navbar').addClass('navbar-dark');
            $('.navbar').removeClass('navbar-light');
            $('.navbar').removeClass('bg-light');
            $('.navbar').removeClass('navbar-fixed');
            $('.navbar').removeClass('shadow');
            $('.backToTop').hide();
        }

        if($(this).scrollTop() < $('#resumeMe').offset().top -80){
            $('.home-btn').addClass('active');
            $('.resume-btn').removeClass('active');
        } else if ($(this).scrollTop() >= $('#resumeMe').offset().top -80){
            $('.home-btn').removeClass('active');
            $('.resume-btn').addClass('active');
        }
    })

    $('.sd').click(function(){
        if($('.sd-rotate').attr('class') == "fa fa-chevron-right float-right sd-rotate"){
            $('.sd-rotate').addClass('fa-rotate-90');
        } else {
            $('.sd-rotate').removeClass('fa-rotate-90');

        }
    })

    $('.smk').click(function(){
        if($('.smk-rotate').attr('class') == "fa fa-chevron-right float-right smk-rotate"){
            $('.smk-rotate').addClass('fa-rotate-90');
        } else {
            $('.smk-rotate').removeClass('fa-rotate-90');
        }
    })
    
    $('.mts').click(function(){
        if($('.mts-rotate').attr('class') == "fa fa-chevron-right float-right mts-rotate"){
            $('.mts-rotate').addClass('fa-rotate-90');
        } else {
            $('.mts-rotate').removeClass('fa-rotate-90');
        }
    })
    
    $('#sd').on('hidden.bs.collapse', function () {
        $('.sd-rotate').removeClass('fa-rotate-90');
    })

    $('#mts').on('hidden.bs.collapse', function () {
        $('.mts-rotate').removeClass('fa-rotate-90');
    })

    $('#smk').on('hidden.bs.collapse', function () {
        $('.smk-rotate').removeClass('fa-rotate-90');
    })

    $('.lazy').lazy({
        scrollDirection: 'vertikal',
        effect: 'fadeIn',
        visibleOnly: true
    })

    $('.backToTop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    })

    $('.home-btn').click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $('#home').offset().top - 180
        }, 800);
        $('#navbarSupport').attr('class', 'navbar-collapse collapse');
    })
    
    $('.resume-btn').click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $('#resumeMe').offset().top - 180
        }, 800);
        $('#navbarSupport').attr('class', 'navbar-collapse collapse');
    })

    //chart
    var canvas = document.getElementById('myChart');
    var ctx = canvas.getContext('2d');

    var data = {
        labels: ['HTML', 'CSS', 'Javascript', 'PHP', 'MySql'],
        datasets: [{
            data: ['30', '20', '10', '20', '10'],
            backgroundColor: [
                '#ee4325',
                '#3174f1',
                '#ffe23b',
                '#3e0079',
                '#0d1a35'
            ],
        }]
    }

    var mySkills = new Chart(ctx, {
        type: 'doughnut',
        data: data
    });

    //ajax Portfolio
    $.ajax({
        url: "ajax/portfolioBlock.html",
        success: function(data){
            $('#viewDataPortfolio').html(data);
        }
    });

})