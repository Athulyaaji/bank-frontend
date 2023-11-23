import React, { useContext, useEffect, useState } from 'react'
import TableC from './TableC'
import { Alert,  Button, Container } from 'react-bootstrap'
import { addContext, deleteContext } from '../bankContext/ContextShare'
import { getAllData, removeData } from '../service/allApis'


function Home() {

  const [allData, setAllData] = useState([])

  const { addData, setAddData } = useContext(addContext)
  const { deletedata, setDeleteData } = useContext(deleteContext)

  const getData = async () => {
    const response = await getAllData()
    setAllData(response.data);
  }
  // console.log(allData);

  // function to delete data
  const deleteData = async (id) => {
    const { data } = await removeData(id)
    setDeleteData(data)

    getData()

  }

  useEffect(() => {
    getData()
  }, [])

  return (


    <Container >

      {addData ? <div onClose={() => setAddData("")}>
        <Alert variant="success" dismissible>
          <Alert.Heading >
          The orderid:  {addData.orderid} Added Sucessfully.......
          </Alert.Heading>

        </Alert>
      </div> : ""
      }

      {deletedata? <div onClose={() => setDeleteData("")}>
        <Alert variant="danger" dismissible>
          <Alert.Heading>
          The orderid:  {deletedata.orderid} deleted sucessfully
          </Alert.Heading>

        </Alert>
      </div> : ""
      }
      <h1 className='mt-3 text-center fs-3 text-black'>Order Materials</h1>




      <div style={{ marginLeft: "20px", display: 'flex',border:'#ff0000',borderRadius:'100px' }}>

        <label className="mb-3 mt-3 w-25 ">
          ORDERLIST ID &nbsp;
          <input 
            type="text"
            placeholder='XXXX'
            name="firstName"
            value=""
            onChange=
            ""
          />
        </label>


        <label className="mb-3 mt-3 w-25" >
          BULIDING ID &nbsp;
          <input
            type="text"
            placeholder='XXXX'
            name="firstName"
            value=""
            onChange=
            ""
          />
        </label>



        <label className="mb-3 mt-3 w-25">
          BULID NAME &nbsp;
          <input
            type="text"
            placeholder='XXXX'
            name="firstName"
            value=""
            onChange=
            ""
          />
        </label>




        <label className="mb-3 mt-3 w-25">
          BULIDING ADD &nbsp;
          <input
            type="text"
            placeholder='XXXX'
            name="firstName"
            value=""
            onChange=
            ""
          />
        </label>




      </div>


      <label className="mb-3 mt-3 " style={{ marginLeft: "20px", display: 'flex' }}>
        ORDER DESCRIPITIONS&nbsp;
        <input style={{ width: '50%' }}
          type="text"
          placeholder='XXXX'
          name="firstName"
          value=""
          onChange=
          ""
        />
      </label>







      <div>
        {
          <TableC bankers={allData} removeData={deleteData} ></TableC>
        }
      </div>
      <label className="mb-3 mt-3 " style={{ marginLeft: "20px", display: 'flex' }}>
        REMARKS&nbsp;
        <input style={{ width: '70%' }}
          type="text"
          placeholder='XXXX'
          name="firstName"
          value=""
          onChange=
          ""
        />
      </label>


      <div style={{ marginLeft: "20px", display: 'flex' }}>
        <label className="mb-3 mt-3 w-25">
          PREPARE BY&nbsp;
          <input
            type="text"
            placeholder='XXXX'
            name="firstName"
            value=""
            onChange=
            ""
          />
        </label>

        <label className="mb-3 mt-3 w-25">
          CHECKED BY &nbsp;
          <input
            type="text"
            placeholder='XXXX'
            name="firstName"
            value=""
            onChange=
            ""
          />
        </label>

        <label className="mb-3 mt-3 w-25">
          APPORVED BY &nbsp;
          <input
            type="text"
            placeholder='XXXX'
            name="firstName"
            value=""
            onChange=
            ""
          />
        </label>



      </div>


      <div style={{ marginLeft: "20px", display: 'flex' }}>
        <label className="mb-3 mt-3 w-25">
          DATE &nbsp;
          <input style={{ width: '25%' }}
            type="text"
            placeholder='XXXX'
            name="firstName"
            value=""
            onChange=
            ""
          />
        </label>
        <label className="mb-3 mt-3 w-25">
          DATE  &nbsp;
          <input style={{ width: '25%' }}
            type="text"
            placeholder='XXXX'
            name="firstName"
            value=""
            onChange=
            ""
          />
        </label>
        <label className="mb-3 mt-3 w-25">
          DATE  &nbsp;
          <input style={{ width: '25%' }}
            type="text"
            placeholder='XXXX'
            name="firstName"
            value=""
            onChange=
            ""
          />
        </label>

      </div>


      <Button className='text-white' style={{ marginLeft: '25px'}} variant="warning">SND FOR CHK</Button>
      <Button className='text-white' style={{ marginLeft: '150px' }} variant="warning">SND FOR APP</Button>
      <Button className='text-white' style={{ marginLeft: '150px' }} variant="danger">APPROVED</Button>






    </Container>

  )
}

export default Home