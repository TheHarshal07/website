import React from 'react';
import "./Hero_module.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Hero() {
  return (
    <>
    <section>
        <div className="hero_wrapper">
            <div className='container'>
                <h2>Harshal Bhogal</h2>
                <p>I'm Harshal Bhogal studying IT engineering at SARASWATI COLLEGE OF ENGINEERING, KHARGHAR. I am intresting in Blockchain.</p>
                <div className="btn">
                  <Stack spacing={2} direction="row">
                    <Button variant="outlined">Say Hello 👋🏻</Button>
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
