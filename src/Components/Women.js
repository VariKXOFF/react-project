import React from "react"
import Clothes from "./Clothes";

export default class Women extends React.Component {
    render() {
        return <div className={"main"}>
                <Clothes src={"../image/women/1.png"} title={"Maison Kitsune"} info={"Женская толстовка Fox Head Patch Adjusted"} price={"12 690"}/>
                <Clothes src={"../image/women/2.png"} title={"The North Face"} info={"Женский пуховик Himalayan Insulated"} price={"20 990"}/>
                <Clothes src={"../image/women/3.png"} title={"Nike"} info={"Женские брюки NRG Solo Swoosh Fleece"} price={"6 690"}/>
                <Clothes src={"../image/women/4.png"} title={"The North Face"} info={"Женская куртка Black Box Search And Rescue Oversize Sherpa"} price={"15 990"}/>
                <Clothes src={"../image/women/5.png"} title={"Polo Ralph Lauren"} info={"Женский пуховик Carly Down Fill"} price={"39 190"}/>
                <Clothes src={"../image/women/6.png"} title={"MSGM"} info={"Женская толстовка Paint Logo Unbrushed Hoodie"} price={"19 490"}/>
                <Clothes src={"../image/women/7.png"} title={"Tommy Jeans"} info={"Женские брюки ABO Collegiate"} price={"10 690"}/>
                <Clothes src={"../image/women/8.png"} title={"Puma"} info={"Женская толстовка x Liberty Crew"} price={"10 490"}/>
                <Clothes src={"../image/women/9.png"} title={"Levi's"} info={"Женская толстовка Rider Tie-Dye Hoodie"} price={"7 390"}/>
                <Clothes src={"../image/women/10.png"} title={"Canada Goose"} info={"Женская куртка парка Rossclair"} price={"103 890"}/>
                <Clothes src={"../image/women/11.png"} title={"Tommy Jeans"} info={"Женская футболка Tie Dye Relaxed Fit"} price={"5 990"}/>
                <Clothes src={"../image/women/12.png"} title={"Tommy Jeans"} info={"Женская куртка ветровка Colour-Blocked Tommy Badge Windbreaker"} price={"17 990"}/>
        </div>
    }
}