Object.defineProperty(Array.prototype, "allEqual", {
    get: function() {
        let firstValue = this[0];

        for(let value=1 ;value<this.length; value++) {
            if (this[value] !== firstValue) {
                return false;
            }
        }

        return true;
    }
});
