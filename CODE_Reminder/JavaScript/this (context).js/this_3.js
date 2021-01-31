a = 1;
{
    a = 2;
    {
        a = 3;
        {
            console.log(this);      // {}
            console.log(a);         // 4
            console.log(this.a);    // undefined
        }
    }
}
