import React from "react";
import { observer, inject } from "mobx-react";

@inject('cartStore')

@observer
class Product extends React.Component {

      onClickAddToCart = () => {

            const { onClickAddToCart } = this.props.cartStore;
            onClickAddToCart(parseInt(event.target.id, 10));

      }

      render() {
            const { product } = this.props;
            return (<div className="flex flex-col  border border-transparent border-solid md:w-36 lg:w-30 xl:w-22 m-2 items-center p-2 relative" id={product.id}>
                    {product.isFreeShipping?<p className="absolute top-10 right-0 bg-black p-1 text-xs text-white">Free shipping</p>:null}
                    <img src={product.imageURL} alt="Cat Tee Black T-Shirt" className="w-4/5 object-contain mb-2"/>
                    <p className="h-45px text-center">{product.title}</p>
                    <div className="w-4 border-t-2 rounded border-yellow-600 mt-2px mb-4"></div>
                    <p><span className="text-xs mr-1">{product.currencyFormat}</span><span class="text-xl">{product.price}</span></p>
                        <p className="text-sm text-gray-700 mb-4 h-5">{product.installmentsCount==0?null:`or ${product.installmentsCount} x ${product.currencyFormat}${(product.price/product.installmentsCount).toFixed(2)}`}</p>
                        <button id={product.productId} onClick={this.onClickAddToCart} className="w-full py-3 text-white bg-black text-center rounded text-sm focus:outline-none">Add to cart</button>
                </div>);
      }
}

export default Product;
