import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Util from '../util/util'
import BasePage from '../base-page';
export default function Page() {
    const util = new Util()
    const [view, setView] = useState();
    const [sections, setSections] = useState('')
    const router = useRouter()
    
    useEffect(()=>{
        if(!router.isReady) return;
        const { slug } = router.query
        getData(slug);
    },[router.isReady])

    const getData = async (slug:any) => {
        
        let item:any = []
        if(slug != undefined){
            if(slug.length == 1){
                item = await util.curlApiPage(slug?.[0]) as any
            } else {
                item = await util.curlApiPage(slug) as any
            }
        } else {
            item = await util.curlApiPage('home') as any
        }
        console.log(slug?.[0])
        setSections(JSON.stringify(item))
        for (const page of item) {
            let sections = page.sections?.map((value : any)=>(
                BasePage(value.view)
            ))
            setSections(sections)
        }
    }


    
    return <>
        {
            sections
        }
    </>

}