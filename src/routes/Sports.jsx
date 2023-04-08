import { Col, Row, Container } from 'react-bootstrap';
export default function Sports() {


  const Sports = [
    {
      id: 1,
      title: 'Sergen Yalçına hoş geldin hediyesi Takımı şampiyon yapan futbolcu geri dönüyor',
      imageUrl:
        'https://i.hbrcdn.com/manset/2023/04/07/sergen-yalcin-a-hos-geldin-hediyesi-takimi_15749094_28.jpg',
    },
    {
      id: 2,
      title: 'Jorge Jesustan kendisine 2,yıl daha beraber çalışalım diyen Ali Koça bomba ',
      imageUrl:
        'https://i.hbrcdn.com/haber/2023/04/08/jorge-jesus-tan-2-yil-daha-beraber-calisalim-15750320_1336_m.jpg',
    },
    {
      id: 3,
      title: 'Old Firm " derbisinde gülen Celtic!',
      imageUrl:
        'https://static.bundle.app/news/folsf1aa.2fz.jpg',
    },


  ]



  return (
    
    <Container className='mt-5'>
      <Row >
        <h2>Sports <span className='text-danger fw-bold'>Page</span></h2>
        {Sports.map((Sports) => (
          <Col key={Sports.id} className='col-xl-4 col-6 my-2'>
            <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded-4' >
              <div className='card-img '>
                <img
                  className="d-block w-100 rounded-4"
                  src={Sports.imageUrl}
                />
              </div>
              <h6 className='fw-bold p-3' style={{ textAlign: 'justify', fontSize: '12px' }}>{Sports.title} </h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
