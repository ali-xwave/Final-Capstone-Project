import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../Store/cardSlice/cardSlice';

const Product = () => {

    const dispatch = useDispatch();

    const addCartHandler = (item) => {
        
        dispatch(addItem(item))
};

    const productsData = [
        {
            id: "1",
            productName: "Table"
        },
        {
            id: "2",
            productName: "Chaire",
        },
        {
            id: "3",
            productName: "Bed",
        }
    ]

    return (
        <>
            <div className='container-fluid row g-4 py-5 row-cols-1 row-cols-lg-3'>
                {
                    productsData.map((item) => {
                        return(
                            <>
                            <div key={item.id} className='col -d-flex align-items-start'>
                                <div>
                                    <h2>{item.productName}</h2>
                                    <p>Paragraph</p>
                                    <div>
                                        <button onClick={()=>{addCartHandler(item)}}>add to car</button>
                                    </div>
                                </div>

                            </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Product
