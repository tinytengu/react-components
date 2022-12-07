import { FC } from "react";
import { formatDistance } from "date-fns";
import classNames from "classnames";

export interface ActivityItem {
  /**
   * Unique activity ID
   */
  id: string;

  /**
   * Activity text
   */
  text: string;

  /**
   * Activity date
   */
  date: Date;
}

export type ActivityItemSide = "left" | "right" | "alternate";

interface ActivityListItem extends ActivityItem {
  /**
   * Activity list item text side
   */
  side?: ActivityItemSide;

  /**
   * Is feed node connected to anoter nodes
   */
  isConnected?: boolean;
}

export interface Props {
  /**
   * Feed items
   */
  items: ActivityItem[];

  /**
   * Feed items side
   */
  itemsSide?: ActivityItemSide;

  className?: string;
}

const ActivityFeedItem: FC<ActivityListItem> = ({
  text,
  date,
  side = "left",
  isConnected = false,
}) => {
  return (
    <li
      className={classNames("grid grid-cols-[1fr,.4fr,1fr] grid-rows-[auto]")}
      style={{
        direction: side == "left" ? "ltr" : "rtl",
      }}
    >
      {/* Text */}
      <p
        className={`mb-16 text-neutral-800 ${
          side == "left" ? "text-right" : "text-left"
        }`}
      >
        {text}
      </p>
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div
          className={classNames("w-5 h-5 bg-neutral-200 rounded-full")}
        ></div>
        <div
          className={classNames("w-1 h-full", {
            "bg-neutral-200": isConnected,
          })}
        ></div>
      </div>
      {/* Date & Time */}
      <p
        className={`font-semibold ${
          side == "left" ? "text-left" : "text-right"
        }`}
        style={{
          direction: "ltr",
        }}
        title={date.toLocaleString()}
      >
        {formatDistance(date, new Date(), {
          addSuffix: true,
        })}
      </p>
    </li>
  );
};

const ActivityFeed: FC<Props> = ({ items, itemsSide = "left", className }) => {
  return (
    <ul className={classNames("flex flex-col", className)}>
      {items.map((item, idx) => (
        <ActivityFeedItem
          key={item.id}
          {...item}
          side={
            itemsSide == "alternate"
              ? idx % 2 == 0
                ? "left"
                : "right"
              : itemsSide
          }
          isConnected={idx !== items.length - 1}
        />
      ))}
    </ul>
  );
};

export default ActivityFeed;
