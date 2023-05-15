let currentPage = 0; // 当前页面

const paginationList = $('.content-pagination-page .item')
const nextPageBtn = $('#next-page');
const lastPageBtn = $('#last-page');

function initPageFunc() {
    handlePaginationClick();
    nextPageBtnClick();
    lastPageBtnClick();
}

// 移除 active 点击样式
function removeAllActiveClass() {
    for (let index = 0; index < paginationList.length; index++) {
        $(paginationList[index]).removeClass('active')
    }
}

// 处理页码点击事件
function handlePaginationClick() {
    for (let i = 0; i < paginationList.length; i++) {
        $(paginationList[i]).on('click', function name(params) {
            removeAllActiveClass()
            currentPage = i;
            $(this).addClass('active')
        });
    }
}

// 处理下一个页面点击事件
function nextPageBtnClick() {
    $(nextPageBtn).on('click', function () {
        removeAllActiveClass()
        currentPage++;
        if (currentPage + 1 > paginationList.length) {
            currentPage = paginationList.length - 1;
        }
        $(paginationList[currentPage]).addClass('active')
    })
}

// 处理尾页点击事件
function lastPageBtnClick() {
    $(lastPageBtn).on('click', function () {
        removeAllActiveClass()
        currentPage = paginationList.length - 1;
        $(paginationList[currentPage]).addClass('active')
    })
}

initPageFunc()
