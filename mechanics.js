function pageScroll() {
    window.scrollBy(0,500);
    scrolldelay = setTimeout('pageScroll()',100); 
    return pageScroll
}
