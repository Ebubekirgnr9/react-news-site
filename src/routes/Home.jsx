import { Carousel, Card, Col, Row, Container } from 'react-bootstrap';

export default function Home() {

  const News = [
    {
      id: 1,
      title: "Aday listelerinin YSK'ya sunulması için yarın son gün",
      imageUrl:
        'https://static.bundle.app/news/thtumt1u.bbu.jpg',
    },
    {
      id: 2,
      title: "Serenay Sarıkaya ve Burak Deniz'in başrolde olduğu 'Şahmaran' dizisi hakkında suç duyurusu",
      imageUrl:
        'https://static.bundle.app/news/iikpbyui.b2z.jpg',
    },

    {
      id: 3,
      title: "Star Wars hayranları Ahsoka'nın ilk fragmanına övgüler yağdırdı",
      imageUrl:
        'https://static.bundle.app/news/ppemnjv4.j23.jpg',
    },

  ]

  return (
    <Container className='mt-5'>
      <Row >
        <h2>Home <span className='text-danger fw-bold'>Page</span></h2>
        {News.map((News) => (
          <Col className='col-xl-4 col-6 my-2'>
            <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded-4' >
              <div className='card-img '>
                <img
                  className="d-block w-100 rounded-4"
                  src={News.imageUrl}
                />
              </div>
              <h6 className='fw-bold p-3' style={{ textAlign: 'justify', fontSize: '12px' }}>{News.title}</h6>
            </div>
          </Col>
        ))}

      </Row>
    </Container>

  );
}
