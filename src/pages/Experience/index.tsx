import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
  //@ts-ignore
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Cloud } from "@styled-icons/boxicons-regular/Cloud";
import { Cash } from "@styled-icons/bootstrap/Cash";
import { Web } from "@styled-icons/foundation/Web";
import { DrinkBeer } from "@styled-icons/fluentui-system-filled/DrinkBeer";

import { CheckmarkDoneCircle } from "@styled-icons/ionicons-sharp/CheckmarkDoneCircle";
export const ExperiencePage = () => {
  return (
    <PerfectScrollbar style={{ height: "88vh" }}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Nov 2017 - Nov 2018"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Web />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Redcatus</h4>

          <h5 className="vertical-timeline-element-subtitle">
            Queenswood Pretoria, ZA
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2018 - Jul 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Cash />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">InfoSlips</h4>
          <h5 className="vertical-timeline-element-subtitle">
            Centurion Pretoria, ZA
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          date="Jul 2020 - Nov 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Cloud />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Silicon Overdrive
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            WoodStock Cape Town, ZA
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2020 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<DrinkBeer />}
        >
          <h3 className="vertical-timeline-element-title">
            Lead Engineer (UI)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Gap Draught</h4>
          <h5 className="vertical-timeline-element-subtitle">
            Sandton Pretoria, ZA
          </h5>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<CheckmarkDoneCircle />}
        />
      </VerticalTimeline>
    </PerfectScrollbar>
  );
};
