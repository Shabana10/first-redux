import {useSelector} from 'react-redux'

function List() {
    const books = useSelector(state => state.books)
    return (
        <div>
            <h1>List of Books</h1>
            {
                books && books.map((ele,ind) => {
                    return <div key={ind}>
                        <h3>{ele.title}</h3>
                        <h5>{ele.price}</h5>
                        </div>
                })
            }
        </div>
    )
}

export default List
