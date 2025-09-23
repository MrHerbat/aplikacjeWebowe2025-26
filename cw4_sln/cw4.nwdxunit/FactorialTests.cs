using System;

namespace cw4.nwdxunit;

public class FactorialTests
{
    [Fact]
    public void if_0_is_equal_1()
    {
        int a = 0;
        int expected = 1;

        var factorial = new cw4.nwdclasslib.Factorial();
        Assert.Equal(expected, factorial.Calculate(a));

    }
    [Fact]
    public void if_1_is_equal_1()
    {
        int a = 1;
        int expected = 1;

        var factorial = new cw4.nwdclasslib.Factorial();
        Assert.Equal(expected, factorial.Calculate(a));

    }
    [Fact]
    public void if_5_is_equal_120()
    {
        int a = 5;
        int expected = 120;

        var factorial = new cw4.nwdclasslib.Factorial();
        Assert.Equal(expected, factorial.Calculate(a));
    }
    [Fact]
    public void if_negative_is_not_valid()
    {
        int a = -1;
        int expected = 1;

        var factorial = new cw4.nwdclasslib.Factorial();
        Assert.Throws<ArgumentException>(() => factorial.Calculate(a));

    }
}
