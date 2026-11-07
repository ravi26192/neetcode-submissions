class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length == t.length){
            let sSort = s.split('').sort().join('');
            let tSort = t.split('').sort().join('');
            return sSort == tSort;
        }
        return false;
    }
}
