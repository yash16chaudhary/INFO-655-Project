export default function HeightDisplay({ unitvalue }) 
{

    if(unitvalue==="US")
    {return (
    
        <div>
        <p style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}> Inches</p>
        </div>
    )
    }
    else

    {return (
    
        <div>
        <p style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}> Centimeters</p>
        </div>
    )
    }
}