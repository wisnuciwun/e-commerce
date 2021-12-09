import { memo } from 'react'
import { CategoryElement } from '../constants/Constants'

interface Category {
    data: [
        CategoryElement
    ],
    onClick: (value: string) => void,
    choosen: string
}

function Categories(props: Category) {
    return (
        <div className="d-flex justify-content-between overflow-auto p-2 mb-3">
            {
                props.data.map((value, id) => {
                    
                    let color: string
                    props.choosen == value.category_name ? color = 'palegreen' : color = 'bisque'

                    return (
                        <div className="pointer category-items" onClick={() => props.onClick(value.category_name)} key={id}>
                            <div style={{backgroundColor: color}} className='mb-3 round'>
                                <img className="category" src={value.icon} />
                            </div>
                            <p className="default-color" style={{fontSize: '10pt'}} >{value.category_name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default memo(Categories)
