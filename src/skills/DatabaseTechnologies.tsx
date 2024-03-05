import React from "react";
import { Svg, SvgContainer } from "./SvgContainer";

function DatabaseTechnologies() {
  return (
    <SvgContainer>
      <Svg src="/img/tech-svg/mysql.svg" />
      <Svg src="/img/tech-svg/postgresql.svg" />
      <Svg src="/img/tech-svg/oracle.svg" />
      <Svg src="/img/tech-svg/mongodb.svg" />
      <Svg src="/img/tech-svg/elasticsearch.svg" />
    </SvgContainer>
  );
}

export default DatabaseTechnologies;
