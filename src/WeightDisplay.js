export default function WeightDisplay({ unitvalue }) 
{

    if(unitvalue==="US")
    {return (
    
        <div>
        <p style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}> Pounds</p>
        </div>
    )
    }
    else

    {return (
    
        <div>
        <p style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}> Kilograms</p>
        </div>
    )
    }
}