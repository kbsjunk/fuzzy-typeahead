Fuzzy Typeahead for Twitter Bootstrap
===============

Similar to Sublime Text's command palete, Fuzzy Typeahead for Twitter Bootstrap will allow you to type any non-contiguous parts of the desired item's text to select it, rather than the exact text.

For example, in a list of US states, you would usually have to type "ALAS" to distinguish between Alaska and Alabama. With Fuzzy Typeahead, you can type "ALS" and get the result you want.

Demo
-------

See working demo at [JSFiddle](http://fiddle.jshell.net/4LRjU/show) (or [full source](http://fiddle.jshell.net/4LRjU)).

Usage
-----

Include after Bootstrap and jQuery JS:
```html
<script type="text/javascript" src="bootstrap-fuzzy-typeahead.js"></script>
```

Set the following `matcher` and `highlighter` options in a standard Bootstrap `.typeahead()` call. You can use whatever existing `source` or other options you wish.

```javascript
$('#typeahead').typeahead({
    matcher: function(item) { return fuzzyMatcher(item, this.query); },
    highlighter: function(item) { return fuzzyHighlighter(item, this.query); }
});
```

Options
-------
### Join Highlight
By default, the `fuzzyHighlighter()` will only highlight the matching portions of the text you have entered, e.g. "ALK" will display <strong>Al</strong>as<strong>k</strong>a. To join the highlighting from the first to the last match e.g. <strong>Alask</strong>a, use `true` as the third parameter for the `fuzzyHighlighter()` function:

```javascript
fuzzyHighlighter(item, this.query, true);
```

### Fuzziness
By default, the `fuzzyMatcher()` will find all items containing the letters you have entered, regardless of how far apart they are in the item text, e.g. "SOL" will find <strong>So</strong>uth Georgia and the South Sandwich Is<strong>l</strong>ands. To reduce the incidence of unlikely matches such as the previous example, use a whole number (lower number = stricter) as the third parameter for the `fuzzyMatcher()` **and** fourth parameter for the `fuzzyHighlighter()` functions:

```javascript
fuzzyMatcher(item, this.query, 3);
fuzzyHighlighter(item, this.query, true, 3);
```

### Pin to Start
By default, the `fuzzyMatcher()` will search from the beginning of the string, meaning that "NEW" will only be found in <strong>New</strong> Caledonia, but not Papua <strong>New</strong> Guinea. To allow the search to begin in the middle of the item text, use `true` as the fourth parameter for the `fuzzyMatcher()` **and** fifth parameter for the `fuzzyHighlighter()` functions:

```javascript
fuzzyMatcher(item, this.query, 3, true);
fuzzyHighlighter(item, this.query, true, 3, true);
```
