
import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductBrand from './Components/ProductBrand';
import Brands from "./Components/Brands";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import {ApolloProvider, Query} from "react-apollo";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

export const GET_ALL_CATEGORIES = gql`
query{
  category{
    products{
      id
      name
      inStock
      gallery
      description
      attributes{
        id
        name
        type
        items{
          displayValue
          value
          id
        }
      }
      prices{
        currency{
          label
          symbol
        }
        amount
      }
      brand
    }
  }
}
`;


// client.query({
//   query: product_brand,
// fetchPolicy: "cache-first"
// }).then(res => console.log(res));

class App extends Component{


  render(){
    return(
      <ApolloProvider client={client}>
        <div className='App'>
          <Fragment>
          I am the App component
          </Fragment>
          <ProductBrand />
          <Brands />


{/* const Feed = () => (
<Query query={GET_DOGS}>
{({ loading, error, data }) => {
if (error) return <Error />
if (loading || !data) return <Fetching />;

return <DogList dogs={data.dogs} />
}}
</Query> */}


          <Query query={GET_ALL_CATEGORIES}>
            {({error,loading, data}) => {
                if(error) return "something went wrong !!!";
                if(loading || !data) return "Loading ... ";
                const category = data.category;
                return category.map((c,index) => <div key={index}>{c.products.brand}</div>);
              }
            }
          </Query>

        </div>
      </ApolloProvider>
    )
  }
}

export default App;
