
// import HeroComponent from "../../component/HeroBanner";
// import NewsComponent from "../../component/NewsCard";

import { CC0001 } from "@/components/cc-0001";
import { CC0002 } from "@/components/cc-0002";
import { CC0003 } from "@/components/cc-0003";
import { CC0004 } from "@/components/cc-0004";
import { CC0005 } from "@/components/cc-0005";
import { CC0006 } from "@/components/cc-0006";
import { CC0007 } from "@/components/cc-0007";
import { CC0008 } from "@/components/cc-0008";
import React from "react";

export default function BasePage(name:any, data:any) {

    const mapNameToComponent:any = {
      'cc-0001': CC0001,
      'cc-0002': CC0002,
      'cc-0003': CC0003,
      'cc-0004': CC0004,
      'cc-0005': CC0005,
      'cc-0006': CC0006,
      'cc-0007': CC0007,
      'cc-0008': CC0008,
    }
  
    const Component = mapNameToComponent[name];
    
    if (!Component) return null;
    return <Component  {...data}/>
}
