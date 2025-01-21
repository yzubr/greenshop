import Image from 'next/image'
import WateringCan from '@/assets/images/Group 20.png'
import Cactus from '@/assets/images/Group 21.png'
import Succulent from '@/assets/images/Group 22.png'
import styles from './Footer.module.css'

export default function footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <ul>
          <li>
            <Image src={Succulent} alt="Cactus" placeholder="blur" width={77} height={95} />
            <h3>Garden Care</h3>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </li>
          <li>
            <Image src={Cactus} alt="Cactus" placeholder="blur" width={83} height={90} />
            <h3>Plant Renovation</h3>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </li>
          <li>
            <Image src={WateringCan} alt="Cactus" placeholder="blur" width={90} height={89} />
            <h3>Watering Graden</h3>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </li>
          <li>
            <form action="" method="post">
              <label htmlFor="subscribeform">
                <h3>Would you like to join newsletters?</h3>
                <div>
                  <input type="email" name="subscribeform" id="subscribeform" placeholder="enter your email address..." />
                  <button type="submit">Join</button>
                </div>
              </label>
              <p>
                We usually post offers and challenges in newsletter.
                We’re your online houseplant destination.
                We offer a wide range of houseplants
                and accessories shipped directly from our (green)house to yours!
                {' '}
              </p>
            </form>

          </li>
        </ul>
      </section>
      <section className={styles['footer-second-line']}>
        <ul>
          <li>
            <img src="" alt="" />
            <p />
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path clipRule="evenodd" d="M12.0918 8.92531C12.0918 7.77425 11.1591 6.84155 10.0081 6.84155C8.85787 6.84155 7.92517 7.77425 7.92517 8.92531C7.92517 10.0755 8.85787 11.0082 10.0081 11.0082C11.1591 11.0082 12.0918 10.0755 12.0918 8.92531Z" fillRule="evenodd" stroke="#46A358" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path clipRule="evenodd" d="M9.99959 17.5C7.58457 17.5 3.75 13.2989 3.75 8.8322C3.75 5.33539 6.54758 2.5 9.99959 2.5C13.4516 2.5 16.25 5.33539 16.25 8.8322C16.25 13.2989 12.4154 17.5 9.99959 17.5Z" fillRule="evenodd" stroke="#46A358" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <a rel="noreferrer noopener" href="https://www.google.com/maps/search/70+West+Buckingham+Ave.+Farmingdale,+NY+11735/@40.7285135,-73.4487118,15.67z?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
              70 West Buckingham Ave.
              Farmingdale, NY 11735
            </a>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M14.6208 7.51587C14.6208 7.51587 11.9457 10.7264 9.98919 10.7264C8.03347 10.7264 5.32837 7.51587 5.32837 7.51587" stroke="#46A358" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path clipRule="evenodd" d="M2.0434 9.97404C2.0434 4.27562 4.02753 2.37671 9.97991 2.37671C15.9323 2.37671 17.9164 4.27562 17.9164 9.97404C17.9164 15.6716 15.9323 17.5714 9.97991 17.5714C4.02753 17.5714 2.0434 15.6716 2.0434 9.97404Z" fillRule="evenodd" stroke="#46A358" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <a href="mailto:contact@greenshop.com">contact@greenshop.com</a>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M11.9604 2.29175C15.0446 2.63425 17.4813 5.06758 17.8279 8.15175" stroke="#46A358" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M11.9604 5.24414C13.4363 5.53081 14.5896 6.68497 14.8771 8.16081" stroke="#46A358" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path clipRule="evenodd" d="M6.41708 13.5825C0.668758 7.83352 1.48616 5.20096 2.09213 4.35263C2.16997 4.21552 4.08873 1.34323 6.1455 3.02839C11.2507 7.23288 4.78759 6.63843 9.0745 10.9261C13.3623 15.2128 12.7669 8.74996 16.9716 13.8541C18.6568 15.9117 15.7844 17.8303 15.6482 17.9073C14.7998 18.5141 12.1663 19.3315 6.41708 13.5825Z" fillRule="evenodd" stroke="#46A358" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <a href="tel:+88 01911 717 490">+88 01911 717 490</a>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <h3>My Account</h3>
            <ul>
              <li>My Account</li>
              <li>Our stores</li>
              <li>Contact us</li>
              <li>Career</li>
              <li>Specials</li>
            </ul>
          </li>
          <li>
            <h3>Help & Guide</h3>
            <ul>
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </li>
          <li>
            <h3>Categories</h3>
          </li>
          <li>
            <h3>Social Media</h3>
            <ul className={styles['social-media-block']}>
              <li>
                <a href="http://instagram.com">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1.46667C10.1333 1.46667 10.4 1.46667 11.2667 1.53333C13.4667 1.6 14.4667 2.66667 14.5333 4.8C14.6 5.66667 14.6 5.86667 14.6 8C14.6 10.1333 14.6 10.4 14.5333 11.2C14.4667 13.3333 13.4 14.4 11.2667 14.4667C10.4 14.5333 10.2 14.5333 8 14.5333C5.86667 14.5333 5.6 14.5333 4.8 14.4667C2.6 14.4 1.6 13.3333 1.53333 11.2C1.46667 10.3333 1.46667 10.1333 1.46667 8C1.46667 5.86667 1.46667 5.6 1.53333 4.8C1.6 2.66667 2.66667 1.6 4.8 1.53333C5.6 1.46667 5.86667 1.46667 8 1.46667ZM8 0C5.8 0 5.53333 0 4.73333 0.0666667C1.8 0.2 0.2 1.8 0.0666667 4.73333C0 5.53333 0 5.8 0 8C0 10.2 0 10.4667 0.0666667 11.2667C0.2 14.2 1.8 15.8 4.73333 15.9333C5.53333 16 5.8 16 8 16C10.2 16 10.4667 16 11.2667 15.9333C14.2 15.8 15.8 14.2 15.9333 11.2667C16 10.4667 16 10.2 16 8C16 5.8 16 5.53333 15.9333 4.73333C15.8 1.8 14.2 0.2 11.2667 0.0666667C10.4667 0 10.2 0 8 0ZM8 3.86667C5.73333 3.86667 3.86667 5.73333 3.86667 8C3.86667 10.2667 5.73333 12.1333 8 12.1333C10.2667 12.1333 12.1333 10.2667 12.1333 8C12.1333 5.73333 10.2667 3.86667 8 3.86667ZM8 10.6667C6.53333 10.6667 5.33333 9.46667 5.33333 8C5.33333 6.53333 6.53333 5.33333 8 5.33333C9.46667 5.33333 10.6667 6.53333 10.6667 8C10.6667 9.46667 9.46667 10.6667 8 10.6667ZM12.2667 2.8C11.7333 2.8 11.3333 3.2 11.3333 3.73333C11.3333 4.26667 11.7333 4.66667 12.2667 4.66667C12.8 4.66667 13.2 4.26667 13.2 3.73333C13.2 3.2 12.8 2.8 12.2667 2.8Z" fill="#46A358" fillOpacity="0.6" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="http://facebook.com">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
                    <path d="M2 5.33333H0V8H2V16H5.33333V8H7.73333L8 5.33333H5.33333V4.2C5.33333 3.6 5.46667 3.33333 6.06667 3.33333H8V0H5.46667C3.06667 0 2 1.06667 2 3.06667V5.33333Z" fill="#46A358" fillOpacity="0.6" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="http://linkedin.com">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33333 1.66667C3.33333 2.6 2.6 3.33333 1.66667 3.33333C0.733333 3.33333 0 2.6 0 1.66667C0 0.733333 0.733333 0 1.66667 0C2.6 0 3.33333 0.733333 3.33333 1.66667ZM3.33333 4.66667H0V15.3333H3.33333V4.66667ZM8.66667 4.66667H5.33333V15.3333H8.66667V9.73333C8.66667 6.6 12.6667 6.33333 12.6667 9.73333V15.3333H16V8.6C16 3.33333 10.0667 3.53333 8.66667 6.13333V4.66667Z" fill="#46A358" fillOpacity="0.6" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="http://union.com">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
                    <path clipRule="evenodd" d="M15.1653 4.42995L15.168 4.43062C15.168 4.43062 15.1676 4.4305 15.1667 4.4303C15.1663 4.4302 15.1658 4.43008 15.1653 4.42995ZM4.32444 4.35686C6.91762 4.19575 11.7483 4.19575 14.3415 4.35686L14.3422 4.3644C14.4047 4.99716 14.4299 5.84143 14.4299 7.01915C14.4299 8.18238 14.4053 9.02689 14.3441 9.66498C11.6962 9.77026 6.97129 9.77027 4.32282 9.66502C4.261 9.03324 4.23602 8.19137 4.23602 7.01915C4.23602 5.84143 4.26123 4.99716 4.32369 4.3644L4.32444 4.35686ZM15.2422 9.61106C15.2422 9.61109 15.2405 9.61148 15.237 9.61215L15.2422 9.61106ZM3.49794 9.60768L3.50063 9.60836C3.49881 9.60793 3.49792 9.60769 3.49794 9.60768ZM0 7.01915C0 11.8412 0.388873 13.63 3.42208 13.8633C6.22196 14.0189 12.4439 14.0189 15.2438 13.8633C18.277 13.7078 18.6659 11.8412 18.6659 7.01915C18.6659 2.19713 18.277 0.408316 15.2438 0.174993C12.4439 -0.0583309 6.22196 -0.0583309 3.42208 0.174993C0.388873 0.408316 0 2.19713 0 7.01915ZM3.49794 4.43062C3.49792 4.43061 3.49884 4.43037 3.50073 4.42992L3.49794 4.43062ZM9.78228 8.73886C8.50388 9.37806 6.99973 8.44845 6.99973 7.01915C6.99973 5.58986 8.50388 4.66025 9.78228 5.29945C11.1994 6.008 11.1994 8.0303 9.78228 8.73886Z" fill="#46A358" fillOpacity="0.6" fillRule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
            <h3>We accept</h3>
          </li>
        </ul>
      </section>
      <p>© 2021 GreenShop. All Rights Reserved.</p>
    </footer>
  )
}
