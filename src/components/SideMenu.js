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
        text: "Chiffre	d’affaire	par	mois",
        link:"psca"
      },
      {
        id:2,
        icon:<BsCurrencyDollar />,
        text: "Chiffre	d’affaire	par	client",
        link:"psca"
      },
      {
        id:3,
        icon:<BsCurrencyDollar />,
        text: "Chiffre	d’affaire	par	zone	géographique",
        link:"psca"
      },
      {
        id:4,
        icon:<BsCurrencyDollar />,
        text: "Chiffre	d’affaire	moyenne	mensuel	par	an",
        link:"psca"
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