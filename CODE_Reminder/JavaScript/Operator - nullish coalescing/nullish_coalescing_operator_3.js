// console.log( null || undefined ?? "foo" );   // SyntaxError: missing ) after argument list
// console.log( true ?? undefined || "foo" );   // SyntaxError: missing ) after argument list
console.log( (null || undefined) ?? "foo" );    // foo
console.log( (null ?? undefined) || "foo" );    // foo
