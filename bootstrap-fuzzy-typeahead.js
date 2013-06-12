function fuzzyMatcher(item, query, fuzziness, pinStart) {
    fuzziness = regexFuzziness(fuzziness);
    pinStart = regexPinStart(pinStart);

    var pattern = query.split("").join("." + fuzziness);
    var regex = new RegExp(pinStart + pattern, "img");
    console.log(pinStart + pattern);
    return regex.test(item);
}

function fuzzyHighlighter(item, query, joinHighlight, fuzziness, pinStart) {
    fuzziness = regexFuzziness(fuzziness);
    pinStart = regexPinStart(pinStart);

    var pattern = query.split("");
    var replace = '$1';
    if (joinHighlight === true) {
        replace = replace + "<b>$2</b>$3";
        pattern = "(" + pattern.join("." + fuzziness) + ")(.*)";
    } else {
        for (var i = 0; i < pattern.length; i++) {
            var j = (i * 2) + 1;
            replace = replace + "<b>" + "$" + (j + 1) + "</b>" + "$" + (j + 2);
        }
        pattern = "(" + pattern.join(")(." + fuzziness + ")(") + ")(.*)";
    }
    var regex = new RegExp(pinStart + pattern, "img");
    console.log(pinStart + pattern, replace);
    return item.replace(regex, replace);
}

function regexFuzziness(fuzziness) {
    if (isNaN(fuzziness) || !fuzziness) {
        fuzziness = "*?";
    } else {
        fuzziness = "{0," + fuzziness + "}";
    }
    return fuzziness;
}

function regexPinStart(pinStart) {
    if (pinStart !== false) {
        return "(^)";
    }
    return "(.*?)";
}
