import React from 'react'
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';
import './Journey.css'

function Journey() {
  return (
    <div className='mt-5 ms-5'>
        <h2>MY JOURNEY</h2>
        <div >
            <div className='row'>
            <div className='row_md_12'>
            <div className='timeline_centered'>
            <article className="timeline_entry">
            <div className='mt-5 timeline_icon timeline_icon_5'>
            <MdWork />
            </div>
            <div className='label'>
                <h2>
                    Internship <span>August(2023)-Present</span>
                </h2>
                <p>
                    I am currently doing internship in MEARN stack in <b>
                        Luminar Technolab
                    </b>
                </p>
            </div>
            </article>
            <article className="timeline_entry">
            <div className='mt-5 timeline_icon timeline_icon_2'>
            <MdWork />
            </div>
            <div className='label'>
                <h2>
                    Experience <span>Januvary(2021)-June 2024</span>
                </h2>
                <p>
                   I worked as a Softeware Engineer in  <b>
                        DRD 
                    </b>
                </p>
            </div>
            </article>
            <article className="timeline_entry">
            <div className='mt-5 timeline_icon timeline_icon_'>
            <MdWork />
            </div>
            <div className='label'>
                <h2>
                    Experience <span>September(2018)-Februvary 2020</span>
                </h2>
                <p>
                    I worked as a Web Developer in <b>
                        Sbsol Private Limited
                    </b>
                </p>
            </div>
            </article>
            <article className="timeline_entry">
            <div className='mt-5 timeline_icon timeline_icon_5'>
            <MdSchool/>
            </div>
            <div className='label'>
                <h2>
                    Postgraduate  <span>2014-2017</span>
                </h2>
                <p>
                    I have completed  my MCA ( Master of Computer Application) in <b>Marian College Kuttikkanam
                        </b>
                    
                </p>
            </div>
            </article>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Journey