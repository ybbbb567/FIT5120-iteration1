import { Button, Img } from "components";
import Footer from "components/Footer";
import Navigationbar from "components/Navigationbar";
import React, { useState, useEffect } from "react";
import { getCourse, getFraudData, getReportHotline } from "api/info";
import ReactECharts from 'echarts-for-react';
import { Table } from 'antd';




const InformationPage = () => {

  const [courseList, setCourseList] = useState([]);

  const [fraudList, setFraudList] = useState([]);

  const [reportList, setReportList] = useState([]);

  const [option, setOption] = useState({});

  const handleSelect = (value) => {
    const seriesName = value;

    const newOption = {
      ...option,
      series: [
        {
          name: seriesName,
          type: 'bar',
          data: fraudList.map((item) => item[seriesName]),
        },
      ],
    };
    setOption(newOption);
  };

  useEffect(() => {
    document.title = "Information - Daily Fraud Fight"
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const resultList = await getCourse().then((res) => res.result);
      if (resultList) {
        setCourseList(resultList);
        console.log(resultList);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const resultList = await getFraudData().then((res) => res.result);
      if (resultList) {
        setFraudList(resultList);
        console.log(resultList);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const resultList = await getReportHotline().then((res) => res.result);
      if (resultList) {
        setReportList(resultList);
        console.log(resultList);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setOption({
      tooltip: {},
      xAxis: {
        name: 'Age',
        data: fraudList.map((item) => item.ageGroup),
        axisLabel: {
          interval: 0, // show all ageGroup
          rotate: 30, // rotate by 30 degrees
        },
      },
      yAxis: {
        name: 'Percentage'
      },
      series: [
        {
          name: 'experiencedOnlineImpersonation',
          type: 'bar',
          data: fraudList.map((item) => item.experiencedOnlineImpersonation),
        },
      ],
    });
  }, [fraudList])

  const columns = [
    // {
    //   title: "ID",
    //   dataIndex: "id",
    //   key: "id",
    // },
    {
      title: "Report Type",
      dataIndex: "reportType",
      key: "reportType",
    },
    {
      title: "Organization",
      dataIndex: "organization",
      key: "organization",
    },
    {
      title: "Organization Type",
      dataIndex: "organizationType",
      key: "organizationType",
    },
    {
      title: "Scam Type",
      dataIndex: "scamType",
      key: "scamType",
    },
    {
      title: "Detail",
      dataIndex: "detail",
      key: "detail",
    },
  ];



  return (
    <>
      <Navigationbar fixed />
      <main className="navbar_color">


        <section className="top-14 pb-20 relative block bg-blueGray-800">


          <div className="justify-around container mx-auto px-4 pt-32  h-full">

            <nav class="flex pt-10 py-10" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                  <a href="#" class="inline-flex text-xl items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <svg aria-hidden="true" class="w- 4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    Home
                  </a>
                </li>
                <li aria-current="page">
                  <div class="flex items-center">
                    <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <span class="text-xl	 ml-1 text-sm font-medium text-purple md:ml-2 dark:text-purple">Information</span>
                  </div>
                </li>
              </ol>
            </nav>


            <div className="text-3xl text-center font-bold text-blueGray">Percentage of different Frauds or Scams experienced by Age Group in 2021-2022, Australia</div>
            <div className="pt-10 mx-auto" style={{ height: '500px', width: '40%' }}>
              <select onChange={(e) => handleSelect(e.target.value)}>
                <option value="experiencedOnlineImpersonation">Online Impersonation</option>
                <option value="exposedToScam">Easily Scammed</option>
                <option value="experiencedCardFraud">Card Fraud</option>
                <option value="experiencedIdentityTheft">Identity Theft</option>
              </select>
              <ReactECharts option={option} />
            </div>
          </div>

        </section>


        <section className="relative py-10">

          <div className="container mx-auto  px-4">
            <div className="items-center  flex ">

              <div className="text-3xl text-center font-bold text-blueGray " style={{ height: '500px', width: '100%' }}>

                Scam Report Channels
                <div className="py-10">
                  <Table columns={columns} dataSource={reportList} rowKey="id" size="small" />
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="  pb-96 header relative  items-center flex h-full ">





          <div className="flex flex-col mt-10	items-center" style={{ height: '500px', width: '100%' }}>
            <div className=" text-3xl text-center font-bold text-blueGray">Freely Avaliable Online Course</div>
            <p className="mt-10 text-xl leading-relaxed ">
              Some general information to reduce being Scammed or Fraud:
              <li> Be suspicious and <span className="text-xl text-blueGray font-bold"><em>DON’T</em></span> trust unexpected contact.</li>
              <li> <span className="text-xl text-blueGray font-bold"><em>NEVER</em></span> open attachments or click links in message or emails if you unsure senders.</li>
              <li> <span className="text-xl text-blueGray font-bold"><em>NEVER</em></span> share your bank details or sensitive information.</li>
              <li> Use different passwords to log in to online services.</li>
              Here are a list of freely available online courses to self learn. They provide more detailed and efficient information to minimize your risk.
            </p>

            <div class="p-10 justify-around grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">


              <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div
                  class="relative overflow-hidden bg-cover bg-no-repeat"

                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <img
                    class="rounded-t-lg"
                    src="images/Information_card_1.png"
                    alt="" />
                  <a href="#!">
                    <div
                      class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
                <div class="p-6">
                  <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Free Training to Learn How to Stay Scam Safe    </h5>
                  <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Working with people with living experiences of being scammed after a brain injury, this free online training program will help you learn how to stay safe from scams.
                  </p>
                  <Button className="btn cta bg text-xs	" onClick={() => window.location.href = "https://www.monash.edu/cyberability/free-training"}>
                    <div style={{ display: 'inline-flex' }}>
                      More information
                      <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </Button>

                </div>
              </div>

              <div
                class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div
                  class="relative overflow-hidden bg-cover bg-no-repeat"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <img
                    class="rounded-t-lg"
                    src="images/Information_card_2.png"
                    alt="" />
                  <a href="#!">
                    <div
                      class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
                <div class="p-6">
                  <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Be Connected Every Australian Online    </h5>
                  <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Teach you to browse websites safely, avoid scams, protect sensitive information,
                    and secure online shopping and payment methods.
                  </p>
                  <Button className="btn cta bg text-xs	" onClick={() => window.location.href = "https://www.monash.edu/cyberability/free-training"}>
                    <div style={{ display: 'inline-flex' }}>
                      More information
                      <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </Button>

                </div>
              </div>

              <div
                class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div
                  class="relative overflow-hidden bg-cover bg-no-repeat"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <img
                    class="rounded-t-lg"
                    src="images/Information_card_3.png"
                    alt="" />
                  <a href="#!">
                    <div
                      class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
                <div class="p-6">
                  <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Learn the basics to protect yourself    </h5>
                  <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    It’s easy to improve your cyber security!
                    Take and learn these steps today to protect yourself.    </p>

                  <Button className="btn cta bg text-xs	" onClick={() => window.location.href = "https://www.monash.edu/cyberability/free-training"}>
                    <div style={{ display: 'inline-flex' }}>
                      More information
                      <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </Button>

                </div>
              </div>


            </div>
          </div>
        </section>



      </main>
      <Footer fixed />


    </>
  );
};

export default InformationPage;
