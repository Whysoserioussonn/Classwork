function area(radiusparam)
{
    return(Math.PI * (radiusparam *radiusparam))
}

function circumference(radiusparam)
    {
        return(2 * Math.PI * radiusparam)
    }

    module.exports = {area,circumference}
  