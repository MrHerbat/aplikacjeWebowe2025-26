export const NWD = (a:number, b:number) =>{
    while (a!=b){
        if(a>b){
            a=a-b;
        }else{
            b=b-a;
        }	
	}
    return a;
}
export const recNWD =(a:number, b:number):number => 
{
    if(a!=b){
        if(a>b){
            return recNWD(a-b,b);
        }else{
           return recNWD(a,b-a); 
        }
    }else{
        return a;
    }
}