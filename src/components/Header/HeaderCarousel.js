import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import universeImage from '../../assets/universe-image.svg'

import { Button, ButtonGroup } from '@chakra-ui/react'

function HeaderCarousel() {
    return (
        <Carousel slide={false}>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={universeImage}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='text-white'>"Astrology for Clarity"</h1>
                    <p className='text-white'>Your name is a vedic Astrologer and has expertise in vaastu and mantra therapy</p>
                    <Button colorScheme='teal' variant='solid'>Consult Now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={universeImage}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='text-white'>"Astrology for Clarity"</h1>
                    <p className='text-white'>Your name is a vedic Astrologer and has expertise in vaastu and mantra therapy</p>
                    <Button colorScheme='blue' variant='solid'>Consult Now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={universeImage}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='text-white'>"Astrology for Clarity"</h1>
                    <p className='text-white'>Your name is a vedic Astrologer and has expertise in vaastu and mantra therapy</p>
                    <Button colorScheme='blue' variant='solid'>Consult Now</Button>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default HeaderCarousel