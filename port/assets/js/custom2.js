/* world-counter */
const wordContainerEl = document.querySelector("[data-word]");
const word = wordContainerEl.getAttribute("data-word");
const wordRepeatTimes = wordContainerEl.getAttribute("data-word-repeat");
const textColorsArray = wordContainerEl.getAttribute("data-text-colors").split(",");

for (let i = 0; i < wordRepeatTimes; i++) {
	const wordEl = document.createElement("span");
	wordEl.className = "word";
	wordEl.style.setProperty("--word-index", i);
	wordEl.style.setProperty("--color", textColorsArray[i]);
	for (let j = 0; j < word.length; j++) {
		const charEl = document.createElement("span");
		charEl.className = "char";
		charEl.style.setProperty("--char-index", j);
		charEl.innerHTML = word[j];
		wordEl.appendChild(charEl);
	}
	wordContainerEl.appendChild(wordEl);
}

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

/* Parallax */
$(window).scroll(function(){
    let scroll = $(window).scrollTop();
    
    if( scroll > $(".sec2 .object").offset().top - $(window).height() ){
        $(".sec2 .object").addClass("show");
    }
    if( scroll > $(".sec2 .ment").offset().top - $(window).height()/2 ){
        $(".sec2 .ment").addClass("show");
    }
    if( scroll > $(".sec2 .skill").offset().top - $(window).height() ){
        $(".sec2 .skill").addClass("show");
    }
    if( scroll > $(".sec3 .title").offset().top - $(window).height()/2 ){
        $(".sec3 .title h2").addClass("show");
        $(".sec3 .title p").addClass("show");
    }
    if( scroll > $(".sec3 .site .top").offset().top - $(window).height()/2 ){
        var target = $(this);
        var index = target.index() + 1;
        $(".sec3 .si" + index + ".top .view").addClass("show");        
        $(".sec3 .si" + index + ".top .btn").addClass("show");
        $(".sec3 .si" + index + ".bot .desc-box").addClass("show");
        $(".sec3 .si" + index + ".bot .tab-box").addClass("show");
    }
});