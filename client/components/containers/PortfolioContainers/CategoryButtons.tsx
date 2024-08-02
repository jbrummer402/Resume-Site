import {
  Button,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

export default function CategoryButtons(props) {
  console.log(props);
  return (
    <Tabs isFitted>
      <TabList>
        {props.categories.map((cat) => (
          <Tab>{cat}</Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel></TabPanel>
      </TabPanels>
    </Tabs>
  );
}
