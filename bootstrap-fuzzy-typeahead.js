function fuzzyMatcher(item, query, fuzziness, pinStart) {
    fuzziness = regexFuzziness(fuzziness);
    pinStart = regexPinStart(pinStart);

    var pattern = query.split("").join("." + fuzziness);
    var regex = new RegExp(pinStart + pattern, "img");
    return regex.test(item);
}

function fuzzyHighlighter(item, query, joinHighlight, fuzziness, pinStart) {
    fuzziness = regexFuzziness(fuzziness);
    pinStart = regexPinStart(pinStart);
    
    var pattern = query.split("");
    var replace = '';
    if (joinHighlight === true) {
        replace = "<b>$1</b>$2";
        pattern = "(" + pattern.join("." + fuzziness) + ")(.*)";
    } else {
        for (var i = 0; i < pattern.length; i++) {
            var j = i * 2;
            replace = replace + "<b>" + "$" + (j + 1) + "</b>" + "$" + (j + 2);
        }
        pattern = "(" + pattern.join(")(." + fuzziness + ")(") + ")(.*)";
    }
    var regex = new RegExp(pinStart + pattern, "img");
    return item.replace(regex, replace);
}

function regexFuzziness(fuzziness) {
    if (isNaN(fuzziness)) {
        fuzziness = "*?";
    } else {
        fuzziness = "{0," + parseInt(fuzziness) + "}";
    }
    return fuzziness;
}
function regexPinStart(pinStart) {
    if (pinStart !== false) {
        return "^";
    }
}
