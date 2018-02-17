document.addEventListener('DOMContentLoaded', function() 
{
    var myLazyLoad = new LazyLoad();
    var scroll = new SmoothScroll('a[href*="#"]');

    var moreButtons = document.getElementsByClassName('more-projects');
    for (var i = 0; i < moreButtons.length; i++) 
    {
        moreButtons[i].onmousedown = function() 
        {
            var hiddenProjects = document.querySelectorAll('.hidden-project');
            for (var j = 0; j < hiddenProjects.length; j++)
                hiddenProjects[j].classList.remove('hidden-project');

            this.style.display = 'none';
        };
    }
});
