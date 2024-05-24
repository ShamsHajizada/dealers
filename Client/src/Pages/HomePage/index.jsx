import React from 'react'
import "../HomePage/style.scss"
import { Card } from 'antd';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/scss';
// import 'swiper/scss/pagination';
const { Meta } = Card;
const HomePage = () => {
  return (
    
    
// const HomePage = () => {
//   const [watchs, setWatchs] = useState(null);
  
//   useEffect(() => {
//     getAllData().then((res) => {
//       setWatchs(res.data.data);
//       setWatchsCopy(res.data.data);
//     });
//   }, []);
<div className="container">
<div className='main-section'>
  <div className="txt-img">
    <h1>M A D E W E L L</h1>
    <br />
    <p>Summer Collection</p>
    <br />
    <h3>1,499</h3>
    <br />
  </div>
  <div className="btn-img">
     <button className='first-btn'>SHOP NOW</button>
  <button className='second-btn'>SHOP NOW</button>
  </div>
 
</div>
<section className='card-section'>
  <div className="cards">
    
    <Card
    hoverable
    style={{ width: 500 }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/dealers/images/product_1.jpg" />}
  >
    <Meta title="The Shoe" description="$9.50" />
  </Card>
  <Card
    hoverable
    style={{ width: 500 }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/dealers/images/product_2.jpg  " />}
  >
    <Meta title="Marc Jacobs Bag" description="$9.50" />
  </Card>
  <Card
    hoverable
    style={{ width: 500 }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/dealers/images/product_3.jpg" />}
  >
    <Meta title="The Belt" description="$9.50" />
  </Card>
  
  <Card
    hoverable
    style={{ width: 500 }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/dealers/images/product_1.jpg" />}
  >
    <Meta title="The Shoe" description="$9.50" />
  </Card>
  <Card
    hoverable
    style={{ width: 500 }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/dealers/images/product_2.jpg  " />}
  >
    <Meta title="Marc Jacobs Bag" description="$9.50" />
  </Card>
  <Card
    hoverable
    style={{ width: 500 }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/dealers/images/product_3.jpg" />}
  >
    <Meta title="The Belt" description="$9.50" />
  </Card>
  </div>

</section>
<section className='shopnow-woman'>
  <h5>#NEW SUMMER COLLECTION 2019</h5>
  <br />
  <h1>JACKET</h1>
  <br />
  <button className='btn-shop'>SHOP NOW</button>
</section>

<div className="col-txt"><p>COLLECTIONS</p></div> 
<section className='collections'> 
<Card
    hoverable
    style={{ width: 300, height: 300}}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/dealers/images/product_1.jpg" />}
  >
    <Meta title="The Shoe" description="$9.50" />
  </Card>
  <Card
    hoverable
    style={{ width: 300, height: 300}}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/dealers/images/product_2.jpg  " />}
  >
    <Meta title="Marc Jacobs Bag" description="$9.50" />
  </Card>
  <Card
    hoverable
    style={{ width: 300, height: 300}}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/dealers/images/product_3.jpg" />}
  >
    <Meta title="The Belt" description="$9.50" />
  </Card>
{/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
      </section>

<section className='shopnow-man'>
  <h5>#NEW SUMMER COLLECTION 2019</h5>
  <br />
  <div className="txt-man"><h1>NEW DENIM COAT </h1></div>
  <br />
  <button className='btn-shop'>SHOP NOW</button>
</section>


</div>
    
    
  )
}

export default HomePage










