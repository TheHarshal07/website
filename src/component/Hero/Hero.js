import React from 'react';
import "./Hero_module.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Hero() {
  return (
    <>
    <section >
        <div id="home" className="hero_wrapper">
            <div className='container1'>
                <h2>I'm <span class="span1" ></span></h2>
                <p>I am Harshal Bhogal. I have completed my Bachelores degree in Information Technology in Saraswati college of engineering, Kharghar.
</p>
                <div className="btn">
                  <Stack spacing={2} direction="row">
                    <Button variant="outlined"><a target='_blank'  href="https://www.linkedin.com/in/harshal-bhogal-a5b3461b5/">LinkedIn</a> <box-icon name='linkedin-square' type='logo' color='#fff8f8' ></box-icon></Button>
                  </Stack>
                  <Stack spacing={2} direction="row">
                    <Button variant="outlined"><a target='_blank'  href="https://github.com/TheHarshal07">Github</a> <box-icon name='github' type='logo' color='#fff9f9' ></box-icon> </Button>
                  </Stack>
                </div>
            </div>
            <div className="hero_img">
                
            </div>
        </div>
    </section>
    </>
  )
}
