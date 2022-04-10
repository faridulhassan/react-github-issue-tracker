import React from "react";
import { Link } from "react-router-dom";

/*Styles*/
import styles from "./Header.module.css";

/*Components*/
import Container from "../Container";

const Header: React.FC = (): JSX.Element => {
  return (
    <div className={styles["header-wrapper"]}>
      <Container>
        <header className={styles["header"]}>
          <Link to="/" className={styles["logo"]}>
            <svg
              width="112"
              height="84"
              viewBox="0 0 112 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.60569 34.0123C6.73173 37.0101 4.86032 36.4105 5.39501 30.4816C5.72919 27.0176 5.99654 23.6201 6.59806 20.2893C7.33326 15.8259 8.3358 11.3626 9.27151 6.89928C9.53885 5.30048 9.27151 4.36785 8.26897 3.90153C7.33326 3.43521 6.33072 3.83491 5.59552 5.03401C5.12767 5.83342 4.65982 6.83267 4.39247 7.69869C2.25371 13.894 0.850154 20.3559 0.181793 26.8843C-0.0855521 29.7488 -0.152388 32.6134 0.649645 35.4113C1.78586 39.7414 5.12767 41.4068 8.73682 39.4083C10.2072 38.5423 11.6776 37.4098 12.747 36.0774C14.9526 33.6792 16.824 31.0146 18.8959 28.4831C19.2301 27.9502 19.6311 27.5505 19.9653 27.0176C20.099 28.0834 19.8985 28.8828 19.6979 29.6822C18.4281 34.2788 12.8472 58.5856 11.711 63.2487C11.31 64.9142 11.1763 66.7794 11.1095 68.5781C11.0427 69.977 11.8447 71.0429 12.9809 71.1761C14.184 71.376 15.1865 70.4434 15.5207 68.9778C15.788 67.7787 15.9885 66.513 16.3227 65.3805C19.7314 51.4576 28.0525 18.0909 32.5973 4.63432C32.8647 3.96815 33.132 3.16875 33.2657 2.43596C33.4662 1.43671 33.132 0.570693 32.1295 0.170989C31.3943 -0.22871 30.6591 0.104373 30.1912 0.83716C29.7234 1.37009 29.5229 2.03626 29.1218 2.56919C23.6413 12.2952 17.5592 25.4854 9.60569 34.0123Z"
                fill="#FFF9F2"
              />
              <path
                d="M44.7625 30.4816C44.6957 29.7488 44.6289 29.1493 44.6289 28.683C44.4952 26.7511 43.8937 25.0857 42.6238 23.7533C40.9529 22.0213 38.9478 22.2211 37.4106 24.0198C37.0096 24.4861 36.5417 24.9524 36.007 25.2189C33.1999 26.5512 31.8632 29.0161 31.1948 32.2137C30.2591 36.8768 33.3336 40.4075 37.5442 39.3417C39.8167 38.8753 41.8217 37.4764 43.1585 35.2114C43.76 34.1455 44.3615 33.8125 45.3641 33.8125C46.7676 33.7458 48.1043 33.4128 49.4411 33.0797C50.1763 32.8798 50.7778 32.4801 51.3125 32.0138C51.6467 31.7473 51.8472 30.9479 51.6467 30.6815C51.4462 30.1485 50.9783 29.7488 50.4436 29.6156C50.1094 29.549 49.6416 29.8155 49.1737 29.9487C47.7702 30.415 46.4334 30.7481 44.7625 30.4816ZM36.7422 29.6156C37.4106 31.9472 38.7473 32.5467 40.2845 33.2129C39.4825 34.6785 38.3463 35.278 36.8759 35.4779C35.6728 35.6111 35.1381 34.9449 35.2718 33.546C35.4055 32.147 35.7397 30.8813 36.7422 29.6156ZM40.084 26.3514C41.2202 27.284 41.2202 27.284 41.4207 29.1493C39.8835 28.683 39.7498 28.4165 40.084 26.3514Z"
                fill="#FFF9F2"
              />
              <path
                d="M64.1774 32.147C64.0437 36.7436 65.1799 39.3417 67.586 39.5415C70.3932 39.7414 73.4676 35.5445 76.3416 31.9472C78.2798 29.8155 76.3416 28.15 74.3365 30.4816C72.9329 32.147 71.5962 33.7458 70.059 35.278C66.784 38.5423 69.1901 29.0827 69.0564 27.6837C68.9228 26.2848 66.1156 25.8851 65.0463 26.8843C64.6452 27.284 64.3111 27.817 63.9769 28.2833C62.2391 30.4816 57.6943 36.3439 56.8923 35.278C56.9591 33.8791 57.828 30.6815 58.63 29.6822C60.2341 27.7503 56.7586 25.7518 55.1545 27.6837C53.751 29.3491 51.4785 36.4105 54.553 38.2758C55.355 38.7421 56.4244 38.8087 57.6275 38.2758C59.4989 37.543 60.9024 36.2107 62.1723 34.6785C62.7738 34.0789 63.3085 33.2795 64.1774 32.147Z"
                fill="#FFF9F2"
              />
              <path
                d="M84.2569 27.9502C84.4574 26.418 84.658 25.2855 84.7248 24.153C84.8585 22.9539 84.3238 22.3544 83.3881 22.2211C82.5192 22.1545 81.5167 22.6208 80.982 23.5535C78.7764 27.5505 78.3754 36.4105 78.7095 38.8087C78.8432 40.1411 79.8458 40.8072 80.982 40.5408C82.2519 40.2743 83.0539 39.0752 83.0539 37.7429C83.0539 34.0123 85.3263 30.4816 88.0666 27.6837C88.5345 27.1508 89.2028 26.6178 89.7375 26.2848C90.6732 25.7518 91.2079 25.9517 91.3416 26.8177C91.4084 27.1508 91.3416 27.5505 91.2747 27.8836C91.2079 28.5497 91.4752 29.0161 92.0768 29.0827C92.9456 29.1493 93.4803 28.683 93.6808 28.0168C94.2155 26.4846 94.1487 25.2189 93.213 24.153C92.1436 23.0872 90.8737 22.8873 89.3365 23.6867C88.2003 24.2863 87.1977 25.2855 86.1284 26.1515C85.5937 26.5512 85.1258 27.0842 84.2569 27.9502Z"
                fill="#FFF9F2"
              />
              <path
                d="M104.312 29.8155C100.904 26.5512 104.312 23.7533 106.652 26.0849C107.186 26.6179 107.654 26.9509 108.389 26.418C109.125 26.0183 109.125 25.2855 108.991 24.5527C108.657 23.1538 107.521 22.2878 105.85 22.3544C101.973 22.4876 96.9605 27.2174 100.369 31.1478C101.171 32.0804 102.241 32.8132 103.109 33.6126C103.845 34.2788 104.647 34.8783 104.981 36.0774C104.379 36.4771 103.845 36.8768 103.377 37.2765C100.169 39.8746 98.2304 43.272 97.6289 47.1358C97.2947 49.9337 98.8319 52.3319 101.439 52.9315C103.51 53.4644 105.516 53.1313 107.387 51.799C110.996 49.2009 111.731 44.2713 110.996 39.9412C110.328 35.9442 108.189 32.68 104.312 29.8155ZM105.449 38.3424C106.384 40.8738 106.919 45.0707 104.847 47.4023C103.577 48.9345 101.84 49.0011 102.04 45.7369C102.241 43.0722 104.112 39.5415 105.449 38.3424Z"
                fill="#FFF9F2"
              />
              <path
                d="M14.6118 79.9154C14.3426 81.7677 12.6595 83.9999 10.9046 83.9999C9.14961 83.9999 6.26709 81.7898 6.26709 79.9154C6.26709 78.0409 8.88481 75.6729 10.6398 75.6729C10.9989 75.6729 11.3539 76.2494 11.6555 76.9626C12.1748 78.1901 14.8016 78.6099 14.6118 79.9154Z"
                fill="#FFF9F2"
              />
            </svg>
          </Link>
        </header>
      </Container>
    </div>
  );
};
export default Header;
