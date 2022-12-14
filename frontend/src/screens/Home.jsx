// import React from 'react';
import React, { useState, useEffect } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Zoom } from "react-reveal";

import asianele from "@assets/images/animal/main/asianele.jpeg";
import cat from "@assets/images/animal/main/cat.jpg";
import crane from "@assets/images/animal/main/crane.png";
import dolphin from "@assets/images/animal/main/dolphin.jpg";
import dugong from "@assets/images/animal/main/dugong.jpg";
import eel from "@assets/images/animal/main/eel.png";
import elk from "@assets/images/animal/main/elk.jpg";
import finless from "@assets/images/animal/main/finless.jpg";
import goat from "@assets/images/animal/main/goat.png";
import hawk from "@assets/images/animal/main/hawk.png";
import hippo from "@assets/images/animal/main/hippo.jpg";
import orangutan from "@assets/images/animal/main/orangutan.jpg";
import otter from "@assets/images/animal/main/otter.jpg";
import panda from "@assets/images/animal/main/panda.jpg";
import polarbear from "@assets/images/animal/main/polarbear.jpg";
import rabbit from "@assets/images/animal/main/rabbit.jpeg";
import redpanda from "@assets/images/animal/main/redpanda.jpg";
import rhinoceros from "@assets/images/animal/main/rhinoceros.jpg";
import shark from "@assets/images/animal/main/shark.png";
import spoonbill from "@assets/images/animal/main/spoonbill.jpg";
import tiger from "@assets/images/animal/main/tiger.png";
import turtle from "@assets/images/animal/main/turtle.jpg";
import upalupa from "@assets/images/animal/main/upalupa.jpg";
import weasel from "@assets/images/animal/main/weasel.jpg";

import { getTodayAnimal, getRankc, getRankd } from "@apis/home";

function Home() {
  const [todayAnimal, setTodayAnimal] = useState(null);

  const [rankC, setRankC] = useState([]);
  const [rankD, setRankD] = useState([]);

  useEffect(() => {
    getTodayAnimal().then(res => {
      setTodayAnimal(res.data);
    });
    const PARAMS = { pageSize: 10, lastIdx: 0 };
    getRankd(PARAMS).then(res2 => {
      setRankD(res2.data);
    });
    getRankc(PARAMS).then(res2 => {
      setRankC(res2.data);
    });
  }, []);

  const Route = {
    ???????????????: "/notice/1",
    ??????????????????: "/notice/2",
    ?????????: "/notice/3",
    ?????????: "/notice/4",
    ??????: "/notice/5",
    ?????????: "/notice/6",
    ????????????: "/notice/7",
    ????????????: "/notice/8",
    ??????????????????: "/notice/9",
    ?????????: "/notice/10",
    ??????: "/notice/11",
    ????????????: "/notice/12",
    ?????????????????????: "/notice/13",
    ??????????????????: "/notice/14",
    ?????????: "/notice/15",
    ????????????: "/notice/16",
    ????????????: "/notice/17",
    ?????????: "/notice/18",
    ??????????????????: "/notice/19",
    ??????: "/notice/20",
    ???: "/notice/21",
    ?????????: "/notice/22",
    ??????: "/notice/23",
    ?????????: "/notice/24"
  };

  const images = {
    ???????????????: rhinoceros,
    ??????????????????: dolphin,
    ?????????: spoonbill,
    ?????????: elk,
    ??????: hippo,
    ?????????: eel,
    ????????????: redpanda,
    ????????????: upalupa,
    ??????????????????: panda,
    ?????????: polarbear,
    ??????: otter,
    ????????????: turtle,
    ?????????????????????: cat,
    ??????????????????: asianele,
    ?????????: rabbit,
    ????????????: shark,
    ????????????: orangutan,
    ?????????: finless,
    ??????????????????: weasel,
    ??????: dugong,
    ???: hawk,
    ?????????: crane,
    ??????: goat,
    ?????????: tiger
  };

  return (
    <>
      <div className="MainPage1 Page1">
        <div className="Page1Content">
          <h1 className="fs-32 notoBold my-3 page1FontColor">Enimal</h1>
          <h3 className="fs-24 notoMid my-3 page1FontColor">
            ?????????????????? NFT????????? ???????????????
          </h3>
          <h3 className="fs-24 notoMid my-3 page1FontColor">
            ????????? ?????? ???????????? ????????? ???????????????.
          </h3>
          <h3 className="fs-24 notoMid my-3 page1FontColor">
            ????????? SSF????????? ????????????????????? ??????????????? ????????? ?????????.
          </h3>
          <Link to="/intro" className="Button3 fs-16 notoBold">
            ????????? ?????? ??????
          </Link>
        </div>
      </div>

      <Fade bottom>
        <div className="MainPage2">
          <div className="container flex">
            <div className="animal flex">
              {todayAnimal ? (
                <>
                  <div className="animal_pic">
                    <img
                      className="todayImg"
                      src={images[todayAnimal.animal]}
                      alt="????????? ??????"
                    />
                  </div>
                  <div className="animal_explain">
                    <div className="animal_explain_title notoBold fs-40 flex justify-center">
                      ????????? ??????
                    </div>
                    <div className="animal_explain_name flex justify-center notoBold fs-32">
                      {todayAnimal.animal}
                    </div>
                    <div className="animal_explain_content notoMid fs-28">
                      {todayAnimal.content}
                    </div>
                    <Link
                      to={Route[todayAnimal.animal]}
                      type="button"
                      className="animal_explain_noti notoBold fs-24 flex justify-center align-center"
                    >
                      ?????? ????????????
                    </Link>
                  </div>
                </>
              ) : (
                1
              )}
            </div>
          </div>
        </div>
      </Fade>

      <div className="MainPage3">
        <div className="container">
          <h1 className="fs-32 notoBold text-center my-5 page2FontColor">
            ??????????????? ????????? ?????????
          </h1>
          <div className="flex justify-center grid">
            <div className="col-5 rankingBox">
              <h1 className="fs-28 notoBold text-center my-4 page2FontColor">
                ????????? ??????
              </h1>
              <li className="RankList grid">
                <span className="col-3 text-center notoBold text-center">??????</span>
                <span className="col-4 notoBold text-center">?????????</span>
                <span className="col-3 textEnd notoBold text-center">?????? ??????</span>
                <span className="col-3 textEnd notoBold text-center">????????? NFT</span>
              </li>
              <hr className="Line2" />
              <div className="collectionRank">
                {rankC.map(user => {
                  return (
                    <Zoom left>
                      <Link to={`/mypage/${user.nickname}`} key={rankC.indexOf(user)} className="RankList grid">
                        <span className="col-3 text-center notoMid text-center">
                          {rankC.indexOf(user) + 1}
                        </span>
                        <span className="col-4 notoBold text-center">{user.nickname}</span>
                        <span className="col-3 notoBold text-center">{user.drawCount}???</span>
                        <span className="col-3 textEnd notoMid text-center">
                          {user.collectionCount}???
                        </span>
                      </Link>
                    </Zoom>
                  );
                })}
              </div>
            </div>
            <div className="col-5 rankingBox">
              <h1 className="fs-28 notoBold text-center my-4 page2FontColor">
                ????????? ??????
              </h1>
              <li className="RankList grid">
                <span className="col-3 text-center notoBold text-center">??????</span>
                <span className="col-5 notoBold text-center">?????????</span>
                <span className="col-4 textEnd notoBold text-center">?????????</span>
              </li>
              <hr className="Line2" />
              <div className="donationRank">
                {rankD.map(user => {
                  const dona = user.doantion.toLocaleString("ko-KR");
                  return (
                    <Zoom left>
                      <Link to={`/mypage/${user.nickname}`} key={user.rank} className="RankList grid">
                        <span className="col-3 text-center notoMid text-center">
                          {rankD.indexOf(user) + 1}
                        </span>
                        <span className="col-5 notoBold text-center">{user.nickname}</span>
                        <span className="col-4 textEnd notoMid text-center">
                          {dona} SAVE
                        </span>
                      </Link>
                    </Zoom>
                  );
                })}
              </div>
            </div>
          </div>
          <Link to="/rank" className="Button2 fs-24 notoMid">
            ?????? ?????????
          </Link>
        </div>
      </div>
    </>
  );
}
export default Home;
