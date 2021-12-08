import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

interface Banner {
  data: [BannerElement]
}

interface BannerElement {
  url_mobile: string
}

export default function Banners(props: Banner) {

  return (
    <div className="d-flex justify-content-center mb-3">
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselInner>
          <MDBCarouselItem className='active'>
            <MDBCarouselElement src={props.data[0].url_mobile} alt='...' />
            <MDBCarouselCaption>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          {
            props.data.map((value, id) => {
              return (
                <MDBCarouselItem itemId={id}>
                  <MDBCarouselElement className="carousel" src={value.url_mobile} alt='...' />
                  <MDBCarouselCaption>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
              )
            })
          }
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}