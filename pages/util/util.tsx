import axios from "axios";

export default class Util {

    async curlApiPage(url:any) {
        // return process.env.SITE_URL+url
        const res = await fetch('http://8.222.167.60/api/page/'+url)
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
        
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            return []
        }
        
        return res.json()
    }

}