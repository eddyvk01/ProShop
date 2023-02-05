import React ,{ useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch ,useSelector } from 'react-redux'
import { useNavigate,useLocation } from 'react-router-dom'
import { listProducts } from '../actions/productActions' 
import Loader from '../components/Loader'
import Message from '../components/Message'
// import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
// import { useSearchParams } from 'react-router-dom';

function HomeScreen() {

  let navigate = useNavigate()
  const dispatch = useDispatch()

  // const [searchParams, setSearchParams] = useSearchParams();

  function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const productList = useSelector(state => state.productList)
  const { error, loading, products , page, pages} = productList

  let query =useQuery();

  // let keyword = searchParams.get("keyword")
  const keyword = query.get("keyword")
  console.log(keyword)

  useEffect(() => {
  //  dispatch(listProducts(keyword))
  dispatch(listProducts())

  },[dispatch, keyword])

  return (
    <div>
       {/* {!keyword && <ProductCarousel />} */}
       <ProductCarousel/>

        <h1>Latest Products</h1>
        {loading ? <Loader/ > 
        : error? <Message variant ='danger'>{error}</Message>
          :
          <div>
            <Row>
              {products.map(product => (
                  <Col key= {product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                  </Col>
              ))}
            </Row>
            {/* <Paginate page={page} pages={pages} keyword={keyword} /> */}
          </div>
        }
    </div>
  )
}

export default HomeScreen