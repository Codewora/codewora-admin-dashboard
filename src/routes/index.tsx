import {
  AnalyticsSharp,
  DashboardCustomizeSharp,
  MarkChatUnreadSharp,
  GroupSharp,
  ArticleSharp,
  SettingsRounded,
  SecurityRounded,
  PersonSearchSharp,
  ChatSharp,
  DuoSharp,
  Groups2Sharp,
  AccountCircleSharp
} from '@mui/icons-material';

export const menu = [
  {
    title: "Dashboard",
    items: [],
    icon: <DashboardCustomizeSharp />
  },
  {
    title: "Message",
    icon: <MarkChatUnreadSharp />,
    items: [
      {
        title: "Group",
        icon: <Groups2Sharp />,
        items: [
          {
            title: "Message",
            icon: <ChatSharp />,
          },
          {
            title: "Video",
            icon: <DuoSharp />,
          },
        ]
      },
      {
        title: "Individual",
        icon: <AccountCircleSharp />,
      },
    ]
  },
  {
    title: "Users",
    icon: <GroupSharp />,
  },
  {
    title: "Analysis",
    icon: <AnalyticsSharp />,
    items: [
      {
        title: "Security",
        icon: <SecurityRounded />,
      },
      {
        title: "Fraud Users",
        icon: <PersonSearchSharp />,
      },
    ]
  },
  {
    title: "Report",
    icon: <ArticleSharp />
  },
  {
    title: "Setting",
    icon: <SettingsRounded />
  }
];
