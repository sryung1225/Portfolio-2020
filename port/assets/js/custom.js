/* 탭 메뉴 */
$(".tab-btn > ul > li").click(function(e){
    e.preventDefault();
    var target = $(this);
    var num = target.parent().parent().parent().parent().attr("data-num");
    var index = target.index();
        	
    //desc 활성화
    $(".si"+num+" .bot .tab-box .tab-cont > div").css("display", "none");
    $(".si"+num+" .bot .tab-box .tab-cont > div").eq(index).css("display", "block");

    // 메뉴활성화
    $(".si"+num+" .bot .tab-box .tab-btn > ul > li").removeClass("active");
    $(".si"+num+" .bot .tab-box .tab-btn > ul > li").eq(index).addClass("active");
});
