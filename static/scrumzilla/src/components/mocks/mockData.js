export const userAllocationHomePage = {
  root: {
    sprintProgress: {
      total: 9,
      unassigned: 6,
      todo: 3,
      progress: 6,
      done: 0,
      sprintStorypoint: 31,
      assigned: 3,
    },
    usersInsights: [
      {
        accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
        displayName: "Kunal",
        avatarUrl:
          "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
        storypoint: {
          sprintTotal: 8,
          remarkCompareWith: {
            userPreviousData: {
              remark: "Over Assigned",
              message: "Kunal is over assigned by 4 points.",
            },
            allUser: {
              remark: "Under Assigned",
              message: "Kunal is Under assigned by 8 points.",
            },
            sprintLimit: {
              remark: "Under Assigned",
              message: "Kunal is Under assigned by 12 points.",
            },
          },
        },
        progress: {
          total: 2,
          todo: 1,
          done: 0,
          progress: 1,
        },
      },
      {
        accountId: "6326e30c14c6b4b221099d1f",
        displayName: "Soumitro Datta",
        avatarUrl:
          "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/48",
        storypoint: {
          sprintTotal: 3,
          remarkCompareWith: {
            userPreviousData: {
              remark: "Under Assigned",
              message: "Soumitro Datta is Under assigned by 5 points.",
            },
            allUser: {
              remark: "Under Assigned",
              message: "Soumitro Datta is Under assigned by 13 points.",
            },
            sprintLimit: {
              remark: "Under Assigned",
              message: "Soumitro Datta is Under assigned by 17 points.",
            },
          },
        },
        progress: {
          total: 1,
          todo: 0,
          done: 0,
          progress: 1,
        },
      },
    ],
    unAssignedIssues: [
      {
        id: "10025",
        key: "KB-26",
        summary: "Done : T7",
        description: null,
        issuetype: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10004",
          id: "10004",
          description: "Bugs track problems or errors.",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
          name: "Bug",
          subtask: false,
          avatarId: 10303,
          entityId: "5bd2a7f9-a88a-4cbb-aee4-0623a1e2b0da",
          hierarchyLevel: 0,
        },
        project: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
          id: "10000",
          key: "KB",
          name: "soumi ka board",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
            "24x24":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
            "16x16":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
            "32x32":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
          },
        },
        priority: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
          iconUrl:
            "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        labels: ["aws"],
        status: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10001",
          description: "",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
          name: "In Progress",
          id: "10001",
          statusCategory: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress",
          },
        },
        storypoint: 1,
        reporter: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=6326e30c14c6b4b221099d1f",
          accountId: "6326e30c14c6b4b221099d1f",
          avatarUrls: {
            "48x48":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/48",
            "24x24":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/24",
            "16x16":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/16",
            "32x32":
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/32",
          },
          displayName: "Soumitro Datta",
          active: true,
          timeZone: "Asia/Calcutta",
          accountType: "atlassian",
        },
      },
      {
        id: "10024",
        key: "KB-25",
        summary: "Done : T6",
        description: null,
        issuetype: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10001",
          id: "10001",
          description: "Tasks track small, distinct pieces of work.",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
          name: "Task",
          subtask: false,
          avatarId: 10318,
          entityId: "e679883c-7659-463e-a396-900ced8c2184",
          hierarchyLevel: 0,
        },
        project: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
          id: "10000",
          key: "KB",
          name: "soumi ka board",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
            "24x24":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
            "16x16":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
            "32x32":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
          },
        },
        priority: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
          iconUrl:
            "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        labels: ["aws"],
        status: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10000",
          description: "",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
          name: "To Do",
          id: "10000",
          statusCategory: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do",
          },
        },
        storypoint: 5,
        reporter: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
          accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
          avatarUrls: {
            "48x48":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "24x24":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "16x16":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "32x32":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
          },
          displayName: "Kunal",
          active: true,
          timeZone: "Asia/Kolkata",
          accountType: "atlassian",
        },
      },
      {
        id: "10020",
        key: "KB-21",
        summary: "review : issue : ticket 4",
        description: null,
        issuetype: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10001",
          id: "10001",
          description: "Tasks track small, distinct pieces of work.",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
          name: "Task",
          subtask: false,
          avatarId: 10318,
          entityId: "e679883c-7659-463e-a396-900ced8c2184",
          hierarchyLevel: 0,
        },
        project: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
          id: "10000",
          key: "KB",
          name: "soumi ka board",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
            "24x24":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
            "16x16":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
            "32x32":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
          },
        },
        priority: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
          iconUrl:
            "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        labels: ["frontend"],
        status: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10000",
          description: "",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
          name: "To Do",
          id: "10000",
          statusCategory: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do",
          },
        },
        storypoint: 2,
        reporter: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
          accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
          avatarUrls: {
            "48x48":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "24x24":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "16x16":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "32x32":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
          },
          displayName: "Kunal",
          active: true,
          timeZone: "Asia/Kolkata",
          accountType: "atlassian",
        },
      },
      {
        id: "10019",
        key: "KB-20",
        summary: "progress: bug : ticket 3",
        description: {
          version: 1,
          type: "doc",
          content: [
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "this is heading H2",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "this text is in bold and italic",
                  marks: [
                    {
                      type: "em",
                    },
                    {
                      type: "strong",
                    },
                  ],
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "this is google link",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "http://www.google.com",
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "emoji",
                  attrs: {
                    shortName: ":grinning:",
                    id: "1f600",
                    text: "😀",
                  },
                },
                {
                  type: "text",
                  text: " ",
                },
              ],
            },
          ],
        },
        issuetype: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10004",
          id: "10004",
          description: "Bugs track problems or errors.",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
          name: "Bug",
          subtask: false,
          avatarId: 10303,
          entityId: "5bd2a7f9-a88a-4cbb-aee4-0623a1e2b0da",
          hierarchyLevel: 0,
        },
        project: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
          id: "10000",
          key: "KB",
          name: "soumi ka board",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
            "24x24":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
            "16x16":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
            "32x32":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
          },
        },
        priority: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
          iconUrl:
            "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        labels: ["aws"],
        status: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10001",
          description: "",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
          name: "In Progress",
          id: "10001",
          statusCategory: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress",
          },
        },
        storypoint: 4,
        reporter: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
          accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
          avatarUrls: {
            "48x48":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "24x24":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "16x16":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "32x32":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
          },
          displayName: "Kunal",
          active: true,
          timeZone: "Asia/Kolkata",
          accountType: "atlassian",
        },
      },
      {
        id: "10018",
        key: "KB-19",
        summary: "todo : bug : ticket 2",
        description: {
          version: 1,
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "this is desc…",
                },
              ],
            },
          ],
        },
        issuetype: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10004",
          id: "10004",
          description: "Bugs track problems or errors.",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
          name: "Bug",
          subtask: false,
          avatarId: 10303,
          entityId: "5bd2a7f9-a88a-4cbb-aee4-0623a1e2b0da",
          hierarchyLevel: 0,
        },
        project: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
          id: "10000",
          key: "KB",
          name: "soumi ka board",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
            "24x24":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
            "16x16":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
            "32x32":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
          },
        },
        priority: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
          iconUrl:
            "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        labels: ["database"],
        status: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10003",
          description: "",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
          name: "Review",
          id: "10003",
          statusCategory: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do",
          },
        },
        storypoint: 6,
        reporter: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
          accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
          avatarUrls: {
            "48x48":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "24x24":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "16x16":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "32x32":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
          },
          displayName: "Kunal",
          active: true,
          timeZone: "Asia/Kolkata",
          accountType: "atlassian",
        },
      },
      {
        id: "10017",
        key: "KB-18",
        summary: "todo : ticket 1",
        description: {
          version: 1,
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "this is desc.",
                },
              ],
            },
          ],
        },
        issuetype: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10001",
          id: "10001",
          description: "Tasks track small, distinct pieces of work.",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
          name: "Task",
          subtask: false,
          avatarId: 10318,
          entityId: "e679883c-7659-463e-a396-900ced8c2184",
          hierarchyLevel: 0,
        },
        project: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
          id: "10000",
          key: "KB",
          name: "soumi ka board",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
            "24x24":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
            "16x16":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
            "32x32":
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
          },
        },
        priority: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
          iconUrl:
            "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
          name: "Medium",
          id: "3",
        },
        labels: [],
        status: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10003",
          description: "",
          iconUrl:
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
          name: "Review",
          id: "10003",
          statusCategory: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do",
          },
        },
        storypoint: 2,
        reporter: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
          accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
          avatarUrls: {
            "48x48":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "24x24":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "16x16":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            "32x32":
              "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
          },
          displayName: "Kunal",
          active: true,
          timeZone: "Asia/Kolkata",
          accountType: "atlassian",
        },
      },
    ],
  },
};

export const errorHomePageData = {
  root: {
    error: "Create Sprint in the current project to continue.",
  },
  root1: {
    "key": "TEST-4",
    "summary": "test 2",
    "error": "Story Point Estimation or Label fields are missing"
  },
  root2: {
    "key": "",
    "summary": "",
    "error": "Story Point Estimation or Label fields are missing"
  }
};

export const issueModalData = {
  root: {
    issue: {
      id: "10025",
      key: "KB-26",
      summary: "Done : T7",
      description: null,
      issuetype: {
        self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10004",
        id: "10004",
        description: "Bugs track problems or errors.",
        iconUrl:
          "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
        name: "Bug",
        subtask: false,
        avatarId: 10303,
        entityId: "5bd2a7f9-a88a-4cbb-aee4-0623a1e2b0da",
        hierarchyLevel: 0,
      },
      project: {
        self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
        id: "10000",
        key: "KB",
        name: "soumi ka board",
        projectTypeKey: "software",
        simplified: true,
        avatarUrls: {
          "48x48":
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
          "24x24":
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
          "16x16":
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
          "32x32":
            "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
        },
      },
      priority: {
        self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
        iconUrl:
          "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
        name: "Medium",
        id: "3",
      },
      labels: ["aws"],
      status: {
        self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10001",
        description: "",
        iconUrl:
          "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
        name: "In Progress",
        id: "10001",
        statusCategory: {
          self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/4",
          id: 4,
          key: "indeterminate",
          colorName: "yellow",
          name: "In Progress",
        },
      },
      storypoint: 1,
      reporter: {
        self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=6326e30c14c6b4b221099d1f",
        accountId: "6326e30c14c6b4b221099d1f",
        avatarUrls: {
          "48x48":
            "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/48",
          "24x24":
            "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/24",
          "16x16":
            "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/16",
          "32x32":
            "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/32",
        },
        displayName: "Soumitro Datta",
        active: true,
        timeZone: "Asia/Calcutta",
        accountType: "atlassian",
      },
    },
    recommendations: [
      {
        accountId: "6326e30c14c6b4b221099d1f",
        displayName: "Soumitro Datta",
        avatarUrl:
          "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/48",
        storypoint: {
          sprintTotal: 3,
          remarkCompareWith: {
            userPreviousData: {
              remark: "Under Assigned",
              message: "Soumitro Datta is Under assigned by 5 points.",
            },
            allUser: {
              remark: "Under Assigned",
              message: "Soumitro Datta is Under assigned by 3 points.",
            },
            sprintLimit: {
              remark: "Under Assigned",
              message: "Soumitro Datta is Under assigned by 17 points.",
            },
          },
        },
        progress: {
          total: 1,
          todo: 0,
          done: 0,
          progress: 1,
        },
        labelScore: 4,
      },
      {
        accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
        displayName: "Kunal",
        avatarUrl:
          "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
        storypoint: {
          sprintTotal: 8,
          remarkCompareWith: {
            userPreviousData: {
              remark: "Over Assigned",
              message: "Kunal is over assigned by 4 points.",
            },
            allUser: {
              remark: "Over Assigned",
              message: "Kunal is over assigned by 2 points.",
            },
            sprintLimit: {
              remark: "Under Assigned",
              message: "Kunal is Under assigned by 12 points.",
            },
          },
        },
        progress: {
          total: 2,
          todo: 1,
          done: 0,
          progress: 1,
        },
        labelScore: 1,
      },
    ],
  },
};

export const dailyStandup = {
  root: {
    issues: [
      {
        expand:
          "operations,versionedRepresentations,editmeta,changelog,customfield_10010.requestTypePractice,renderedFields",
        id: "10027",
        self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issue/10027",
        key: "KB-28",
        fields: {
          statuscategorychangedate: "2022-10-15T14:09:32.554+0530",
          issuetype: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10004",
            id: "10004",
            description: "Bugs track problems or errors.",
            iconUrl:
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
            name: "Bug",
            subtask: false,
            avatarId: 10303,
            entityId: "5bd2a7f9-a88a-4cbb-aee4-0623a1e2b0da",
            hierarchyLevel: 0,
          },
          timespent: null,
          project: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
            id: "10000",
            key: "KB",
            name: "soumi ka board",
            projectTypeKey: "software",
            simplified: true,
            avatarUrls: {
              "48x48":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
              "24x24":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
              "16x16":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
              "32x32":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
            },
          },
          fixVersions: [],
          aggregatetimespent: null,
          resolution: null,
          customfield_10037: null,
          customfield_10027: null,
          customfield_10028: null,
          customfield_10029: null,
          resolutiondate: null,
          workratio: -1,
          watches: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issue/KB-28/watchers",
            watchCount: 1,
            isWatching: false,
          },
          lastViewed: null,
          created: "2022-10-09T17:39:21.961+0530",
          customfield_10020: [
            {
              id: 1,
              name: "test Sprint 1",
              state: "closed",
              boardId: 1,
              goal: "",
              startDate: "2022-09-26T19:23:44.945Z",
              endDate: "2022-10-10T19:53:33.000Z",
              completeDate: "2022-10-09T18:36:41.369Z",
            },
            {
              id: 3,
              name: "test Sprint 2",
              state: "active",
              boardId: 1,
              goal: "",
              startDate: "2022-10-09T18:37:40.332Z",
              endDate: "2022-10-24T20:23:33.000Z",
            },
          ],
          customfield_10021: null,
          customfield_10022: null,
          customfield_10023: null,
          priority: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
            iconUrl:
              "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
            name: "Medium",
            id: "3",
          },
          customfield_10024: null,
          customfield_10025: null,
          customfield_10026: null,
          labels: ["frontend"],
          customfield_10016: 4,
          customfield_10017: null,
          customfield_10018: {
            hasEpicLinkFieldDependency: false,
            showField: false,
            nonEditableReason: {
              reason: "PLUGIN_LICENSE_ERROR",
              message:
                "The Parent Link is only available to Jira Premium users.",
            },
          },
          customfield_10019: "0|i0000o:l",
          timeestimate: null,
          aggregatetimeoriginalestimate: null,
          versions: [],
          issuelinks: [],
          assignee: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
            accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
            avatarUrls: {
              "48x48":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "24x24":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "16x16":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "32x32":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            },
            displayName: "Kunal",
            active: true,
            timeZone: "Asia/Kolkata",
            accountType: "atlassian",
          },
          updated: "2022-10-15T14:09:32.932+0530",
          status: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10001",
            description: "",
            iconUrl:
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
            name: "In Progress",
            id: "10001",
            statusCategory: {
              self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/4",
              id: 4,
              key: "indeterminate",
              colorName: "yellow",
              name: "In Progress",
            },
          },
          components: [],
          timeoriginalestimate: null,
          description: null,
          customfield_10010: null,
          customfield_10014: null,
          customfield_10015: null,
          customfield_10005: null,
          customfield_10006: null,
          customfield_10007: null,
          security: null,
          customfield_10008: null,
          customfield_10009: null,
          aggregatetimeestimate: null,
          summary: "test",
          creator: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
            accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
            avatarUrls: {
              "48x48":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "24x24":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "16x16":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "32x32":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            },
            displayName: "Kunal",
            active: true,
            timeZone: "Asia/Kolkata",
            accountType: "atlassian",
          },
          subtasks: [],
          reporter: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
            accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
            avatarUrls: {
              "48x48":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "24x24":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "16x16":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "32x32":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            },
            displayName: "Kunal",
            active: true,
            timeZone: "Asia/Kolkata",
            accountType: "atlassian",
          },
          aggregateprogress: {
            progress: 0,
            total: 0,
          },
          customfield_10001: null,
          customfield_10002: null,
          customfield_10003: null,
          customfield_10004: null,
          environment: null,
          duedate: null,
          progress: {
            progress: 0,
            total: 0,
          },
          votes: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issue/KB-28/votes",
            votes: 0,
            hasVoted: false,
          },
        },
      },
      {
        expand:
          "operations,versionedRepresentations,editmeta,changelog,customfield_10010.requestTypePractice,renderedFields",
        id: "10026",
        self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issue/10026",
        key: "KB-27",
        fields: {
          statuscategorychangedate: "2022-10-12T22:24:30.550+0530",
          issuetype: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10004",
            id: "10004",
            description: "Bugs track problems or errors.",
            iconUrl:
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
            name: "Bug",
            subtask: false,
            avatarId: 10303,
            entityId: "5bd2a7f9-a88a-4cbb-aee4-0623a1e2b0da",
            hierarchyLevel: 0,
          },
          timespent: null,
          project: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
            id: "10000",
            key: "KB",
            name: "soumi ka board",
            projectTypeKey: "software",
            simplified: true,
            avatarUrls: {
              "48x48":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
              "24x24":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
              "16x16":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
              "32x32":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
            },
          },
          fixVersions: [],
          aggregatetimespent: null,
          resolution: null,
          customfield_10037: null,
          customfield_10027: null,
          customfield_10028: null,
          customfield_10029: null,
          resolutiondate: null,
          workratio: 0,
          watches: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issue/KB-27/watchers",
            watchCount: 1,
            isWatching: false,
          },
          lastViewed: null,
          created: "2022-09-29T00:31:20.478+0530",
          customfield_10020: [
            {
              id: 1,
              name: "test Sprint 1",
              state: "closed",
              boardId: 1,
              goal: "",
              startDate: "2022-09-26T19:23:44.945Z",
              endDate: "2022-10-10T19:53:33.000Z",
              completeDate: "2022-10-09T18:36:41.369Z",
            },
            {
              id: 3,
              name: "test Sprint 2",
              state: "active",
              boardId: 1,
              goal: "",
              startDate: "2022-10-09T18:37:40.332Z",
              endDate: "2022-10-24T20:23:33.000Z",
            },
          ],
          customfield_10021: null,
          customfield_10022: null,
          priority: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/1",
            iconUrl:
              "https://my-jira-app.atlassian.net/images/icons/priorities/highest.svg",
            name: "Highest",
            id: "1",
          },
          customfield_10023: null,
          customfield_10024: null,
          customfield_10025: null,
          customfield_10026: null,
          labels: ["aws"],
          customfield_10016: 3,
          customfield_10017: null,
          customfield_10018: {
            hasEpicLinkFieldDependency: false,
            showField: false,
            nonEditableReason: {
              reason: "PLUGIN_LICENSE_ERROR",
              message:
                "The Parent Link is only available to Jira Premium users.",
            },
          },
          customfield_10019: "0|i0000o:av",
          timeestimate: 144000,
          aggregatetimeoriginalestimate: 144000,
          versions: [],
          issuelinks: [],
          assignee: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=6326e30c14c6b4b221099d1f",
            accountId: "6326e30c14c6b4b221099d1f",
            avatarUrls: {
              "48x48":
                "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/48",
              "24x24":
                "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/24",
              "16x16":
                "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/16",
              "32x32":
                "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/32",
            },
            displayName: "Soumitro Datta",
            active: true,
            timeZone: "Asia/Calcutta",
            accountType: "atlassian",
          },
          updated: "2022-10-17T15:35:53.139+0530",
          status: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10003",
            description: "",
            iconUrl:
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
            name: "Review",
            id: "10003",
            statusCategory: {
              self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/2",
              id: 2,
              key: "new",
              colorName: "blue-gray",
              name: "To Do",
            },
          },
          components: [],
          timeoriginalestimate: 144000,
          description: {
            version: 1,
            type: "doc",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "dyjtyjety",
                    marks: [
                      {
                        type: "strong",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: "j tyjetjkr tmrtyj ryuk ryj ryuk ryu",
                  },
                ],
              },
              {
                type: "bulletList",
                content: [
                  {
                    type: "listItem",
                    content: [
                      {
                        type: "paragraph",
                        content: [
                          {
                            type: "text",
                            text: "sthsthsssrt",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "listItem",
                    content: [
                      {
                        type: "paragraph",
                        content: [
                          {
                            type: "text",
                            text: "dfndyfndmdyuk",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "listItem",
                    content: [
                      {
                        type: "paragraph",
                        content: [
                          {
                            type: "text",
                            text: "fykdfukfyuk",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          customfield_10010: null,
          customfield_10014: null,
          customfield_10015: null,
          customfield_10005: null,
          customfield_10006: null,
          customfield_10007: null,
          security: null,
          customfield_10008: null,
          aggregatetimeestimate: 144000,
          customfield_10009: null,
          summary: "Todo : T8",
          creator: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
            accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
            avatarUrls: {
              "48x48":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "24x24":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "16x16":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "32x32":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            },
            displayName: "Kunal",
            active: true,
            timeZone: "Asia/Kolkata",
            accountType: "atlassian",
          },
          subtasks: [],
          reporter: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
            accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
            avatarUrls: {
              "48x48":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "24x24":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "16x16":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "32x32":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            },
            displayName: "Kunal",
            active: true,
            timeZone: "Asia/Kolkata",
            accountType: "atlassian",
          },
          aggregateprogress: {
            progress: 0,
            total: 144000,
            percent: 0,
          },
          customfield_10001: null,
          customfield_10002: null,
          customfield_10003: null,
          customfield_10004: null,
          environment: null,
          duedate: null,
          progress: {
            progress: 0,
            total: 144000,
            percent: 0,
          },
          votes: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issue/KB-27/votes",
            votes: 0,
            hasVoted: false,
          },
        },
      },
      {
        expand:
          "operations,versionedRepresentations,editmeta,changelog,customfield_10010.requestTypePractice,renderedFields",
        id: "10025",
        self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issue/10025",
        key: "KB-26",
        fields: {
          statuscategorychangedate: "2022-10-12T22:24:46.172+0530",
          issuetype: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10004",
            id: "10004",
            description: "Bugs track problems or errors.",
            iconUrl:
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
            name: "Bug",
            subtask: false,
            avatarId: 10303,
            entityId: "5bd2a7f9-a88a-4cbb-aee4-0623a1e2b0da",
            hierarchyLevel: 0,
          },
          timespent: null,
          project: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
            id: "10000",
            key: "KB",
            name: "soumi ka board",
            projectTypeKey: "software",
            simplified: true,
            avatarUrls: {
              "48x48":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
              "24x24":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
              "16x16":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
              "32x32":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
            },
          },
          fixVersions: [],
          aggregatetimespent: null,
          resolution: null,
          customfield_10037: null,
          customfield_10027: null,
          customfield_10028: null,
          customfield_10029: null,
          resolutiondate: null,
          workratio: -1,
          lastViewed: null,
          watches: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issue/KB-26/watchers",
            watchCount: 1,
            isWatching: false,
          },
          created: "2022-09-29T00:30:55.602+0530",
          customfield_10020: [
            {
              id: 1,
              name: "test Sprint 1",
              state: "closed",
              boardId: 1,
              goal: "",
              startDate: "2022-09-26T19:23:44.945Z",
              endDate: "2022-10-10T19:53:33.000Z",
              completeDate: "2022-10-09T18:36:41.369Z",
            },
            {
              id: 3,
              name: "test Sprint 2",
              state: "active",
              boardId: 1,
              goal: "",
              startDate: "2022-10-09T18:37:40.332Z",
              endDate: "2022-10-24T20:23:33.000Z",
            },
          ],
          customfield_10021: null,
          customfield_10022: null,
          priority: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
            iconUrl:
              "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
            name: "Medium",
            id: "3",
          },
          customfield_10023: null,
          customfield_10024: null,
          customfield_10025: null,
          labels: ["aws"],
          customfield_10026: null,
          customfield_10016: 1,
          customfield_10017: null,
          customfield_10018: {
            hasEpicLinkFieldDependency: false,
            showField: false,
            nonEditableReason: {
              reason: "PLUGIN_LICENSE_ERROR",
              message:
                "The Parent Link is only available to Jira Premium users.",
            },
          },
          customfield_10019: "0|i0000o:m",
          timeestimate: null,
          aggregatetimeoriginalestimate: null,
          versions: [],
          issuelinks: [],
          assignee: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=6326e30c14c6b4b221099d1f",
            accountId: "6326e30c14c6b4b221099d1f",
            avatarUrls: {
              "48x48":
                "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/48",
              "24x24":
                "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/24",
              "16x16":
                "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/16",
              "32x32":
                "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/32",
            },
            displayName: "Soumitro Datta",
            active: true,
            timeZone: "Asia/Calcutta",
            accountType: "atlassian",
          },
          updated: "2022-10-20T10:14:20.401+0530",
          status: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10001",
            description: "",
            iconUrl:
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
            name: "In Progress",
            id: "10001",
            statusCategory: {
              self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/4",
              id: 4,
              key: "indeterminate",
              colorName: "yellow",
              name: "In Progress",
            },
          },
          components: [],
          timeoriginalestimate: null,
          description: null,
          customfield_10010: null,
          customfield_10014: null,
          customfield_10015: null,
          customfield_10005: null,
          customfield_10006: null,
          customfield_10007: null,
          security: null,
          customfield_10008: null,
          aggregatetimeestimate: null,
          customfield_10009: null,
          summary: "Done : T7",
          creator: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
            accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
            avatarUrls: {
              "48x48":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "24x24":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "16x16":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "32x32":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            },
            displayName: "Kunal",
            active: true,
            timeZone: "Asia/Kolkata",
            accountType: "atlassian",
          },
          subtasks: [],
          reporter: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=6326e30c14c6b4b221099d1f",
            accountId: "6326e30c14c6b4b221099d1f",
            avatarUrls: {
              "48x48":
                "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/48",
              "24x24":
                "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/24",
              "16x16":
                "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/16",
              "32x32":
                "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/32",
            },
            displayName: "Soumitro Datta",
            active: true,
            timeZone: "Asia/Calcutta",
            accountType: "atlassian",
          },
          aggregateprogress: {
            progress: 0,
            total: 0,
          },
          customfield_10001: null,
          customfield_10002: null,
          customfield_10003: null,
          customfield_10004: null,
          environment: null,
          duedate: null,
          progress: {
            progress: 0,
            total: 0,
          },
          votes: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issue/KB-26/votes",
            votes: 0,
            hasVoted: false,
          },
        },
      },
      {
        expand:
          "operations,versionedRepresentations,editmeta,changelog,customfield_10010.requestTypePractice,renderedFields",
        id: "10023",
        self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issue/10023",
        key: "KB-24",
        fields: {
          statuscategorychangedate: "2022-10-17T18:00:22.456+0530",
          issuetype: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10001",
            id: "10001",
            description: "Tasks track small, distinct pieces of work.",
            iconUrl:
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
            name: "Task",
            subtask: false,
            avatarId: 10318,
            entityId: "e679883c-7659-463e-a396-900ced8c2184",
            hierarchyLevel: 0,
          },
          timespent: null,
          project: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
            id: "10000",
            key: "KB",
            name: "soumi ka board",
            projectTypeKey: "software",
            simplified: true,
            avatarUrls: {
              "48x48":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
              "24x24":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
              "16x16":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
              "32x32":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
            },
          },
          fixVersions: [],
          aggregatetimespent: null,
          resolution: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/resolution/10000",
            id: "10000",
            description: "Work has been completed on this issue.",
            name: "Done",
          },
          customfield_10035: null,
          customfield_10036: null,
          customfield_10027: null,
          customfield_10028: null,
          customfield_10029: null,
          resolutiondate: "2022-10-17T18:00:22.451+0530",
          workratio: -1,
          lastViewed: null,
          watches: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issue/KB-24/watchers",
            watchCount: 1,
            isWatching: false,
          },
          created: "2022-09-29T00:29:51.077+0530",
          customfield_10020: [
            {
              id: 1,
              name: "test Sprint 1",
              state: "closed",
              boardId: 1,
              goal: "",
              startDate: "2022-09-26T19:23:44.945Z",
              endDate: "2022-10-10T19:53:33.000Z",
              completeDate: "2022-10-09T18:36:41.369Z",
            },
            {
              id: 3,
              name: "test Sprint 2",
              state: "active",
              boardId: 1,
              goal: "",
              startDate: "2022-10-09T18:37:40.332Z",
              endDate: "2022-10-24T20:23:33.000Z",
            },
          ],
          customfield_10021: null,
          customfield_10022: null,
          customfield_10023: null,
          priority: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
            iconUrl:
              "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
            name: "Medium",
            id: "3",
          },
          customfield_10024: null,
          customfield_10025:
            "10000_*:*_2_*:*_1191900090_*|*_10002_*:*_1_*:*_0_*|*_10003_*:*_2_*:*_426331306",
          customfield_10026: null,
          labels: ["backend"],
          customfield_10016: 4,
          customfield_10017: null,
          customfield_10018: {
            hasEpicLinkFieldDependency: false,
            showField: false,
            nonEditableReason: {
              reason: "PLUGIN_LICENSE_ERROR",
              message:
                "The Parent Link is only available to Jira Premium users.",
            },
          },
          customfield_10019: "0|i0000o:at",
          aggregatetimeoriginalestimate: null,
          timeestimate: null,
          versions: [],
          issuelinks: [],
          assignee: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
            accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
            avatarUrls: {
              "48x48":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "24x24":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "16x16":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "32x32":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            },
            displayName: "Kunal",
            active: true,
            timeZone: "Asia/Kolkata",
            accountType: "atlassian",
          },
          updated: "2022-10-17T18:00:22.455+0530",
          status: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10002",
            description: "",
            iconUrl:
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
            name: "Done",
            id: "10002",
            statusCategory: {
              self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/3",
              id: 3,
              key: "done",
              colorName: "green",
              name: "Done",
            },
          },
          components: [],
          timeoriginalestimate: null,
          description: null,
          customfield_10010: null,
          customfield_10014: null,
          customfield_10015: null,
          customfield_10005: null,
          customfield_10006: null,
          customfield_10007: null,
          security: null,
          customfield_10008: null,
          customfield_10009: null,
          aggregatetimeestimate: null,
          summary: "Review : T5",
          creator: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
            accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
            avatarUrls: {
              "48x48":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "24x24":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "16x16":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "32x32":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            },
            displayName: "Kunal",
            active: true,
            timeZone: "Asia/Kolkata",
            accountType: "atlassian",
          },
          subtasks: [],
          reporter: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
            accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
            avatarUrls: {
              "48x48":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "24x24":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "16x16":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "32x32":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            },
            displayName: "Kunal",
            active: true,
            timeZone: "Asia/Kolkata",
            accountType: "atlassian",
          },
          aggregateprogress: {
            progress: 0,
            total: 0,
          },
          customfield_10001: null,
          customfield_10002: null,
          customfield_10003: null,
          customfield_10004: null,
          environment: null,
          duedate: null,
          progress: {
            progress: 0,
            total: 0,
          },
          votes: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issue/KB-24/votes",
            votes: 0,
            hasVoted: false,
          },
        },
      },
      {
        expand:
          "operations,versionedRepresentations,editmeta,changelog,customfield_10010.requestTypePractice,renderedFields",
        id: "10020",
        self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issue/10020",
        key: "KB-21",
        fields: {
          statuscategorychangedate: "2022-10-10T00:07:29.047+0530",
          issuetype: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issuetype/10001",
            id: "10001",
            description: "Tasks track small, distinct pieces of work.",
            iconUrl:
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
            name: "Task",
            subtask: false,
            avatarId: 10318,
            entityId: "e679883c-7659-463e-a396-900ced8c2184",
            hierarchyLevel: 0,
          },
          timespent: null,
          project: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/project/10000",
            id: "10000",
            key: "KB",
            name: "soumi ka board",
            projectTypeKey: "software",
            simplified: true,
            avatarUrls: {
              "48x48":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416",
              "24x24":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=small",
              "16x16":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=xsmall",
              "32x32":
                "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/universal_avatar/view/type/project/avatar/10416?size=medium",
            },
          },
          fixVersions: [],
          aggregatetimespent: null,
          resolution: null,
          customfield_10035: null,
          customfield_10036: null,
          customfield_10027: null,
          customfield_10028: null,
          customfield_10029: null,
          resolutiondate: null,
          workratio: -1,
          watches: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issue/KB-21/watchers",
            watchCount: 1,
            isWatching: false,
          },
          lastViewed: null,
          created: "2022-09-27T00:09:08.155+0530",
          customfield_10020: [
            {
              id: 1,
              name: "test Sprint 1",
              state: "closed",
              boardId: 1,
              goal: "",
              startDate: "2022-09-26T19:23:44.945Z",
              endDate: "2022-10-10T19:53:33.000Z",
              completeDate: "2022-10-09T18:36:41.369Z",
            },
            {
              id: 3,
              name: "test Sprint 2",
              state: "active",
              boardId: 1,
              goal: "",
              startDate: "2022-10-09T18:37:40.332Z",
              endDate: "2022-10-24T20:23:33.000Z",
            },
          ],
          customfield_10021: null,
          customfield_10022: null,
          priority: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/priority/3",
            iconUrl:
              "https://my-jira-app.atlassian.net/images/icons/priorities/medium.svg",
            name: "Medium",
            id: "3",
          },
          customfield_10023: null,
          customfield_10024: null,
          customfield_10025: null,
          customfield_10026: null,
          labels: ["frontend"],
          customfield_10016: 2,
          customfield_10017: null,
          customfield_10018: {
            hasEpicLinkFieldDependency: false,
            showField: false,
            nonEditableReason: {
              reason: "PLUGIN_LICENSE_ERROR",
              message:
                "The Parent Link is only available to Jira Premium users.",
            },
          },
          customfield_10019: "0|i0000o:b",
          timeestimate: null,
          aggregatetimeoriginalestimate: null,
          versions: [],
          issuelinks: [],
          assignee: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=6326e30c14c6b4b221099d1f",
            accountId: "6326e30c14c6b4b221099d1f",
            avatarUrls: {
              "48x48":
                "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/48",
              "24x24":
                "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/24",
              "16x16":
                "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/16",
              "32x32":
                "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/32",
            },
            displayName: "Soumitro Datta",
            active: true,
            timeZone: "Asia/Calcutta",
            accountType: "atlassian",
          },
          updated: "2022-10-18T19:45:22.943+0530",
          status: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/status/10000",
            description: "",
            iconUrl:
              "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/",
            name: "To Do",
            id: "10000",
            statusCategory: {
              self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/statuscategory/2",
              id: 2,
              key: "new",
              colorName: "blue-gray",
              name: "To Do",
            },
          },
          components: [],
          timeoriginalestimate: null,
          description: null,
          customfield_10010: null,
          customfield_10014: null,
          customfield_10015: null,
          customfield_10005: null,
          customfield_10006: null,
          customfield_10007: null,
          security: null,
          customfield_10008: null,
          customfield_10009: null,
          aggregatetimeestimate: null,
          summary: "review : issue : ticket 4",
          creator: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
            accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
            avatarUrls: {
              "48x48":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "24x24":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "16x16":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "32x32":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            },
            displayName: "Kunal",
            active: true,
            timeZone: "Asia/Kolkata",
            accountType: "atlassian",
          },
          subtasks: [],
          reporter: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/user?accountId=70121%3A1848c046-b89f-4f8f-a22f-846875694d2a",
            accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
            avatarUrls: {
              "48x48":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "24x24":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "16x16":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
              "32x32":
                "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
            },
            displayName: "Kunal",
            active: true,
            timeZone: "Asia/Kolkata",
            accountType: "atlassian",
          },
          aggregateprogress: {
            progress: 0,
            total: 0,
          },
          customfield_10001: null,
          customfield_10002: null,
          customfield_10003: null,
          customfield_10004: null,
          environment: null,
          duedate: null,
          progress: {
            progress: 0,
            total: 0,
          },
          votes: {
            self: "https://api.atlassian.com/ex/jira/7f4b8153-0fdd-4790-8651-9e5d8d2506ca/rest/api/3/issue/KB-21/votes",
            votes: 0,
            hasVoted: false,
          },
        },
      },
    ],
    insights: [
      {
        accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
        displayName: "Kunal",
        avatarUrl:
          "https://secure.gravatar.com/avatar/c015f9ec03e8051c6c0f218536c03916?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FK-5.png",
        storypoint: {
          sprintTotal: 8,
          remarkCompareWith: {
            userPreviousData: {
              remark: "Over Assigned",
              message: "Kunal is over assigned by 4 points.",
            },
            allUser: {
              remark: "Over Assigned",
              message: "Kunal is over assigned by 1 points.",
            },
            sprintLimit: {
              remark: "Under Assigned",
              message: "Kunal is Under assigned by 12 points.",
            },
          },
        },
        progress: {
          total: 2,
          todo: 0,
          done: 1,
          progress: 1,
        },
      },
      {
        accountId: "6326e30c14c6b4b221099d1f",
        displayName: "Soumitro Datta",
        avatarUrl:
          "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6326e30c14c6b4b221099d1f/44ebd7c6-09e8-4495-912e-b833c6dcfeb7/48",
        storypoint: {
          sprintTotal: 6,
          remarkCompareWith: {
            userPreviousData: {
              remark: "Under Assigned",
              message: "Soumitro Datta is Under assigned by 2 points.",
            },
            allUser: {
              remark: "Under Assigned",
              message: "Soumitro Datta is Under assigned by 1 points.",
            },
            sprintLimit: {
              remark: "Under Assigned",
              message: "Soumitro Datta is Under assigned by 14 points.",
            },
          },
        },
        progress: {
          total: 3,
          todo: 1,
          done: 0,
          progress: 2,
        },
      },
    ],
    standupDetails: [
      {
        standupId: 20221020,
        created: "2022-10-20T04:45:04.520Z",
        user: [
          {
            accountId: "6326e30c14c6b4b221099d1f",
            standupUpdate: {
              0: [
                {
                  issueId: "10025",
                  key: "KB-26",
                  message: "Completed backend on this one",
                },
              ],
              1: [],
              2: [
                {
                  issueId: "10026",
                  key: "KB-27",
                  message:
                    "This card is blocked, it needs review ti proceed further",
                },
                {
                  issueId: "10025",
                  key: "KB-26",
                  message:
                    "Lol",
                },
              ],
            },
          },
          {
            accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
            standupUpdate: {
              0: [
                {
                  issueId: "10025",
                  key: "KB-26",
                  message: "Completed backend on this one",
                },
              ],
              1: [],
              2: [],
            },
          },
        ],
      },
      {
        standupId: 20221019,
        created: "2022-10-19T04:45:04.520Z",
        user: [
          {
            accountId: "6326e30c14c6b4b221099d1f",
            standupUpdate: {
              0: [
                {
                  issueId: "10025",
                  key: "KB-26",
                  message: "Yesterday standup",
                },
              ],
              1: [],
              2: [
                {
                  issueId: "10026",
                  key: "KB-27",
                  message:
                    "No work only njoi",
                },
                {
                  issueId: "10025",
                  key: "KB-26",
                  message:
                    "Lol",
                },
              ],
            },
          },
          {
            accountId: "70121:1848c046-b89f-4f8f-a22f-846875694d2a",
            standupUpdate: {
              0: [
                {
                  issueId: "10025",
                  key: "KB-26",
                  message: "Completed backend on this one",
                },
              ],
              1: [{
                issueId: "10027",
                key: "KB-28",
                message: "Completed backend on this one",
              },],
              2: [],
            },
          },
        ],
      },
    ],
  },
};
