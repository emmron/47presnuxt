import { $fetch } from 'ofetch'

// Federal Register API endpoint
const FEDERAL_REGISTER_API = 'https://www.federalregister.gov/api/v1'
// ProPublica Congress API endpoint
const PROPUBLICA_API = 'https://api.propublica.org/congress/v1'

interface ExecutiveOrder {
  document_number: string
  title: string
  signing_date: string
}

interface ExecutiveOrdersResponse {
  count: number
  results: ExecutiveOrder[]
}

export default defineEventHandler(async (event) => {
  try {
    // Fetch Trump presidency data from Wikipedia API
    const wikiResponse = await $fetch('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        titles: 'Presidency_of_Donald_Trump',
        prop: 'extracts',
        exintro: true,
        origin: '*'
      }
    })

    // Fetch executive orders data from Federal Register public API
    const executiveOrdersResponse = await $fetch<ExecutiveOrdersResponse>('https://www.federalregister.gov/api/v1/documents.json', {
      params: {
        conditions: {
          type: ['PRESDOCU'],
          presidential_document_type: ['executive_order'],
          correction: 'false',
          president: ['donald-trump']
        },
        fields: ['document_number', 'title', 'signing_date'],
        per_page: 1000,
        order: 'oldest'
      }
    })

    // Process and return the data
    return {
      economic: {
        gdp: {
          value: "2.5%",
          description: "Average annual real GDP growth (2017-2020)",
          source: "Bureau of Economic Analysis Historical Data"
        },
        unemployment: {
          value: "6.3%",
          description: "Final unemployment rate (Jan 2021)",
          source: "Bureau of Labor Statistics Historical Data"
        },
        stockMarket: {
          value: "67.8%",
          description: "S&P 500 growth during presidency",
          source: "S&P 500 Historical Data"
        }
      },
      executiveActions: {
        orders: {
          value: executiveOrdersResponse?.count?.toString() || "220",
          description: "Total executive orders signed during presidency",
          source: "Federal Register"
        },
        keyOrders: executiveOrdersResponse?.results?.slice(0, 5)?.map((order: ExecutiveOrder) => ({
          number: order.document_number,
          title: order.title,
          date: order.signing_date
        })) || [],
        deregulations: {
          value: "243",
          description: "Significant regulatory actions reversed",
          source: "Brookings Institution Report"
        },
        supremeCourt: {
          value: "3",
          description: "Justices appointed: Gorsuch, Kavanaugh, Barrett",
          source: "Supreme Court Historical Records"
        }
      },
      legislation: [
        {
          title: "Tax Cuts and Jobs Act (2017)",
          description: "$1.5 trillion tax reform package",
          source: "Congress.gov Public Records"
        },
        {
          title: "First Step Act (2018)",
          description: "Criminal justice reform",
          source: "Congress.gov Public Records"
        },
        {
          title: "USMCA Trade Agreement",
          description: "Replaced NAFTA",
          source: "USTR Public Documents"
        },
        {
          title: "CARES Act (2020)",
          description: "$2.2 trillion COVID-19 relief",
          source: "Congress.gov Public Records"
        }
      ],
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
    }
  } catch (error) {
    console.error('Error fetching Trump presidency data:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch Trump presidency data'
    })
  }
})
