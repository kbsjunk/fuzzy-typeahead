Fuzzy Typeahead for Twitter Bootstrap
===============

Similar to Sublime Text's command palete, Fuzzy Typeahead for Twitter Bootstrap will allow you to type any non-contiguous parts of the desired item's text to select it, rather than the exact text.

For example, in a list of US states, you would usually have to type "ALAS" to distinguish between Alaska and Alabama. With Fuzzy Typeahead, you can type "ALS"

Demo
-------

See working demo at [JSFiddle](http://fiddle.jshell.net/zY7PQ/show/) (or [full source](http://fiddle.jshell.net/zY7PQ)).

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

By default, the `fuzzyHighlighter()` will only highlight the matching portions of the text you have entered, e.g. "ALK" = <strong>Al</strong>as<strong>k</strong>a. To join the highlighting from the first to the last match e.g. **Alask**a, use `true` as the last parameter for the `fuzzyHighlighter()` function:

```javascript
fuzzyHighlighter(item, this.query, true);
```
