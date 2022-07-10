
import { Component, Fragment } from 'react';



    class ProductBrand extends Component{

        constructor(props){
            super(props);
            this.state = {
                count: 0
            }
        }




    render(){
        return(
        <div className='ProductBrand'>
            <Fragment>
                I am the ProductBrand component
            </Fragment>
        </div>
        )
    }
}

export default ProductBrand;