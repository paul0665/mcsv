function supportsImports() {
    return 'import' in document.createElement('link');
}

if (supportsImports()) {
    //ok!
} else {
    //opps
}