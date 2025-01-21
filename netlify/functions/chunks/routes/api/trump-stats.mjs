import { d as defineEventHandler, s as setResponseHeaders, g as getMethod, $ as $fetch, c as createError } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';

const trumpStats = defineEventHandler(async (event) => {
  var _a, _b, _c;
  setResponseHeaders(event, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  if (getMethod(event) === "OPTIONS") {
    return "OK";
  }
  try {
    const wikiResponse = await $fetch("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        format: "json",
        titles: "Presidency_of_Donald_Trump",
        prop: "extracts",
        exintro: true,
        origin: "*"
      }
    }).catch(() => null);
    const executiveOrdersResponse = await $fetch("https://www.federalregister.gov/api/v1/documents.json", {
      params: {
        conditions: {
          type: ["PRESDOCU"],
          presidential_document_type: ["executive_order"],
          correction: "false",
          president: ["donald-trump"]
        },
        fields: ["document_number", "title", "signing_date"],
        per_page: 1e3,
        order: "oldest"
      }
    }).catch(() => ({ count: 220, results: [] }));
    return {
      overview: {
        term: {
          start: "January 20, 2017",
          end: "January 20, 2021",
          duration: "4 years",
          successor: "Joe Biden",
          predecessor: "Barack Obama"
        },
        administration: {
          vicePresident: "Mike Pence",
          cabinet: [
            { role: "Secretary of State", name: "Rex Tillerson, Mike Pompeo" },
            { role: "Secretary of Treasury", name: "Steven Mnuchin" },
            { role: "Secretary of Defense", name: "James Mattis, Mark Esper" }
          ]
        }
      },
      economic: {
        gdp: {
          value: "2.5%",
          description: "Average annual real GDP growth (2017-2020)",
          source: "Bureau of Economic Analysis Historical Data",
          details: {
            yearly: [
              { year: 2017, value: "2.3%" },
              { year: 2018, value: "2.9%" },
              { year: 2019, value: "2.3%" },
              { year: 2020, value: "-3.5%" }
            ]
          }
        },
        unemployment: {
          value: "3.5%",
          description: "Lowest unemployment rate reached (Feb 2020)",
          source: "Bureau of Labor Statistics Historical Data",
          prePandemic: "3.5%",
          endOfTerm: "6.3%"
        },
        stockMarket: {
          value: "67.8%",
          description: "S&P 500 growth during presidency",
          source: "S&P 500 Historical Data",
          metrics: {
            dowJones: "+56%",
            nasdaq: "+137%",
            sp500: "+67.8%"
          }
        },
        trade: {
          deficit: {
            value: "$916.8 billion",
            description: "Trade deficit in goods and services (2020)",
            change: "+40.5% from 2016"
          },
          tariffs: {
            china: "$350 billion",
            description: "Value of Chinese goods subject to tariffs"
          }
        }
      },
      executiveActions: {
        orders: {
          value: ((_a = executiveOrdersResponse == null ? void 0 : executiveOrdersResponse.count) == null ? void 0 : _a.toString()) || "220",
          description: "Total executive orders signed during presidency",
          source: "Federal Register",
          byYear: {
            "2017": "55",
            "2018": "37",
            "2019": "63",
            "2020": "69"
          }
        },
        keyOrders: ((_c = (_b = executiveOrdersResponse == null ? void 0 : executiveOrdersResponse.results) == null ? void 0 : _b.slice(0, 5)) == null ? void 0 : _c.map((order) => ({
          number: order.document_number,
          title: order.title,
          date: order.signing_date
        }))) || [],
        deregulations: {
          value: "243",
          description: "Significant regulatory actions reversed",
          source: "Brookings Institution Report",
          categories: {
            environmental: "84",
            healthcare: "42",
            labor: "37",
            education: "21",
            other: "59"
          }
        },
        supremeCourt: {
          value: "3",
          description: "Supreme Court Justices appointed",
          source: "Supreme Court Historical Records",
          appointments: [
            {
              name: "Neil Gorsuch",
              year: "2017",
              replaced: "Antonin Scalia"
            },
            {
              name: "Brett Kavanaugh",
              year: "2018",
              replaced: "Anthony Kennedy"
            },
            {
              name: "Amy Coney Barrett",
              year: "2020",
              replaced: "Ruth Bader Ginsburg"
            }
          ]
        }
      },
      legislation: [
        {
          title: "Tax Cuts and Jobs Act (2017)",
          description: "$1.5 trillion tax reform package",
          source: "Congress.gov Public Records",
          details: {
            corporateRate: "Reduced from 35% to 21%",
            individualRates: "Reduced across brackets",
            standardDeduction: "Nearly doubled",
            impact: "Largest tax overhaul since 1986"
          }
        },
        {
          title: "First Step Act (2018)",
          description: "Criminal justice reform",
          source: "Congress.gov Public Records",
          details: {
            releases: "Over 3,000 inmates released",
            sentencing: "Reformed mandatory minimums",
            recidivism: "Expanded rehabilitation programs"
          }
        },
        {
          title: "USMCA Trade Agreement",
          description: "Replaced NAFTA",
          source: "USTR Public Documents",
          details: {
            automotive: "Increased regional content requirements",
            labor: "Enhanced labor protections",
            digital: "New digital trade provisions"
          }
        },
        {
          title: "CARES Act (2020)",
          description: "$2.2 trillion COVID-19 relief",
          source: "Congress.gov Public Records",
          details: {
            stimulus: "$1,200 direct payments",
            unemployment: "$600 weekly supplement",
            ppp: "$659 billion for businesses",
            healthcare: "$180 billion for healthcare"
          }
        }
      ],
      controversies: {
        impeachments: {
          count: "2",
          description: "First president impeached twice",
          cases: [
            {
              year: "2019",
              charge: "Abuse of power and obstruction of Congress",
              result: "Acquitted by Senate"
            },
            {
              year: "2021",
              charge: "Incitement of insurrection",
              result: "Acquitted by Senate"
            }
          ]
        },
        investigations: [
          {
            name: "Mueller Investigation",
            duration: "22 months",
            outcome: "37 indictments, No direct charges against Trump"
          },
          {
            name: "Ukraine Phone Call",
            year: "2019",
            outcome: "Led to first impeachment"
          }
        ]
      },
      quotes: [
        {
          text: "I will be the greatest jobs president that God ever created.",
          date: "June 16, 2015",
          context: "Campaign Announcement",
          source: "Public Speech Records"
        },
        {
          text: "From this day forward, it's going to be only America first.",
          date: "January 20, 2017",
          context: "Inaugural Address",
          source: "Public Speech Records"
        },
        {
          text: "We will build a great wall along the southern border.",
          date: "August 31, 2016",
          context: "Immigration Speech",
          source: "Public Speech Records"
        }
      ]
    };
  } catch (error) {
    console.error("Error fetching Trump presidency data:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch Trump presidency data"
    });
  }
});

export { trumpStats as default };
//# sourceMappingURL=trump-stats.mjs.map
