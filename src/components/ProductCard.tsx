import React from 'react';
import {ProductItem} from "../utils/types";
import { Wrapper } from './styles/ProductCard.styled';
import bg from '../images/bg.png'

type Props = {
    item: ProductItem
}

const ProductCard: React.FC<Props> = ({item}) => {
    const photoCompressed = item?.additional_photos[0]?.compressed
    const photoOriginal = item?.additional_photos[0]?.original

    return (
        <Wrapper>
            <div className="card">
                <img src={photoCompressed && photoOriginal ? `https://cdn.artisant.io/api/files/630x819/${photoOriginal && photoCompressed}` : bg}
                     alt="bg-photo"/>
                <div className="card_creator">
                    <span>created by</span>
                    <p>{item?.created_by?.display_name}</p>
                </div>
                <div className="card_type">
                    <p>{item.name}</p>
                    <p>{item.type}</p>
                </div>
                <div className="card_selling">
                    <div className="card_availables">
                        <span className="card_available">available</span>
                        <span className="card_available card_black">{item.quantity_available} of 50</span>
                    </div>
                    <div className="card_prices">
                        <span className="card_price">price</span>
                        <span className="card_price card_blue">{item.initial_price} ETH</span>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default ProductCard;