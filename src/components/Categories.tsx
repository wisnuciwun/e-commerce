import React from 'react'

interface Category {
    data: [
        CategoryElement
    ],
}

interface CategoryElement {
    icon: string,
    category_name: string
}

function Categories(props: Category) {
    return (
        <div className="d-flex justify-content-between mt-2 overflow-auto p-5">
            {
                props.data.map((value, id) => {
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

export default Categories
