import {Container} from "./styles/Container.styled";
import React, {useEffect, useState} from "react";
import {ProductItem} from "../utils/types";
import axios from "axios";
import { Wrapper } from "./styles/Main.styled";
import ProductCard from "./ProductCard";
import Loading from "./Loading";


const Main: React.FC = () => {
    const [productItems, setProductItems] = useState([] as ProductItem[])
    const [sort, setSort] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(true)


    useEffect( () => {
         axios('https://artisant.io/api/products')
             .then(({data}) => {
                 setProductItems(data.data.products)
                 setLoading(!loading)
             }).catch(e => console.log(e))
    }, [] as ProductItem[])


    const sortByQuantity = (): void => {
        let sorted: ProductItem[]
        if (sort === 1) {
            sorted = [...productItems].sort((a,b) => a.quantity_available - b.quantity_available)
            setSort(sort + 1)
        } else {
            sorted = [...productItems].sort((a,b) => b.quantity_available - a.quantity_available)
            setSort(sort - 1)
        }
        setProductItems(sorted)
    }

    if (loading) return <Loading/>

    return (
        <Container>
            <Wrapper>
                <div className="d-flex">
                    <div>
                        <h1>Explore</h1>
                        <h2>Buy and sell digital fashion NFT art</h2>
                    </div>
                    <button onClick={sortByQuantity}>by quantity</button>
                </div>
                <div className="row">
                    {
                        productItems?.map(prod => (
                            <ProductCard key={prod.product_id} item={prod}/>
                        ))
                    }
                </div>
            </Wrapper>
        </Container>
    );
};

export default Main;