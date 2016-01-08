var postcss = require('postcss');

module.exports = postcss.plugin('postcss-line-height', function (opts) {
    opts = opts || {
        baseFontSize: 16
    };

    /**
    * Extract the unit from a string
    * @param  {String} value value to extract unit from
    * @return {String}       unit
    */
    var getUnit = function(value) {
        return value.match(/px|rem|em/).toString();
    };

    /**
     * Convert the line height value from px to line height
     * @param  {String} value value to convert
     * @return {String}       value
     */
    var convertPxToLineHeight = function(value) {
        var unit = getUnit(value);
        if(unit) {
            var valWithoutUnit = value.replace(unit, '');
            if(unit != 'rem' || unit != 'em') {
                lineHeight = valWithoutUnit / opts.baseFontSize
            }
            else {
                lineHeight = valWithoutUnit;
            }
            value = lineHeight.toString();
        }
        return value;
    };

    return function (css, result) {

        css.walkDecls('line-height', function(decl) {
            decl.value = convertPxToLineHeight(decl.value);
        });

    };
});
