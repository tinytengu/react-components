import { subDays } from "date-fns";
import { type ActivityItem } from "@/components/ActivityFeed";

export const activityItems = [
  {
    id: "1",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci hic error eveniet facere corrupti. Iure hic ex, deleniti soluta ipsum error quas sapiente dolor ipsa repudiandae in quaerat non asperiores?",
    date: new Date(),
  },
  {
    id: "2",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci hic error eveniet facere corrupti. Iure hic ex, deleniti soluta ipsum error quas sapiente dolor ipsa repudiandae in quaerat non asperiores?",
    date: subDays(new Date(), 1),
  },
  {
    id: "3",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci hic error eveniet facere corrupti. Iure hic ex, deleniti soluta ipsum error quas sapiente dolor ipsa repudiandae in quaerat non asperiores?",
    date: subDays(new Date(), 3),
  },
  {
    id: "4",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci hic error eveniet facere corrupti. Iure hic ex, deleniti soluta ipsum error quas sapiente dolor ipsa repudiandae in quaerat non asperiores?",
    date: subDays(new Date(), 14),
  },
] as ActivityItem[];
