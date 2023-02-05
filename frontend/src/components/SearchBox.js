import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let navigate = useNavigate()
    const location = useLocation()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            // navigate(`/?keyword=${keyword}&page=1`)
          navigate(`/?keyword=${keyword}`)
        } else {
          console.log(location.pathname) 
          // navigate(location.pathname)
        }
    }
    return (
        <div>
          <Form onSubmit={submitHandler} className="d-flex" >
            {/* inline="true"  removed ? bcoz it does not working   */}
            <Form.Control
                type='text'
                name='q'
                placeholder="Search"
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5'
            ></Form.Control>
            <Button
                type='submit'
                variant='outline-success'
                className='p-2 mx-2'
            >
                Submit
            </Button>
          </Form>
        </div>
    )
}

export default SearchBox