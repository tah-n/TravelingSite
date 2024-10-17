import { NextResponse } from "next/server";


export async function POST() {
    const AMADEUS_API_KEY = process.env.AMADEUS_API_KEY;
    const AMADEUS_API_SECRET = process.env.AMADEUS_API_SECRET;

  
          try{
          const response: Response = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
            method: 'POST',
            headers: {
              'Content-Type': "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
              grant_type: 'client_credentials',
              client_id: AMADEUS_API_KEY as string,
              client_secret: AMADEUS_API_SECRET as string,
            })
          })

          console.log(response.status);
          console.log(await response.text());
    
          if(!response.ok) {
            return NextResponse.json({ error: "failed to fetch Amadeus token" }, 
              {status: response.status}
            )
          }

          const data = await response.json();
          return NextResponse.json(data);

    
        }catch(error) {
          return NextResponse.json({ error: "Server Error"},{ status: 500 })
        }
        
        
      
}

