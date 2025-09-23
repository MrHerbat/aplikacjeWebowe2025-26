using System;

namespace cw4.nwdxunit;

public class NwdTests
{
    [Fact]
    public void TestNwd()
    {
        int a = 8;
        int b = 12;
        int expected = 4;

        var nwd = new cw4.nwdclasslib.Nwd();
        Assert.Equal(expected, nwd.Calculate(a, b));
        
    }
}
