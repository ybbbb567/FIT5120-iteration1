import React, { useEffect } from "react";
import { useState } from 'react';
import { Button, Input, Card, message, Modal, Col, Row, notification } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Navigationbar from "components/Navigationbar";
import { Text, Img } from "components";
import Footer from "components/Footer";
import { checkLink, vote } from "api/check";
import { CheckOutlined, CloseOutlined, SmileOutlined } from '@ant-design/icons';

const SearchPagePage = () => {


  const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$/;

  const [loading, setLoading] = useState(false);

  const [showCard, setShowCard] = useState(false);

  const [result, setResult] = useState(null);

  const [searchValue, setSearchValue] = useState('');

  const [showModal, setShowModal] = useState(false);

  const [likeClicked, setLikeClicked] = useState(false);

  const [dislikeClicked, setDislikeClicked] = useState(false);

  const [searchHistory, setSearchHistory] = useState([]);

  const [showSearchHistory, setShowSearchHistory] = useState(false);

  useEffect(() => {
    initSearchHistory();
  }, []);

  useEffect(() => {
    document.title = "URL Checker - Trustify Online"
  }, []);


  // get history from localStorage
  const getSearchHistoryFromLocalStorage = () => {
    const searchHistoryString = localStorage.getItem('searchHistory');
    if (searchHistoryString) {
      return JSON.parse(searchHistoryString);
    } else {
      return [];
    }
  };

  // store history in localStorage
  const saveSearchHistoryToLocalStorage = (history) => {
    const truncatedHistory = history.slice(-10); // 截取数组，保留最新的十条记录
    localStorage.setItem('searchHistory', JSON.stringify(history));
  };

  // save to localStorage
  const addSearchHistory = (value) => {
    if (!searchHistory.includes(value)) {
      const updatedSearchHistory = [value, ...searchHistory];
      setSearchHistory(updatedSearchHistory);
      saveSearchHistoryToLocalStorage(updatedSearchHistory);
    }
  };

  // init
  const initSearchHistory = () => {
    const searchHistoryFromLocalStorage = getSearchHistoryFromLocalStorage();
    setSearchHistory(searchHistoryFromLocalStorage);
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const handleSearchHistoryItemClick = (item) => {
    setSearchValue(item);
    setShowSearchHistory(true);
  };

  function handleLinkClick (event) {
    event.preventDefault();
    if (result.predict.category != 'benign') {
      setShowModal(true);
    } else {
      window.location.href = event.target.href;
    }
  }

  const handleOk = () => {
    window.location.href = searchValue.startsWith('http://') || searchValue.startsWith('https://') ? searchValue : `http://${searchValue}`;
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const onSearch = () => {
    let targetValue = searchValue.trim(); // 去掉两端空格
    if (targetValue.startsWith("ww.") || targetValue.startsWith("w.")) {
      message.error("Please enter a valid URL that follows naming conventions!");
      return;
    }
    if (!targetValue.startsWith("www.")) {
      targetValue = "www." + targetValue;
    }
    if (urlRegex.test(targetValue)) {
      setLoading(true)
      setShowCard(true)
      addSearchHistory(searchValue);
      checkLink(targetValue).then(res => {
        if (res.result) {
          console.log(res.result);
          setResult(res.result)
          setLoading(false)
        }
      })
    } else {
      message.error("Input a valid url string!")
    }
  }

  const updateResult = async (field) => {
    const newResult = { ...result }
    newResult[field]++
    const website = {
      id: newResult.id,
      link: newResult.link,
      likeNum: newResult.likeNum,
      dislikeNum: newResult.dislikeNum,
    }
    const res = await vote(website)
    if (res) {
      notification.open({
        message: 'Vote Success',
        placement: 'top',
        description: 'Your vote has been recorded.',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        duration: 3,
      })
    }
    setResult(newResult)
  }

  const onClickLike = () => {
    if (!likeClicked) {
      setLikeClicked(true);
      setDislikeClicked(true);
      updateResult('likeNum')
    }
  }

  const onClickDislike = () => {
    if (!dislikeClicked) {
      setLikeClicked(true);
      setDislikeClicked(true);
      updateResult('dislikeNum')
    }
  }

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  }

  const gridStyle = {
    width: '20%',
    textAlign: 'center',
  };

  return (
    <>
      <div className="navbar_color   mx-[auto] w-[100%]">
        <Navigationbar
        />
        <div className="flex flex-col md:gap-[40px] gap-[76px] justify-start mt-[21px] pr-[122px] sm:pr-[20px] md:pr-[40px] py-[122px] w-[100%]">
          <div className="font-dmsans h-[700px] md:h-[721px] mb-[221px] mr-[314px] relative md:w-[100%] w-[80%]">
            <Text
              className="font-semibold text-black_900 text-center ml-[350px] tracking-[-0.72px]"
              as="h2"
              variant="h2"
            >
              Type the link of the website you want access below
            </Text>
            <Img
              src="images/img_websitebackgro_500x500.png"
              className="absolute h-[500px] inset-y-[0] left-[0] my-[auto] object-cover w-[500px]"
              alt="websitebackgro"
            />
            <div className="absolute h-[102px] right-[0] top-[31%] md:w-[100%] w-[58%]" >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Input
                  placeholder="input search text"
                  value={searchValue}
                  onChange={handleInputChange}
                  onMouseOver={({ target }) => target.style.borderColor = "white"}
                  onMouseOut={({ target }) => target.style.borderColor = "grey"}
                  onFocus={() => setShowSearchHistory(true)}
                  onBlur={() => setShowSearchHistory(false)}
                  style={{ borderRadius: '30px', height: 40, width: 600, backgroundColor: "transparent", fontSize: "20px" }}
                />
                <Button shape="circle"
                  size='large'
                  onClick={onSearch}
                  onMouseOver={({ target }) => { target.style.borderColor = "white"; target.style.color = "black" }}
                  onMouseOut={({ target }) => { target.style.borderColor = "grey"; target.style.color = "black" }}
                  icon={<SearchOutlined />}
                />
                <button onClick={clearSearchHistory} style={{ marginLeft: '10px' }}>
                  Clean History
                </button>
                {showSearchHistory && searchHistory.length > 0 && (
                  <ul
                    className="navbar_color"
                    style={{
                      listStyle: 'none',
                      backgroundColor: 'white',
                      borderRadius: '5px',
                      position: 'absolute',
                      top: '45%',
                      width: 590,
                      left: 5,
                      right: 0,
                      padding: '10px',
                      margin: 0,
                      zIndex: 9999, // make it cover card
                    }}
                  >
                    {searchHistory.map((item) => (
                      <li
                        key={item}
                        style={{ cursor: 'pointer', padding: '5px 10px' }}
                        onMouseDown={() => handleSearchHistoryItemClick(item)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div style={{ height: 30 }}></div>



              {showCard ? (

                <div style={{
                  display: 'block', width: 700
                }}>


                  <Card
                    loading={loading}
                    centered="true"
                    title="Classification Result"
                    headStyle={{ backgroundColor: " #C84E89", fontSize: "24px" }}
                    bodyStyle={{ padding: 0, fontSize: "20px" }}
                    style={{ width: 599, backgroundColor: "transparent" }}>


                    {/* extra={<a href="#">More</a>} */}
                    <div style={{ height: 30 }}></div>
                    <div style={{ marginLeft: 30 }}>Website Address: &ensp;&ensp;&ensp;{result && (
                      <a href={result.link.startsWith('http://') || result.link.startsWith('https://') ? result.link : `http://${searchValue}`} onClick={handleLinkClick}>
                        {result.link}
                      </a>
                    )}
                    </div>
                    <div style={{ height: 30 }}></div>
                    {/* <div style={{ backgroundColor: 'orange' }}> */}
                    {result && (
                      <Card bordered={true} style={{ borderRadius: 0, width: 598, backgroundColor: ' rgb(200, 78, 137)' }}>
                        <Card.Grid hoverable={false} style={gridStyle}>Category:</Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>Benign</Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>Defacement</Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>Phishing</Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>Malware</Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>Posibility:</Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>{result ? (result.predict.prob0 * 100).toFixed(2) + '%' : ''}</Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>{result ? (result.predict.prob1 * 100).toFixed(2) + '%' : ''}</Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>{result ? (result.predict.prob2 * 100).toFixed(2) + '%' : ''}</Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>{result ? (result.predict.prob3 * 100).toFixed(2) + '%' : ''}</Card.Grid>
                      </Card>
                    )}

                    {/* </div> */}
                    <div style={{ height: 30 }}></div>
                    <div style={{ marginLeft: 30, fontWeight: 'bold', fontStyle: 'italic' }}>
                      Based on system analysis, This website is mostely likely to&nbsp;
                      {result ? result.predict.category : ''}</div>
                    <br />
                    <div style={{ marginLeft: 30 }}>
                      {result ? (
                        result.predict.category === 'benign' ? 'Benign: This refers to a website that does not contain harmful content or code.' :
                          result.predict.category === 'defacement' ? 'Defacement: This means that the site may have been altered in appearance without the owner\'s consent. This can be done for various reasons such as spreading information, defaming the website owner, or simply to demonstrate hacking skills.' :
                            result.predict.category === 'phishing' ? 'Phishing: This is when the site may be a fake site that looks similar to a legitimate site and the attacker tries to trick the user into revealing sensitive information, such as login credentials or financial data.' :
                              result.predict.category === 'malware' ? 'Malware: This refers to a website that has been injected with code that could be used to steal data, infect other computers, or perform other malicious activities without the knowledge or consent of the website owner.' :
                                ''
                      ) : ''}
                    </div>
                    <div style={{ height: 30 }}></div>
                  </Card>

                  <br />

                  <div>
                    <Card
                      centered="true"
                      title="Vote"
                      headStyle={{ backgroundColor: " #C84E89", fontSize: "24px" }}
                      bodyStyle={{ padding: 0, fontSize: "20px" }}
                      style={{ width: 599, backgroundColor: "transparent" }}
                    >
                      <div style={{ height: 30 }}></div>
                      <div style={{ marginLeft: 30 }}>Do you think the classification is accurate?</div>
                      <div style={{ height: 30 }}></div>
                      <div style={{ height: 30 }}></div>
                      <div>
                        <Row gutter={[16, 8]}>
                          <Col span={14}>
                          </Col>
                          <Col span={2}>
                            <CheckOutlined onClick={onClickLike} style={{ cursor: likeClicked ? 'not-allowed' : 'pointer' }} />
                          </Col>
                          <Col span={3} >
                            {result ? result.likeNum : ''}
                          </Col>
                          <Col span={2}>
                            <CloseOutlined onClick={onClickDislike} style={{ cursor: dislikeClicked ? 'not-allowed' : 'pointer' }} />
                          </Col>
                          <Col span={3}>
                            {result ? result.dislikeNum : ''}
                          </Col>
                        </Row>
                      </div>
                      <div style={{ height: 30 }}></div>
                    </Card>
                  </div>

                </div>


              ) : null}

              <Modal title="Notification" open={showModal} onOk={handleOk} onCancel={handleCancel}>
                <p>Are you sure you want to vist this page?</p>
              </Modal>

            </div>
          </div>
        </div>
        <Footer className="flex font-spacegrotesk items-center justify-center mt-[374px] md:px-[20px] w-[100%]" />
      </div >
    </>
  );
};

export default SearchPagePage;
