import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Homepage from "./pages/Homepage";
import RecensionDetalj from "./pages/RecensionDetalj";
import Kategori from "./pages/Kategori";
import SiteHeader from "./components/SiteHeader";

//apollo client 
const client = new ApolloClient({
  url: "http://localhost:1337/graphql", 
  cache: new InMemoryCache()
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
    <div className="App">
      <SiteHeader />
      <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/recensions/:id" element={<RecensionDetalj />} />
      <Route path="/kategori/:id" element={<Kategori />} />
      </Routes>
      </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
