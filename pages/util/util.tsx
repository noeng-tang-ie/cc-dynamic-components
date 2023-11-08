import axios from "axios";

export default class Util {

    async curlApiPage(url:any) {
        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST+url)
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
        
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            return []
        }
        
        return res.json()
    }

}