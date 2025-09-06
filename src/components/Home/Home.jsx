import React from 'react'
import './Home.css'
import Card from '../Card/Card'
import house from "../../assets/house.jpg"
import house1 from "../../assets/housekichen.jpg"
import house2 from "../../assets/houseliving.jpg"
import farmhouse from "../../assets/farmhouse2.jpg"
import farmhouse1 from "../../assets/farmhouse1.jpg"
import farmhouse2 from "../../assets/farmhouse.jpg"
import ski from "../../assets/ski.avif"
import ski1 from "../../assets/ski1.avif"
import ski2 from "../../assets/ski2.avif"
import roomhouse from "../../assets/roomhouse.avif"
import roomhouse1 from "../../assets/roomhouse1.avif"
import roomhouse2 from "../../assets/roomhouse2.avif"
import villa3 from "../../assets/villa3.jpg"
import villa from "../../assets/villa.jpg"
import villa1 from "../../assets/villa1.jpg"
import mountain from "../../assets/mountain.avif"
import mountain1 from "../../assets/mountain1.avif"
import mountain2 from "../../assets/mountain2.avif"
import huthouse2 from "../../assets/huthouse2.jpg"
import huthouse from "../../assets/huthouse.jpg"
import huthouse1 from "../../assets/huthouse1.jpg"
import village1 from "../../assets/village1.avif"
import village from "../../assets/village.avif"
import village2 from "../../assets/village2.avif"
import room from "../../assets/room.jpg"
import room1 from "../../assets/room1.jpg"
import room2 from "../../assets/room2.jpg"
import old1 from "../../assets/old1.avif"
import old2 from "../../assets/old2.avif"
import old3 from "../../assets/old3.avif"
import roomnew from "../../assets/roomnew.avif"
import roomnew1 from "../../assets/roomnew1.avif"
import roomnew2 from "../../assets/roomnew2.avif"
import hut1 from "../../assets/hut1.avif"
import hut2 from "../../assets/hut2.avif"
import hut3 from "../../assets/hut3.avif"

const Home = () => {
  return (
    <div id='home'>
      <Card image1={house} image2={house1} image3={house2} title={"3BHK Villa in jaipur"} price={"2000"} />
      <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} title={"1BHK Farm house in Lucknow"} price={"4000"} />
      <Card image1={ski} image2={ski1} image3={ski2} title={"1BHK flat in Manali"} price={"4000"} />
      <Card image1={roomhouse} image2={roomhouse1} image3={roomhouse2} title={"1BHK Modern Flat in Kanpur"} price={"3000"} />
      <Card image1={villa3} image2={villa} image3={villa1} title={"1BHK Modern Flat in Kanpur"} price={"3000"} />
      <Card image1={mountain2} image2={mountain} image3={mountain1} title={"3BHK Modern Flat in Kanpur"} price={"3000"} />
      <Card image1={huthouse2} image2={huthouse} image3={huthouse1} title={"1BHK Hut house in Kasol"} price={"7000"} />
      <Card image1={village2} image2={village} image3={village1} title={"1BHK Hut house in jodhpur"} price={"4500"} />
      <Card image1={room2} image2={room} image3={room1} title={"1BHK Hut house in janshi"} price={"7500"} />
      <Card image1={old2} image2={old1} image3={old3} title={"1BHK house in Banglor"} price={"6500"} />
      <Card image1={roomnew} image2={roomnew1} image3={roomnew2} title={"1BHK house in Uttrakhand"} price={"2600"} />
      <Card image1={hut2} image2={hut1} image3={hut3} title={"1BHK house in Goa"} price={"8500"} />
    </div>
  )
}

export default Home
