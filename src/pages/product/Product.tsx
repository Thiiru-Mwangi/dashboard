import SinglePage from '../../components/singlePage/SinglePage'
import { singleProduct } from '../../data'
import './product.scss'
// fetch data and send to singlePage component


const Product = () => {
  return (
    <div className='product'>
        <SinglePage {...singleProduct}/>
    </div>
  )
}

export default Product