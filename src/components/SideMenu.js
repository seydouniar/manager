import React from 'react'
import {
  BsCurrencyDollar,
  BsWalletFill
} from "react-icons/bs"
import MenuItem from './MenuItem';

const data = [
  {
    id:1,
    icon:<BsCurrencyDollar />,
    text: "Chiffre d'affaire",
    link:"psca",
    sub:[
      {
        id:1,
        icon:<BsCurrencyDollar />,
        text: "Par	mois",
        link:"/psca/mois"
      },
      {
        id:2,
        icon:<BsCurrencyDollar />,
        text: "Par	client",
        link:"/psca/client"
      },
      {
        id:3,
        icon:<BsCurrencyDollar />,
        text: "Par	zone	géographique",
        link:"/psca/zone"
      },
      {
        id:4,
        icon:<BsCurrencyDollar />,
        text: "Moyenne	mensuel	par	an",
        link:"/psca/annee"
      }
  ]
  },
  {
    id:2,
    icon:<BsWalletFill />,
    text: "Ressources humaines",
    link:"psrh",
    sub:[
      {
        id:1,
        icon:<BsCurrencyDollar />,
        text: "Liste	des	recrutements	par	mois",
        link:"psca"
      },
      {
        id:2,
        icon:<BsCurrencyDollar />,
        text: "Liste	des	départs par	mois",
        link:"psca"
      },
      {
        id:3,
        icon:<BsCurrencyDollar />,
        text: "Liste	des	collaborateurs	présents",
        link:"psca"
      },
      {
        id:4,
        icon:<BsCurrencyDollar />,
        text: "Chiffre d'affaire",
        link:"psca"
      }
    ]
  },
]
const SideMenu=({isSideMenu})=> {
  return (
    <>
      <header>
        <div className="sideMenu" style={{ left: isSideMenu ? '0' : '-220px' }}>
          <MenuItem data={data} isShow={isSideMenu} />            
        </div>
      </header>
    </>
  )
}

export default SideMenu;