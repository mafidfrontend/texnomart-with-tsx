export default function Hero() {
    return (
        <div className="bg-[#333] text-white py-2">
            <div className="flex justify-between container">
                <div className="flex items-center gap-13">
                    <div>
                        <a className="flex gap-2 text-[13px]" href="#">
                            <div>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.3332 7.37384C3.3332 3.75049 6.4651 0.833328 10.3055 0.833328C14.1459 0.833328 17.2778 3.75049 17.2778 7.37384C17.2778 9.674 15.2505 13.4082 11.2 18.7237C10.8235 19.2176 10.1179 19.3129 9.6239 18.9365C9.54374 18.8754 9.47215 18.8038 9.41106 18.7237C5.36052 13.4082 3.3332 9.674 3.3332 7.37384ZM15.9284 7.37384C15.9284 4.51804 13.4212 2.18281 10.3055 2.18281C7.18982 2.18281 4.68268 4.51804 4.68268 7.37384C4.68268 9.2392 6.55565 12.7181 10.3055 17.6702C14.0554 12.7181 15.9284 9.2392 15.9284 7.37384Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M10.3056 10.4596C8.6908 10.4596 7.38174 9.15052 7.38174 7.53571C7.38174 5.92089 8.6908 4.61183 10.3056 4.61183C11.9204 4.61183 13.2295 5.92089 13.2295 7.53571C13.2295 9.15052 11.9204 10.4596 10.3056 10.4596ZM10.3056 9.1101C11.1751 9.1101 11.88 8.40522 11.88 7.53571C11.88 6.66619 11.1751 5.96131 10.3056 5.96131C9.4361 5.96131 8.73122 6.66619 8.73122 7.53571C8.73122 8.40522 9.4361 9.1101 10.3056 9.1101Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <p>Toshkent</p>
                        </a>
                    </div>
                    <ul className="flex items-center gap-7 text-[13px]">
                        <li>
                            <a href="#">Bizning do&apos;konlarimiz</a>
                        </li>
                        <li>
                            <a href="#">
                                <button className="bg">
                                    Yuridik shaxslar uchun
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="#">To&apos;lov usullari</a>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-12 items-center">
                    <p>
                        Aloqa markazi: <b>+99871 209 99 44</b>
                    </p>
                    <div className="dropdown">
                        <div className="flex items-center gap-2">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_5671_444723)">
                                        <path
                                            d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9977 5.87897 15.1541 3.84547 13.6543 2.34568C12.1545 0.845885 10.121 0.00229405 8 0V0ZM14.6667 8C14.6675 9.30647 14.282 10.584 13.5587 11.672L12.764 10.8767C12.7017 10.8142 12.6667 10.7296 12.6667 10.6413V10C12.6667 9.46957 12.456 8.96086 12.0809 8.58579C11.7058 8.21071 11.1971 8 10.6667 8H8.66667C8.48986 8 8.32029 7.92976 8.19527 7.80474C8.07024 7.67971 8 7.51014 8 7.33333V7C8 6.91159 8.03512 6.82681 8.09764 6.7643C8.16015 6.70179 8.24493 6.66667 8.33334 6.66667C8.77536 6.66667 9.19929 6.49107 9.51185 6.17851C9.82441 5.86595 10 5.44203 10 5V4.33333C10 4.24493 10.0351 4.16014 10.0976 4.09763C10.1601 4.03512 10.2449 4 10.3333 4H11.2527C11.6943 3.99874 12.1176 3.82339 12.4307 3.512L12.682 3.26067C13.3108 3.87938 13.8101 4.61709 14.1509 5.43078C14.4916 6.24447 14.667 7.11785 14.6667 8ZM1.366 8.642L3.47134 10.7473C3.65661 10.9338 3.87706 11.0816 4.1199 11.1822C4.36275 11.2828 4.62315 11.3342 4.886 11.3333H6.66667C6.84348 11.3333 7.01305 11.4036 7.13807 11.5286C7.2631 11.6536 7.33334 11.8232 7.33334 12V14.6327C5.80013 14.4762 4.36827 13.7941 3.28062 12.7022C2.19298 11.6103 1.51652 10.1758 1.366 8.642ZM8.66667 14.6327V12C8.66667 11.4696 8.45596 10.9609 8.08088 10.5858C7.70581 10.2107 7.1971 10 6.66667 10H4.886C4.79835 10.0001 4.71154 9.98285 4.63055 9.94933C4.54956 9.91582 4.47597 9.86666 4.414 9.80467L1.442 6.83267C1.63279 5.74813 2.08983 4.72793 2.77212 3.86359C3.45441 2.99924 4.34061 2.31781 5.3512 1.88041C6.36179 1.44301 7.46516 1.26334 8.56231 1.35752C9.65946 1.4517 10.7161 1.81678 11.6373 2.42L11.488 2.56933C11.4253 2.63122 11.3408 2.66615 11.2527 2.66667H10.3333C9.89131 2.66667 9.46739 2.84226 9.15483 3.15482C8.84227 3.46738 8.66667 3.89131 8.66667 4.33333V5C8.66667 5.08841 8.63155 5.17319 8.56904 5.2357C8.50653 5.29821 8.42174 5.33333 8.33334 5.33333C7.89131 5.33333 7.46739 5.50893 7.15483 5.82149C6.84227 6.13405 6.66667 6.55797 6.66667 7V7.33333C6.66667 7.86377 6.87738 8.37247 7.25246 8.74755C7.62753 9.12262 8.13624 9.33333 8.66667 9.33333H10.6667C10.8435 9.33333 11.0131 9.40357 11.1381 9.52859C11.2631 9.65362 11.3333 9.82319 11.3333 10V10.6413C11.3346 11.0829 11.5099 11.5062 11.8213 11.8193L12.7127 12.7107C11.627 13.8001 10.1971 14.4794 8.66667 14.6327Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5671_444723">
                                            <rect
                                                width="16"
                                                height="16"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p>O&apos;Z</p>
                        </div>
                        <div className="dropdownItem cursor-pointer">
                            <div>RU</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
