import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import ListItem from "../../components/listItem/ListItem";


const Home = () => {
  return (
    <div className="home"> 
      <Navbar/>
      <Featured/>
      <List/>
      <ListItem/>
  </div>
  )
}

export default Home