import React from 'react'



export default function List(){


   

        let { id, title, price, img } = props

        return (<>


            <Link to={`/e/${id}`}>

                <Card style={{ width: '13rem' }} className='image'>

                    <Card.Img variant="top" className='imageorigin' src={img} style={{ height: '11rem' }} />

                    <Card.Body style={{ textDecoration: 'none' }}>
                        <Card.Title className='title' id='title' style={{ textDecoration: 'none' }}>{title}</Card.Title>

                        <Card.Text className='price'>
                            {price}
                        </Card.Text>

                        <Button className='details'>
                            مشاهده
                            جزئیات
                        </Button>

                    </Card.Body>

                </Card>

            </Link>
            
        </>
        )
    
}
