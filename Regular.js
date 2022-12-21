function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */const re;
    function main() {
        re = (/^([aeiou]).*\1$/);
        const s = re.test('bcd');
        
        console.log(re.test(s));
    }
    main()
    //   Do not remove the return statement
    return re;
}
regexVar()
