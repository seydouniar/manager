import React from "react";
import {Link} from "react-router-dom";
import Collapsible from "react-collapsible"

const MenuItem = ({data,isShow})=>{
    return data.map((item,i)=>{
            return(
                isShow?<Collapsible key={item.id} trigger={item.text} className="menuItem">
                
                <SubItems sub={item.sub} />
                </Collapsible>
                :
                <div key={item.id} className="onlyIcon">
                    <Link className="links" to={item.link}>{item.icon}</Link>
                </div>
            )
        })
    }

    const SubItems = ({sub}) => {
        return sub.map(item=>{
            return <div key={item.id} className="muenItem" >
                <Link className="linkSub" to={item.link}>{item.icon} {item.text}</Link>

            </div>
        })
    }

  
export default MenuItem;