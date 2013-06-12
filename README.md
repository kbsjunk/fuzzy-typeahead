Fuzzy Typeahead for Twitter Bootstrap
===============

Similar to Sublime Text's command palete, Fuzzy Typeahead for Twitter Bootstrap will allow you to type any non-contiguous parts of the desired item's text to select it, rather than the exact text.

For example, in a list of US states, you would usually have to type "ALAS" to distinguish between Alaska and Alabama. With Fuzzy Typeahead, you can type "ALS" and get the result you want. It can be more useful for longer strings in the 

Demo
-------

See working demo at [JSFiddle](http://fiddle.jshell.net/XsL8Q/show) (or [full source](http://fiddle.jshell.net/XsL8Q)).

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
By default, the `fuzzyHighlighter()` will only highlight the matching portions of the text you have entered, e.g. "ALK" = <strong>Al</strong>as<strong>k</strong>a. To join the highlighting from the first to the last match e.g. **Alask**a, use `true` as the third parameter for the `fuzzyHighlighter()` function:

```javascript
fuzzyHighlighter(item, this.query, true);
```

### Fuzziness
By default, the `fuzzyMatcher()` will find all items containing the letters you have entered, regardless of how far apart they are in the item text, e.g. "SOL" = <strong>So</strong>uth Georgia and the South Sandwich Is<strong>l</strong>ands. To reduce the incidence of unlikely matches such as the previous example, use a number (lower number = search closer together) as the third parameter for the `fuzzyMatcher()` **and** fourth parameter for the `fuzzyHighlighter()` functions:

```javascript
fuzzyMatcher(item, this.query, 3);
fuzzyHighlighter(item, this.query, true, 3);
```
