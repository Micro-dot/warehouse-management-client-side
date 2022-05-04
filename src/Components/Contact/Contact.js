import React from 'react';
import { Accordion } from 'react-bootstrap';
const Contact = () => {
    return (
        <div>
            <h2 className=''>Contact US</h2>
            <div className='d-lg-flex container'>
                <div className=' d-lg-flex align-items-center w-100'>
                    <div>
                        <Accordion.Item className='p-2' >
                            <b>Phone Number:  317-357-4113</b>
                        </Accordion.Item>
                        <Accordion.Item className='p-2'>
                            <b>Head Office: (775) 575-6511, 1209 49th Hwy ,Angels Camp, California(CA), 95222</b>
                        </Accordion.Item>
                        <Accordion.Item className='p-2'>
                            <b>Email: storykeeper@bookshop.org</b>
                        </Accordion.Item>
                    </div>
                </div>
                <div className='mx-auto'>
                    <img className='w-75' src={"https://cdn3.iconfinder.com/data/icons/customer-support-set-1/100/a-04-512.png"} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;