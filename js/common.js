
$('.header-logo').on('click', function () {
    window.location.href = window.origin + '/index.html';
})

$('#news-center').on('click', function () {
    window.location.href = window.origin + '/news_center.html';
})

$('#important-activity').on('click', function () {
    window.location.href = window.origin + '/news_center_activity.html';
})

$('#important-news').on('click', function () {
    window.location.href = window.origin + '/Important_news_center.html';
})
$('#cooperative').on('click', function () {
    window.location.href = window.origin + '/cooperative_institution.html';
})
$('#attention').on('click', function () {
    window.location.href = window.origin + '/attention.html';
})
$('#member').on('click', function () {
    window.location.href = window.origin + '/member_news_center.html';
})
$('#about-me').on('click', function () {
    window.location.href = window.origin + '/about_me.html';
})
// 国内新闻点击事件
$('#national-id').on('click', function () {
    $('#overseas-id').removeClass('active');
    $(this).addClass('active')
})
// 海外新闻点击事件
$('#overseas-id').on('click', function () {
    $('#national-id').removeClass('active');
    $(this).addClass('active')
})

// 国内新闻点击事件详情
$('.national-id-detail').on('click', function () {
    $('.overseas-id-detail').removeClass('item-active');
    $(this).addClass('item-active')
    $('#last-nav').text('国内新闻')
})
// 海外新闻点击事件详情
$('.overseas-id-detail').on('click', function () {
    $('.national-id-detail').removeClass('item-active');
    $(this).addClass('item-active')
    $('#last-nav').text('海外新闻')
})

// 公告点击事件
$('#announcement').on('click', function () {
    $('#commercial-activity').removeClass('active');
    $(this).addClass('active')
})

// 商业活动点击事件
$('#commercial-activity').on('click', function () {
    $('#announcement').removeClass('active');
    $(this).addClass('active')
})

// 公告点击事件详情
$('#announcement-detail').on('click', function () {
    $('#commercial-activity-detail').removeClass('item-active');
    $(this).addClass('item-active')
    $('#last-nav').text('公告')
})
// 商业点击事件详情
$('#commercial-activity-detail').on('click', function () {
    $('#announcement-detail').removeClass('item-active');
    $(this).addClass('item-active')
    $('#last-nav').text('商业活动')
})

const langTextList = $('.lang-text');
for (let i = 0; i < langTextList.length; i++) {
    $(langTextList[i]).on('click', function () {
        const text = $(this).text()
        if (i == 0) {
            window.location.href = window.origin + '/views/English/index.html'
        } else if (i == 1) {
            window.location.href = window.origin + '/index.html'
        } else {
            window.location.href = window.origin + '/views/Traditional/index.html'

        }
    })
}

$('#menu-id').on('click', function () {
    $('.menu-box').css('display', 'block')
    $(this).css('display', 'none');
    $('#close').css('display', 'block');
})

$('#close').on('click', function () {
    $('.menu-box').css('display', 'none')
    $(this).css('display', 'none');
    $('#menu-id').css('display', 'block');
})


$('#menu-id').on('click', function () {
    $('.menu-box').css('display', 'block')
    $(this).css('display', 'none');
    $('#close').css('display', 'block');
})

$('#close').on('click', function () {
    $('.menu-box').css('display', 'none')
    $(this).css('display', 'none');
    $('#menu-id').css('display', 'block');
})

$('#search-id').on('click', function () {
    const searchBoxPopup = $('.search-box-popup').prop('style').display;
    if (searchBoxPopup == 'none') {
        $('.search-box-popup').css('display', 'flex')
    } else {
        $('.search-box-popup').css('display', 'none')
    }
    // $(this).css('display', 'none');
    // $('#menu-id').css('display', 'block');
})
