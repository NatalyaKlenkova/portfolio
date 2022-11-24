(function() {
    document.querySelector('.hero__btn').addEventListener('click', function() {
        document.getElementById('portfolio').scrollIntoView({behavior: "smooth"});
    })
})();