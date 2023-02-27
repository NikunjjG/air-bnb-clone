import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import cardData from "./cardData"
import "./App.css"
function App() {
  const cardElement = cardData.map(card=>{
    return <Card image = {card.image} rating = {card.rating} country = {card.country} about = {card.about} price = {card.price} openSlots = {card.openSlots}/>
  })
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="cardSpace">
      {/* <Card className = "card"
        image = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        rating = "4.5 (6)"
        country = "USA"
        about = "lorem ipsum"
        price = "$10"
        />
      <Card className = "card"
        image = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"
        rating = "4.3 (10)"
        country = "Phillipenes"
        about = "lorem ipsum"
        price = "$40"
        />
      <Card className = "card"
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4xjShh4ynJbrgYrW_aB4lhKSxeMzQ3cO_A&usqp=CAU"
        rating = "4.7 (1)"
        country = "Italy"
        about = "lorem ipsum"
        price = "$12"
        />
      <Card className = "card"
        image = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        rating = "4.5 (6)"
        country = "USA"
        about = "lorem ipsum"
        price = "$10"
        />
      <Card className = "card"
        image = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"
        rating = "4.3 (10)"
        country = "Phillipenes"
        about = "lorem ipsum"
        price = "$40"
        />
      <Card className = "card"
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4xjShh4ynJbrgYrW_aB4lhKSxeMzQ3cO_A&usqp=CAU"
        rating = "4.7 (1)"
        country = "Italy"
        about = "lorem ipsum"
        price = "$12"
        /> */}
        {cardElement}
        </div>
    </>
    );
}

export default App;
