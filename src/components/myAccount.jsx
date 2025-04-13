import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Tabs, Tab } from '@mui/material';
import '../assets/css/myAccount.css';
import Skull from '../assets/images/skull.jpg'
import { LeftSvg, RightSvg, DisplayTest } from '../data/data'
export default function MyAccount() {
    const [tabIndex, setTabIndex] = useState(0);
    const [focused, setFocused] = useState(false);

    const inputRefs = {
        firstName: useRef(null),
        lastName: useRef(null),
        username: useRef(null),
        dob: useRef(null),
        email: useRef(null),
        phone: useRef(null),
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            dob: '',
            email: '',
            phone: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First Name is Required'),
            lastName: Yup.string().required('Last Name is Required'),
            username: Yup.string().required('User Name is Required'),
            dob: Yup.string().required('Date of Birth is Required'),
            email: Yup.string().email('Invalid email').required('Email is Required'),
            phone: Yup.string().matches(/^[0-9]{10}$/, 'Must be 10 digits').required('Required'),
        }),
        onSubmit: (values, { resetForm }) => {
            const formattedData = Object.entries(values)
                .map(([key, value]) => {
                    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                    return `${label} - ${value}`;
                })
                .join('\n');
            alert(formattedData);
            resetForm()
        },
    });

    const tabTitles = ['My Account', 'Wallet', 'All Transactions', 'My Affiliates'];

    const getActiveClass = (field) => {
        return focused === field || formik.values[field].trim() !== '' ? 'active' : '';
    };


    return (
        <section className="myAccount_section">
            <header>
                <Link to="/"><h1 className="head-1">In Bitsky</h1></Link>
            </header>

            <Container>
                <Row className="tabs-box">
                    <Col>
                        {/* <Tabs value={tabIndex} onChange={(e, val) => setTabIndex(val)}>
                            {tabTitles.map((title, idx) => (
                                <Tab key={idx} label={title}  />
                            ))}
                        </Tabs> */}
                        <Tabs value={tabIndex} onChange={(e, val) => setTabIndex(val)}>
                            {tabTitles.map((title, idx) => (
                                <Tab
                                    key={idx}
                                    label={title}
                                    className={tabIndex === idx ? 'custom-tab selected-tab' : 'custom-tab'}
                                />
                            ))}
                        </Tabs>
                    </Col>
                </Row>

                <Row className="form-box">
                    <div className='icon p-0 left-icon'><LeftSvg /></div>
                    <div className='icon p-0 right-icon text-end'><RightSvg /></div>
                    <div className='icon display-box text-center'> <DisplayTest /> </div>
                    <h2 className="head-2 text-center">{tabTitles[tabIndex]}</h2>


                    <Col md={5} className="animated-icon my-auto">
                        <svg
                            width="auto"
                            height="auto"
                            viewBox="0 0 320 278"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <g className='pendulum' filter="url(#filter0_d_0_1_2)">
                                <path className='pendulum_path' d="M52.6258 153.994L50.0002 269.192L60.2279 259.315L62.6232 154.222L52.6258 153.994Z" fill="white" />
                                <path className='pendulum_path' d="M63.6523 153.143L61.4388 250.499L71.6304 240.971L73.6497 153.371L63.6523 153.143Z" fill="white" />
                                <path className='pendulum_path' d="M74.713 150.501L72.9332 228.592L83.0867 218.97L84.7104 150.729L74.713 150.501Z" fill="white" />
                            </g>
                            <g className='pendulum' filter="url(#filter1_d_0_1_2)">
                                <path className='pendulum_path' d="M268.087 153.994L270.713 269.192L260.485 259.315L258.09 154.222L268.087 153.994Z" fill="white" />
                                <path className='pendulum_path' d="M257.061 153.143L259.274 250.499L249.083 240.971L247.063 153.371L257.061 153.143Z" fill="white" />
                                <path className='pendulum_path' d="M246 150.501L247.78 228.592L237.626 218.97L236.002 150.729L246 150.501Z" fill="white" />
                            </g>
                            <g filter="url(#filter2_d_0_1_2)">
                                <path
                                    d="M160 209L40 160.5V27.5L65 2H255L280 27.5V160.5L160 209Z"
                                    fill="url(#pattern0_0_1)"
                                    shapeRendering="crispEdges"
                                />
                                <path
                                    d="M160 209L40 160.5V27.5L65 2H255L280 27.5V160.5L160 209Z"
                                    stroke="#FF00EE"
                                    strokeWidth="3"
                                    shapeRendering="crispEdges"
                                />
                            </g>
                            <circle cx="160.5" cy="205.5" r="20.5" fill="#FF00EE" />
                            <path
                                d="M160 194L162.694 202.292H171.413L164.359 207.416L167.053 215.708L160 210.584L152.947 215.708L155.641 207.416L148.587 202.292H157.306L160 194Z"
                                fill="white"
                            />
                            <path d="M57.9574 2.66388L41.4419 19.4028L41.5798 2.71578L57.9574 2.66388Z" fill="white" />
                            <path d="M264 2.66388L280.515 19.4028L280.377 2.71578L264 2.66388Z" fill="white" />
                            <line x1="0.5" y1="135.026" x2="0.5" y2="95" stroke="url(#paint0_linear_0_1)" />
                            <line x1="11.4473" y1="56.0259" x2="11.4473" y2="16" stroke="url(#paint1_linear_0_1)" />
                            <path d="M0.5 96.2805V62.9256L11.448 55.1976V88.5525L0.5 96.2805Z" stroke="#FF00EE" />
                            <line
                                y1="-0.5"
                                x2="40.0258"
                                y2="-0.5"
                                transform="matrix(0 -1 -1 0 319.001 170.026)"
                                stroke="url(#paint2_linear_0_1)"
                            />
                            <line
                                y1="-0.5"
                                x2="40.0258"
                                y2="-0.5"
                                transform="matrix(0 -1 -1 0 308.054 91.0259)"
                                stroke="url(#paint3_linear_0_1)"
                            />
                            <path d="M319.501 131.281V97.9256L308.553 90.1976V123.553L319.501 131.281Z" stroke="#FF00EE" />

                            <defs>
                                <filter id="filter0_d_0_1_2" x="46.0002" y="150.501" width="42.7101" height="126.69" filterUnits="userSpaceOnUse">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="..." result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="..." />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                                </filter>
                                <filter id="filter1_d_0_1_2" x="232.003" y="150.501" width="42.7101" height="126.69" filterUnits="userSpaceOnUse">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="..." result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="..." />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                                </filter>
                                <filter id="filter2_d_0_1_2" x="34.5" y="0.5" width="251" height="218.118" filterUnits="userSpaceOnUse">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="..." result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="..." />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                                </filter>

                                <pattern id="pattern0_0_1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_0_1" transform="matrix(0.0021645 0 0 0.00250957 0 0.00203903)" />
                                </pattern>

                                <image id="image0_0_1" width="462" height="470" preserveAspectRatio="none" xlinkHref={Skull} />

                                <linearGradient id="paint0_linear_0_1" x1="1" y1="95" x2="1" y2="123.377" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="#999999" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_0_1" x1="11.9473" y1="56.0259" x2="11.9473" y2="31.2338" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="#999999" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_0_1" x1="40.0258" y1="0" x2="11.6493" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="#999999" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_0_1" x1="0" y1="0" x2="24.7921" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="#999999" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <h3 className='head-6'>
                            {formik.values.firstName || 'First'} <span>{formik.values.lastName || 'Last'}</span>
                        </h3>
                        <p className='para'>{formik.values.username || 'Username'}</p>
                    </Col>

                    <Col md={7} className="form-box-right">
                        {tabIndex === 0 && (
                            <form onSubmit={formik.handleSubmit}>
                                <Row>{['firstName', 'lastName', 'username', 'dob', 'email', 'phone'].map((field) => {
                                    const isEmpty = !formik.values[field]; // Check if value is empty

                                    return (
                                        <Col
                                            key={field}
                                            md={6}
                                            className={`input px-10 input-${field} ${getActiveClass(field)}`}
                                        >
                                            <input
                                                type={
                                                    field === 'dob'
                                                        ? 'date'
                                                        : field === 'email'
                                                            ? 'email'
                                                            : 'text'
                                                }
                                                name={field}
                                                placeholder={
                                                    field === 'dob'
                                                        ? ''
                                                        : field
                                                            .replace(/([A-Z])/g, ' $1')
                                                            .replace(/^./, (str) => str.toUpperCase())
                                                }
                                                ref={inputRefs[field]}
                                                className={isEmpty ? 'empty' : 'filled'}
                                                value={formik.values[field]}
                                                onChange={formik.handleChange}
                                                onFocus={() => setFocused(field)}
                                                onBlur={(e) => {
                                                    formik.handleBlur(e);
                                                    setFocused(false);
                                                }}
                                            />

                                            {formik.touched[field] && formik.errors[field] && (
                                                <span className="error-message">{formik.errors[field]}</span>
                                            )}

                                            <div className="circle">
                                                <div className="dot"></div>
                                            </div>
                                        </Col>
                                    );
                                })}

                                </Row>

                                <div className="btn-pink-wrapper">
                                    <div className="btn-pink-box">
                                        <button className="btn-pink" type="submit">
                                            <div className="btn-content"><span className="text">Play Now</span></div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}

                        {tabIndex === 1 && <h2 className="head-3 text-white text-center">Your Wallet Info will appear here</h2>}
                        {tabIndex === 2 && <h2 className="head-3 text-white text-center">Transaction History will be displayed</h2>}
                        {tabIndex === 3 && <h2 className="head-3 text-white text-center">Affiliate Details & Earnings here</h2>}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
