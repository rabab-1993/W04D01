import React from "react";
import Footer from "./Components/footer/Footer";
import Header from "./Components/Header/Header";
import ToDo from "./Components/ToDo";





class App extends React.Component {
constructor(props){
    super(props)
}
      
render() {
    return (
        <>
            <Header />
            <ToDo />
            <Footer />
        </>
    )
}
}


  export default App
  