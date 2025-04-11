/********** ********** ********** **********/
/* @fileoverview 
/* @author Fereshteh Rohani
/* @created 2024-04-10
/* @modified 2024-04-10
/********** ********** ********** **********/

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

import { Button, Menu, Portal } from "@chakra-ui/react";

import sortOrders from "@/data/sortOrders";

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  // const sortOrders = [
  //   { value: "", lable: "Relevance" },
  //   { value: "-name", lable: "Name" },
  //   { value: "-metacritic", lable: "Popularity" },
  //   { value: "-added", lable: "Date added" },
  //   { value: "-released", lable: "Release date" },
  //   { value: "-rating", lable: "Average rating" },
  // ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by {currentSortOrder?.lable || "Relevance"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                key={order.value}
                value={order.value}
                onClick={() => onSelectSortOrder(order.value)}
              >
                {order.lable}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
