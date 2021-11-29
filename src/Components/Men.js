import React from "react"
import Clothes from "./Clothes";

export default class Men extends React.Component {
    render() {
        return <div className={"main"}>
                <Clothes src={"../image/men/1.png"} title={"Nike"} info={"Мужская толстовка NRG Solo Swoosh Fleece Hoodie"} price={"8 490"}/>
                <Clothes src={"../image/men/2.png"} title={"The North Face"} info={"Мужской пуховик Himalayan Down"} price={"33 890"}/>
                <Clothes src={"../image/men/3.png"} title={"Hackett"} info={"Мужской свитер Harry Dog Merino Wool"} price={"17 190"}/>
                <Clothes src={"../image/men/4.png"} title={"Woolrich"} info={"Мужская куртка парка Polar High Collar Fur"} price={"77 990"}/>
                <Clothes src={"../image/men/5.png"} title={"Timberland"} info={"Мужская толстовка YC NL Sky Printed Hoodie"} price={"12 790"}/>
                <Clothes src={"../image/men/6.png"} title={"Jordan"} info={"Мужская куртка бомбер Essentials Statement MA-1"} price={"19 990"}/>
                <Clothes src={"../image/men/7.png"} title={"Nike SB"} info={"Мужская толстовка GFX Fleece Hoodie"} price={"6 690"}/>
                <Clothes src={"../image/men/8.png"} title={"adidas Originals"} info={"Мужская куртка x Midwest Kids Windrunner"} price={"10 490"}/>
                <Clothes src={"../image/men/9.png"} title={"adidas Originals"} info={"Мужские брюки x Midwest Kids Adibreak"} price={"8 990"}/>
                <Clothes src={"../image/men/10.png"} title={"Lacoste"} info={"Мужской лонгслив x Peanuts Organic Cotton"} price={"8 690"}/>
                <Clothes src={"../image/men/11.png"} title={"Reebok"} info={"Мужская футболка x Monochrome Logo"} price={"5 990"}/>
                <Clothes src={"../image/men/12.png"} title={"Nike"} info={"Мужская толстовка ACG NRG Therma-Fit All Over Print Wolf Tree Hoodie"} price={"12 190"}/>
        </div>
    }
}