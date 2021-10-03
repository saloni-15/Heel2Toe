$(window).ready(function () {
    $('.preloading').removeClass('loading');
    $('.menu-icon').on('click', function () {
        $('nav ul').toggleClass('showing');
    });
});

// Scrolling Effect

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});

// Back To Top Button Effect
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

// Direct URL to ID (only applies to home page)

if ($('div').hasClass('wrapper')) {
    $('a[href="index.html"]').prop('href', '#');
} else {
    $('a[href="index.html"]').prop('href', 'index.html');
}

if ($('div').hasClass('wrapper')) {
    $('a[href="men.html"]').prop('href', 'index.html#men');
} else {
    $('a[href="men.html"]').prop('href', 'men.html');
}

if ($('div').hasClass('wrapper')) {
    $('a[href="women.html"]').prop('href', 'index.html#women');
} else {
    $('a[href="women.html"]').prop('href', 'women.html');
}

if ($('div').hasClass('wrapper')) {
    $('a[href="arrivals.html"]').prop('href', 'index.html#arrivals');
} else {
    $('a[href="arrivals.html"]').prop('href', 'arrivals.html');
}

if ($('div').hasClass('wrapper')) {
    $('a[href="trending.html"]').prop('href', 'index.html#trending');
} else {
    $('a[href="trending.html"]').prop('href', 'trending.html');
}

if ($('div').hasClass('wrapper')) {
    $('a[href="best.html"]').prop('href', 'index.html#best');
} else {
    $('a[href="best.html"]').prop('href', 'best.html');
}