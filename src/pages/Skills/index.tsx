import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Line, Circle } from "rc-progress";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Config } from "./Config";
import { DetailsWrapper, OverViewWrapper, Tab, Wrapper } from "./styles";

const data = [
  {
    name: "Front-End",
    uv: 100,
  },
  {
    name: "Back-End",
    uv: 75,
  },
  {
    name: "Dev-Ops",
    uv: 60,
  },
  {
    name: "Architecture",
    uv: 65,
  },
];

const CustomizedLabel: React.FC<any> = ({
  x,
  y,
  fill,
  name,
  barWidth,
  ...rest
}) => {
  console.log(rest);
  return (
    <text x={x} y={y} fill="white" dy={-6} textAnchor="middle">
      {name}
    </text>
  );
};

export const SkillsPage = () => {
  const [tab, setTab] = useState(0);
  return (
    <Wrapper>
      <OverViewWrapper>
        <div>
          <div>
            <div style={{ color: "white", fontSize: "1.3em" }}>Front End</div>
            <div>
              <Circle
                percent={100}
                gapPosition="bottom"
                strokeWidth={15}
                trailWidth={6}
                strokeLinecap="round"
                strokeColor="gold"
                style={{
                  height: "24vh",
                  marginTop: "2.5vh",
                  marginBottom: "4vh",
                }}
              />
            </div>
          </div>
          <div>
            <div style={{ color: "white", fontSize: "1.3em" }}>Back End</div>
            <div>
              <Circle
                percent={75}
                gapPosition="bottom"
                strokeWidth={15}
                trailWidth={6}
                strokeLinecap="round"
                strokeColor="gold"
                style={{
                  height: "24vh",
                  marginTop: "2.5vh",
                  marginBottom: "4vh",
                }}
              />
            </div>
          </div>
          <div>
            <div style={{ color: "white", fontSize: "1.3em" }}>Dev Ops</div>
            <div>
              <Circle
                percent={60}
                gapPosition="bottom"
                strokeWidth={15}
                trailWidth={6}
                strokeLinecap="round"
                strokeColor="gold"
                style={{
                  height: "24vh",
                  marginTop: "2.5vh",
                  marginBottom: "4vh",
                }}
              />
            </div>
          </div>
          <div>
            <div style={{ color: "white", fontSize: "1.3em" }}>
              Architecture
            </div>
            <div>
              <Circle
                percent={65}
                gapPosition="bottom"
                strokeWidth={15}
                trailWidth={6}
                strokeLinecap="round"
                strokeColor="gold"
                style={{
                  height: "24vh",
                  marginTop: "2.5vh",
                  marginBottom: "4vh",
                }}
              />
            </div>
          </div>
        </div>

        {/* <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            style={{ paddingTop: "2vh" }}
            margin={{
              top: 30,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="name"
              color="white"
              stroke="#fff"
              className="xaxis"
            />
            <Tooltip />
            <Bar dataKey="uv" fill="gold" />
          </BarChart>
        </ResponsiveContainer>
        */}
        {/* <div
          style={{
            color: "white",fontSize:'1.3em',
            padding: "2vh 12vw",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
          }}
        >
          <div style={{ textAlign: "center" }}>Front-End</div>
          <div style={{ textAlign: "center" }}>Back-End</div>
          <div style={{ textAlign: "center" }}>Dev-Ops</div>
          <div style={{ textAlign: "center" }}>Architecture</div>
        </div> */}
      </OverViewWrapper>
      <DetailsWrapper>
        <div>
          <Tab
            active={tab === 0 ? true : false}
            onClick={(e) => setTab(0)}
            isLeft={true}
          >
            Front-End
          </Tab>
          <Tab active={tab === 1 ? true : false} onClick={(e) => setTab(1)}>
            Back-End
          </Tab>
          <Tab
            active={tab === 2 ? true : false}
            onClick={(e) => setTab(2)}
            isRight={true}
          >
            Dev Ops
          </Tab>
        </div>
        <div>
          {tab === 0 && (
            <PerfectScrollbar className="scrollbarwrapper">
              <div className="itemWrapper">
                {Config.FE.map((x) => (
                  <div>
                    <ul className="itemUl">
                      <li>{x}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </PerfectScrollbar>
          )}
          {tab === 1 && (
            <PerfectScrollbar className="scrollbarwrapper">
              <div className="itemWrapper">
                {Config.BE.map((x) => (
                  <div>
                    <ul className="itemUl">
                      <li>{x}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </PerfectScrollbar>
          )}
          {tab === 2 && (
            <PerfectScrollbar className="scrollbarwrapper">
              <div className="itemWrapper">
                {Config.DO.map((x) => (
                  <div>
                    <ul className="itemUl">
                      <li>{x}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </PerfectScrollbar>
          )}
        </div>
      </DetailsWrapper>
      <h3
        style={{
          color: "black",
          textAlign: "center",
          background: "white",
          padding: "2.5vh 0",
          margin: "0px",
        }}
        className="mobileHeading"
      >
        Front End:
      </h3>
      <div className="mobile">
        <div>
          {Config.FE.map((x) => (
            <div>
              <ul>
                <li>{x}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <h3
        style={{
          color: "black",
          textAlign: "center",
          background: "white",
          padding: "2.5vh 0",
          margin: "0px",
        }}
        className="mobileHeading"
      >
        {" "}
        Back End:
      </h3>
      <div className="mobile">
        <div>
          {Config.BE.map((x) => (
            <div>
              <ul>
                <li>{x}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <h3
        style={{
          color: "black",
          textAlign: "center",
          background: "white",
          padding: "2.5vh 0",
          margin: "0px",
        }}
        className="mobileHeading"
      >
        Dev Ops:
      </h3>
      <div className="mobile">
        <div>
          {Config.DO.map((x) => (
            <div>
              <ul>
                <li>{x}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
