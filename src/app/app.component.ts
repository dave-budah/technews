import {Component, OnInit} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'technews';

  ngOnInit(): void {
  //   Custom JS
    $(document).ready(function() {
      "use strict";

      $(".post-carousel-twoCol").slick({
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: false,
              arrows: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
            }
          }

        ]
      });
      $(".carousel-topNav-prev").click(function () {
        $(".post-carousel-twoCol").slick('slickPrev')
      });
      $(".carousel-topNav-next").click(function () {
        $(".post-carousel-twoCol").slick('slickNext')
      });

      // bottom slide
      $(".post-carousel-widget").slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
            }
          }

        ]
      });
      $(".carousel-botNav-prev").click(function () {
        $(".post-carousel-widget").slick('slickPrev')
      });
      $(".carousel-botNav-next").click(function () {
        $(".post-carousel-widget").slick('slickNext')
      });

      var $header = $(".header-default"),
        $clone = $header.before($header.clone().addClass("clone"));
      $(window).on("scroll", function() {
        var fromTop = $(window).scrollTop();
        $('body').toggleClass("down", (fromTop > 300));
      });
    });

    $(function(){
      "use strict";

      $('.sidebar').stickySidebar({
        topSpacing: 60,
        bottomSpacing: 30,
        containerSelector: '.main-content',
      });
      $(".submenu").before('<span class="switch"><i class="bi bi-chevron-down"></i></span>');
      $(".vertical-menu li span.switch").on('click', function() {
        // @ts-ignore
        var $submenu = $(this).next(".submenu");
        $submenu.slideToggle(300);
        $submenu.parent().toggleClass("openmenu");
      });
      $('button.burger-menu').on('click', function() {
        $('.canvas-menu').toggleClass('open');
        $('.main-overlay').toggleClass('active');
      });

      $('.canvas-menu .btn-close, .main-overlay').on('click', function() {
        $('.canvas-menu').removeClass('open');
        $('.main-overlay').removeClass('active');
      });

      $('button.search').on('click', function() {
        $('.search-popup').addClass('visible');
      });
      $('.search-popup .btn-close').on('click', function() {
        $('.search-popup').removeClass('visible');
      });
      // @ts-ignore
      $(document).keyup(function(e){
        if (e.key === 'Escape'){
          $('.search-popup').removeClass('visible');
        }
      });

      //loader
      $('button[data-bs-toggle="tab"]').on('click', function() {
        $(".tab-pane").addClass('loading');
        $(".lds-dual-ring").addClass('loading');
        setTimeout(function() {
          $(".tab-pane").removeClass('loading');
          $(".lds-dual-ring").removeClass('loading');
        }, 500);
      });
      // Share toggle
      $(".post button.toggle-button").each(function() {
        // @ts-ignore
        $(this).on('click', function(e) {
          // @ts-ignore
          $(this).next('.social-share .icons').toggleClass("visible");
          // @ts-ignore
          // $(this).toggleClass('bi-x').toggleClass('bi-share');
        });
      });
      var list = document.getElementsByClassName('spacer');
      for (var i = 0; i < list.length; i++) {
        var size = list[i].getAttribute('data-height');
        // @ts-ignore
        list[i].style.height = '' + size + 'px';
      }

      var list = document.getElementsByClassName('data-bg-image');
      for (var i = 0; i < list.length; i++){
        var bgimg = list[i].getAttribute('data-bg-image');
        // @ts-ignore
        list[i].style.backgroundImage = "url('" + bgimg + "')";
      }
    });

  }
}
