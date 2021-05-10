import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
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
        <div>Overview</div>
        <ResponsiveContainer width="100%" height="100%">
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
        {/* <div
          style={{
            color: "white",
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
              <div className="header">Foundations:</div>
              <div className="itemWrapper">
                <div>
                  <ul className="itemUl">
                    <li>Html 5</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>CSS 3</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>TypeScript</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Sass</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Wordpress</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Axios / Fetch</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Jest</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Webpack</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>JQuery</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>AngularJs</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Cypress</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>AWS Amplify</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Jwt</li>
                  </ul>
                </div>
              </div>
              <div className="header">React:</div>
              <div className="itemWrapper">
                <div>
                  <ul className="itemUl">
                    <li>Redux</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Redux Saga</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Zustand</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Valtio</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Jotai</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Styled-Components</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Emotion</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Material-UI</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>React-Query</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Testing Library</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>React Hook Form</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Framer Motion</li>
                  </ul>
                </div>
              </div>
            </PerfectScrollbar>
          )}
          {tab === 1 && (
            <PerfectScrollbar className="scrollbarwrapper">
              <div className="header">Foundations:</div>
              <div className="itemWrapper">
                <div>
                  <ul className="itemUl">
                    <li>SSL</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Postgres SQL</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Jwt</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Swagger</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>SQL</li>
                  </ul>
                </div>
              </div>
              <div className="header">NodeJs:</div>
              <div className="itemWrapper">
                <div>
                  <ul className="itemUl">
                    <li>Express</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Prisma 2</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Mongoose</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Helmet</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Cors</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Winston</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Morgan</li>
                  </ul>
                </div>
              </div>
              <div className="header">C#:</div>
              <div className="itemWrapper">
                <div>
                  <ul className="itemUl">
                    <li>Entity Framework</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>.Net</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Linq</li>
                  </ul>
                </div>

                <div>
                  <ul className="itemUl">
                    <li>Nunit</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Visual Studio</li>
                  </ul>
                </div>
              </div>
              <div className="header">PHP:</div>
              <div className="itemWrapper">
                <div>
                  <ul className="itemUl">
                    <li>Laravel</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Doctrine</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Wordpress</li>
                  </ul>
                </div>
              </div>
            </PerfectScrollbar>
          )}
          {tab === 2 && (
            <PerfectScrollbar className="scrollbarwrapper">
              <div className="header">Tools:</div>
              <div className="itemWrapper">
                <div>
                  <ul className="itemUl">
                    <li>Nginx</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Pm2</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>SSH</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Bash</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Ubuntu Server</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Docker</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Bitbucket Pipelines</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>AWS S3</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Aws Cognito</li>
                  </ul>
                </div>
                <div>
                  <ul className="itemUl">
                    <li>Digital Ocean</li>
                  </ul>
                </div>
              </div>
            </PerfectScrollbar>
          )}
        </div>
      </DetailsWrapper>
    </Wrapper>
  );
};
