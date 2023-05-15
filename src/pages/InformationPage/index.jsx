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
    document.title = "Information - Daliy Fraud Fight"
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
        data: fraudList.map((item) => item.ageGroup),
        axisLabel: {
          interval: 0, // show all ageGroup
          rotate: 30, // rotate by 30 degrees
        },
      },
      yAxis: {},
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
      title: "reportType",
      dataIndex: "reportType",
      key: "reportType",
    },
    {
      title: "organization",
      dataIndex: "organization",
      key: "organization",
    },
    {
      title: "organizationType",
      dataIndex: "organizationType",
      key: "organizationType",
    },
    {
      title: "scamType",
      dataIndex: "scamType",
      key: "scamType",
    },
    {
      title: "detail",
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
        <span class="text-xl	 ml-1 text-sm font-medium text-purple md:ml-2 dark:text-purple">Simulation</span>
      </div>
    </li>
  </ol>
</nav>
          
            
             <div className="text-3xl text-center font-bold text-blueGray">Percentage of different fraud or Scams experienced by Age Group in 2021-2022, Australia</div>
            <div className="pt-10"style={{ height: '500px', width: '40%' }}>
              <select onChange={(e) => handleSelect(e.target.value)}>
                <option value="experiencedOnlineImpersonation">experiencedOnlineImpersonation</option>
                <option value="exposedToScam">exposedToScam</option>
                <option value="experiencedCardFraud">experiencedCardFraud</option>
                <option value="experiencedIdentityTheft">experiencedIdentityTheft</option>
              </select>
              <ReactECharts option={option} />
            </div>
          </div>

        </section>


        <section className="relative py-10">

        <div className="container mx-auto  px-4">
            <div className="items-center  flex ">

          <div className="text-3xl text-center font-bold text-blueGray " style={{ height: '500px', width: '100%' }}>

            Where to report
            <div className="py-20">
            <Table columns={columns}  dataSource={reportList} rowKey="id" />
            </div>
            </div>
          </div>
          </div>
        </section>


        
        <section className="relative py-52">


          <div className="flex flex-col mt-10	items-center py-10 h-auto" >
            <div className=" text-3xl text-center font-bold text-blueGray">Freely Avaliable online Course</div>
            <p className="mt-10 text-xl leading-relaxed ">
            Some general information to reduce being Scammed or Fraud:
<li> Be suspicious and don’t trust unexpected contact.</li>
<li> Never open attachments or click links in emails if words or images make you unsure about the sender.</li>
<li> Never share your bank details or sensitive information, and use different passwords to log in to online services.</li>
Here is a list of freely available online courses to educate yourself. You can more detailed information to minimize your risk.
              </p>

            <div className="flex pt-10 flex-col">
              {courseList.map(course => (
                <a href={course.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">{course.link}</a>
              ))}
            </div>
          </div>
        </section>



      </main>
      <Footer />


    </>
  );
};

export default InformationPage;
