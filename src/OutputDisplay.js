export default function OutputDisplay({ title }) 
{

    if(title<30)
    {return (
    
        <div>
        <p style={{display: 'flex',alignItems: 'center',justifyContent: 'center',color:'green'}}>Your BMI {title}</p>
        </div>
    )
    }
    else

    {return (
    
        <div>
        <p style={{display: 'flex',alignItems: 'center',justifyContent: 'center',color:'red'}}>Your BMI {title}</p>
        </div>
    )
    }
}