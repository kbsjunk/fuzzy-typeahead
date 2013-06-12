function fuzzyMatcher(item, query) {
        var pattern = query.split("").join(".*");
        var regex = new RegExp("^" + pattern, "img");
        return regex.test(item);
}
function fuzzyHighlighter(item, query) {
    var pattern = query.split("");
        var replace = '';
        for (var i = 0; i < pattern.length; i++) {
            var j = i * 2;
            replace = replace + "<b>" + "$" + (j + 1) + "</b>" + "$" + (j + 2);
        }
        pattern = "(" + pattern.join(")(.*)(") + ")(.*)";
        var regex = new RegExp("^" + pattern, "img");
        return item.replace(regex, replace);
}
