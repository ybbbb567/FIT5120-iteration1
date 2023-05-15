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
          <div className="flex flex-col mt-10	pt-10 items-center	" style={{ height: '500px', width: '100%' }}>
            <div className="text-3xl text-center font-bold text-blueGray">Visulization</div>
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


        <section className="relative py-20">

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


        
        <section className="  header relative  items-center flex h-full max-h-960-px">


          <div className="flex flex-col mt-10	items-center" style={{ height: '500px', width: '100%' }}>
            <div className=" text-3xl text-center font-bold text-blueGray">Freely Avaliable online Course</div>
            <div className="flex pt-20 flex-col">
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
