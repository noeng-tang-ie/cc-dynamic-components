import React from 'react'
import {Card} from "@nextui-org/react";
import Link from "next/link";


export const CC0002 = (props:any) => {
  return (
    <section id="cc-0002" className="mb-20 space-y-24">
          
          <div className="mx-auto 2xl:max-w-6xl xl:max-w-6xl lg:max-w-6xl md:max-w-3xl lg:px-8 md:px-8 xs:px-3">
            <h2 className="title xs:text-3xl xs:mb-4">{props.title}</h2>
            <div className="grid gap-5 mt-10 xs:mt-3 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
              {
                props.contents.item && props.contents.item.map((value:any, key:any)=> {
                  return <Card className="bg-white" key={key}>
                    <div className="intersect">
                      <img src="/images/intersect-12.svg" alt="" />
                    </div>
                    <div className="block-top h-full flex items-center justify-around gap-17 absolute w-full">
                      <div className="left relative bg-orange-100 p-2 rounded-full">
                        <img src={`${process.env.NEXT_PUBLIC_HOST}${value.icon}`} alt="" className='w-8'/>
                      </div>
                      <div className="right flex items-center gap-1">
                        <Link href={value.link} className="font-bold">{value.title}</Link>
                        <Link href={value.link} className="font-bold">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </Card>
                })
              }
            </div>
          </div>
        </section>
  )
}
