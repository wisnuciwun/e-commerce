import React from 'react'

interface Imaging {
    imageobject: [
        element
    ],
}

interface element {
    icon: string,
    category_name: string
}

function Category(props: Imaging) {
    return (
        <div className="d-flex justify-content-between mt-5 p-3 overflow-auto">
            {
                props.imageobject.map((value, id) => {
                    return (
                        <div className="pointer category-items" key={id}>
                            <div className='mb-3 round'>
                                <img className="category" src={value.icon} />
                            </div>
                            <p className="default-color" >{value.category_name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Category
