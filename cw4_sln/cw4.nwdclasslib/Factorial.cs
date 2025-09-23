using System;

namespace cw4.nwdclasslib;

public class Factorial
{
    public int Calculate(int a)
    {
        int x = 1;
        if (a < 0)
        {
            throw new ArgumentException("Value should be greater or equal zero");    
        }
        for (int i = 1; i <=a; i++)
        {
            x *= i;
        }

        return x;
    }
}
