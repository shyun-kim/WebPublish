/**
 * 
 */

{
    const a = 1; //전역변수
    console.log(a);
    const b = 100;

    {
        const a = 2; //지역변수
        console.log(a);
        console.log(c);
        
        
        {
            const a = 3;
            const c = 1000;
            console.log(a);
            console.log(b);
            
        }
    }
    
}