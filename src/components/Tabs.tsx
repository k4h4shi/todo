import styled from "styled-components";
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel
} from "react-tabs";
import colors from "../config/colors";

const Tabs = styled(UnstyledTabs)`
  border: 1px solid ${colors.lightgrey};
  border-radius: 5px;
  background: white;
`;

const TabList = styled(UnstyledTabList)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

const Tab = styled(UnstyledTab).attrs({
  selectedClassName: "selected",
  disabledClassName: "disabled"
})`
  flex-grow: 1;
  text-align: center;
  padding: 12px 0;
  list-style: none;
  cursor: pointer;
  color: ${colors.default};
  border-left: 1px solid ${colors.lightgrey};
  border-bottom: 1px solid ${colors.lightgrey};

  &:first-child {
    border-left: none;
  }

  &.selected {
    color: ${colors.black};
    font-weight: bold;
    border-bottom: none;
  }

  &.disabled {
    color: ${colors.lightgrey};
    cursor: not-allowed;
  }
`;

const TabPanel = styled(UnstyledTabPanel).attrs({
  selectedClassName: "selected"
})`
  display: none;
  padding: 10px 20px;
  &.selected {
    display: block;
  }
`;

export { Tab, TabList, Tabs, TabPanel };
