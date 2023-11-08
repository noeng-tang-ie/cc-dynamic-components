import React from 'react'
import {Card, Tabs, Tab,} from "@nextui-org/react";
import { useState, useEffect } from 'react'
import Link from "next/link";
export const CC0003 = (props:any) => {
  const [urlBackGround, setUrlBackGround] = useState('');
  useEffect(() => {
    let backGround = process.env.NEXT_PUBLIC_HOST + props.background;
    setUrlBackGround(backGround);
  }, [])
  return (
    <>
      {
        props && (urlBackGround != '' ) && <section id="cc-0003" className="mb-28 space-y-24">
        <div className="container mx-auto lg:px-8">
          <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 md:px-8">
            <div className={` bg-center bg-cover bg-no-repeat w-full h-[540px] md:h-[420px] xs:h-[290px]`} style={{backgroundImage: `url(${urlBackGround})`}}>
    
              <div className="mx-auto 2xl:max-w-6xl xl:max-w-6xl lg:max-w-6xl pt-16 pb-24 lg:p-6 md:p-6 xs:p-4 detail">
                <h2 className="title xs:text-3xl mb-3">{props.title}</h2>
                <div className="description mb-5">
                  {props.description}
                </div>
                <div className="flex items-center gap-2">
                  <Link href={props.link}>Learn More</Link>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
    
              <div className="mx-auto max-w-6xl flex w-full md:max-w-6xl flex-col xs:px-3">
                <Tabs color="warning" key="underlined" variant="underlined" aria-label="Tabs variants" className="tab">
                  {
                    props.contents.map((value:any) => {
                      return <Tab key={value.title.toLowerCase().replace(' ', '-')} title={value.title} className="mb-8">
                        <div className="grid gap-5 grid-cols-3 xs:grid-cols-1">
                          {
                            value.item.map ((item:any, key:any)=>{
                              return <Card className="card" key={key}>
                                <div className="top relative">
                                  <img src="/images/intersect-3.svg" className="w-full" alt=""/>
                                  <div className="left absolute top-2-5 left-6 bg-orange-100 p-2 rounded-full w-fit">
                                    <img src={`${process.env.NEXT_PUBLIC_HOST}${item.icon}`} alt="" className='w-8'/>
                                  </div>
                                </div>
                                <div className="bottom detail pt-14 pb-20 px-6">
                                  <h4 className="title mb-2">{item.title}</h4>
                                  <div className="short-descriptiop">{item.description}</div>
                                </div>
                              </Card>
                            })
                          }
                        </div>
                      </Tab>
                    })
                  }
                </Tabs>
              </div>  
              
            </div>
          </div>
        </div>
      </section>
      }
    </>
  )
}
