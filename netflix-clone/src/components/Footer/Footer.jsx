import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css";

function Footer() {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className='footer_data'>
          <div>
            <ul>
              <li><a href="#">Audio Description </a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Legal Notice</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Cookie Preference</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Corporate Information</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="#">Media Center</a> </li>
              <li><a href="#">Privacy</a> </li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className='service_code'>
          <p>
            Service Code 
          </p>
        </div>
        <div>
          &copy; 1997-2024 Netflix, Inc.
        </div>
      </div>
    </div>
  )
}

export default Footer;